import React from 'react'
import './index.css';
export default function Borrow() {
    return (
    <div>
        <div style={{fontFamily:"Courier New"}}>
        <br/>
            <ul>
                <li><a class="active" href="/borrow">Borrowed Books</a></li>
                <li><a href="/student">Profile</a></li>
            </ul>
            <h1 class="webkit" style={{color: "rgb(255, 238, 0)",textAlign:"center",fontSize:"5rem",margin:"0"}}>
            Student Dashboard</h1>
            <hr style={{width: "90%" ,backgroundColor:"rgb(255, 238, 0)",height: "5px",borderRadius:"10px"}}/>
            <br/>
            <section class="searchtext">Your Borrowed Books::</section><br/>
            <div style={{width: "50%",margin:"auto"}}>
                <div class="gallery">
                <a target="_blank" rel="noreferrer"
                href="https://integratedonlineedigitallibraryact.s3.ap-south-1.amazonaws.com/Machine+Learning+Algorithms+Simplified.pdf">
                    <img src="./images/ML.jpg" alt="ML" width="30%" height="400"/>
                </a>
                <div class="desc">Machine Learning</div>
                <div class="speed" >Borrow</div>
                <div class="speed2" >Share</div>
                </div>
            </div>
        </div>
    </div>
    );
}
