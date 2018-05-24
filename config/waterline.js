var Waterline = require('waterline');
//var mysqlAdapter = require('sails-mysql');
var mongoAdapter = require('sails-mongo');
var config = require('./config');
var orm = new Waterline();
var acl = require('acl');
var MongoClient = require('mongodb').MongoClient;





// models
var user = require('../api/models/acl_user');
var role = require('../api/models/acl_role');
var resource = require('../api/models/acl_resource');
orm.registerModel(user);
orm.registerModel(role);
orm.registerModel(resource);

var wlconfig = {
    adapters: {
        //mysql: mysqlAdapter,
        mongo: mongoAdapter
    },
    connections: {
        //myLocalMySql: {
        //    adapter: 'mysql',
        //    host:'localhost',
        //    port: '3306',
        //    database: 'datuosi',
        //    user: 'root',
        //    password: 'root',
        //    charset   : 'utf8',
        //    collation : 'utf8_general_ci'
        //},
        localMongo: {
            adapter: 'mongo',
            host: 'localhost',
            port: '27017',
            database: 'acltest',
        }

    },
    defaults: {
        migrate: 'alter' //修改表结构，默认是drop，alter,safe
    }

};


var db_of_acl = wlconfig.connections.localMongo;
var url = 'mongodb://' + db_of_acl.host + ':' + db_of_acl.port + '/' + db_of_acl.database;

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    global.acl = new acl(new acl.mongodbBackend(db, 'acl_'));
});

exports.orm = orm;
exports.config = wlconfig;
exports.models = null;