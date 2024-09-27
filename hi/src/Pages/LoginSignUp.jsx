import React, { useState } from "react";
import './CSS/LoginSignup.css';
import { Link} from "react-router-dom";
import axios from "axios";

const LoginSignUp = () => {
    const [data, setData] = useState({
        name: "",
        email: "",
        password: "",
        checkbox: ""
    });

    const handleEvent = (e) => {
        const newdata = {...data};
        newdata[e.target.id] = e.target.value;
        setData(newdata);
        console.log(newdata);
    }

    function handleSubmit(e) {
        e.preventDefault();
        if(data.checkbox && data.email && data.name && data.password) {
            try {
                axios({
                    method: 'post',
                    url: 'http://localhost:3001/user',
                    data: data
                });
                localStorage.setItem("email", data.email);
                alert('success register');
                window.location.href = '/';
            } catch(err) {
                alert('duplicate information for sure your email is unique');
                window.location.href = '/login';
            }
        } else {
            alert('fill full information');
            window.location.href = '/login';
        }
        
    }


    return (
        <div className="loginsignup">
            <div className="loginsignup-container">
                <h1>Sign Up</h1>
                <div className="loginsignup-fields">
                    <form onSubmit={(e) => {handleSubmit(e)}}>
                        <input onChange={(e) => {handleEvent(e)}} value={data.name} id="name" type="text" placeholder="Your Name" />
                        <input onChange={(e) => {handleEvent(e)}} value={data.email} id="email" type="email" placeholder="Email Address" />
                        <input onChange={(e) => {handleEvent(e)}} value={data.password} id="password" type="password" placeholder="Password" />
                        <div className="loginsignup-agree">
                            <input type="checkbox"  onChange={(e) => {handleEvent(e)}} id="checkbox"  />
                            <p>By continuing, i agree to the terms of use and privacy policy</p>
                        </div>
                        <button type="submit">Continue</button>
                    </form>
                </div>
                <p className="loginsignup-login">Already have an account? <span><Link to={'/login'} style={{textDecoration: 'none'}}>Login here</Link></span></p>
            </div>
        </div>
    );
}

export default LoginSignUp;