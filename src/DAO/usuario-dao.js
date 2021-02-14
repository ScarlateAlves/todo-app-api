const { response } = require("express");
module.exports = class UsuarioDao {
  constructor(bd) {
    this.bd = bd;
  }
  listaUsuarios() {
    return new Promise((resolve, reject) => {
      this.bd.all("SELECT * FROM USUARIOS;", (err, rows) => {
        if (err) {
          reject(err);
        } else {
          resolve(rows);
        }
      });
    });
  }

  buscaUsuario(parametro) {
    return new Promise((resolve, reject) => {
      let sql = "SELECT * FROM USUARIOS WHERE ID = ? ;";
      this.bd.get(sql, parametro, (err, row) => {
        if (err) {
          reject(err);
        }
        resolve(row);
      });
    });
  }

  adicionaUsuario(parametro) {
    return new Promise((resolve, reject) => {
      let sql =
        "INSERT INTO USUARIOS (NOME, EMAIL, SENHA) VALUES (?, ?, ?)";
      this.bd.run(sql, parametro, (err, usr) => {
        if (err) {
          reject(err);
        } else {
          resolve("adicionado");
        }
      });
    });
  }

  deletarUsuario(parametro) {
    return new Promise((resolve, reject) => {
      let sql = "DELETE FROM USUARIOS WHERE ID = ?";
      this.bd.run(sql, parametro, (err, usr) => {
        if (err) {
          reject(err);
        }
        resolve("apagado");
      });
    });
  }

  alteraUsuario(parametro) {
    return new Promise((resolve, reject) => {
      let sql =
        "UPDATE USUARIOS SET NOME=COALESCE(?,NOME), EMAIL=COALESCE(?,EMAIL), SENHA=COALESCE(?,SENHA) WHERE ID = ?";
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
