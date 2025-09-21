import React,{useState} from 'react'; 
import '../styles/Header.css';

function Join (props){
  
  const [user,setUser]=useState("");

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setUser(value);
  }; 
  const submitHandler= async(e)=>{
    e.preventDefault(); 
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

      <button id='inp' >Enter Chat</button>
  </form>
  )
}

export default Join;