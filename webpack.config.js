const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist/',
    filename: 'build.js'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: {
          loader: 'vue-loader'
        }
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
	    {
		    test: /\.(gif|png|jpe?g|svg)$/,
		    use: {
			    loader: 'file-loader'
		    }
	    }
    ]
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true
  },
  devtool: '#eval-source-map',
	// plugins: [
	// 	new webpack.DefinePlugin({
	// 		'process.env': {
	// 			NODE_ENV: '"production"'
	// 		}
	// 	})
	// ]
};
