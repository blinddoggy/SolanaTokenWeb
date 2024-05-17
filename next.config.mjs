// next.config.mjs

export default {
    async rewrites() {
      return [
        {
          source: '/api/:path*',
          destination: 'https://asymmetricfrequency.org/:path*', // Proxy to external API
        },
      ];
    },
  };
  