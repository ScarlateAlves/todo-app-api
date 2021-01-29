//importacaoes
const express = require('express')
const bodyParse = require('body-parser')
const usuariosController = require('./Controller/usuario-controller')
const tarefaController = require('./Controller/tarefa-controller')
const bd = require('./infra/sqlite-db')

const cors = require('cors');


const app = express()
const port = 3000
app.use(cors())
app.use(bodyParse.json())

usuariosController(app, bd);
//tarefaController(app, bd)


app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))

// fetch('http://localhost:3000/usuario')
//     .then(function(res) {
//         return res.json()
//     })
//     .then(function(res) {
//         console.log(res)
//     })
//     .catch((erro)=>{
//         console.log(erro)
//     })