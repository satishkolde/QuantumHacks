// next.config.js

const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = {
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://your-api-server/:path*', // replace with your API server
      },
    ];
  },

  // If you need to use the proxy middleware directly
  async serverMiddleware() {
    const apiProxy = createProxyMiddleware('/api', {
      target: 'http://your-api-server', // replace with your API server
      changeOrigin: true,
    });

    // Apply the proxy to Next.js server middleware
    server.use('/api', apiProxy);
  },
};
