var createError = require('http-errors');
var express = require('express');
var path = require('path');
var session = require('express-session'); //如果要使用session，需要单独包含这个模块
var cookieParser = require('cookie-parser'); //如果要使用cookie，需要显式包含这个模块
var MongoStore = require('connect-mongo')(session);
var logger = require('morgan');

//form提交表单，解析body的（必须）
var bodyParser = require('body-parser');

//路由文件导入
var indexRouter = require('./routes/index');

var app = express();

//连接数据库，创建session
var waterline = require('./config/waterline');
var db_of_acl = waterline.config.connections.localMongo;
var url = 'mongodb://' + db_of_acl.host + ':' + db_of_acl.port + '/' + db_of_acl.database;
app.use(session({
    secret: '12345',
    name: 'aclDemo',
    cookie: {
        maxAge: null
    },
    resave: false,
    saveUninitialized: true,
    store: new MongoStore({ //创建新的mongodb数据库
        host: db_of_acl.host, //数据库的地址，本机的话就是127.0.0.1，也可以是网络主机
        port: db_of_acl.port, //数据库的端口号
        db: db_of_acl.database, //数据库的名称。
        url: url
    })
}));

// view engine setup
app.set('views', path.join(__dirname, 'public'));

//设置视图引擎
app.engine('.html', require('ejs').renderFile);
app.set('view engine', 'html');

app.use(logger('dev'));

//form提交表单，解析body的（必须）
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

// app.use(express.json());
// app.use(express.urlencoded({
//     extended: false
// }));

app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//设置允许跨域方法
app.all('*', function(req, res, next) {
    res.header('Access-Control-Allow-Credentials', true)
    res.header('Access-Control-Allow-Origin', 'http://localhost:8080')
    res.header('Access-Control-Allow-Headers', 'X-Requested-With')
    res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS')
    res.header('X-Powered-By', ' 3.2.1')
    res.header('Content-Type', 'application/json;charset=utf-8')
    next()
});

//分发路由文件
app.use('/', require('./routes/index'));

//导入api接口
app.use('/api/acl_resource', require('./api/routes/acl_resource'));
app.use('/api/acl_role', require('./api/routes/acl_role'));
app.use('/api/acl_user', require('./api/routes/acl_user'));

module.exports = app;