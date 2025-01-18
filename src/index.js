import { initMongoConnection } from './db/initMongoConnection.js';
import { setupServer } from './services/server.js';

const bootstrap = async () => {
  await initMongoConnection();
  setupServer();
};
bootstrap();
