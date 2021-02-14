module.exports = class tarefaDao {
  constructor(bd) {
    this.bd = bd;
  }
  listaTarefa() {
    return new Promise((resolve, reject) => {
      this.bd.all("SELECT * FROM TAREFAS;", (err, rows) => {
        if (err) {
          reject(err);
        } else {
          resolve(rows);
        }
      });
    });
  }

  buscaTarefa(parametro) {
    return new Promise((resolve, reject) => {
      this.bd.all(
        "SELECT * FROM TAREFAS WHERE ID = ?;",
        parametro,
        (err, rows) => {
          if (err) {
            reject(err);
          } else {
            resolve(rows);
          }
        }
      );
    });
  }

  adicionaTarefa(parametro) {
    return new Promise((resolve, reject) => {
      let sql =
        "INSERT INTO TAREFAS (TITULO, DESCRICAO, STATUS, DATACRIACAO, ID_USUARIO) VALUES (?, ?, ?, ?,?)";
      this.bd.run(sql, parametro, (err, rows) => {
        if (err) {
          reject(err);
        } else {
          resolve("adicionado");
        }
      });
    });
  }

  deletartarefa(parametro) {
    return new Promise((resolve, reject) => {
      let sql = "DELETE FROM TAREFAS WHERE ID = ?";
      this.bd.run(sql, parametro, (err, rows) => {
        if (err) {
          reject(err);
        } else {
          resolve("apagado");
        }
      });
    });
  }

  alteratarefa(parametro) {
    return new Promise((resolve, reject) => {
      let sql =
        "UPDATE TAREFAS SET TITULO= ?, DESCRICAO= ?, STATUS= ?, DATACRIACAO= ?, ID_USUARIO= ? WHERE ID = ?";
      this.bd.run(sql, parametro, (erro, result) => {
        if (erro) {
          reject(erro);
        } else {
          resolve("alterado");
        }
      });
    });
  }
};
