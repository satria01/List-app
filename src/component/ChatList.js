import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';

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
    <IconButton>
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
      </IconButton>
    </List>
  );
}

class ChatList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chatShortDetail: null
    }
  }

  componentDidMount(){
    fetch('http://localhost:3001/chatShortDetail')
      .then(response => {
        return response.json()
      })
      .then(chatShortDetail => {
        this.setState({
          chatShortDetail
        })
      })
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.scroll}>
        {this.state.chatShortDetail && this.state.chatShortDetail.map(chatShortDetail => (
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
export default withStyles(styles)(ChatList);
