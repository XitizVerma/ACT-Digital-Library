var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var app = express();
var port = 5000;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
var s3FileUpload = require('./backend/s3Upload');
app.use('/backend/s3Upload', s3FileUpload);
/*const profile = require( './routes/api/profile' );
app.use( '/api/profile', profile );*/
// Start the server
app.listen(port,function(err){
  if(err){
   console.log(" DB Error: ",err);
 }else{
   console.log('Port connected',port);
 }
});