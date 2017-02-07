var util = require('util');
var systemConfig = require('../config/config');

/**
 * index module
 * @param app
 * @param db
 */
module.exports = function(app) {


    /* GET home page. */
    app.get('/', function(req, res, next) {
        res.render('index');
    });

    app.get('/register',function(req, res, next){
        res.render('user/register');
    });

};