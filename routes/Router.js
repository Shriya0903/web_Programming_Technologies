const express=require("express");
const myrouter=express.Router();
const connection=require('../db/dbconnect');


//login
myrouter.get("/LoginForm",function(req,res){
  res.render("Login");
})

myrouter.post("/login",function(req,res){
  connection.query("select * from students",function(err,data,fields){
    if(err){
        res.status(500).send("data not found!!")
    }else{
        res.json(data)
    }
})
})
//display
myrouter.get("/getstudents",function(req,res){
  connection.query("select * from students",function(err,data,fields){
    if(err){
      res.status(500).send("data not found!!")
    }else{
      res.json(data)
    }
  })

})

//add
myrouter.get("/AddStudents",function(req,res){
  res.render("AddStudent");
})

myrouter.post("/insertNewStudent", function(req,res){

  connection.query("insert into students values(default,?,?,?,?)",[req.body.name,req.body.address,req.body.phone,req.body.branch],
    function(err,result){
      if(err){
        res.status(500).send("insertion failed !!")
      }else{
        res.status(200).send("inserted success !!")
      }
    }
  )
})

//update
myrouter.get("/updateStudent",function(req,res){
  res.render("UpdateStudent");
})

myrouter.post("/update",function(req,res){

  connection.query("update students set name=?, address=?, phone=?,branch=? where id=?",
    [req.body.name,req.body.address,req.body.phone,req.body.branch,req.body.id],
    function(err,data){
      if(err){
        res.status(500).send("updation failed !!")
      }
      else{
        res.status(200).send("updation success !!")
      }
    }
  )
})

//delete
myrouter.get("/deleteStudent",function(req,res){
  res.render("DeleteStudent");
})

myrouter.post("/delete",function(req,res){

  connection.query("delete from students where id=?",[req.body.id],
    function(err,data){
      if(err){
        res.status(500).send("deletion failed !!")
      }
      else{
        res.status(200).send("Student delete successfully ...")
      }
    }
  )
})

module.exports=myrouter;
