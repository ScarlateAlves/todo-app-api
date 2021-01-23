const tarefa = require('../model/model-tarefa')

module.exports = (app, bd) => {

    app.get(`/tarefa/:email`, (req, res) => {
        res.send(`Rota ativada com GET e recurso tarefa: valores de tarefa devem ser retornados ${req.params.email}`)
    })

    app.post(`/tarefa`, (req, res) => {
        const taf = new tarefa(req.body)
        bd.tarefa.push(taf)
        console.log(bd)
        res.send(`Rota ativada com POST e recurso tarefa: valores de usuario devem ser retornados`)

    })


}