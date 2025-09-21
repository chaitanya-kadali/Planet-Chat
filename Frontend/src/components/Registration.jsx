import React, { useState } from 'react';
import axios from 'axios';
import '../styles/Registration.css';
import {Link} from 'react-router-dom';  

function Registration()
 {

const [ isValid, setIsValid  ] = useState(true); // consider it is true ...till it got crossed a rule {empty username , empty email id}
    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
        age: "",
    });

    const changeHandler = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    };

    const submitHandler = (e) => {
        e.preventDefault();
         if(user.name===""){
            setIsValid(false);
             alert('Name should not be empty');
        }
        else if(user.email===""){
            setIsValid(false);
             alert('Email sholud not b');
        }
        else if(user.password.length<6) {
            setIsValid(false);
             alert('password must contain 6 letters');
        }


        if(isValid) {
            try{
                axios.post('https:vercel.app/user_inf',user).then(response=>{
                        alert("registered Succesfully!");
                        setUser({name:'',email:'',password:'',age:''});
                        window.location.href = '/login';
                        // LOGIN page redirected from here
                    })
            }
            catch(error){
                console.log('Error sending registration request',error);
            }
        }  
    };
    const goabout=()=>{
        window.location.href='/about'
    }
    const gomed=()=>{
        window.location.href='/';
      }
    const gologin=()=>{
        window.location.href='/login'
    }
    return (
        <div className='Registration'>
            <div className='heade'>
           <p id='heade-medi'onClick={gomed}>Planet Chat</p>
           <center>
           <p id="heade-regis">Registration</p>
           </center>
           <div className="heade-right">
           <p id="heade-log" onClick={gologin}>Login</p>
            <p id='heade-about' onClick={goabout}>About</p>  
            </div>
           </div>

           
            <div className='Registration-form'>


            <form onSubmit={submitHandler} >
                <input 
                    type="text"
                    placeholder="Enter your name"
                    onChange={changeHandler}
                    value={user.name}
                    name="name"
                    className="reg-input"
                /><br />    
                <input
                    type="email"
                    placeholder="Enter the email id"
                    onChange={changeHandler}
                    value={user.email}
                    name="email"
                    className="reg-input"/>
                     
                    <br/>
                <input
                    type="password"
                    placeholder="Enter the password"
                    onChange={changeHandler}
                    value={user.password}
                    name="password"
                    className="reg-input"/>
                     

                    <br/>
                <input
                    type="number"
                    placeholder="Enter the age"
                    onChange={changeHandler}
                    value={user.dob}
                    name="age"
                    className="reg-input"
                /><br />
                {!isValid && <p style={{color:"red",fontSize:"1rem"} }> you have entered invalid details </p>}
                <button type="submit" id="reg-sub">Submit</button>
            </form>
            <Link className="reg-link" to='/Login'>Already Registered ? click here to Login</Link>
            </div>
        
   
        </div>
    );
};

export default Registration;