const NODE_ENV = process.env.NODE_ENV || 'development';
const webpack = require('webpack');

console.log('NODE ENV: ' + NODE_ENV + '\n');

module.exports = {
    context: __dirname + '/src',

    entry: {
        app: './main.tsx'
    },

    output: {
        path: __dirname + '/assets/js',
        publicPath: '/assets/js/',
        filename: '[name].js',
        library: '[name]'
    },

    watch: NODE_ENV === 'development',
    watchOptions: {
        aggregateTimeout: 100
    },

    //helps to make build faster
    resolve: {
        modulesDirectories: ['node_modules'],
        extensions: ['', '.js', '.ts', '.tsx']
    },
    resolveLoader: {
        modulesDirectories: ['node_modules'],
        moduleTemplates: ['*-loader', '*'],
        extensions: ['', '.js']
    },

    //can be faster with "eval" option
    devtool: (NODE_ENV === 'development' ? 'inline-source-map' : null),

    module: {
        loaders: [
            {
                loader: 'ts-loader',
                test: /\.tsx?$/,
                exclude: /node_modules/
            },
            {
                loader: 'babel-loader',
                test: /\.js(x?)$/,

                // Skip external libraries
                exclude: /\/node_modules\//,

                query: {
                    plugins: ['transform-runtime'],
                    presets: ['es2015', 'stage-0', 'react']
                }
            }
        ]
    },

    plugins: [
        new webpack.NoErrorsPlugin(),

        //set globals in compiled files
        new webpack.DefinePlugin({
            NODE_ENV: JSON.stringify(NODE_ENV)
        })

        //creates file that contains compiled data used in all entry points !!!
        //can be used several times chunks: ["app", "marketing"]
        //we can create base file for build of "common"
        //new webpack.optimize.CommonsChunkPlugin({
        //    name: 'common',
        //    minChunks: 3
        //})
    ],

    //cdn libraries
    externals: {
        lodash: "_"
    }
};

if (NODE_ENV === 'production') {
    module.exports.plugins.push(
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
                drop_console: true,
                drop_debugger: true
            }
        })
    );
}