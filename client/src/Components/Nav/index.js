import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import MyClock from '../Clock';
import Grid from '@material-ui/core/Grid';
import ClockInButton from '../ClockInButton';
import ClockOutButton from '../ClockOutButton';
import EmployeeInput from '../EmployeeInput';
import LunchButton from '../LunchButton';
import Calendar from '../Calendar';
import JobTitle from '../JobTitle';
import ViewHoursButton from '../ViewHoursButton';
import TimeData from '../TimeData';


function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
    },
}));

export default function SimpleTabs() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
                    <Tab label="Punch in/out" {...a11yProps(0)} />
                    <Tab label="Hours" {...a11yProps(1)} />
                    <Tab label="Item Three" {...a11yProps(2)} />
                </Tabs>
            </AppBar>

            <TabPanel value={value} index={0}>

                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <MyClock />
                    </Grid>
                </Grid>
                <br>
                </br>
                <br>
                </br>

                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <EmployeeInput />
                    </Grid>
                    <Grid item xs={12}>
                        <JobTitle />
                    </Grid>
                </Grid>
                <br>
                </br>
                <br>
                </br>

                <Grid container spacing={3}>
                    <Grid item xs={6}>
                        <ClockInButton />
                    </Grid>
                    <Grid item xs={6}>
                        <ClockOutButton />
                    </Grid>
                </Grid>

                <Grid container spacing={3}>
                    <Grid item xs={4}>
                    </Grid>
                    <Grid item xs={4}>
                        <LunchButton />
                    </Grid>
                    <Grid item xs={4}>
                    </Grid>
                </Grid>

            </TabPanel>

            <TabPanel value={value} index={1}>

                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Calendar />
                    </Grid>
                </Grid>

                <Grid container spacing={3}>
                    <Grid item xs={12}>
                       <TimeData />
                    </Grid>
                </Grid>
                <br>
                </br>
                <Grid container spacing={3}> 
                    <Grid item xs={12}>
                        <ViewHoursButton />
                    </Grid>
                </Grid>
            </TabPanel>

            <TabPanel value={value} index={2}>
                Item Three
      </TabPanel>
        </div>
    );
}
