import './App.css';
import React from 'react';
import {BrowserRouter,Route} from "react-router-dom";
import DigitalLibrary from './components/Digital Library.jsx';
import Login from './components/Login.jsx';
import Admin from './components/Admin.jsx';
import Student from './components/Student.jsx';
import Borrow from './components/Borrow.jsx';
function App() {
  return (
      <BrowserRouter>
        <div>
          <Route exact path="/" component={DigitalLibrary}></Route>
          <Route exact path='/login' component={Login}></Route>
          <Route exact path='/admin' component={Admin}></Route>
          <Route exact path="/student" component={Student}></Route>
          <Route exact path="/borrow" component={Borrow}></Route>
        </div>
      </BrowserRouter>
  );
}

export default App;
