import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css';
// import ChatList from './component/Contact/ContactComponent/ChatList.js';
import ContentList from './component/Content/ContentList.js';
import Profile from './component/Contact/ContactComponent/Profile';

class App extends Component {
  render() {
    return (
      <div class="horizontal-div">
        <Router>
          <div>
            <Switch>
              <Route
                exact
                path={`/profile/:${this.props.name}`}
                component={Profile}
                />
              <Route
                exact
                path={`/chat`}
                component={ContentList}
              />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
