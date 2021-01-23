const Usuario = require("../model/model-usuario");

//simular banco de dados para testa se esta sendo salvo o post
module.exports = {
    usuario: [new Usuario("b", "b@gmail.com", "b"),
        new Usuario("a", "a@gmail.com", "a"),
        new Usuario("c", "c@gmail.com", "c")
    ],

    tarefa: []
}