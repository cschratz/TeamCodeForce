const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = (app) => {
  app.use(createProxyMiddleware('/auth', {
    target: 'http://localhost:8080',
  }));

  app.use(createProxyMiddleware('/park', {
    target: 'http://localhost:8080',
  }));
};
