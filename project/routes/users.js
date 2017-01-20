/**
 * 用户module
 * @param app
 * @param db
 */

var UserModel  = require('../models/user');

var basePath = "/user";  // 该路由的根路径

module.exports = function(app) {

    app.get(basePath+'/', function(req, res, next) {

        var userEntity = new UserModel({});
        userEntity.getList().then(function(result){
            res.render('user/user', { result: result });
        });

        //res.send('respond with a resource');
    });


    app.get(basePath+'/edit', function(req, res, next) {

        var userEntity = new UserModel({userName:"张三",mobilePhone:"12345678965"});

        res.render('user/edit', {user:userEntity});
    });


    app.post(basePath+'/save', function(req, res, next) {
        var userName = req.body.userName;
        var mobilePhone =  req.body.mobilePhone;
        var userEntity = new UserModel({userName:userName,mobilePhone:mobilePhone});
        // 查询是否重复
        userEntity.getByName(userName)
            .then(function(dbEntity){
                afterCheck(dbEntity,userEntity,res);
            })
            .error(function(error){
                res.render(basePath+'/edit',  {user:userEntity,result:error.message});
            })
    });


    /**
     * 检验用户重复性的回调
     * @param dbEntity
     * @param userEntity
     * @param res
     */
    function afterCheck(dbEntity,userEntity,res ){
        if(dbEntity){
            res.render(basePath+'/edit',  {user:userEntity,result:"该用户已经存在"});
        }else{
            userEntity.save();
            res.redirect(basePath);
           // res.render(basePath+'/edit',  {user:userEntity,result:"保存成功"});
        }
    }

};