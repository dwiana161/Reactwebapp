import React from 'react';
import { BrowserRouter as Router, Routes, Route, useParams } from "react-router-dom";
import Login from './components/auth/auth';
import Detail from './components/detail/detail';
import Home from './components/home/home';
import "./style/index.scss";

const App = () => {

  const { id }= useParams();

  return (
    <div className='container'>
    <Router>
      <Routes>
        <Route>
            <Route path='/' element={<Login/>}/>
              <Route path='users' element={<Home/>}/>
              <Route path='users/:id' element={<Detail id={id}/>}/>
        </Route>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
