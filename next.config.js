const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
  future: {
    webpack5: true,
  },
  webpack: (config) => {
    // Note: we provide webpack above so you should not `require` it
    // Perform customizations to webpack config
    config.plugins.push(new ESLintPlugin({ extensions: ['.js', '.jsx'] }));
    // Important: return the modified config

    return config;
  },
};
