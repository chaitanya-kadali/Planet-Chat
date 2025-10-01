import React,{useState} from 'react'; 
import '../styles/Header.css';
import { emitChat } from '../utils/socket';

function Join (props){
  
  const [user,setUser]=useState("");

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setUser(value);
  }; 
  const submitHandler= (e)=>{
    e.preventDefault(); 
    if(user==="joins"){
      alert("this name is not allowed, try another")
      return;
    }
    emitChat("joins", user)
    props.setName(user);
    // store in local browser
  }
 
return (
  <form onSubmit={submitHandler} id='frm' >
      <input 
      type="text"
      placeholder='Enter your name'
      value={user}
      name="email" 
      onChange={changeHandler}
      id='inp'
      />

      <button id='inp' >Join the Chat</button>
  </form>
  )
}

export default Join;