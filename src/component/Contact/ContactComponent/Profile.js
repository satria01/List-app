
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import { bindActionCreators } from '../../../../../../../AppData/Local/Microsoft/TypeScript/3.2/node_modules/redux';
import getChatList from '../../../redux/action/ChatListAction';


const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    marginLeft: 200,
    marginRight: 200,
  },
  tabsRoot: {
    borderBottom: '1px solid #e8e8e8',
  },
  tabsIndicator: {
    backgroundColor: '#1890ff',
  },
  tabRoot: {
    textTransform: 'initial',
    minWidth: 72,
    fontWeight: theme.typography.fontWeightRegular,
    marginRight: theme.spacing.unit * 4,
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:hover': {
      color: '#40a9ff',
      opacity: 1,
    },
    '&$tabSelected': {
      color: '#1890ff',
      fontWeight: theme.typography.fontWeightMedium,
    },
    '&:focus': {
      color: '#40a9ff',
    },
  },
  tabSelected: {},
  typography: {
    padding: theme.spacing.unit * 3,
  },
  avatar: {
    margin: 10,
  },
  bigAvatar: {
    margin: 10,
    width: 120,
    height: 120,
  },
  card: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
      isloading: true,
    }
  }

  handleChange = ( value) => {
    this.setState({ value });
  };

  render() {
    const { classes, chatList } = this.props;
    const { value } = this.state;
    const newData = chatList.chatShortDetail[chatList.id];
    return (
      <div className={classes.root}>
        <div>

          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" className={classes.bigAvatar} />

          <Card className={classes.card}>
            <CardContent>
              <Typography variant="h5" component="h2">
                {newData.name}
              </Typography>
              <Typography component="p">
                {newData.chat}
              </Typography>
            </CardContent>
          </Card>

        </div>
        <Tabs
          value={value}
          onChange={this.handleChange}
          classes={{ root: classes.tabsRoot, indicator: classes.tabsIndicator }}
        >
          <Tab
            disableRipple
            classes={{ root: classes.tabRoot, selected: classes.tabSelected }}
            label="POSTS"
          />
          <Tab
            disableRipple
            classes={{ root: classes.tabRoot, selected: classes.tabSelected }}
            label="IGTV"
          />
          <Tab
            disableRipple
            classes={{ root: classes.tabRoot, selected: classes.tabSelected }}
            label="SAVED"
          />
          <Tab
            disableRipple
            classes={{ root: classes.tabRoot, selected: classes.tabSelected }}
            label="TAGGED"
          />
        </Tabs>
        <Typography className={classes.typography}>Ant Design UI powered by Material-UI</Typography>
      </div>
    );
  }
}

Profile.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  chatList: state.ChatListReducer,
})

const mapDispatchToProps = dispatch => ({
  getChatList: bindActionCreators(getChatList, dispatch),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withStyles(styles)(Profile));