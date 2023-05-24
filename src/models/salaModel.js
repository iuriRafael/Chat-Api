const db = require("./db.js");
function listarSalas(){
    return db.findAll("salas");
}
module.exports = {listarSalas};


function listarSalas(){
    return [
        {
            "id":{
                "$oid": "756463hhfh4858"
            },

            "nome": "Valentina ",
            "tipo": "publica"
        },
        
        {
            "id":{
                "$oid": "796895804hfnm,"
            },

            "nome": "Iuri Lindo",
            "tipo": "privada",
            "chave": "at8q4haw"
        },

        {
            "id":{
                "$oid": "3958930fjhe"
            },

            "nome": "Iuri Kannneman Pitbull",
            "tipo": "publica"
        }
    ];

}

