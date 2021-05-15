const {Router} = require('express');
const { usuariosGet, usuariosPost, usuarioPut, usuarioDelete } = require('../controller/usuario');


const router = Router();

router.get('/', usuariosGet);

router.post('/', usuariosPost);

router.put('/:id', usuarioPut);

router.delete('/:id',usuarioDelete);





module.exports = router;