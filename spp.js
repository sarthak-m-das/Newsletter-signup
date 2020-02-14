const express =require("express");
const app =express();
app.use(express.static("public"));
var port=4000;
const request =require("request");
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended:true}));

app.listen(port,function(){
    console.log("server is running on port :" +port);
});

app.get("/",function(req,res){
    res.sendFile(__dirname+"/signup.html");
});

app.post("/",function(req,res){
    var userName = req.body.userName;
    var ei = req.body.email;
    var pw = req.body.password;
    res.sendFile(__dirname+"/failure.html");
});

app.post("/fail", function(req,res){
    res.redirect("/");
})