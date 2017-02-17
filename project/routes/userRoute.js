/**
 * 用户module
 * @param app
 * @param db
 */

var UserModel = require('../models/user');
var md5 = require('md5');
var ReturnModel = require('../models/returnModel');


var basePath = "/user";  // 该路由的根路径

module.exports = function (app) {

    app.get(basePath + '/', function (req, res, next) {

        var userEntity = new UserModel({});
        userEntity.getList().then(function (result) {
            res.render('user/user', {result: result});
        });

        //res.send('respond with a resource');
    });


    app.get(basePath + '/edit', function (req, res, next) {

        var userEntity = new UserModel({userName: "张三", mobilePhone: "12345678965"});

        res.render('user/edit', {user: userEntity});
    });


    app.post(basePath + '/register', function (req, res, next) {
        var userName = req.body.userName;
        var password = req.body.password;

        var userEntity = new UserModel({userName: userName, password: md5(password), registerDate: new Date()});
        var result;
        // 查询是否重复
        userEntity.getByName(userName)
            .then(function (dbEntity) {
                result = afterCheck(dbEntity, userEntity);
                res.json(result);
            })
            .error(function (error) {
                result = new ReturnModel(false, error.message, null);
                res.json(result);
            })
    });


    /**
     * 检验用户重复性的回调
     * @param dbEntity
     * @param userEntity
     */
    function afterCheck(dbEntity, userEntity) {

        if (dbEntity) {
            return new ReturnModel(false, '该用户已经存在', null);
        } else {
            userEntity.save();
            return new ReturnModel(true, '注册成功', null);
        }
    }

    // 登录
    app.post(basePath + '/login', function (req, res, next) {
        var userName = req.body.userName;
        var password = req.body.password;

        var userEntity = new UserModel({userName: userName, password: password});

        userEntity.login()
            .then(function (rm) {
                if(rm.success){  // 登录成功
                    req.session.user = rm.data;

                    console.log('session input :'+ JSON.stringify(req.session));
                    res.cookie('sessionId',rm.data.sessionId);
                }
                res.json(rm);

            })
            .error(function (error) {
                var result = new ReturnModel(false, error.message, null);
                res.json(result);
            })
    });

};