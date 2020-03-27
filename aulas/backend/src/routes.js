// Importar o express para dentro do projeto
const express = require("express");
const crypto = require('crypto');
const routes = express.Router();
const connection = require('./database/connection')
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

routes.post("/ongs", (req, res) => {
    const { name, email, whatsapp, city, uf } = req.body;

    const id = crypto.randomBytes(4).toString('HEX');



    return res.json();
});
module.exports = routes;
