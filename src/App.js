import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css';
// import ChatList from './component/Contact/ContactComponent/ChatList.js';
import ContentList from './component/Content/ContentList.js';
import Profile from './component/Contact/ContactComponent/Profile';
import { bindActionCreators } from '../../../../AppData/Local/Microsoft/TypeScript/3.2/node_modules/redux';
import getChatList from './redux/action/ChatListAction';

class App extends Component {
  componentDidMount() {
    this.props.getChatList();
  }

  render() {
    return (
      <div class="horizontal-div">
        <Router>
            <div>
              <Switch>
                {this.props.chatList.chatShortDetail && <Route
                  exact
                  path={`/profile/:${this.props.name}`}
                  component={(props) => <Profile {...props}/>}
                  />}
                <Route
                  exact
                  path={`/`}
                  component={ContentList}
                />
              </Switch>
            </div>
          </Router>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  chatList: state.ChatListReducer,
})

const mapDispatchToProps = dispatch => ({
  getChatList: bindActionCreators(getChatList, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
