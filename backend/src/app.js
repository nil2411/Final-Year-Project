import express from 'express';
import cors from 'cors';
import { config } from './config/index.js';
import chatbotRouter from './routes/chatbot.routes.js';

const app = express();

app.use(cors({ origin: config.allowedOrigins, credentials: true }));
app.use(express.json({ limit: '1mb' }));

app.get('/health', (_req, res) => {
  res.json({ status: 'ok', service: 'KrishiSaathi Backend', time: new Date().toISOString() });
});

app.use('/api/chat', chatbotRouter);

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: 'Not found', path: req.originalUrl });
});

// Error handler
// eslint-disable-next-line no-unused-vars
app.use((err, _req, res, _next) => {
  console.error('Error:', err);
  res.status(500).json({ error: 'Internal server error', details: err?.message });
});

export default app;
