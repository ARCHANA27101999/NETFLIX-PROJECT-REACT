
import './App.css';

import Nav1 from './components/Nav1';
import {BrowserRouter, Routes,Route} from 'react-router-dom'
import OL from './components/OL';
import New from './components/New';
import Trend from './components/Trend';
import Bnr from './components/Bnr/Bnr';
import { createContext, useState } from 'react';
import { LatestMovies, Originals, PopularMovies } from './components/url';
import Banner from './components/Banner';
import Banner1 from './components/Banner';
import Newfile from './components/Newfile';
 const appcontext=createContext()
//  const appcontext2=createContext()
 




function App() {
  const [State, setState] = useState("")
  const [Show, setShow] = useState(false)
  return (
    <div>
       {/* <appcontext2.Provider    value={[Show,setShow]}> */}

      <appcontext.Provider    value={ {value:[State,setState], value2:[Show,setShow]}} >
      <BrowserRouter>
      {Show? false:  <Nav1/>}
      {Show ? false:  <Banner1/> }
      
     
    
    
      <Routes>
      {/* <Route path="/"   element={<Banner/>}></Route> */}
      <Route path="/old"  element={<OL Url={Originals}/>}></Route>
      <Route path="/new"  element={<OL Url={PopularMovies}/>}></Route>
      <Route path="/trend"  element={<OL Url={LatestMovies}/>}></Route>
      <Route path="/Newfile/:id"  element={<Newfile/>}></Route>



      
     

      </Routes>
     
      
      </BrowserRouter>
      </appcontext.Provider>
      {/* </appcontext2.Provider> */}



     
    </div>
  );
}

export default App;
export {appcontext}
{/* export {appcontext2} */}
