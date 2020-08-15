require('dotenv').config();

const { SERVER_PORT } = process.env || 8080;

const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = (app) => {
  app.use(createProxyMiddleware('/auth', {
    target: `https://${process.env.REACT_APP_SERVER_IP}`,
  }));

  app.use(createProxyMiddleware('/park', {
    target: `https://${process.env.REACT_APP_SERVER_IP}`,
  }));
};
