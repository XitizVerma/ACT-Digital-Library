import React from "react";
import './index.css';
import axios from 'axios';
import $ from 'jquery';
class Admin extends React.Component {
    constructor(props){
        super(props);
        this.state={
            selectedFiles:null
        }
    }
    multipleFileChangedHandler = (event) => {
        this.setState({
         selectedFiles: event.target.files
        });
        console.log( event.target.files );
        alert("All the Files have been uploaded to the ACT Cloud Library!");
       };

       multipleFileUploadHandler = () => {
        
        const data = new FormData();
      let selectedFiles = this.state.selectedFiles;
      // If file selected
        if ( selectedFiles ) {
         for ( let i = 0; i < selectedFiles.length; i++ ) {
          data.append( 'galleryImage', selectedFiles[ i ], selectedFiles[ i ].name );
         }
      axios.post( '/backend/s3Upload/multiple-file-upload', data, {
          headers: {
           'accept': 'application/json',
           'Accept-Language': 'en-US,en;q=0.8',
           'Content-Type': `multipart/form-data; boundary=${data._boundary}`,
          }
         })
          .then( ( response ) => {
           console.log( 'res', response );
      if ( 200 === response.status ) {
            // If file size is larger than expected.
            if( response.data.error ) {
             if ( 'LIMIT_FILE_SIZE' === response.data.error.code ) {
              this.ocShowAlert( 'Max size: 1GB', 'red' );
             } else if ( 'LIMIT_UNEXPECTED_FILE' === response.data.error.code ){
              this.ocShowAlert( 'Max 1000 docs allowed', 'red' );
             }
            } else {
             // Success
             let fileName = response.data;
             console.log( 'fileName', fileName );
             this.ocShowAlert( 'File Uploaded', '#3089cf' );
      }
           }
          }).catch( ( error ) => {
          // If another error
          this.ocShowAlert( error, 'red' );
         });
        } else {
         // if file not selected throw error
         this.ocShowAlert( 'Please upload file', 'red' );
        }
      };
        // ShowAlert Function
      ocShowAlert = ( message, background = '#3089cf' ) => {
        let alertContainer = document.querySelector( '#oc-alert-container' ),
        alertEl = document.createElement( 'div' ),
        textNode = document.createTextNode( message );
        alertEl.setAttribute( 'class', 'oc-alert-pop-up' );
        $( alertEl ).css( 'background', background );
        alertEl.appendChild( textNode );
        alertContainer.appendChild( alertEl );
        setTimeout( function () {
        $( alertEl ).fadeOut( 'slow' );
        $( alertEl ).remove();
        }, 3000 );
    };
      render() {
        return (
        <div>
        <div style={{fontFamily: "Courier New"}}>
            <h1 style={{color: "rgb(3, 5, 141)", textAlign:"center",fontSize:"6rem",margin:0}}>
                Admin Portal</h1>
            <hr style={{width: "90%", backgroundColor:"rgb(0, 22, 119)",height: "8px",borderRadius:"10px"}}/>
            <h1 class="webkit" style={{color: "rgb(0, 200, 250)",textAlign:"center",fontSize:"3rem",marginTop:0}}>
                Librarian Dashboard</h1>
            <header class="enter" style={{float:"left",paddingLeft:"8%",color:"rgb(11, 11, 129)"}}>
                Easily Manage Users, Books, Newsletters etc. from a Powerful Dashboard!</header><br/>
            <p class="enter">Enter the Book/Journal/Newsletter:</p>
            <form class="aform" onsubmit={this.multipleFileUploadHandler}>
                <input  class="in" type="file" name="Name" multiple placeholder="Enter the Book/Journal" 
                    onChange={this.multipleFileChangedHandler}/>
                <input class="submit" type="submit" value="Upload" />
            </form>
            </div>
        </div>
    )
}
}
export default Admin;
