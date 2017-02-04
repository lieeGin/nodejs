/**
 * Created by lieeGin on 2017/2/4.
 */
module.exports = {
    entry: {
        user:'./public/jsx/user/user.js'
    },
    output: {
        path: __dirname + '/public/javascripts/',
        publicPath: "/public/javascripts/",
        filename: '[name].js',

    },
    module: {
        loaders: [
            //.css 文件使用 style-loader 和 css-loader 来处理
            { test: /\.css$/, loader: 'style-loader!css-loader' },
            //.js 文件使用 jsx-loader 来编译处理
            { test: /\.js$/, loader: 'jsx-loader?harmony' },
            //.scss 文件使用 style-loader、css-loader 和 sass-loader 来编译处理
            { test: /\.scss$/, loader: 'style!css!sass?sourceMap'},
            //图片文件使用 url-loader 来处理，小于8kb的直接转为base64
            { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'}
        ]
    }
};