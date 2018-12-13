import React, { Component } from 'react';
import './App.css';
import ChatList from './component/ChatList.js';
import ContentList from './component/ContentList.js';

class App extends Component {
    render() {
    return (
      <div class="horizontal-div">
        <div>
          <ChatList/>
        </div>
        <div>
          <ContentList/>
        </div>
    </div>
    );
  }
}

export default App;
