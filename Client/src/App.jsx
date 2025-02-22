import React from 'react';
import Navbar from './components/navbar/Navbar';
import Home from './components/home/home'
import Dashboard from './components/dashboard/Dashboard';
import {Routes, Route} from 'react-router-dom';

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/Dashboard' element={<Dashboard/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
