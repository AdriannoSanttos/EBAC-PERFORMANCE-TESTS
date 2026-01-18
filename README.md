# EBAC Performance Tests

Este projeto contém testes de performance para a API EBAC Demo Store, utilizando **k6**.

## Estrutura do Projeto

- `tests/k6/produtos.test.js` - Testes de performance para os endpoints de produtos
- `tests/k6/clientes.test.js` - Testes de performance para os endpoints de clientes
- `tests/k6/mock-api/mock-api.js` - Mock API utilizada para testes (rodando na porta 3001)
- `produtos.log` / `clientes.log` - Logs dos testes executados

## Como executar

1. Inicie a Mock API:

```bash
cd tests/k6/mock-api
node mock-api.js
