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
        
        if (test === "HIVViral") {
            window.location.href = `/HIVViral?test=${test}&UHID=${s.UHID}`
        }
        else if (test === "LabTbreport") {
            window.location.href = `/Tbreport?test=${test}&UHID=${s.UHID}`
        }
        else if (test === "Culture") {
            window.location.href = `/Culture?test=${test}&UHID=${s.UHID}`
        }
        else if (test === "HCVViralvew") {
            window.location.href = `/HCVViralvew?test=${test}&UHID=${s.UHID}`
        }
        else if (test === "Tbreport") {
            window.location.href = `/Tbreport?test=${test}&UHID=${s.UHID}`
        }
        else if (test === "HBLViralview") {
            window.location.href = `/HBLViralview?test=${test}&UHID=${s.UHID}`
        }
        else if (test === "HCVViralform") {
            window.location.href = `/HCVViralform?test=${test}&UHID=${s.UHID}`
        }
        else if (test === "Chemlab") {
            window.location.href = `/Chemlab?test=${test}&UHID=${s.UHID}`
        }
        else if (test === "Hivvirals") {
            window.location.href = `/Hivvirals?test=${test}&UHID=${s.UHID}`
        }
        else if (test === "Chemshow") {
            window.location.href = `/Chemshow?test=${test}&UHID=${s.UHID}`
        }
        else if (test === "Viewdata") {
            window.location.href = `/Viewdata?test=${test}&UHID=${s.UHID}`
        }
        else if (test === "HBLViralform") {
            window.location.href = `/HBLViralform?test=${test}&UHID=${s.UHID}`
        }
        else if (test === "HIVViralform") {
            window.location.href = `/HIVViralform?test=${test}&UHID=${s.UHID}`
        }
        else if (test === "FormView") {
            window.location.href = `/FormView?test=${test}&UHID=${s.UHID}`
        }
        else if (test === "ResultView") {
            window.location.href = `/ResultView?test=${test}&UHID=${s.UHID}`
        }
        else if (test === "HivDna") {
            window.location.href = `/HivDna?test=${test}&UHID=${s.UHID}`
        }
        else if (test === "HBVViral") {
            window.location.href = `/HBVViral?test=${test}&UHID=${s.UHID}`
        }
        else if (test === "Syphlis") {
            window.location.href = `/Syphlis?test=${test}&UHID=${s.UHID}`
        }
        // if (test === "Hematology") {
        //     window.location.href = `/testFill?test=${test}&UHID=${s.UHID}`
        // }
        // else if (test === "Chemistry") {
        //     window.location.href = `/Chemlab?test=${test}&UHID=${s.UHID}`
        // }
        // else if (test === "HCVViral") {
        //     window.location.href = `/HCVViralform?test=${test}&UHID=${s.UHID}`
        // }
        // else if (test === "HBLViral") {
        //     window.location.href = `/HBLViralform?test=${test}&UHID=${s.UHID}`
        // }
        // else if (test === "HIVViral") {
        //     window.location.href = `/HIVViralform?test=${test}&UHID=${s.UHID}`
        // }
        // else if (test === "TBReport") {
        //     window.location.href = `/LabTbreport?test=${test}&UHID=${s.UHID}`
        // }
        // else if (test === "culture and sensitivity") {
        //     window.location.href = `/Culture?test=${test}&UHID=${s.UHID}`
        // }
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
                                {/* <option className="ml-5" value="Hematology">Hematology</option>
                                <option className="ml-5" value="Chemistry">Chemistry</option>
                                <option className="ml-5" value="HCVViral">HCVViral</option>
                                <option className="ml-5" value="HBLViral">HBLViral</option>
                                <option className="ml-5" value="HIVViral">HIVViral</option>
                                <option className="ml-5" value="TBReport">TBReport</option>
                                <option className="ml-5" value="culture and sensitivit">Culture and Sensitivity</option> */}
                                <option className="ml-5" value="HIVViral">HIVViral</option>
                                <option className="ml-5" value="LabTbreport">LabTbreport</option>
                                <option className="ml-5" value="Culture">Culture</option>
                                <option className="ml-5" value="HCVViralvew">HCVViralvew</option>
                                <option className="ml-5" value="Tbreport">Tbreport</option>
                                <option className="ml-5" value="HBLViralview">HBLViralview</option>
                                <option className="ml-5" value="HCVViralform">HCVViralform</option>
                                <option className="ml-5" value="Chemlab">Chemlab</option>
                                <option className="ml-5" value="Hivvirals">Hivvirals</option>
                                <option className="ml-5" value="Chemshow">Chemshow</option>
                                {/* <option className="ml-5" value="Viewdata">Viewdata</option> */}
                                {/* <option className="ml-5" value="HBLViralform">HBLViralform</option> */}
                                <option className="ml-5" value="HIVViralform">HIVViralform</option>
                                {/* <option className="ml-5" value="FormView">FormView</option>
                                <option className="ml-5" value="ResultView">ResultView</option> */}
                                <option className="ml-5" value="HivDna">HivDna</option>
                                <option className="ml-5" value="HBVViral">HBVViral</option>
                                <option className="ml-5" value="Syphlis">Syphlis</option>

                            </select>
                            <Button variant="outlined" color="secondary" className='ml-3' onClick={() => { Checkit() }} color="secondary"> Request</Button>
                        </div>
                    </DialogContentText>
                </DialogContent>
            </Dialog>
        </React.Fragment>
    );
}
