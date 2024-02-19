import logo from './logo.svg';
import './App2.css';
import React from 'react';
import './Signup.css'
import Signup from './Signup';
import IfCheck from './Ifcondition';
import Loop from './Map';
import Navbar from './components/Navbar';
import Home from './components/Home';
function App2() {
  return (
    <div className='Sigh-up-container'>
    {/* <Signup/> */}
    <Navbar/>

         {/* <IfCheck/>*/}
      {/* <Loop/>*/}
    </div>
  );
}

export default App2;
