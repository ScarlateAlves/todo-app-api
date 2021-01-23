//importacaoes
const express = require('express')
const bodyParse = require('body-parser')
const usuariosController = require('./Controller/usuario-controller')
const tarefaController = require('./Controller/tarefa-controller')
const bd = require('./infra/bd')

const app = express()
const port = 3000

app.use(bodyParse.json())
usuariosController(app, bd);
//tarefaController(app, bd)

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))