const express = require('express');
const app = express();
const port = 3000;

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
    });

    app.listen('/', (req, res) => {
        res.send(__dirname + '/public/index.html');
    });

    app.listen(port, () => {
        console.log(`Servidor rodando em http://localhost:${port}`);
    });