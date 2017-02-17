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
        res.render('register');
    });

    app.get('/home',function(req, res, next){
        req.session.user =  req.session.user;
        var sessionUser = req.session.user;
        console.log('session output :'+ req.session.user);
        if(sessionUser){
            res.render('home',{'userName':sessionUser.userName});
        }else{
            res.redirect('/');
        }
    });

    app.get('/test',function(req, res, next){
        var data={"success":"true","data":[1,2,3,4,5]}
        res.json(data);
    });

};