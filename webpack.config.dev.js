/*  FILE TO CONFIGURE WEBPACK INTO A PROJECT */

import webpack from 'webpack';
import path from 'path';

export default {
    debug: true,
    noInfo: false,
  devtool: 'inline-source-map',
  entry: [                                  // Entry point for the app
    path.resolve(__dirname, 'src/index')    // Also used to inject middleware for hot reloading.
  ],                                        // Can be as many as we want.
  target: 'web',    // electron, node, browser
  output: {                                 // Where to create the web bundle.
    path: path.resolve(__dirname, 'src'),   // with this config, Webpack won't create any physical files
    publicPath: '/',                        // it will simulate file existance and will server our build from memory
    filename: 'bundle.js'                   // Call to our bundle = bundle.js
  },
  devserver: {
    contentBase: path.resolve(__dirname, 'src')
    },
  plugins: [                                // i.e. plugins: hot reloidng, catching errors, linting styles, etc
    // new webpack.LoaderOptionsPlugin({
    //     debug: true,
    //     noInfo: false,      // Displays a list of all the files that Webpack is bundling.
    //   })
  ],
  module: {         // Difines file types to handle with webpack.
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loaders: ['babel']},  // Loaders tells webpack how handle specific file types.
      {test: /\.css$/, loaders: ['style-loader','css']}
    ]
  }
};
