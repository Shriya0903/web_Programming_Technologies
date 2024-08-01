const express=require("express");
const app=express();
const routes=require("./routes/Router");
const bodyparser=require("body-parser");
const path=require("path");


app.use(bodyparser.urlencoded({extended:false}))
app.use(bodyparser.json());

app.set("views",path.join(__dirname,"views")) // ./views/index.ejs
app.set("view engine","ejs");

app.use("/",routes);

app.listen(3002,function(){
  console.log("server is started on port no 3002");
})

module.exports=app;