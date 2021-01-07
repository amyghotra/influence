import React from "react";
import {Link, Route, Switch, BrowserRouter as Router } from "react-router-dom";
import logo from './imgs/logo.png'
import './Opening.css'
import Options from './Options'

function Opening() {
  const img_styles = {
    height:200,
    width:200
  }
  return (
    <div>
      <Router>
        <button className="getStarted">
          <Link to='/options'>Get Started</Link>
        </button>
        <Switch>
          <Route path='/options'>
              <Options />
          </Route>
        </Switch>
      </Router>
      <header className="App-header">
      <img className="openingLogo" style={img_styles} src={logo}/>
        <h1 className="openingTitle">
          Perspective
        </h1>
        <p className="openingLine">
          See what influenced the perspectives and voting patterns of politicians
        </p>
      </header>
    </div>
  );
}

export default Opening;