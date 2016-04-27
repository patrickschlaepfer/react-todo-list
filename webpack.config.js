module.exports = {
	devtool: 'inline-source-map',
	entry: ['./client/client.js'],
	output: {
		path: './dist', // where to put
		filename: 'bundle.js', // file name
		publicPath: '/'
	},
	module: {
		loaders: [
		{
			test: /\.js$/, // pattern to next things
			loader: 'babel-loader', // jsx... compiler
			exclude: /node_modules/, // exclude
			query: {
				presets: ['react', 'es2015']
			}
		}
		]
	}
}
