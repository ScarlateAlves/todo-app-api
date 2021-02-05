const { response } = require("express");

module.exports = class TarefaDao {
    constructor(bd) {
        this.bd = bd
    }

    listaTarefa() {
        return Promise((resolve, reject) => {
            let sql = 'SELECT * FROM TAREFAS'
            this.bd.all(sql, (erro, mostra) => {
                if (erro) {
                    reject(erro)
                } else {
                    resolve(mostra)
                }
            })
        })
    }
    mostraTarefa(tarefa) {
        return Promise((reject, resolve) => {
            let sql = 'SELECT * FROM TAREFAS WHERE ID = ?';
            this.bd.run(sql, tarefa, (erro, mostra) => {
                if (erro) {
                    reject(erro)
                } else {
                    resolve(mostra);
                }
            })
        })

    }
    adicionaTarefa(tarefa) {
        return Promise((resolve, reject) => {
            let sql = 'INSERT INTO FROM TAREFAS (TITULO, DESCRICAO, STATUS) VALUES (?, ?, ?)';
            this.bd.run(sql, tarefa, (erro, linha) => {
                if (erro) {
                    reject(erro)
                } else {
                    resolve("adicionado")
                }
            })
        })

    }

    modificaTarefa(tarefa) {
        return Promise((reject, resolve) => {
            let sql = 'UPDATE TAREFAS SET TITULO=COALESCE(?,TITULO), DESCRICAO=COALESCE(?,DESCRICAO), STATUS=COALESCE(?,STATUS) WHERE ID = ? '
            this.bd.run(sql, tarefa, (erro) => {
                if (erro) {
                    reject(erro)
                } else {
                    resolve("modificado")
                }
            })
        })
    }

    deletaTarefa(tarefa) {
        return Promise((reject, resolve) => {
            let sql = 'DELETE FROM TAREFAS WHERE ID=?'
            this.bd.run(sql, tarefa, (erro) => {
                if (erro) {
                    reject(erro)
                } else {
                    resolve("apagado")
                }
            })

        })
    }
}