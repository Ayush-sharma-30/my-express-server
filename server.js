//jshint esversion:6

const express = require("express");

const app = express();

// "/" means this request or response is made to home page location. res=response and req=request
app.get("/", function(req, res){
  // console.log(request);
  res.send("<h1>hello world.</h1>");
});

app.get("/contactMe", function(req, res){
  res.send("Mail me at dsiayush30@gmail.com");
});

app.get("/about", function(req, res){
  res.send("I am an android developer currently learning about web dev.");
});

app.get("/hobbies", function(req, res){
  res.send("<ul><li>Basketball</li><li>Chess</li></ul>");
});

app.listen(3000, function(){
  console.log("Server started on port 3000");
});   // port at which request will be listened on our sever.
