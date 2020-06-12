import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import './style.css'


const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',

    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: '5px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),

    },

}));

function click() {
    alert("fuck it")
}

export default function TransitionModal(props) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true)
    };
    const handleClose = () => {
        setOpen(false)
    };

    return (
        <div>
            <button type="button" id="btn" onClick={handleOpen}>
                New Employee{props.children}
            </button>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>

                    <div className={classes.paper}>
                        <form className={classes.root} noValidate autoComplete="off">
                            <h2>Input New Employee</h2>
                            <TextField id="standard-basic" label="First Name" />
                            <br></br>
                            <TextField id="standard-basic" label="Last Name" />
                            <br></br>
                            <TextField id="standard-basic" label="Phone Number" />
                            <br></br>
                            <TextField id="standard-basic" label="Adress" />
                            <br></br>
                            <TextField id="standard-basic" label="Email" />
                            <br></br>
                            <br></br>
                            <Button size="small" variant="contained" color="primary" onClick={click}>
                                Submit
                        </Button>

                        </form>
                    </div>
                </Fade>
            </Modal>

        </div>
    )

}