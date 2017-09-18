var express = require('express');
var app = express();
 
app.get('/info', function (req, res) {
   res.send({name: "kosen", age: 23});
})

app.get('/user', function (req, res) {
   res.send({mobile: "18777961256", type: "02"});
})
 
var server = app.listen(8081, function () {
 
  var host = server.address().address
  var port = server.address().port
 
  console.log("服务已启动")
 
})