
import express from 'express';
import bodyParser from 'body-parser';

const app = express();
app.use(bodyParser.json());

let produtos = [];
let clientes = [];


app.get('/api/products', (req, res) => {
    res.status(200).json(produtos);
});

app.post('/api/products', (req, res) => {
    const produto = { id: produtos.length + 1, ...req.body };
    produtos.push(produto);
    res.status(201).json(produto);
});


app.get('/api/customers', (req, res) => {
    res.status(200).json(clientes);
});

app.post('/api/customers', (req, res) => {
    const cliente = { id: clientes.length + 1, ...req.body };
    clientes.push(cliente);
    res.status(201).json(cliente);
});

const port = 3001;
app.listen(port, () => {
    console.log(`Mock API rodando em http://localhost:3001`);
});
