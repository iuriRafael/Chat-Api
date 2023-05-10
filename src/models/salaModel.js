const db = require("./db");
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

            "nome": "Iuri Kannneman Pitbull",
            "tipo": "publica"
        },
        
        {
            "id":{
                "$oid": "796895804hfnm,"
            },

            "nome": "Iuri Kannneman Pitbull",
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

