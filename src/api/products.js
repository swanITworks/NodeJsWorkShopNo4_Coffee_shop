import express from 'express';

const products = express.Router();

const productsDB = ['prod1', 'prod2', 'prod3'];

products.get('/GET', (req, res) => {
  res.json(productsDB);
});

products.get('/GET/:id', (req, res) => {
  const result = productsDB[Number(req.params.id) - 1];
  console.log(req.params);
  res.json(result);
});

products.get('/POST/:id', (req, res) => {
  res.json({
    updated: 1,
  });
});

products.get('/POST/:id', (req, res) => {
  res.json({
    id: '123123123123123123123123',
  });
});

products.get('/DELETE/:id', (req, res) => {
  res.json({
    ok: true,
  });
});

products.get('/', (req, res) => {
  res.json({
    availableMethods: ['GET /:id', 'POST /:id', 'PUT', 'DELETE /:id'],
  });
});

export default products;
