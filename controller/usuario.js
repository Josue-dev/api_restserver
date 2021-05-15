const {response}=require('express');



const usuariosGet=(req, res=response)=>{
    const params = req.query;
    res.json({
        ok: true,
        msg:'peticion get '
    })
}

const usuariosPost = (req, res=response)=>{
    const body = req.body;

    res.json({
        ok:true,
        msg:'peticion post',
        body
    })
}

const usuarioPut = (req, res=response)=>{
    const id = req.params.id;
    res.json({
        ok:true,
        msg:'peticion put',
        id
    })
}

const usuarioDelete  = (req, res=response)=>{
    const id = req.params.id;
    res.json({
        ok:true,
        msg:'peticion delete',
        id
    })
}



module.exports = {
    usuariosGet,
    usuariosPost,
    usuarioPut,
    usuarioDelete
}