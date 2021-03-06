const {Router} = require('express');
const {check}= require('express-validator');
const { usuariosGet, usuariosPost, usuarioPut, usuarioDelete } = require('../controller/usuario');

const { esRoleValido, 
        existeEmail,
        existeUsuarioPorId } = require('../helpers/db-validators');
const {validarCampos, 
    validarJWT,
    esAdminRole,
    tieneRole} = require('../middlewares');

const router = Router();

router.get('/', usuariosGet);

router.post('/',[
    check('nombre','El nombre es obligatorio').not().isEmpty(),
    check('password','La contraseña es obligatoria y mayor a 8 caracteres').isLength({min:8}),
    check('correo').custom(existeEmail).isEmail(),
    check('rol').custom(esRoleValido),
    validarCampos
], usuariosPost);

router.put('/:id',[
    check('id','No es un ID valido').isMongoId(),
    check('id').custom(existeUsuarioPorId),
    check('rol').custom(esRoleValido),
    validarCampos
],usuarioPut);

router.delete('/:id',[
        validarJWT,
        //esAdminRole,
        tieneRole('ADMIN_ROLE','USER_ROLE'),
        check('id','No es un ID valido').isMongoId(),
        check('id').custom(existeUsuarioPorId),
        validarCampos
    
],usuarioDelete);





module.exports = router;