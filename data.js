var mongoClient = require("mongodb").MongoClient;
var db = null;

function linkMongo(cb) {
	if (db) {
		db = db;
		cb && cb(db);
	}
	mongoClient.connect("mongodb://localhost:27017/mock", function(error, db) {
		if (error) {
			throw error;
		}
		db = db;
		cb && cb(db);
	});
};

function getDb(cb) {
	linkMongo(function(db) {
		cb(db);
	});
}
module.exports = {
	insert: function(table,doc,cb) {
		getDb(function(db) {
			db.collection(table).insert(doc,function(error,result){
				cb(error,result);
			});
		})
	},
	getData: function(table, params, cb) {
		getDb(function(db) {
			db.collection(table).find(params).toArray(function(error, result) {
				cb && cb(error,result)
			});
		})
	},
	update : function(table,doc,cb){
		getDb(function(db) {
			db.collection(table).update(doc,function(error,result){
				cb(error,result);
			});
		})
	}
}