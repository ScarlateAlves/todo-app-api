//importacaoes
const express = require('express')
const bodyParse = require('body-parser')
const usuariosController = require('./Controller/usuario-controller')
const tarefaController = require('./Controller/tarefa-controller')
const Tarefa = require('./model/model-tarefa')
const Usuario = require('./model/model-usuario')
const bd = require('./infra/bd')


// const tarefa = new Tarefa("d", "d", "q")
// console.log(tarefa)
// const usuario = new Usuario("scarlate", "d", "k")
// console.log(usuario)

const app = express()
const port = 3000

app.use(bodyParse.json())


usuariosController(app, bd);
tarefaController(app, bd)



app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))