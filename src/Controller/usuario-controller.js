const Usuario = require('../model/model-usuario')

module.exports = (app, bd) => {
    app.get('/usuario', (req, res) => {
        res.send(bd.usuario)
    })

    app.get('/usuario/:email', (req, res) => {
        for (const usr of bd.usuario) {
            if (usr.email == req.params.email) {
                res.send(usr)
            }
        }
        res.send("ativando rota")
    })

    app.post(`/usuario`, (req, res) => {
        //instanciando classe, passando como parametro o corpo da requisicao, dando um push para ver o banco, inserindo usuario no bd 
        const usr = new Usuario(req.body.nome, req.body.email, req.body.senha)
        bd.usuario.push(usr);
        console.log(bd.usuario)
        res.send("adicionado com sucesso")
            // console.log(req.body)
            // res.send(`Rota ativada com POST e recurso usuario: valores de usuario devem ser retornados`)
    })

    app.delete('/usuario/:nome', (req, res) => {
        for (let usr of bd.usuario) {
            if (req.params.nome === usr.nome) {
                bd.usuario.splice(usr, 1)
                console.log()
                res.send("removido com sucesso")

            }



        }

    })

    app.put('/usuario/:nome', (req, res) => {
        for (let usr of bd.usuario) {
            if (usr.nome === req.params.nome) {
                usr.nome = req.body.nome

                return res.json({ message: 'atualizado ' })
            }
        }


    })

}