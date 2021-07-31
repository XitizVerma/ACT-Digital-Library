import React from 'react';
import './index.css';
class DigitalLibrary extends React.Component {
    render(){
    return (
        <div>
            <div class="navbar">
                <ul> 
                    <li style={{float:"left", backgroundColor:"rgb(0, 0, 148)"}}>
                    <a href="/login" onClick="/login" method="POST" target="_blank">Sign In</a></li>
                    <li><a href="#videos">Videos</a></li>
                    <li><a href="#ebooks">E-Books</a></li>
                    <li><a href="#magazines">Magazines</a></li>
                    <li><a href="#books">Books</a></li>
                    <li><a href="#news">News</a></li>
                    <li><a class="active" href="/">Home</a></li>
                </ul>
            </div>

           <div class="pad">
           <div style={{paddingLeft:"2rem",paddingRight:"2rem",paddingTop:"1rem",marginBottom:0,borderBottom: 0}}>
                <img src="./images/act.jpg" alt ="act" style={{width: "100%",paddingLeft:"1rem",paddingRight:"1rem",borderRadius:"100px"}}/>
            </div>

            <h1 style={{color:"rgb(0, 22, 119)",fontSize:"4rem",textAlign: "center",padding:0,margin:0}}>
                Digital Library
            </h1> 

            <hr style={{width: "90%", backgroundColor:"rgb(0, 22, 119)",height: "10px",borderRadius:"10px"}}/>

            <section class="searchtext">ACT Library Search</section>
            
            <div class="bar">
                <input class="searchbar" type="text" title="Search" placeholder="Search over 784393458 resources in ACT Library!"/>
                <a href={"https://www.google.com"}> 
                <img class="voice" alt ="google mic"  
                src={"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Google_mic.svg/716px-Google_mic.svg.png"}
                title={"Search by Voice"}/>
                </a>
            </div>
            <br/>

            <img alt="UI" src="./images/content.png" style={{width: "100%",paddingBottom: "1em"}}/>
            <img alt="UI" src="./images/demo.png" style={{width: "100%",paddingBottom: "1em"}}/>
            <br/>
            <img alt="UI" src="./images/subsection.png" style={{width: "100%",paddingBottom: "1em"}}/>
            <section class="searchtext">Trending Articles:</section><br/>
            
            <div style={{width: "100%",margin:"auto"}}>
                <div class="gallery">
                    <a target="_blank" rel="noreferrer"
                    href={"https://integratedonlineedigitallibraryact.s3.ap-south-1.amazonaws.com/Machine+Learning+Algorithms+Simplified.pdf"}>
                        <img alt="ML" src="./images/ML.jpg" width="30%" height="400"/>
                    </a>
                    <div class="desc">Machine Learning</div>
                </div>
                
                <div class="gallery">
                    <a target="_blank" rel="noreferrer"
                    href={"https://integratedonlineedigitallibraryact.s3.ap-south-1.amazonaws.com/DevOps+Roadmap.jpg"}>
                        <img alt="DevOps" src="./images/DevOps.jpg" width="30%" height="400"/>
                    </a>
                    <div class="desc">DevOps RoadMap Journal</div>
                </div>
            
                <div class="gallery">
                    <a target="_blank" rel="noreferrer"
                    href={"https://integratedonlineedigitallibraryact.s3.ap-south-1.amazonaws.com/DSCE+TIMES+College_+E-NEWSLETTER+-+JULY+2021.pdf"}>
                        <img alt="DSCE" src="./images/dsce.jpg" width="30%" height="400"/>
                    </a>
                    <div class="desc">College NewsLetter</div>
                </div>
            </div>
            <br/>
            <div class="space">
                <hr style={{width: "90%", backgroundColor:"red",height: "10px",borderRadius:"10px",marginBottom: "2rem"}}/>
            </div>
           </div>
   
        </div>
    );
}
}
export default DigitalLibrary;