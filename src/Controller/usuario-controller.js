const Usuario = require("../model/model-usuario");
const dao = require("../DAO/usuario-dao");

module.exports = (app, bd) => {
  const usuarioDao = new dao(bd);

  app.get("/usuario", async (req, res) => {
    try {
      const todosUsuarios = await usuarioDao.listaUsuarios();
      res.status(200).send(todosUsuarios);
    } catch (erro) {
      res.status(400).send(erro);
    }
  });

  //pode ser usado o each tbm
  app.get("/usuario/:id", async (req, res) => {
    try {
      let parametro = req.params.id;
      const usuario = await usuarioDao.buscaUsuario(parametro);
      res.status(200).send(usuario);
    } catch (erro) {
      res.status(400).send(erro);
    }
  });

  app.post(`/usuario`, async (req, res) => {
    try {
      let parametro = [req.body.nome, req.body.email, req.body.senha];
      const usuario = await usuarioDao.adicionaUsuario(parametro);
      res.status(200).send(usuario);
    } catch (erro) {
      res.status(400).send(erro);
    }
  });

  app.delete("/usuario/:id", async (req, res) => {
    try {
      let parametro = req.params.id;
      const usuario = await usuarioDao.deletarUsuario(parametro);
      res.status(200).send(usuario);
    } catch (erro) {
      res.status(400).send(erro);
    }
  });

  app.put("/usuario/:id", async (req, res) => {
    try {
      let parametro = [
        req.body.nome,
        req.body.email,
        req.body.senha,
        req.params.id,
      ];
      const usuario = await usuarioDao.alteraUsuario(parametro);
      res.status(200).send(usuario);
    } catch (erro) {
      res.status(400).send(erro);
    }
  });
};
