

const  validarJWT  = require('../middlewares/validar-jwt');
const tieneRoles = require('../middlewares/validar-roles');
const validarCampos = require('../middlewares/validar-campos');



module.exports = {
    ...validarCampos,
    ...tieneRoles,
    ...validarJWT
}