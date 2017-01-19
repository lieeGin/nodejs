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

        console.log(systemConfig.javaRequestBasePath);

        var method = req.method.toUpperCase();
        var proxy_url = systemConfig.javaRequestBasePath+"/admin/index";

        var options = {
            headers: {"Connection": "close"},
            url: proxy_url,
            method: method,
            json: true,
            body: req.body
        };

        console.log(util.inspect(options));

        function callback(error, response, data) {
            if (!error && response.statusCode == 200) {
                console.log('------接口数据------',data);

                res.json(data)
            }
        }

        // req(options, callback);

        res.render('index', { title: 'Express' });
    });

};