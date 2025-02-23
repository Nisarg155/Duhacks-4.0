import React from 'react';
import Navbar from './components/navbar/Navbar';
import Home from './components/home/home'
import Dashboard from './components/dashboard/Dashboard';
import Materialin from './components/ClassDetails/Materialin/Materialin';
import TitleDesc from './components/ClassDetails/titledesc/titledesc';
import Material from './components/Material/Material';
import {Routes, Route} from 'react-router-dom';

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/Dashboard' element={<Dashboard/>}></Route>
        <Route path='/ClassDetails/titledesc' element={<TitleDesc/>}></Route>
        <Route path='ClassDetails/Material' element={<Material/>}></Route>
        <Route path='ClassDetails/Material/Materialin' element={<Materialin/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
