import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import logo from './logo.svg';

import Index from  './components/index/index'
import Head from './components/head/head'
import './App.css';
import './static/css/base.css'
import './static/css/common.css'

const BaseRouter = () => (
    <Router>
        <div>
            <Head/>
            <Route exact path="/" component={App}></Route>
        </div>
    </Router>
)

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Index/>
      </div>
    );
  }
}

export default BaseRouter;
