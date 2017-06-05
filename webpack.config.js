const path = require('path');

module.exports = {
   context: path.resolve(__dirname, './src'),
   entry: './main.js',
   output: {
      path: path.resolve(__dirname, './dist'),
      filename: 'bundle.js',
   },
   watchOptions: {

   },
   module: {
      rules: [
         {
            test: /\.(vert|frag)$/,
            loader: 'raw-loader',
            exclude: /node_modules/
         }
      ]
   }
};
