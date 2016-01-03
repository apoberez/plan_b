var webpack = require('webpack');

//module.exports = function (config) {
//    config.set({
//        browsers: [ 'Chrome' ], //run in Chrome
//        singleRun: true, //just run once by default
//        frameworks: [ 'mocha' ], //use the mocha test framework
//        files: [
//            'tests.webpack.js' //just load this file
//        ],
//        preprocessors: {
//            'tests.webpack.js': [ 'webpack', 'sourcemap' ] //preprocess with webpack and our sourcemap loader
//        },
//        reporters: [ 'dots' ], //report results in this format
//        webpack: { //kind of a copy of your webpack config
//            devtool: 'inline-source-map', //just do inline source maps instead of the default
//            module: {
//                loaders: [
//                    { test: /\.js$/, loader: 'babel-loader' }
//                ]
//            }
//        },
//        webpackServer: {
//            noInfo: true //please don't spam the console when running in karma!
//        }
//    });
//};

module.exports = function(config) {
    config.set({
        browsers: ['Chrome'],
        files: [
            { pattern: 'tests.webpack.js', watched: false }
        ],
        frameworks: ['jasmine'],
        preprocessors: {
            'tests.webpack.js': ['webpack']
        },
        reporters: ['html'],
        //singleRun: true,
        webpack: {
            module: {
                loaders: [{
                    loader: 'babel-loader',
                    test: /\.js$/,

                    // Skip external libraries
                    exclude: /\/node_modules\//,

                    query: {
                        plugins: ['transform-runtime'],
                        presets: ['es2015', 'stage-0', 'react']
                    }
                }]
            },
            watch: true
        },
        webpackServer: {
            noInfo: true
        }
    });
};