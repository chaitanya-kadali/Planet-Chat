import { useEffect, useState } from 'react';
import '../../styles/chat.css';
import { emitChat, listenChat } from '../../utils/socket';

function ChatBox(props){

    const [msgs, setMsgs] = useState([
                                       {message:"mike testing", user:"chaitanya default"},
                                     ]);
    const [msg, setMsg] = useState("");

    useEffect( ()=>{
        listenChat(setMsgs,msgs)
    })
    const submitHandler = (e)=>{
        e.preventDefault();
       emitChat(props.uName, msg);
        setMsg("");
    }
    const changeHandler = (e)=>{
        const { name, value } = e.target;
    setMsg(value);
    }
    return(
        <>
        <div className="tot-cont">
            hey {props.uName}
            
            <div className="msg-list">
              
              {
                msgs.map((each, ind)=>{
                   if(each.user === props.uName ){
                    return(
                            <div key={ind} className="msg-box-myself">
                                <p className='uname'> {each.user} </p>        
                                <p  className='msg-piece'> {each.message} </p>
                            </div>
                       )
                    }else if(each.user === "joins"){
                        return(
                            <div key={ind} className="msg-box-joins">      
                                <p  className='msg-piece' style={{color:"white"}}> user {each.message} entered the chat !</p>
                            </div>
                        )
                    }else{
                       return (
                            <div key={ind} className="msg-box">
                                <p className='uname'> {each.user} </p>        
                                <p  className='msg-piece'> {each.message} </p>
                            </div>
                        )
                    }
                })
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