// Importar o express para dentro do projeto
const express = require("express");

const routes = express.Router();

//Estou querendo acessar o recurso de usuários  '/users'
/**
 * Metodos HTTP
 *
 * GET: Buscar informações do meu back
 * POST: Criar uma informação no back
 * PUT: Alterar uma informação no back
 * DELETE: Apagar uma informação do meu back
 */

/**
 * Tipos de parâmetros
 *
 * Query Params: Parametros nomeados enviados na rota após "?"
 * Route Params: Identificar um único recurso depois da "/"
 * Request Body: Corpo da requisição utilizado para criar ou alterar recursos
 */

/**
 * Usar Query Builder: table('users').select('*').where('name=jorge')
 * vamos usar o KNEX.JS
 */

routes.post("/users", (req, res) => {
    const body = req.body;
    console.log(body);
    return res.json({
        evento: "Semana OmniStack 11.0",
        aluno: "Jorge Brunetto 1"
    });
});
module.exports = routes;