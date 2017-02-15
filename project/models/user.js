/**
 * Created by lieeGin on 2017/1/18.
 */
var mongodb = require('./db');
var md5 = require('md5');
var ReturnModel = require('./returnModel');
var uuid = require('node-uuid');

var Schema = mongodb.Schema;

var UserSchema = new Schema({
    userName: String,
    mobilePhone: String,
    password: String,
    address: String,
    sex: Number,
    registerDate: Date,
    birthday: Date,
    longitude: String,  // 经度
    latitude: String,  //纬度
    country: String,
    province: String,
    county: String,
    sessionId: String,  // 登录sessionId
});


/**
 * Methods
 */

UserSchema.method({
    getList: function () {
        var obj = UserModel.find({}).exec()
            .then(function (promiseResult) {
                return promiseResult;
            });
        return obj;
    },
    getByName: function (userName) {
        var obj = UserModel.findOne({'userName': userName}).exec()
            .then(function (promiseResult) {
                // 需要将结果返回
                return promiseResult;
            });
        return obj;
    },
    login: function () {
        var loginUserName = this.userName;
        var loginPassword = this.password;
        var obj = UserModel.findOne({'userName': loginUserName}).exec()
            .then(function (promiseResult) {
                if (promiseResult) {
                    var p = md5(loginPassword)
                    if (p == promiseResult.password) {

                        var sessionId  = uuid.v1().toString();
                        sessionId = sessionId.replace(/-/g,'');
                        promiseResult.sessionId = sessionId;
                        promiseResult.save();  // 更新sessionID

                        return new ReturnModel(true, '', promiseResult);
                    } else {
                        return new ReturnModel(false, '密码错误', null);
                    }
                } else {
                    return new ReturnModel(false, '用户名不存在', null);
                }
            });
        return obj;
    }

});

/**
 * Statics
 */

UserSchema.static({});


var UserModel = mongodb.model('User', UserSchema);

module.exports = UserModel;