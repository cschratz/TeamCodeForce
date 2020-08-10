const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = (app) => {
  app.use(
    '/auth/google',
    createProxyMiddleware({
      target: 'http://localhost:3000',
      changeOrigin: true,
    }),
  );
};
