//jshint esversion: 6

const express= require("express");
const bodyParser=require("body-parser");
const request=require("request");
const https=require("https");

const app=express();

app.use(express.static("css"));
app.use(bodyParser.urlencoded({extended: true}));

app.get("/",function(req,res){
  res.sendFile(__dirname+"/submission.html");
});

app.post("/",function(req,res){
  var name=req.body.name;
  var username=req.body.username;
  var password=req.body.password;

  if (username==="SeemaMakhija" || username==="RaviToteja" || username==="JeevaSusan" || username==="itsmetherishabh" && password==="technicalCiliate") {
    res.sendFile(__dirname+"/success.html");
  }
  else
  {
    res.sendFile(__dirname+"/failure.html");
  }

});

app.post("/failure",function(req,res){
  res.redirect("/");
});

app.listen(3000, function(){
  console.log("Server is running on port : 3000");
});
