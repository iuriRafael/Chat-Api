let express = require("express");
let app = express();
app.use(express.urlencoded({extended : true}));
app.use(express.json());

const router = express.Router();
app.use('/', router.get('/', (req, res)=>{
    res.status(200).send("<h1>API-CHAT</h1>")
}));

// Rota para ver versão do chat
app.use("/", router.get("/sobre", (resq, res, next) => {
    res.status(200).send({
        "nome":"API - CHAT",
        "versão": "0.1.0",
        "autor": "Iuri Rafael"
    })
}));

//Rota para listar salas

app.use("/salas", router.get("/salas", async(req, res, next) => {
    const salaController = require("./controllers/salaController");
    let resp=await salaController.get();
    res.status(200).send(resp);
}));

app.use("/entrar",router.post("/entrar", async(req, res, next) => {
    const usuarioController = require("./controllers/usuarioController");
    let resp= await usuarioController.entrar(req.body.nick);
    res.status(200).send(resp);
}));

app.use("/sala/entrar", router.put("/sala/entrar", async(req, res)=>{
    if(!token.checkToken(req.headers.token,req.headers.iduser,req.headers.nick))
    return false;
    let resp=await salaController.entrar(req.headers.iduser,req.query.idsala);
    res.status(200).send(resp);
}));

module.exports = app;