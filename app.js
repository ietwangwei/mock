var express = require('express');
var action = require('./data.js');
var path = require("path");
var app = express();
var bodyParser  = require("body-parser");
var url = require("url");
var urlParams = {
	dbName : null,//数据库名
	dbTable : null,//表名
	reqUrl : null,//路径
	params : null
}
app.set('views', __dirname + '/views'); // general config
app.set('view engine', 'jade');
app.get("/",function(req,res){
	res.render("index")
})
var urls = [];
app.use(express.static(path.join(__dirname)));
app.use(bodyParser.urlencoded({ extended: false }));
//查询数据
app.get('/mock/*', function(req, res, next) {
	var pathname = url.parse(req.url).pathname;
	if(pathname){
		var params = {
			"url" : pathname
		};
		action.getData("session",params,function(error,result){
			if(error){
				var response = {
					error : {
						errormsg : "请检查参数是否正确,数据库没有该数据",
					},
					content : null
				}
			} else {
				var response = {
					error : null,
					content : {
						data : result[0].data
					}
				};
			}
			res.send(response);
			res.end();
		})
	}
});
app.post("/mock/*",function(req,res,next){
	if(url){
		var doc = {
			"url" : req.body.url,
			"data" : req.body.data
		};
		action.insert("session",doc,function(error,result){
			var response;
			if(error){
				response = {
					error : "failed",
					content : null
				};
			} else {
				response = {
					error : null,
					content : "success"
				};
			}
			res.send(response);
			res.end();
		});
	}
});
app.listen("3000");
