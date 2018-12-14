import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const styles = theme => ({
  card: {
    maxWidth: 400,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  actions: {
    display: 'flex',
  },
  expand: {
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
    marginLeft: 'auto',
    [theme.breakpoints.up('sm')]: {
      marginRight: -8,
    },
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
  scroll: {
    height: '70%',
    overflow: 'auto',
  }
});

const ContentView = (props)=> {
    const { classes } = props;
    return (
        <Card className={classes.card}>
          <CardHeader
            avatar={
              <Avatar aria-label="Recipe" className={classes.avatar}>
                S
              </Avatar>
            }
            action={
              <IconButton>
                <MoreVertIcon />
              </IconButton>
            }
            title={props.title}
            subheader={props.date}
          />
          <CardMedia
            className={classes.media}
            image="/static/images/cards/paella.jpg"
            title="This is picture"
          />
          <CardContent>
            <Typography component="p">
              {props.description}
            </Typography>
          </CardContent>
          <CardActions className={classes.actions} disableActionSpacing>
            <IconButton aria-label="Add to favorites">
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="Share">
              <ShareIcon />
            </IconButton>
          </CardActions>
        </Card>
    );
}
class ContentList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          FeedData: [
            {   title: "This is some First feed",
                date: 'September 14, 2016',
                description:
                    `This impressive paella is a perfect party dish and a fun meal to cook together with your guests.
                     Add 1 cup of frozen peas along with the mussels, if you like.`
             },
             {  title: "This is some second feed",
                date: 'September 15, 2016',
                description:
                    `This impressive paella is a perfect party dish and a fun meal to cook together with your guests.
                    Add 1 cup of frozen peas along with the mussels, if you like.`
            },
            {   title: "This is some third feed",
                date: 'September 16, 2016',
                description:
                    `This impressive paella is a perfect party dish and a fun meal to cook together with your guests.
                    Add 1 cup of frozen peas along with the mussels, if you like.`
            },
          ]
        }
      }
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.scroll}>
        {this.state.FeedData.map(FeedData => (
          <ContentView
            classes={classes}
            title={FeedData.title}
            date={FeedData.date}
            description={FeedData.description}
          />
        ))
        }
      </div>
    );
  }
}

ContentList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ContentList);