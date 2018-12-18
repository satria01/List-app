import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Routing/Home.js";
import About from "./Routing/About.js";
import Contact from "./Routing/Contact.js";
import Error from "./Routing/Error.js";
import Navigation from "./Routing/Navigation.js";

class AppRouting extends Component {
    render() {
    return (
      <BrowserRouter>
          <div>
            <Navigation />
            <Switch>
              <Route path="/" component={Home} exact />
              <Route path="/about" component={About}/>
              <Route path="/contact" component={Contact}/>
              <Route component={Error} />
            </Switch>
          </div>
      </BrowserRouter>
    );
  }
}

export default AppRouting;