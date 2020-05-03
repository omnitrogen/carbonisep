import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar1 from './components/templates/Navbar1';
import Home from './components/main/Home';
import StaticFooter from './components/templates/StaticFooter';

function App() {
    return (
      <>
          <Navbar1 />
          <Home/>
          <StaticFooter/>
      </>
  );
}

export default App;
