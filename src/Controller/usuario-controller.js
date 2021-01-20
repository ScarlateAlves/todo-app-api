const usuario = require('../model/model-usuario')


module.exports = (app, bd) => {

    app.get('/usuario', (req, res) => res.send('mostrando no servidor, porta 3000'))

    app.post(`/usuario`, (req, res) => {

        const usr = new usuario(req.body.nome)
        bd.usuario.push(usr);
        console.log(bd)
        res.send("ok")
            // console.log(req.body)
            // res.send(`Rota ativada com POST e recurso usuario: valores de usuario devem ser retornados`)
    })

}