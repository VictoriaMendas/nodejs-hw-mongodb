import express from 'express';
import cors from 'cors';
import pino from 'pino-http';

import dotenv from 'dotenv';

import { getEnvVar } from './utils/getEnvVar.js';
import { getAllStudents, getStudentById } from './services/contacts.js';

dotenv.config();
const PORT = Number(getEnvVar('PORT', '3000'));

export const setupServer = () => {
  const app = express();
  app.use(express.json());

  app.use(cors());

  app.use(
    pino({
      transport: {
        target: 'pino-pretty',
      },
    }),
  );

  app.get('/', (req, res) => {
    res.json({ message: 'Hello, World!' });
  });
  app.get('/contacts', async (req, res, _next) => {
    const getContacts = await getAllStudents();
    res.json({
      status: 200,
      message: 'Successfully found contacts!',
      data: getContacts,
    });
  });
  app.get('/contacts/:contactId', async (req, res, _next) => {
    const { contactId } = req.params;

    const getContactId = await getStudentById(contactId);
    if (!getContactId) {
      res.status(404).json({
        status: 'Product not found',
      });
      return;
    }
    res.json({
      status: 200,
      message: `Successfully found contact with id ${contactId}!`,
            data: getContactId,
          });
   
  app.use('*', (req, res, next) => {
    res.status(404).json({
      message: 'Not found',
    });
    next();
  });

  app.use((err, req, res, next) => {
    res.status(500).json({
      message: 'Something went wrong',
      error: err.message,
    });
  });
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
};
