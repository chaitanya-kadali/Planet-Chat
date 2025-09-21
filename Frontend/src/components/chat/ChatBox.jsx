import { useState } from 'react';
import '../../styles/chat.css';

function ChatBox(props){

    const [msgs, setMsgs] = useState([
                                       {mesg:"mike testing", user:"chai"},
                                       {mesg:"hi hi hey why you are always in mood.. get the thing like a brand new. i dont wanna tell you if i do", user:"chaitanya"}]);
    const [msg, setMsg] = useState();

    const submitHandler = ()=>{

    }
    const changeHandler = ()=>{
    }
    return(
        <>
        <div className="tot-cont">
            hey {props.uName}
            
            <div className="msg-list">
              
              {
                msgs.map((each, ind)=>(
                    <div key={ind} className="msg-box">
                        <p className='uname'> {each.user} </p>        
                        <p  className='msg-piece'> {each.mesg} </p>
                    </div>
                    
                ))
                }
            </div>
             
             <form onSubmit={submitHandler} id='cfrm' >
                <input  type="text"
                placeholder='Type a message'
                value={msg}
                name="msg" 
                onChange={changeHandler}
                style={{width:'80%'}}
                id='cinp'
                />

                <button id='cinp' style={{width:'20%'}} >Send</button>
            </form>
        </div>
        </>
    )
}

export default ChatBox;