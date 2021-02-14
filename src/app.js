//importacaoes
const express = require("express");
const bodyParse = require("body-parser");
const usuariosController = require("./Controller/usuario-controller");
const tarefaController = require("./Controller/tarefa-controller");
const bd = require("./infra/sqlite-db");
const cors = require("cors");
const app = express();
const port = 3001;

app.use(bodyParse.json());
app.use(cors());
usuariosController(app, bd);
tarefaController(app, bd);

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
