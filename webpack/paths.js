const path = require('path');

const root = path.join(__dirname, '../');
const src = path.join(root, 'src');

const paths = {
  root,
  dist: path.join(root, 'dist'),
  appIndex: path.join(src, 'index.jsx'),
  mainTemplate: path.join(src, 'index.ejs'),
  nodeModules: path.join(root, 'node_modules')
};

module.exports = paths;
