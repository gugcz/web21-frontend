const ESLintPlugin = require('eslint-webpack-plugin');
const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');
const sharpAdapter = require('responsive-loader/sharp');

module.exports = withPlugins(
  [
    [
      optimizedImages,
      {
        inlineImageLimit: 8192,
        imagesFolder: 'images',
        imagesName: '[name]-[hash].[ext]',
        handleImages: ['jpeg', 'png'],
        removeOriginalExtension: false,
        optimizeImages: true,
        optimizeImagesInDev: false,
        defaultImageLoader: 'responsive-loader',
        responsive: {
          adapter: sharpAdapter,
          sizes: [320, 640, 960, 1200],
          placeholder: true,
          placeholderSize: 20,
        },
        mozjpeg: {
          quality: 80,
        },
        optipng: {
          optimizationLevel: 3,
        },
        pngquant: false,
      },
    ],
  ],
  {
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
    images: {
      disableStaticImages: true,
      loader: 'custom',
    },
  }
);
