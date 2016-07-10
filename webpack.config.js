var webpack = require('webpack');
var path = require('path');

module.exports = {
	
	entry: [ 
		'webpack-dev-server/client?http://127.0.0.1:8080/',
		'webpack/hot/only-dev-server',
		'./src'
	],
	output : {
		path: path.join(__dirname, 'public'),
		filename : 'bundle.js'
	},
	resolve: {
		moduledirectories : [ 'node_modules', 'src' ],
		extention: [ '', '.js' ]
	},
	module: [ 
	{
		test: /\.js$/,
		exclude: /node_modules/,
		loader: 'babel',
		query: {
			presets: ['es2015']
		}
	}
	],
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoErrorsPlugin()
	],
	devtool : 'inline-source-map',
	devServer: {
		hot: true,
		proxy: {
			'*': 'http://localhost:3000'
		}
	}
};