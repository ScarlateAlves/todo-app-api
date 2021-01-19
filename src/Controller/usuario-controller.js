module.exports = (app) => {

    app.get('/usuario', (req, res) => res.send('mostrando no servidor, porta 3000'))

    app.post(`/usuario`, (req, res) => {
        console.log(req.body)
        res.send(`Rota ativada com POST e recurso usuario: valores de usuario devem ser retornados`)
    })

}