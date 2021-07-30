import React from "react";
import './index.css';
class Admin extends React.Component {
      helloworld()
        {
            alert("All the Files have been uploaded to the ACT Cloud Library!");
        }
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
            <form class="aform" onsubmit={this.helloworld}>
                <input  class="in" type="file" name="Name" multiple placeholder="Enter the Book/Journal"/>
                <input class="submit" type="submit" value="Submit"/>
            </form>
            </div>
        </div>
    )
}
}
export default Admin;
