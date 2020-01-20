const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/app.js',
    output: {
        //path prop needs to be absolute path
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            loader: 'babel-loader',
            test: /\.js$/,
            exclude: /node-modules/
        }, {
            test: /\.s?css$/,
            use: [
                'style-loader',
                'css-loader',
                'sass-loader'
            ]
        }]
    },
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        //contentBase has to be absolute path to the public folder
        contentBase: path.join(__dirname, 'public'),
        historyApiFallback: true
    }
};