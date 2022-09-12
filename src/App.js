import React from 'react';
import Home from './components/Home'
import Contect from './components/Contect'
import Students from './components/Students'
import Navbar from './components/Navbar'
import{ Route, Routes} from'react-router-dom'

function App() {
  return (
    <>
    <Navbar />      
<Routes>
  <Route path='/Home' element={<Home/>}/> 
  <Route  path='/Contect' element={<Contect/>}/>
  <Route  path='/Students' element={<Students/>}/>
</Routes>
  
    </>
  );
}

export default App;
