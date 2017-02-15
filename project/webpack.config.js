/**
 * Created by lieeGin on 2017/2/4.
 */
var webpack = require('webpack');
module.exports = {
    entry: {
        index: './public/jsx/index/index.js',
        register: './public/jsx/index/register.js'
    },
    output: {
        path: __dirname + '/public/javascripts/',
        publicPath: "/public/javascripts/",
        filename: '[name].js',

    },
  //  plugins: [
    // new webpack.optimize.CommonsChunkPlugin({name:'ginUI'})
   // ],
    module: {
        loaders: [
            //.css 文件使用 style-loader 和 css-loader 来处理
            { test: /\.css$/, loader: 'style-loader!css-loader' },
            //.js  jsx 文件使用 babel-loader 来编译处理
            {
                test: /\.js[x]?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015']
                }
            },

            //.scss 文件使用 style-loader、css-loader 和 sass-loader 来编译处理
            { test: /\.scss$/, loader: 'style!css!sass?sourceMap'},
            //图片文件使用 url-loader 来处理，小于8kb的直接转为base64
            { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'}
        ]
    }
};