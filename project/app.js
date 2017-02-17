var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var bodyParser = require('body-parser');
var ejs = require('ejs');
var MongoStore = require('connect-mongo')(session);

var app = express();
var route = require('./route'); // 所有路由入口

// view engine setup
app.set('views', path.join(__dirname, 'views'));  // 指定模版放的位置  在views 下面
app.set('view engine', 'html');
app.engine('html', ejs.renderFile);

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));  // 指定页签图标
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));    //指定静态资源在public下面
app.use(cookieParser());
app.use(session({
    resave: false,
    saveUninitialized: true,
    key:'key_liee',
    secret: 'lieeGin',
    cookie: {maxAge: 80000 },
    store: new MongoStore({   //创建新的mongodb数据库
        url: 'mongodb://localhost:27017/nodedb'
    })
}));

app.use(function (req, res, next) {  // 拦截session
    console.log('session ：'+JSON.stringify(req.session));
    if (!req.session.user) {
        if (req.url == "/user/login" || req.url == "/user/register" || req.url == "/") {
            next();//如果请求的地址是登录则通过，进行下一个请求
        }
        else {
            res.redirect('/');
        }
    } else if (req.session.user) {
        next();
    }
});

route.init(app);   // 初始化路由

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;
