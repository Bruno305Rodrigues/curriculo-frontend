import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: '36ch',
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
  },
}));

export default function AlignItemsList() {
  const classes = useStyles();

  return (
    <List className={classes.root}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Javascript" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnzckuhCV10T-RhokQxs6peA3BJJWJyvSdgqSdIiQFXA-FAyXSiRqNZ7PS_IAHmjDQrlc&usqp=CAU" />
        </ListItemAvatar>
        <ListItemText
          primary="Javascript"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
              
              </Typography>
            
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="HTML" src="https://image.flaticon.com/icons/png/512/919/919827.png" />
        </ListItemAvatar>
        <ListItemText
          primary="HTML"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
               
              </Typography>
            
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="CSS" src="https://cdn.iconscout.com/icon/free/png-128/css-38-226095.png" />
        </ListItemAvatar>
        <ListItemText
          primary="CSS"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
               
              </Typography>
             
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="ReactJS" src="https://cdn.iconscout.com/icon/free/png-256/react-1-282599.png" />
        </ListItemAvatar>
        <ListItemText
          primary="ReactJS"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
               
              </Typography>
             
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="NodeJS" src="https://cdn.iconscout.com/icon/free/png-256/nodejs-6-569582.png" />
        </ListItemAvatar>
        <ListItemText
          primary="NodeJS"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
               
              </Typography>
             
            </React.Fragment>
          }
        />
      </ListItem>
      
    </List>
  );
}