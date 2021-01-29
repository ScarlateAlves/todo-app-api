const Usuario = require('../model/model-usuario')
const dao = require('../DAO/usuario-dao')

module.exports = (app, bd) => {
    const usuarioDao = new dao(bd)

    app.get('/usuario', (req, res) => {
        usuarioDao.listaUsuarios()
            .then((usuarios) => { res.send(usuarios) })
            .catch((erro) => { res.send(erro) })
    })

    //pode ser usado o each tbm
    app.get('/usuario/:id', (req, res) => {
        let parametro = req.params.id;
        usuarioDao.buscaUsuario(parametro)
            .then((usuarios) => { res.send(usuarios) })
            .catch((erro) => { res.send(erro) })

    })

    app.post(`/usuario`, (req, res) => {
        let parametro = [req.body.nome, req.body.email, req.body.senha];
        usuarioDao.adicionaUsuario(parametro)
            .then((usuarios) => { res.status(200).send(usuarios) })
            .catch((erro) => { res.status(400).send(erro) })
    })

    app.delete('/usuario/:id', (req, res) => {
        let parametro = req.params.id;
        usuarioDao.deletarUsuario(parametro)
            .then((usuarios) => { res.send(usuarios) })
            .catch((erro) => { res.send(erro) })

    })

    app.put('/usuario/:id', (req, res) => {
        let parametro = [req.body.nome, req.body.email, req.body.senha, req.params.id]
        usuarioDao.alteraUsuario(parametro)
            .then((usuarios) => { res.send(usuarios) })
            .catch((erro) => { res.send(erro) })
    })

}