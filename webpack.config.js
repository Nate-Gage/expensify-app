const path = require('path');
const MiniCSSExtract = require('mini-css-extract-plugin');

module.exports = (env) => {

    const isProduction = env === 'producution';
    const CSSExtract = new MiniCSSExtract('styles.css');

    console.log('env', env);
    return {
        entry: './src/app.js',
        output: {
            //path prop needs to be absolute path to the output folder
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
                use: CSSExtract.extract({
                    use: [
                        'css-loader',
                        'sass-loader'
                    ]
                })
            }]
        },
        plugins: [
            CSSExtract
        ],
        devtool: isProduction ? 'source-map' : 'cheap-module-eval-source-map',
        devServer: {
            //contentBase has to be absolute path to the public folder
            contentBase: path.join(__dirname, 'public'),
            historyApiFallback: true
        }
    };
};