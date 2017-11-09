# mock


express+mongobd 搭建前端mock

express框架里面  view就是用来放置静态页面的，还有需要配置view engine页面引擎

app.use(express.static(path.join(__dirname)));
app.set('views', __dirname + '/views'); // general config
app.set('view engine', 'jade');
app.get("/",function(req,res){
	res.render("index")
})


启动服务：app.listen("3000");就OK了

