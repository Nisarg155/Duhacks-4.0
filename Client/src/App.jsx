import React from 'react';
import Navbar from './components/navbar/Navbar';
import Home from './components/home/home'
import Dashboard from './components/dashboard/Dashboard';
import Materialin from './components/ClassDetails/Materialin/Materialin';
import TitleDesc from './components/ClassDetails/titledesc/titledesc';
import Material from './components/ClassDetails/Material/Material';
import stastics from './components/ClassDetails/stastics/stastics';
import Assignments from './components/ClassDetails/Assignments/Assignments';
import {Routes, Route} from 'react-router-dom';
import Stastics from './components/ClassDetails/stastics/stastics';

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
        <Route path='ClassDetails/Assignments' element={<Assignments/>}></Route>
        <Route path='ClassDetails/stastics' element={<Stastics/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
