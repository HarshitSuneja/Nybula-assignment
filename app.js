const express=require("express");
const bodyParser=require("body-parser");
const mongoose=require('mongoose');
const { location } = require("express/lib/response");
const app=express();
app.set('view engine','ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
mongoose.connect("mongodb://localhost:27017/UserDB",{useNewUrlParser: true});
const userSchema = new mongoose.Schema({
    userID: String,
    Password: String,
    role: String

});
const User=mongoose.model("User",userSchema);
const user1=new User({
    userID: "a1@gmail.com",
    Password: "a123",
    role: "teacher"
});
const user2=new User({

    userID: "b1@gmail.com",
    Password: "b123",
    role: "student"
});
const user3=new User({

    userID: "c1@gmail.com",
    Password: "c123",
    role: "teacher"
});
//app.get("/",function(req, res){
 //   res.render("list", {listTitle: "Today",newUserID: userID});
//});
document.addEventListener("click",function(event){
    check(event.click);
});
function check(click){
    
        location.href="tfunctionality.html";
};
//app.post("/submit",function(req,res){
//const userid=req.body.userID
//console.log(userid);
//})



