import http from 'http';
import app from './app.js';
import { config } from './config/index.js';

const server = http.createServer(app);

server.listen(config.port, () => {
  console.log(`[KrishiSaathi Backend] Server running on port ${config.port} in ${config.nodeEnv} mode`);
});
