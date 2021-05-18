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


const googleSingIn = async(req, res=response)=>{

    const {id_token}=req.body;
    
    try {
        const googleUser = await googleVerify(id_token);
         console.log(googleUser);
        res.json({
            msg:'todo ok',
            id_token
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