const Usuario = require('../model/model-usuario')
const dao = require('../DAO/usuario-dao')

module.exports = (app, bd) => {
    const usuarioDao = new dao(bd)

    app.get('/usuario', async(req, res) => {
        try {
            let resposta = await usuarioDao.listaUsuarios()
            res.status(200).send(resposta)
        } catch (erro) {
            res.status(400).send(erro)
        }
    })

    //pode ser usado o each tbm
    app.get('/usuario/:id', async(req, res) => {
        try {
            let parametro = req.params.id;
            let resposta = await usuarioDao.buscaUsuario(parametro)
            res.status(200).send(resposta)
        } catch (erro) {
            res.status(400).send(erro)
        }

    })

    app.post(`/usuario`, async(req, res) => {
        try {
            let parametro = [req.body.nome, req.body.email, req.body.senha];
            let resposta = await usuarioDao.adicionaUsuario(parametro)
            res.status(200).send(resposta)
        } catch (erro) {
            res.status(400).send(erro)
        }
    })

    app.delete('/usuario/:id', async(req, res) => {
        try {
            let parametro = req.params.id;
            let resposta = await usuarioDao.deletarUsuario(parametro)
            res.status(200).send(resposta)
        } catch (erro) {
            res.status(400).send(erro)
        }

    })

    app.put('/usuario/:id', async(req, res) => {
        try {
            let parametro = [req.body.nome, req.body.email, req.body.senha, req.params.id]
            let resposta = await usuarioDao.alteraUsuario(parametro)
            res.status(200).send(resposta)
        } catch (erro) {
            res.status(400).send(erro)
        }
    })

}