import { BrowserRouter,Routes,Route } from 'react-router-dom';

import Home from './components/Home';
import Guest from './components/Guest';
import Registration from './components/Registration';
import Dologin from './components/Dologin';

import Advanced from './components/Advanced';
const App = () => {
  return (
  <>
    
   <BrowserRouter> 
    <Routes>
      <Route path='/' element={<Home/>}/>
       <Route path='/Registration' element={<Registration/>}/>
       <Route path='/login' element={<Dologin/>}/>
       <Route path='/Guest' element={<Guest/>}/>
       <Route path='/advanced' element={<Advanced/>}/>
       </Routes>
      </BrowserRouter>  

  </>
  
  )
}

export default App;