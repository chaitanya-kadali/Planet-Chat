import { useState } from 'react';
import Header from './Header';
import Join from './Join';

const cont = {
  color: 'white',
  backgroundColor: 'black',
  width :"100vw",
  height: "100vh"
};

function Home()
{ 
    const [isJoin , SetIsJoin] = useState(false);
    const toreg=()=>{
          window.location.href='/join'
    }
    return(
        <div style={cont}>
            <Header/>
            (isJoin ?  :<Join />)
        </div>
    )
}
export default Home;