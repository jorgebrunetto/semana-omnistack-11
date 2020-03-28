// Importar o express para dentro do projeto
const express = require("express");
const cors = require("cors");
const routes = require("./routes");

// Inicializar o express
const app = express();

// Indico atraves do origen: qual a URL que terá acesso a API
app.use(cors());

// Indica que os retornos do express seram em JSON
app.use(express.json());

// Inicializa as rotas
app.use(routes);

//Cria nosso server na porta sugerida
app.listen(3333);
