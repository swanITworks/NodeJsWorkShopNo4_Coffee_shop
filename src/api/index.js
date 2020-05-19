import express from 'express';
import orders from './orders';

const { Router } = express;

const mainRouter = Router();
mainRouter.use('/orders', orders);
mainRouter.use('/products', orders);
mainRouter.use('/staff', orders);

const apiRouter = Router();
apiRouter.use('/api/1', mainRouter);

apiRouter.get('/api/1', (req, res) => {
  res.json({
    availablePaths: ['/orders', '/products', '/staff'],
  });
});

apiRouter.use((req, res) => {
  res.json({
    message: 'Not found',
    status: 404,
  });
});

export default apiRouter;
