var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
  // next()
});
router.post('/submit',function(req,res){
  console.log(req.body)
  MongoClient.connect('mongodb://127.0.0.1:27017' ,function(err,client){
    if(err){
      console.log("error in db connection")
      res.send("got error")
    }else{
      console.log("db connected")
      res.send("db connection ok")
    }
  })
  res.send("got it")
  })
module.exports = router;