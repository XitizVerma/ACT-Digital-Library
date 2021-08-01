import React from 'react';
import './index.css';
export default class Student extends React.Component 
{
    speed()
          {
            alert("Machine Learning Book has been added to your Borrowing List.Kindly Checkout !");
          }
    speed2()
          {
            alert("DevOps Journal has been added to your Borrowing List.Kindly Checkout !");
          }
    speed3()
          {
            alert("Shareable Link is : https://integratedonlineedigitallibraryact.s3.ap-south-1.amazonaws.com/Machine+Learning+Algorithms+Simplified.pdf");
          }
    speed4()
          {
            alert("Shareable Link is : https://integratedonlineedigitallibraryact.s3.ap-south-1.amazonaws.com/DevOps+Roadmap.jpg");
          }

    render(){
    return (
    <div style={{fontFamily:"Courier New"}}>
        <br/>
        <ul>
            <li><a href="/borrow">Borrowed Books</a></li>
            <li><a class="active" href="/student">Profile</a></li>
        </ul>

        <h1 class="webkit" style={{color: "rgb(255, 238, 0)",textAlign:"center",fontSize:"5rem",margin:0}}>
        Student Dashboard</h1>
        <hr style={{width: "90%", backgroundColor:"rgb(255, 238, 0)",height: "5px",borderRadius:"10px"}}/>
        <header class="enter" style={{float:"left",paddingLeft:"8",color: "rgb(11, 11, 129)"}}>
            Easily Manage Books, Newsletters etc. from a Powerful Dashboard!</header><br/>
        <p class="enter">Enter the Book/Journal/Newsletter:</p>
        <section class="searchtext"><b>ACT Library Search</b></section>
        <div class="bar">
            <input class="searchbar" type="text" title="Search" 
            placeholder="Search over 784393458 resources in ACT Library!"/>
            <a href={"https://www.google.com"}> 
                <img class="voice" alt="Google mic"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Google_mic.svg/716px-Google_mic.svg.png"
                title="Search by Voice"/>
            </a>
        </div>

        <br/>
        <section class="searchtext">Your Recently Viewed Articles:</section><br/>
        <section class="searchtext" style={{fontSize: "18px"}}><b>Click on any article to read:</b></section><br/>
        <div style={{width: "50%",margin:"auto"}}>
        <div class="gallery">
            <a target="_blank" rel="noreferrer"
            href="https://integratedonlineedigitallibraryact.s3.ap-south-1.amazonaws.com/Machine+Learning+Algorithms+Simplified.pdf">
                <img src="./images/ML.jpg" alt="ML" width="30%" height="400"/>
            </a>
            <div class="desc">Machine Learning</div>
            <div class="speed" onClick={this.speed}>Borrow</div>
            <div class="speed2" onClick={this.speed3}>Share</div>
        
        </div>
        
        <div class="gallery">
            <a target="_blank" rel="noreferrer"
            href="https://integratedonlineedigitallibraryact.s3.ap-south-1.amazonaws.com/DevOps+Roadmap.jpg">
                <img src="./images/DevOps.jpg" alt="DevOps" width="30%" height="400"/>
            </a>
            <div class="desc">DevOps RoadMap Journal</div>
            <div class="speed" onClick={this.speed2}>Borrow</div>
            <div class="speed2" onClick={this.speed4}>Share</div>
        </div>
    </div>
    </div>
    );
}
}

