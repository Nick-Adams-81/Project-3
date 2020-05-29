import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import './style.css'

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

function clickMe(){
    console.log('click me motherfucker!!!')
}

export default function ContainedButtons() {
  const classes = useStyles();

  return (
    <div className={classes.root} id='btn'>
      
      <Button 
      variant="contained" 
      color="primary"
      onClick={clickMe}>
        View Time
      </Button>
      
    </div>
  );
}
