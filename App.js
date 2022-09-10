import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Music from './components/pages/Music';
import MembersOfBLACKPINK from './components/pages/MembersOfBLACKPINK';
import SignUpForEmailUpdates from './components/pages/SignUpForEmailUpdates';

function App() {
  return (
    <>
       <Router>
         <Navbar />
         <Routes> 
         <Route path='/' exact component={Home}/>
         <Route path='/music' component={Music}/>
         <Route path='membersofblackpink' component={MembersOfBLACKPINK}/>
         <Route path='signupforemailupdates' component={SignUpForEmailUpdates}/>
         </Routes>
       </Router>
    </>
  );
}

export default App;
