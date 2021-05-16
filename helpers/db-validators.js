
const Role = require('../models/role');
const Usuario = require('../models/usuario');


const esRoleValido= async(rol='')=>{
    const existeRol = await Role.findOne({rol});
    if(!existeRol){
        throw new Error(`El rol : ${rol} no esta registrado `)
    }
}

const existeEmail = async(correo='')=>{
    const emailExist = await Usuario.findOne({correo});
    if(emailExist){
        throw new Error(`El correo: ${correo} ya existe`)
    }
}

const existeUsuarioPorId = async(id)=>{
    const existeUsuario = await Usuario.findById(id);
    if(!existeUsuario){
        throw new Error(`El id : ${id} no existe`)
    }
}


module.exports ={
    esRoleValido,
    existeEmail,
    existeUsuarioPorId
}