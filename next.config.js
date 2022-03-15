const ESLintPlugin = require('eslint-webpack-plugin');
const withPlugins = require('next-compose-plugins');

module.exports = withPlugins([], {
  webpack: (config) => {
    // Note: we provide webpack above so you should not `require` it
    // Perform customizations to webpack config
    config.plugins.push(new ESLintPlugin({ extensions: ['.js', '.jsx'] }));

    // add configuration
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    // Important: return the modified config
    return config;
  },
});
