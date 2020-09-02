import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Axios from 'axios'
import { Input, Select } from '@material-ui/core';
import { useRecoilValue } from 'recoil'
import { userInfoState } from '../util/recoilState'
import decoder from 'jwt-decode'

const useStyles = makeStyles((theme) => ({
    form: {
        display: 'flex',
        flexDirection: 'column',
        margin: 'auto',
        width: 'fit-content',
    },
    formControl: {
        marginTop: theme.spacing(2),
        minWidth: 120,
    },
    formControlLabel: {
        marginTop: theme.spacing(1),
    },
}));


export default function PatientRequestModal({ props, s }) {
    const getUserInfoState = useRecoilValue(userInfoState)
    const [test, setTest] = useState('')


    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [fullWidth, setFullWidth] = React.useState(true);
    const [maxWidth, setMaxWidth] = React.useState('xs');
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const Checkit = () => {
        console.log(test)
        if (test === "Hematology") {
            window.location.href = `/testFill?test=${test}&UHID=${s.UHID}`
        }
        else if (test === "Chemistry") {
            window.location.href = `/Chemlab?test=${test}&UHID=${s.UHID}`
        }
        else if (test === "HCVViral") {
            window.location.href = `/HCVViralform?test=${test}&UHID=${s.UHID}`
        }
        else if (test === "HBLViral") {
            window.location.href = `/HBLViralform?test=${test}&UHID=${s.UHID}`
        }
        else if (test === "HIVViral") {
            window.location.href = `/HIVViralform?test=${test}&UHID=${s.UHID}`
        }
        else if (test === "TBReport") {
            window.location.href = `/LabTbreport?test=${test}&UHID=${s.UHID}`
        }
        else if (test === "culture and sensitivity") {
            window.location.href = `/Culture?test=${test}&UHID=${s.UHID}`
        }
    }

    return (
        <React.Fragment>
            <Button variant="outlined" color="primary" size="sm" onClick={handleClickOpen}>Request </Button>
            <Dialog
                fullWidth={fullWidth}
                maxWidth={maxWidth}
                open={open}
                onClose={handleClose}
                aria-labelledby="max-width-dialog-title"
            >
                <DialogTitle id="max-width-dialog-title" className="text-center pt-5"><h3>Select A Test</h3></DialogTitle>
                <DialogContent style={{ padding: '10px 50px' }}>
                    <DialogContentText>
                        <div className="text-center d-flex">
                            <select className="form-control" onChange={event => { setTest(event.target.value) }} style={{ marginRight: '20px' }}>
                                <option className="ml-5">Select A Test</option>
                                <option className="ml-5" value="Hematology">Hematology</option>
                                <option className="ml-5" value="Chemistry">Chemistry</option>
                                <option className="ml-5" value="HCVViral">HCVViral</option>
                                <option className="ml-5" value="HBLViral">HBLViral</option>
                                <option className="ml-5" value="HIVViral">HIVViral</option>
                                <option className="ml-5" value="TBReport">TBReport</option>
                                <option className="ml-5" value="culture and sensitivit">Culture and Sensitivity</option>
                            </select>
                            <Button variant="outlined" color="secondary" className='ml-3' onClick={() => { Checkit() }} color="secondary"> Request</Button>
                        </div>
                    </DialogContentText>
                </DialogContent>
            </Dialog>
        </React.Fragment>
    );
}
