import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useParams } from "react-router-dom";
import Login from './components/auth/auth';
import Detail from './components/detail/detail';
import Home from './components/home/home';

const App = () => {

  const { id }= useParams();

  return (
    <Router>
      <Routes>
        <Route>
            <Route path='/' element={<Login/>}/>
            <Route path='/users' element={<Home/>}/>
            <Route path='/users/:id' element={<Detail id={id}/>}/>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
