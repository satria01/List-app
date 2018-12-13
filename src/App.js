import React, { Component } from 'react';
import './App.css';

function List(props) {
  return (
    <button class="button" onClick={() => alert('click')}>
      <div>{props.name}</div>
      <div>{props.chat}</div>
    </button>
  );
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listItem: [
          {name: "Contact 1", chat: 'this is some chat',},
          {name: "Contact 2", chat: 'this is some chat',},
          {name: "Contact 3", chat: 'this is some chat',},
          {name: "Contact 4", chat: 'this is some chat',},
          {name: "Contact 5", chat: 'this is some chat',},
          {name: "Contact 6", chat: 'this is some chat',},
      ]
    }
  }
    renderList(i){
      return (
        <List
          name={this.state.listItem[i].name}
          chat={this.state.listItem[i].chat}
        />
      );
    };
    render() {
    return (
      <li class="list">
        {this.renderList(0)}
        {this.renderList(1)}
        {this.renderList(2)}
        {this.renderList(3)}
        {this.renderList(4)}
        {this.renderList(5)}
      </li>
    );
  }
}

export default App;
