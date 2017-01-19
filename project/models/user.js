/**
 * Created by lieeGin on 2017/1/18.
 */
var mongodb = require('./db');
var Schema = mongodb.Schema;

var UserSchema = new Schema({
    userName:  String,
    mobilePhone: String,
    password:   String
});


/**
 * Methods
 */

UserSchema.method({
    getList : function(){
        var obj=UserModel.find({}).exec()
        .then(function(promiseResult){
            return promiseResult;
        });
        return obj;
    },
    getByName : function(userName){
        var obj=UserModel.findOne({'userName':userName}).exec()
            .then(function(promiseResult){
                // 需要将结果返回
                return promiseResult;
            });
        return obj;
    }
});

/**
 * Statics
 */

UserSchema.static({

});


var UserModel = mongodb.model('User',UserSchema);

module.exports = UserModel;