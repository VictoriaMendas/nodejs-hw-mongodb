import { initMongoConnection } from '../src/db/initMongoConnection.js';
import { setupServer } from '../src/server.js';

// import { initMongoDB } from './db/initMongoDB.js';
// import { startServer } from './server.js';
import { createDirIfNotExists } from './utils/createDirIfNotExists.js';
import { TEMP_UPLOAD_DIR, UPLOAD_DIR } from './constants/index.js';

const bootstrap = async () => {
  await initMongoConnection();
  // await initMongoDB();
  await createDirIfNotExists(TEMP_UPLOAD_DIR);
  await createDirIfNotExists(UPLOAD_DIR);
  // startServer();
  setupServer();
};
bootstrap();
// void bootstrap();
