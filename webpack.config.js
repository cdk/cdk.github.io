var HtmlWebpackPlugin = require('html-webpack-plugin');
var BrowserSyncPlugin = require('browser-sync-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var MiniCssExtractPlugin = require('mini-css-extract-plugin');

var inProduction = (process.env.NODE_ENV === 'production');

module.exports = {
	entry: './src/js/main.js',
	output: {
		path: __dirname + '/dist',
		filename: inProduction ? 'js/bundle.[chunkhash].js' : 'js/bundle.js',
		publicPath: '/',
		clean: true
	},

	module: {
		rules: [
			{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
				options: {
					presets: ['@babel/preset-env']
				}
			},
			{
				test: /\.css$/,
				use: [MiniCssExtractPlugin.loader, 'css-loader']
			},
			{
				test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/i,
				type: 'asset/resource',
				generator: {
					filename: 'fonts/[name][ext]'
				}
			},
			{
				test: /\.(ttf|eot)(\?v=[0-9]\.[0-9]\.[0-9])?$/i,
				type: 'asset/resource',
				generator: {
					filename: 'fonts/[name][ext]'
				}
			},
			{
				test: /\.(jpe?g|png|gif|svg)$/i,
				type: 'asset/resource',
				generator: {
					filename: 'img/[name][ext]'
				}
			}
		]
	},

	plugins: [
		new HtmlWebpackPlugin({
			template: './src/index.html',
			filename: 'index.html'
		}),
		new BrowserSyncPlugin({
			server: {
				baseDir: ['dist']
			},
			port: 3000,
			host: 'localhost',
			open: false
		}),
		new CopyWebpackPlugin({
			patterns: [
				{ from: './src/robots.txt' },
				{ from: './src/favicon.ico' },
				{ from: './src/img', to: 'img'}
			]
		}),
		new MiniCssExtractPlugin({
			filename: 'css/[name].css'
		})
	],
	mode: 'production'
};