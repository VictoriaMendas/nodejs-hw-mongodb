import express from 'express';
import cors from 'cors';
import pinoHttp from 'pino-http';

export const setupServer = () => {
  const app = express();
  const PORT = 3000;
  app.use(cors());

  const logger = pinoHttp();
  app.use(logger);

  app.get('/', (req, res) => {
    res.send('Hello, World!');
  });
  app.use((req, res) => {
    res.status(404).json({
      message: 'Not found',
    });
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  });
};
