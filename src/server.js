import express from 'express';
import cors from 'cors';
import pinoHttp from 'pino-http';

export const setupServer = () => {
  const app = express();

  app.use(cors());

  const logger = pinoHttp();
  app.use(logger);

  app.use((req, res) => {
    res.status(404).json({ message: 'Route not found' });
  });

  return app;
};
