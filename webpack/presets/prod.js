const merge = require('webpack-merge');

const parts = require('./../parts');
const baseConfig = require('./base');

module.exports = (env) => {
  const config = merge([
    {
      mode: 'production'
    },
    parts.entry({ hotReload: false }),
    parts.output({ optimize: true }),
    parts.scripts({ sourceMaps: false, optimize: true }),
    parts.indexTemplate()
  ]);

  return merge([baseConfig(env), config]);
};
