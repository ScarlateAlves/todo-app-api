//const Tarefas = require('../model/model-tarefa')
const Tarefas = require('../DAO/usuario-dao')
module.exports = (app, bd) => {
    const tarefa = new Tarefas(bd)

    app.get('/tarefa', async(req, res) => {
        try {
            let todasTarefas = await tarefa.listaUsuarios()
            res.send(todasTarefas)
        } catch (erro) {
            res.send(erro)
        }


    })


}