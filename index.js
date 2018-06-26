var express = require("express");
var app = express();
var router = express.Router();
var path = __dirname + '/views/';

router.get("/floorplan",function(req,res){
  res.sendFile(path + "index.html");
});

app.use(express.static(__dirname))

app.use("/",router);

app.listen(3000,function(){
  console.log("Floor Plan on Port 3000");
})
