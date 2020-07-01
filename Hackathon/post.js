//header
const assert=require('assert');
const mongo=require('mongodb');
const mongoose=require("mongoose");
const app=require("./app");
var path = require('path');
var clientt=require('mongodb').MongoClient;
//just an example to get Search.html
exports.getPosts=(req,res)=>{
    res.sendFile(path.join(__dirname + '/Search.html'));
}
//Just battery temp example
exports.getbattery=(req,res,next)=>{
mongoose.connect(process.env.Mongo_Uri,{useUnifiedTopology: true},function(err,db){
assert.equal(null,err);
var query = { parameter_id: "116" };
  cursor=db.collection('Csample').find(query)
  .toArray(function(err, result) {
    if (err) throw err;
    res.json({
          result
        });
  });;
});
};

//Api to get recipe
exports.getrecipe=(req,res,next)=>{
  //res.send(req.params) To get paramter from the Url

  // clientt.connect(process.env.Mongo_Uri,{useUnifiedTopology: true},function(err,db){
  //   assert.equal(null,err);
  //   var dbo=db.db("Iot")
  //   dbo.collection("Sample_d").insertMany(obj,function(err,res){
  //     if(err) throw err;
  //     console.log(res.insertedCount);
  //     db.close();
  //   });
  // });
}
