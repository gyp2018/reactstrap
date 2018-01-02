import React, { Component } from 'react';
import { Button } from 'reactstrap';

import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

import Navbar from './components/app/AppNavbar';
import AppDropdown from './components/app/AppDropdown';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar></Navbar>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Button color="primary">primary</Button>{' '}
        <AppDropdown></AppDropdown>
      </div>
    );
  }
}

export default App;
