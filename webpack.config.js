const rules = [{
    test: /\.jsx?$/,
    exclude: /(node_modules)/,
    use: {
        loader: 'babel-loader'
    }
}];

module.exports = [{
    entry: ['./src/ui'],
    output: {
        path: __dirname + '/dist',
        publicPath: '/',
        filename: 'client.js'
    },
    module: { rules }
}, {
    entry: ['./src/api'],
    target: 'node',
    output: {
        path: __dirname + '/dist',
        publicPath: '/',
        filename: 'server.js',
        libraryTarget: 'commonjs2'
    },
    module: { rules }
}];
