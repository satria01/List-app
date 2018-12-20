import React, { Component } from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import { NavLink } from 'react-router-dom';

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
  },
  scroll: {
    height: '70%',
    overflow: 'auto',
  }
});

const ChatView = (props) => {
  const { classes } = props;
  return (
    <List className={classes.root} >
      <NavLink to={`/profile/${props.name}`}>
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          </ListItemAvatar>
          <ListItemText
            primary={props.name}
            secondary={
              <React.Fragment>
                {props.chat}
              </React.Fragment>
            }
          />
        </ListItem>
      </NavLink>
    </List>
  );
}

class ChatList extends Component {
  componentDidMount(){
    this.props.getChatListAction();
  }

  render() {
    const { classes, chatList } = this.props;

    return (
      <div className={classes.scroll}>
        {chatList && chatList.map(chatShortDetail => (
          <ChatView
            classes={classes}
            name={chatShortDetail.name}
            chat={chatShortDetail.chat}
          />
        ))}
      </div>
    );
  }
}

ChatView.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  chatList: state.ChatListReducer,
});

export default connect(mapStateToProps, null)(withStyles(styles)(ChatList));
