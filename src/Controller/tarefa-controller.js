const tarefaDao = require("../DAO/tarefa-dao");

module.exports = (app, bd) => {
  const taf = new tarefaDao(bd);

  app.get("/tarefas", async (req, res) => {
    try {
      const tarefa = await taf.listaTarefa();
      res.json({ message: tarefa });
    } catch (error) {
      res.json({ error });
    }
  });

  app.get("/tarefas/:id", async (req, res) => {
    try {
      const tarefa = await taf.buscaTarefa(req.params.id);
      res.json({ message: tarefa });
    } catch (error) {
      res.json({ error });
    }
  });

  app.post("/tarefas", async (req, res) => {
    let parametro = [
      req.body.titulo,
      req.body.descricao,
      req.body.status,
      req.body.datacriacao,
      req.body.id_usuario,
    ];
    try {
      const tarefa = await taf.adicionaTarefa(parametro);
      res.json({ message: tarefa });
    } catch (error) {
      res.json({ error });
    }
  });

  app.delete("/tarefas/:id", async (req, res) => {
    let parametro = req.params.id;
    try {
      const tarefa = await taf.deletartarefa(parametro);
      res.status(200).send(tarefa);
    } catch (erro) {
      res.status(400).send(erro);
    }
  });

  app.put("/tarefas/:id", async (req, res) => {
    try {
      let parametro = [
        req.body.titulo,
        req.body.descricao,
        req.body.status,
        req.body.datacriacao,
        req.body.id_usuario,
        req.params.id,
      ];
      const tarefa = await taf.alteratarefa(parametro);
      res.status(200).send(tarefa);
    } catch (erro) {
      res.status(400).send(erro);
    }
  });
};
