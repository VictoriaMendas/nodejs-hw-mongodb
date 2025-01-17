import { setupServer } from './server.js';
import initMongoConnection from '';
const bootstrap = async () => {
  await initMongoConnection();
  setupServer();
};
