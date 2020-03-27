// Importar o express para dentro do projeto
const express = require("express");

// Inicializar o express
const app = express();


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
 * Request Body: 
 */

app.get("/users", (req, res) => {
    const params = req.query;
    console.log(params)
    return res.json({
        evento: "Semana OmniStack 11.0",
        aluno: "Jorge Brunetto"
    });
});

//Cria nosso server na porta sugerida 
app.listen(3333);
