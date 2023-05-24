const salaModel = require('../models/salaModel');

exports.get=async()=>{
    return await salaModel.listarSalas();
}

exports.get=async(req,res)=>{
    return{"status":"ok", "controller":"Sala"}
}

exports.get=()=>{
    let salaModel = require('../models/salaModel');
    return salaModel.listarSalas();
}

exports.entrar=async(iduser,idsala)=>{
    const sala =await salaModel.buscarSala(idsala);
    let usuarioModel=require('../models/usuarioModel');
    let user=await usuarioModel.buscarUsuario(iduser);
    user.sala={_id:sala._id, nome:sala.nome, tipo:sala.tipo};
    if(await usuarioModel.alterarUsuario(user)){
        return {msg: "OK", timestamp:timestamp=Date.now()};
    }
    return false;
}