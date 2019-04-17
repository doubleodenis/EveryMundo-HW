import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import {BrowserRouter} from 'react-router-dom';
import Routes from './routes.js'
import Navbar from './components/CustomNavbar'
class App extends Component 
{
  render() {
    return (
      <div className="App">
          <BrowserRouter>
            <Navbar/>
            <Routes/>
          </BrowserRouter>
      </div>
    );
  }
}

export default App;
