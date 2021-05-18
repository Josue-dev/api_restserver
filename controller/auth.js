const { response } = require("express");
const bcryptjs = require('bcryptjs');
const Usuario = require('../models/usuario');
const {generarJWT}= require('../helpers/generar-jwt');
const { googleVerify } = require("../helpers/google-verify");



const login =async (req, res=response)=>{
    const {correo, password} = req.body;

    try {
        const usuario  = await Usuario.findOne({correo});
        //verificar correo
        if(!usuario){
            return res.status(400).json({
                msg:'Usuario  / contraseña incorrectos'
            })
        }
        //verificar si usuario esta activo 
        if(!usuario.estado){
            return res.status(400).json({
                msg:'Usuario  / contraseña /inactivo  incorrectos'
            })
        }

        //verificar contraseña
        const validarPassword = bcryptjs.compareSync(password, usuario.password);
        if(!validarPassword){
            return res.status(400).json({
                msg:'Contraseña / usuario incorrecto'
            })
        }

        const token =  await generarJWT(usuario.id);
        res.json({
            usuario,
            token
        })
        
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            msg:'No se puedo iniciar session'
            
        })
    }

}

//Cuando ejecutamos esta funcion al recibir el token 
//de manera local nos dara el error
/*Failed to load resource: the server responded with a status of 400 (Bad Request)
    Pero ya en produccion el token valida perfectamente 
    seria de buscar y leer lo que es la zona horaria y porque 
    no valida de forma local y en produccion si */
const googleSingIn = async(req, res=response)=>{

    const {id_token}=req.body;
    
    try {
        const {correo, img, nombre} = await googleVerify(id_token);
         

        let usuario = await Usuario.findOne({correo});
        //sino existe lo creamos
        if(!usuario){
            const data ={
                nombre,
                correo,
                password:':P',
                img,
                google:true
            }
            usuario = new Usuario(data);
            await usuario.save();
        }

        //si el usuario en bd exite o google es false
        if(!usuario.estado){
            return res.status(401).json({
                msg:'Hable con el administrador usuario bloqueado'
            })
        }
        const token =  await generarJWT(usuario.id);

        res.json({
            usuario,
            token
        })
    } catch (error) {
        res.status(400).json({
            msg:'Token de google no es valido'
        })
    }
  
}


module.exports = {
    login,
    googleSingIn
}