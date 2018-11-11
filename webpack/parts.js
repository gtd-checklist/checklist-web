const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const paths = require('./paths');
const restConfig = require('./rest-config');

exports.entry = ({ hotReload }) => {
  const entry = {
    app: [paths.appIndex]
  };

  const plugins = [
    new webpack.optimize.ModuleConcatenationPlugin()
  ];

  if (hotReload) {
    entry.app.unshift('react-hot-loader/patch');
    plugins.push(new webpack.NamedModulesPlugin());
  }

  entry.app.unshift('babel-polyfill');
  return { entry, plugins };
};

exports.output = ({ optimize }) => {
  const output = {
    path: paths.dist,
    filename: 'bundles/[name].bundle.js',
    publicPath: '/'
  };

  if (optimize) {
    output.filename = 'bundles/[name].[chunkhash].bundle.js';
  }

  return { output };
};

exports.scripts = ({ sourceMaps, optimize }) => {
  const result = {
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env']
            }
          }
        }
      ]
    }
  };

  if (optimize) {
    result.plugins = [
      new webpack.optimize.UglifyJsPlugin({
        sourceMap: sourceMaps,
        compress: { warnings: false }
      })
    ];
  }

  return result;
};

exports.file = () => ({
  module: {
    rules: [
      {
        test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath: 'img/'
        }
      }
    ]
  }
});

exports.devServer = () => ({
  devServer: {
    open: true,
    compress: true,
    historyApiFallback: true,
    port: 3000
  }
});

exports.indexTemplate = () => {
  const options = {
    inject: false,
    chunks: ['vendor', 'app'],
    template: paths.mainTemplate,
    filename: 'index.html'
  };

  return {
    plugins: [
      new HtmlWebpackPlugin(options)
    ]
  };
};

exports.esLint = () => ({
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
        options: {
          failOnError: true
        }
      }
    ]
  }
});

exports.resolveLoaders = () => ({
  resolveLoader: {
    moduleExtensions: ['-loader']
  }
});

exports.resolve = () => ({
  resolve: {
    modules: [
      paths.nodeModules
    ],
    extensions: ['.js', '.jsx']
  }
});

exports.commonChunks = () => ({
  optimization: {
    splitChunks: {
      chunks: 'async',
      minSize: 30000,
      maxSize: 0,
      minChunks: 1,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      automaticNameDelimiter: '~',
      name: true,
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true
        }
      }
    }
  }
});

exports.defineConstants = (env) => {
  const consts = {};

  if (env.production) {
    consts.REST_ROOT = restConfig.production.restRoot;
    consts['process.env.NODE_ENV'] = 'production';
  } else {
    consts.REST_ROOT = restConfig.development.restRoot;
  }

  return {
    plugins: [
      new webpack.DefinePlugin(consts)
    ]
  };
};

exports.clean = () => ({
  plugins: [
    new CleanWebpackPlugin(['dist'], paths.root)
  ]
});
