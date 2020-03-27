// Importar o express para dentro do projeto
const express = require("express");
const routes = require("./routes");

// Inicializar o express
const app = express();
app.use(express.json());

app.use(routes);

//Cria nosso server na porta sugerida
app.listen(3333);
