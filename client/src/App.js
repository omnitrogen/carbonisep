import React from 'react';
import logo from './logo.svg';

import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';
import Home from './view/Home';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
        
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <Link to="/view/Home.js">Home</Link>

        </header>
        <Switch>
          <Route exact path="/view/Home.js" component={Home} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}


export default App;
