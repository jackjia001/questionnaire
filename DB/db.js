var Db = require('mongodb').Db,
	MongoClient = require('mongodb').MongoClient,
	Server = require('mongodb').Server,
    ReplSetServers = require('mongodb').ReplSetServers,
    ObjectID = require('mongodb').ObjectID,
    Binary = require('mongodb').Binary,
    GridStore = require('mongodb').GridStore,
    Grid = require('mongodb').Grid,
    Code = require('mongodb').Code,
    BSON = require('mongodb').pure().BSON,
    assert = require('assert');
	
	//连接到本地服务器
	var mongoClient = new MongoClient(new Server("127.0.0.1","27017"),{native_parser:true});
	
	//打开
	mongoClient.open(function(error,mongoClient){
		if(!("undefined" === error || null === error))
		{
			//打开连接数据库
			var db = mongoClient.db("questionnaire");
		}
		else{
			//TODO 记录数据库打开失败日志
		}		
	});