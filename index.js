import { setupServer } from './src/server.js';

const PORT = 3000;
const app = setupServer();

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
