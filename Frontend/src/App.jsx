import { BrowserRouter,Routes,Route } from 'react-router-dom';

import Home from './components/Home';
import Join from './components/Join';

const App = () => {
  return (
  <>
    
   <BrowserRouter> 
    <Routes>
      <Route path='/' element={<Home/>}/>
       <Route path='/join' element={<Join/>}/>
       </Routes>
      </BrowserRouter>  

  </>
  
  )
}

export default App;