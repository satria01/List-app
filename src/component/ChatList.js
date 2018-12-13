import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
  },
});

const ChatView = (props) => {
  const { classes } = props;
  return (
    <List className={classes.root} >
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
    </List>
  );
}

class ChatList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chatShortDetail: [
        { name: "Contact 1", chat: 'this is some chat', },
        { name: "Contact 2", chat: 'this is some chat', },
        { name: "Contact 3", chat: 'this is some chat', },
        { name: "Contact 4", chat: 'this is some chat', },
        { name: "Contact 5", chat: 'this is some chat', },
        { name: "Contact 6", chat: 'this is some chat', },
      ]
    }
  }
  render() {
    const { classes } = this.props;
    return (
      <li>
        {this.state.chatShortDetail.map(chatShortDetail => (
          <ChatView
            classes={classes}
            name={chatShortDetail.name}
            chat={chatShortDetail.chat}
          />
        ))
        }
      </li>
    );
  }
}

ChatView.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(ChatList);
