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
	
	//���ӵ����ط�����
	var mongoClient = new MongoClient(new Server("127.0.0.1","27017"),{native_parser:true});
	
	//��
	mongoClient.open(function(error,mongoClient){
		if(!("undefined" === error || null === error))
		{
			//���������ݿ�
			var db = mongoClient.db("questionnaire");
		}
		else{
			//TODO ��¼���ݿ��ʧ����־
		}		
	});