var express = require('express');
var bodyParser = require('body-parser');
var s3FileUpload = require('./model/s3Upload');
var cors = require('cors');
var app = express();
var port = process.env.PORT || 3000;
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors());
app.use('/api', s3FileUpload);
// Start the server
app.listen(port,function(err){
  if(err){
   console.log(" DB Error: ",err);
 }else{
   console.log('Port connected',port);
 }
});