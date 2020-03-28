// Importar o express para dentro do projeto
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
const express = require("express");

const routes = express.Router();

const OngController = require("./controllers/OngController");
const IncidentController = require("./controllers/IncidentController");
const ProfileController = require("./controllers/ProfileController");
const SessionController = require("./controllers/SessionController");

routes.post("/sessions", SessionController.create);

routes.get("/ongs", OngController.index);
routes.post("/ongs", OngController.create);

routes.get("/profile", ProfileController.index);

routes.get("/incidents", IncidentController.index);
routes.post("/incidents", IncidentController.create);
routes.delete("/incidents/:id", IncidentController.delete);
module.exports = routes;
