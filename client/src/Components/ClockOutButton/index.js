import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

function clickMe() {
  console.log('ive ben clicked!!!')
}

export default function ContainedButtons() {
  const classes = useStyles();

  return (
    <div className={classes.root}>

      <Button
        variant="contained"
        color="secondary"
        onClick={clickMe}>
        clockout
      </Button>

    </div>
  );
}
