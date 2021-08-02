const express = require( 'express' );
const aws = require( 'aws-sdk' );
const multerS3 = require( 'multer-s3' );
const multer = require('multer');
const path = require( 'path' );
const router = express.Router();
const s3 = new aws.S3({
  accessKeyId: 'AKIAQG7EENYZNKPCYXVM',
  secretAccessKey: '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',
  Bucket: 'integratedonlineedigitallibraryact'
 });

 const uploadsBusinessGallery = multer({
  storage: multerS3({
   s3: s3,
   bucket: 'integratedonlineedigitallibraryact',
   acl: 'public-read',
   key: function (req, file, cb) {
    cb( null, path.basename( file.originalname, path.extname( file.originalname ) ) + '-' + Date.now() + path.extname( file.originalname ) )
   }
  }),
  limits:{ fileSize: 1024000000 }, // In bytes: 1024000000 bytes = 1GB
  fileFilter: function( req, file, cb ){
  }
 }).array( 'galleryImage', 1000 );
 /**
  * @route POST /api/profile/business-gallery-upload
  * @desc Upload business Gallery images
  * @access public
  */
 router.post('/multiple-file-upload', ( req, res ) => {
 uploadsBusinessGallery( req, res, ( error ) => {
   console.log( 'files', req.files );
   if( error ){
    console.log( 'errors', error );
    res.json( { error: error } );
   } else {
    // If File not found
    if( req.files === undefined ){
     console.log( 'Error: No File Selected!' );
     res.json( 'Error: No File Selected' );
    } else {
     // If Success
     let fileArray = req.files,
      fileLocation;
 const galleryImgLocationArray = [];
     for ( let i = 0; i < fileArray.length; i++ ) {
      fileLocation = fileArray[ i ].location;
      console.log( 'filenm', fileLocation );
      galleryImgLocationArray.push( fileLocation )
     }
     // Save the file name into database
 res.json( {
      filesArray: fileArray,
      locationArray: galleryImgLocationArray
     } );
    }
   }
  });
 });
 module.exports = router;