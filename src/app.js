const express = require('express')

//biblioteca para ver req, json
const bodyParse = require('body-parser')
const usuariosController = require('./Controller/usuario-controller')
const tarefaController = require('./Controller/tarefa-controller')

const app = express()
const port = 3000

//app.use(bodyParse.urlencoded({ extended: true }))
app.use(bodyParse.json())
usuariosController(app);
tarefaController(app)
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))