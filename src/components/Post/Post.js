import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { useHistory } from 'react-router-dom';


const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});
const Post = (props) => {
    const {title, id} = props.post;
    const history = useHistory();
    const handleClick = (postId) => {
        history.push(`/post/${postId}`)
    }
    const classes = useStyles();
    const postStyle={
      border:'1px solid gray',
      padding:'40px',
      width:'500px',
      height:'150px',
      float:'left',
      items:'center',
      margin:'20px'
    }
    return (
        <div>
            <Card style={postStyle} className={classes.root}>
      <CardActionArea>
       
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button onClick={() => handleClick(id)} variant="contained" color="secondary">
          Learn More
        </Button>
      </CardActions>
    </Card>
        </div>
    );
};

export default Post;

