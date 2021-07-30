import React from 'react'
import './index.css';
export default function Login() {
    return (
    <div style={{backgroundImage:`url('${process.env.PUBLIC_URL}/images/password.jpg')`,
            backgroundRepeat: "no-repeat",backgroundAttachment: "fixed",textAlign: "center",
            backgroundSize:"cover"}}>
        <header class="headerLogin">
            Login 
        </header>
        <div class="card">
            <form target="_blank" onSubmit="/admin" action="/admin" method="GET">
                <label class="items" for="fname">Unique Access Number:</label>
                <input class= "loginin"type="text" id="usn" name="usn" required/>
                <br/>
                <label class="items" for="password">Password:</label><br/>
                <input class="loginin" type="password" id="password" name ="password"required/>
                <br/>
                <input type="radio" id="check" name="check" value="tlogin"/>
                <label for="alogin">Admin's Login</label>
                <br/>
                <input type="radio" id="check" name="check" value="slogin"/>
                <label for="slogin">Student's Login</label><br/>
                <input class="loginsubmit" type="submit" value="Submit"/>
            </form>
        </div>
        <footer style={{padding:"6%"}}>
        </footer>
    </div>
    )
}
