import { createProxyMiddleware } from 'http-proxy-middleware';
import express from 'express';

const app = express();

app.use(
  '/api',
  createProxyMiddleware({
    target: 'http://localhost:8000',
    changeOrigin: true,
  })
);

app.listen(5173);

