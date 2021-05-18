
/*Esquema para requerir los datos de las personas para un login  */
const {Schema, model} = require('mongoose');


const UsuarioSchema=Schema({
    nombre:{
        type:String,
        required:[true, 'EL nombre es obligatorio']
    },
    correo:{
        type:String,
        required:[true, 'El correo es obligatorio'],
        unique:true
    },
    password:{
        type:String,
        required:[true, 'El contraseña  es obligatorio']
    },
    img:{
        type:String
    },
    rol:{
        type:String,
        required:true,
        default:'USER_ROLE',
        emun:['ADMIN_ROLE','USER_ROLE']
    },
    estado:{
        type:Boolean,
        default:true
    },
    google:{
        type:Boolean,
        default:false
    }
});

//para no mostrar los atributos __v, y pass
UsuarioSchema.methods.toJSON = function(){
    const {__v, password,_id, ...usuario}=this.toObject();
    usuario.uid = _id;
    return usuario;
}

module.exports= model('Usuario', UsuarioSchema);