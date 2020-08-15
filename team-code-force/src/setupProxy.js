require('dotenv').config();

const { SERVER_PORT } = process.env || 8080;

const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = (app) => {
  app.use(createProxyMiddleware('/auth', {
    target: `http://localhost:${SERVER_PORT}`,
  }));

  app.use(createProxyMiddleware('/park', {
    target: `http://localhost:${SERVER_PORT}`,
  }));
};
