const db = require("./db.js");

let listarSalas = async ()=>{
    let salas = await db.findAll("salas");
    return salas;
}

let buscarSala = async (idsala)=>{
	return db.findOne("salas",idsala);
}
  
let criarSala = async (sala) => {
    return await db.insertOne("salas", sala);
  }

module.exports = {listarSalas, buscarSala, criarSala }
