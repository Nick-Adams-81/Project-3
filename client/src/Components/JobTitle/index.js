import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
//import API from '../../utils/API';
import './style.css'

const jobTitles = [
  {
    value: '$12.00/hr',
    label: 'Service',
  },
  {
    value: '$15.00/hr',
    label: 'Supervisor',
  },
  {
    value: '$20.00/hr',
    label: 'Shift Manager',
  },
  {
    value: '$30.00/hr',
    label: 'General Manager',
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));



export default function MultilineTextFields() {

  
  const classes = useStyles();
  const [jobTitle, setJobTitle] = React.useState('EUR');

  const handleChange = (event) => {

    setJobTitle(event.target.value);
  };

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div className="job-title">

        <TextField
          required id="standard-required"
          helperText="Name"
          onChange={handleChange}
        />
        <TextField
          required id="standard-required"
          select
          value={jobTitle}
          onChange={handleChange}
          helperText="Job Title"
        >
          {jobTitles.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </div>
    </form>
  );
}
