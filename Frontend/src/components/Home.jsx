import { useState } from 'react';
import Header from './Header';
import Join from './Join';
import ChatBox from './chat/ChatBox';

const cont = {
  color: 'white',
  backgroundColor: 'black',
  width :"100vw",
  height: "100vh"
};

function Home(){ 
    const [user , setUser] = useState("");
    return(
        <div style={cont}>
            <Header/>

            {(user !=="" )? <ChatBox uName={user}/>
                     :<Join setName={setUser}/>  }
        </div>
    )
}
export default Home;