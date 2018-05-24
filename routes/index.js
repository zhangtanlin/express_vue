module.exports = function(app) {

    //入口
    app.get('/', function(req, res, next) {
        res.render('index');
    });

}