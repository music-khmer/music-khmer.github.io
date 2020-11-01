const withLess = require('@zeit/next-less');
const withPlugins = require('next-compose-plugins');

const plugins = [
  withLess({
    basePath: '',
    assetPrefix: '',
    cssModules: false,
  }),
];

const nextConfig = {
  env: {},
};

module.exports = withPlugins(plugins, nextConfig);