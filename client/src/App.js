import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar1 from './components/templates/Navbar1';
import About from './components/main/About';

function App() {
    return (
      <>
          <Navbar1/>
          <About/>
      </>
  );
}

export default App;
