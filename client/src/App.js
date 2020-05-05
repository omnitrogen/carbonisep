import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar1 from './components/templates/nav/Navbar1';
import Home from './components/main/static/Home';
import StaticFooter from './components/templates/StaticFooter';
import ConnectedNavbars from './components/templates/nav/ConnectedNavbars';

function App() {
    return (
      <>
            <ConnectedNavbars/>
      </>
  );
}

export default App;
