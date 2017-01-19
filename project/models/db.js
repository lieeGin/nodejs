/**
 * Created by lieeGin on 2017/1/18.
 */
var mongoose = require('mongoose');
var db = mongoose.connect('mongodb://localhost:27017/nodedb');//连接数据库

var bluebird = require('bluebird');   // 指定blubird
mongoose.Promise=bluebird;

module.exports = db;