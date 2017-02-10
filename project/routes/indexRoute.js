var util = require('util');

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

    app.get('/test',function(req, res, next){
        var data={"success":"true","data":[1,2,3,4,5]}
        res.json(data);
    });

};