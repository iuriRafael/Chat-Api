const salaModel = require('../models/salaModel');
const usuarioModel = require('../models/usuarioModel');

exports.get=async(req,res)=>{
    return await salaModel.listarSalas();
}

exports.entrar= async (iduser,idsala)=>{
	const sala = await salaModel.buscarSala(idsala);

	let user = await usuarioModel.buscarUsuario(iduser);
    if (user) {
  user.sala = {
    _id: sala._id,
    nome: sala.nome,
    tipo: sala.tipo
  };
  if (await usuarioModel.alterarUsuario(user)) {
    return { msg: "OK", timestamp: Date.now() };
  }
}
return false;

}

exports.criarSala = async (nome, tipo) => {
  const sala = {
    nome: nome,
    tipo: tipo,
    msgs: []
  };

  const novaSala = await salaModel.criarSala(sala);
  return novaSala;
}


