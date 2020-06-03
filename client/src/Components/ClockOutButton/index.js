import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import API from '../../utils/API'



const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));



toast.configure()
const handleFormSubmit = () => {
 
  setInterval(() => {
   new Date()
  }, 1000)
  console.log(new Date)
  API.saveEndTime()
      .then(res => {
          toast.success('Clock Out Successfull!', {
              position: "top-center",
              autoClose: 1400,
              hideProgressBar: true,
              closeOnclick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              
            });
       

      })
      .catch(err => {
          toast.error('Clock Out Failed!', {
              position: "top-center",
              autoClose: 3000,
              hideProgressBar: true,
              closeOnclick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });

      })
}



export default function ContainedButtons() {
  const classes = useStyles();

  return (
    <div className={classes.root}>

      <Button
        variant="contained"
        color="secondary"
        onClick={handleFormSubmit}>
        clockout
      </Button>

    </div>
  );
}
