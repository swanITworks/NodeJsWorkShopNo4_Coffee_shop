import express from 'express';

const orders = express.Router();

const ordersDB = ['ord1', 'ord2', 'ord3'];

orders.get('/GET', (req, res) => {
  res.json(ordersDB);
});

orders.get('/GET/:id', (req, res) => {
  const result = ordersDB[Number(req.params.id) - 1];
  console.log(req.params);
  res.json(result);
});

orders.get('/POST/:id', (req, res) => {
  res.json({
    updated: 1,
  });
});

orders.get('/POST/:id', (req, res) => {
  res.json({
    id: '123123123123123123123123',
  });
});

orders.get('/DELETE/:id', (req, res) => {
  res.json({
    ok: true,
  });
});

orders.get('/', (req, res) => {
  res.json({
    availableMethods: ['GET /:id', 'POST /:id', 'PUT', 'DELETE /:id'],
  });
});

export default orders;
