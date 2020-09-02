import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Axios from 'axios'
import { Card } from '@material-ui/core';
import ServicesTable from './ServicesTable';

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


export default function PatientModal({ s }) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [fullWidth, setFullWidth] = React.useState(true);
    const [maxWidth, setMaxWidth] = React.useState('md');
    const [patient, setPatient] = useState([{ basic: {}, contact: {}, emergency: {} }]
    )
    useEffect(() => {
        Axios.get(`/get-single-patient/${s.UHID}`)
            .then(res => {
                if(res.data.length>0){
                    setPatient(res.data)
                }
            })
            .catch(err => {
                console.log(err)
            })
    }, [])


    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const printInvoice = () => {
        let restorBody=document.body.innerHTML
        var printContent=document.getElementById('invoicePrint').innerHTML
        document.body.innerHTML=printContent
        window.print()
        window.location.reload()
    }
    return (
        <React.Fragment>
            <Button variant="outlined" color="primary" size="sm" onClick={handleClickOpen}>View and Print</Button>
            <Dialog
                fullWidth={fullWidth}
                maxWidth={maxWidth}
                open={open}
                onClose={handleClose}
                aria-labelledby="max-width-dialog-title"
            >
                <DialogTitle id="max-width-dialog-title" className="text-center pt-5"><h3>Patient Information</h3></DialogTitle>
                <DialogContent style={{ padding: '50px' }}>
                    <DialogContentText>
                        <div>

                            <h4>Basic Information</h4>
                            <div className="row" style={{ textTransform: 'capitalize' }}>
                                <div className="col-md-6">
                                    <div className="row">
                                        <div className="col-md-6">Patient ID :</div><div className="col-md-6"> {s.UHID} </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">Name :</div><div className="col-md-6"> {patient[0].basic.name} </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">Gender :</div><div className="col-md-6"> {patient[0].basic.gender} </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">Blood Group :</div><div className="col-md-6"> {patient[0].basic.bloodGroup} </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">Register Date :</div><div className="col-md-6"> {patient[0].basic.date} </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">Card Number :</div><div className="col-md-6"> {patient[0].basic.cardNumber} </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">Ethincity :</div><div className="col-md-6"> {patient[0].basic.ethincity} </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">Nationality :</div><div className="col-md-6"> {patient[0].basic.nationality} </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">Birth Place :</div><div className="col-md-6"> {patient[0].basic.birthPlace} </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="row">
                                        <div className="col-md-6">Father Name :</div><div className="col-md-6"> {patient[0].basic.fatherName} </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">Grand Father Name :</div><div className="col-md-6"> {patient[0].basic.grandFatherName} </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">Marital Status :</div><div className="col-md-6"> {patient[0].basic.maritalStatus} </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">National Id Number :</div><div className="col-md-6"> {patient[0].basic.nationalIdNumber} </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">Occupation :</div><div className="col-md-6"> {patient[0].basic.occupation} </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">Religion :</div><div className="col-md-6"> {patient[0].basic.religion} </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">Parent Spousee :</div><div className="col-md-6"> {patient[0].basic.parentSpouse} </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">Primery Language :</div><div className="col-md-6"> {patient[0].basic.pLanguage} </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">Language  :</div><div className="col-md-6"> {patient[0].basic.sLanguage} </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h4>Contact : </h4>
                            <div className="row" style={{ textTransform: 'capitalize' }}>
                                <div className="col-md-6">
                                    <div className="row">
                                        <div className="col-md-6">Name :</div><div className="col-md-6"> {patient[0].contact.address} </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">Gender :</div><div className="col-md-6"> {patient[0].contact.email} </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">Blood Group :</div><div className="col-md-6"> {patient[0].contact.homeNumber} </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">Register Date :</div><div className="col-md-6"> {patient[0].contact.phoneNumber} </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="row">
                                        <div className="col-md-6">Father Name :</div><div className="col-md-6"> {patient[0].contact.subZone} </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">Grand Father Name :</div><div className="col-md-6"> {patient[0].contact.village} </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">Marital Status :</div><div className="col-md-6"> {patient[0].contact.zone} </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h4>Emergency : </h4>
                            <div className="row" style={{ textTransform: 'capitalize' }}>
                                <div className="col-md-6">
                                    <div className="row">
                                        <div className="col-md-6">Name :</div><div className="col-md-6"> {patient[0].emergency.address} </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">Gender :</div><div className="col-md-6"> {patient[0].emergency.date} </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">Blood Group :</div><div className="col-md-6"> {patient[0].emergency.emailAddress} </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">Register Date :</div><div className="col-md-6"> {patient[0].emergency.fatherName} </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">Register Date :</div><div className="col-md-6"> {patient[0].emergency.grandFatherName} </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">Register Date :</div><div className="col-md-6"> {patient[0].emergency.homeNumber} </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="row">
                                        <div className="col-md-6">Father Name :</div><div className="col-md-6"> {patient[0].emergency.mobileNumber} </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">Grand Father Name :</div><div className="col-md-6"> {patient[0].emergency.name} </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">Marital Status :</div><div className="col-md-6"> {patient[0].emergency.relationship} </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">Father Name :</div><div className="col-md-6"> {patient[0].emergency.subZone} </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">Grand Father Name :</div><div className="col-md-6"> {patient[0].emergency.village} </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">Marital Status :</div><div className="col-md-6"> {patient[0].emergency.zone} </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Card className="col-md-10 offset-md-1 mt-5">
                            <h4 className="p-1  pt-3 text-center">Payment Information (Printable)  </h4>
                            <div id="invoicePrint">
                                <div className="row " style={{ textTransform: 'capitalize' }}>
                                    <div className="col-12">
                                        <h5 className="p-3 text-center">Payment</h5>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="row">
                                            <div className="col-md-6">Invoice ID :</div><div className="col-md-6"> {s.invoiceID} </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">Name :</div><div className="col-md-6"> {patient[0].basic.name} </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">UHID :</div><div className="col-md-6"> {s.UHID} </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="row">
                                            <div className="col-md-6">Total Bill :</div><div className="col-md-6"> {s.total} </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">Paid Bil</div><div className="col-md-6"> {s.paid} </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">Due Bill</div><div className="col-md-6"> {s.total - s.paid} </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">Paid Due Date</div><div className="col-md-6"> {s.dueDate} </div>
                                        </div>
                                    </div>
                                    <div className="col-12 mt-3">
                                        <ServicesTable services={s.service} />
                                    </div>
                                </div>
                            </div>
                            <Button variant="contained" color="secondary" onClick={() => {printInvoice() }} className="ml-1 mt-3 mb-3" >Print</Button>
                        </Card>
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={()=>{handleClose()}} color="primary">Close</Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
}










// doctor id wil  6 number 