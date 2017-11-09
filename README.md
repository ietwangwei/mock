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


mongodb：
搭建node环境：
1在服务器安装node
sudo yum install epel-release
sudo yum install nodejs
sudo yum install npm
2 把本地文件上传到服务器
工具：SFTP
步骤：链接sftp lcd(本地文件比如: E:\projects\mock) 
Put –r (文件名字 app.js 或者 *(代表全部文件))
OK  搞定
3 启动服务
进入服务器文件目录 node app.js&(&表示关闭窗口之后程序仍在进行)
OK 服务启动
4 服务器安装mongodb
yum -y install mongodb-server  mongodb
5 启动mongodb
进入文件目录下运行：service mongod start 
OK 运行成功。

一些linxu终端命令。
ls
nginx：
vim(查看) 
DD(删除)
UU(回滚)
YY(粘贴)
PP(粘贴)
Shift+:编辑模式
-s reload 重启
Pkill node




