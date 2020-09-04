import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import DatePicker from 'react-date-picker';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Checkbox from '@material-ui/core/Checkbox';
import DSidebar from '../Dsidebar'
import axios from 'axios'
import Dsidebar from '../Dsidebar';

const useStyles = makeStyles({
    brdr: {
        border: '1px solid black',
        borderCollapse: 'collapse'
    },
    root: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});
const HBLViralComp = ({ purpose, hcv, handleChange, submitter, handleResult, handleResult1, initialChange, retrieve }) => {
    const classes = useStyles();
    return (
        <div>
            <Card className={classes.root} variant="outlined" >
                <style>{`
    
    th,td{
     border:1px solid black;
    },
    
    #tdn:{
        border:none;
    }
  `}</style>
                <CardContent>

                    <Typography variant="body2" component="p">

                        <div style={{ flexGrow: 1 }} >

                            <center>    <h5><b>Ministry of Health</b></h5>
                                <h5><b>National Health Laboratory</b></h5>
                                <h5><b>HBV VIRAL load Request Form</b></h5></center>

                        </div>



                        <div style={{ flexGrow: 1 }}>
                            <Grid container spacing={12}>

                                <Grid item xs={12} >

                                    <table className={classes.brdr} style={{ width: '100%', padding: '20px' }}>
                                        <b>1. IDENTIFICATION</b>
                                        <br></br>
                                        <br></br>
                                        <tr>
                                            <div style={{ flexGrow: 1 }}>
                                                <Grid container spacing={1}>
                                                    <Grid item xs={3}>
                                                        <div class="form-group col-md-4">

                                                            <input type="text" onChange={initialChange} class="form-control" name="PatientUHID" required id="inputEmail4" placeholder="UHID" />
                                                        </div>
                                                        <input class="btn btn-primary" type="button" value="Get Data" onClick={retrieve} />
                                                    </Grid>
                                                    <Grid item xs={6} >
                                                        <b> Patient Name:</b>

                                                        <TextField
                                                            name="firstName"
                                                            type="text"
                                                            value={hcv.firstName}
                                                            className={classes.textField}
                                                            onChange={handleChange}
                                                            InputLabelProps={{
                                                                shrink: true,
                                                            }}
                                                        />
                                                    </Grid>
                                                    <Grid item xs={6} >
                                                        <b>  National ID Number: </b>
                                                        <TextField
                                                            name="nationalIdNumber"
                                                            type="text"
                                                            value={hcv.nationalIdNumber}
                                                            className={classes.textField}
                                                            onChange={handleChange}
                                                            InputLabelProps={{
                                                                shrink: true,
                                                            }}
                                                        />
                                                    </Grid>   </Grid>





                                                <Grid container spacing={3}>
                                                    <Grid item xs={4}>
                                                        <b> Date of Birth:</b>

                                                        <DatePicker
                                                            name="dateOfBirth"
                                                            value={hcv.dateOfBirth}
                                                            disabled

                                                        />
                                                    </Grid>




                                                </Grid>
                                                <Grid container spacing={1}>

                                                    <Grid item xs={3}>
                                                        <b>  Health Faclity : </b>
                                                        <TextField
                                                            id="address"
                                                            type="text"
                                                            value={hcv.healthFacility}
                                                            name="healthFacility"
                                                            className={classes.textField}
                                                            onChange={handleChange}
                                                        />
                                                    </Grid>
                                                    <Grid item xs={3}>
                                                        <b>   Zoba : </b>
                                                        <TextField
                                                            id="address"
                                                            type="text"
                                                            name="zoba"
                                                            value={hcv.zoba}
                                                            className={classes.textField}
                                                            onChange={handleChange}
                                                        />
                                                    </Grid>
                                                    <Grid item xs={3}>
                                                        <b>  Sub-Zoba : </b>
                                                        <TextField
                                                            id="address"
                                                            name="subZoba"
                                                            type="text"
                                                            value={hcv.subZoba}
                                                            onChange={handleChange}
                                                            className={classes.textField}
                                                        />
                                                    </Grid>
                                                    <Grid item xs={3}>
                                                        <b>  Village/ City : </b>
                                                        <TextField
                                                            id="address"
                                                            name="villCity"
                                                            value={hcv.villCity}
                                                            type="text"
                                                            onChange={handleChange}
                                                            className={classes.textField}
                                                        />
                                                    </Grid>

                                                </Grid>
                                            </div>

                                            <div style={{ flexGrow: 1 }}>
                                                <Grid container spacing={2}>

                                                    <Grid item xs={4}>
                                                        <b>  Requested by : </b>
                                                        <TextField
                                                            id="address"
                                                            name="requestedBy"
                                                            value={hcv.requestedBy}
                                                            onChange={handleChange}
                                                            type="text"
                                                            className={classes.textField}
                                                            InputProps={{ disableUnderline: true }}
                                                        />
                                                    </Grid>
                                                    <Grid item xs={4}>
                                                        <b>     Tele : </b>
                                                        <TextField
                                                            id="address"
                                                            name="tele"
                                                            value={hcv.tele}
                                                            type="text"
                                                            onChange={handleChange}
                                                            className={classes.textField}
                                                            InputProps={{ disableUnderline: true }}
                                                        />
                                                    </Grid>
                                                </Grid>
                                            </div>
                                        </tr>
                                        <tr className={classes.brdr}>
                                            <br></br>
                                            <br></br>
                                            <b>2. SERUM SPECIMEN : </b>
                                            <br></br>
                                            <br></br>

                                            <div style={{ flexGrow: 1 }}>
                                                <Grid container spacing={4}>

                                                    <Grid item xs={4}>
                                                        <b>  Date of Specimen collection : </b>
                                                        {purpose == "update" ? <input type="text" value={hcv.specimenDate} /> :
                                                            <TextField
                                                                id="date"
                                                                name="specimenDate"

                                                                type="date"
                                                                onChange={handleChange}

                                                                className={classes.textField}
                                                                InputLabelProps={{
                                                                    shrink: true,
                                                                }}
                                                            />}
                                                    </Grid>
                                                    <Grid item xs={4}>
                                                        <b>   Date Sent to NHL : </b>
                                                        {purpose == "update" ? <input type="text" value={hcv.NHLDate} /> :
                                                            <TextField
                                                                id="date"
                                                                name="NHLDate"
                                                                onChange={handleChange}
                                                                type="date"

                                                                className={classes.textField}
                                                                InputLabelProps={{
                                                                    shrink: true,
                                                                }}
                                                            />}
                                                    </Grid>
                                                </Grid>
                                            </div>

                                            <div style={{ flexGrow: 1 }}>
                                                <Grid container spacing={2}>

                                                    <Grid item xs={4}>
                                                        <b>Condition of Speciemen :  GOOD </b>
                                                        <input
                                                            type="checkbox"
                                                            color="primary"
                                                            size="medium"
                                                            onChange={handleChange}
                                                            name="goodCondition"
                                                            checked={hcv.goodCondition}
                                                            inputProps={{ 'aria-label': 'secondary checkbox' }}
                                                        />
                                                    </Grid>
                                                    <Grid item xs={4}>
                                                        <b>INADEQUATE </b>
                                                        <input
                                                            type="checkbox"
                                                            color="primary"
                                                            name="inadequateCondition"
                                                            onChange={handleChange}
                                                            checked={hcv.inadequateCondition}
                                                            size="medium"
                                                            inputProps={{ 'aria-label': 'secondary checkbox' }}
                                                        />
                                                    </Grid>
                                                </Grid>
                                            </div>
                                        </tr>
                                    </table>
                                </Grid>
                            </Grid>
                        </div>

                        <br></br><br></br>
                        <div style={{ flexGrow: 1 }}>
                            <Grid container spacing={3}>


                                <Grid item xs={12}>
                                    <table style={{ width: '90%' }}>
                                        <th >
                                            S/N
                                   </th>
                                        <th >
                                            Client's code/name
                                   </th>
                                        <th >
                                            Client's national ID
                                   </th>
                                        <th>
                                            Age
                                   </th>
                                        <th >
                                            Sex
                                    </th>
                                        <th >
                                            <div style={{ textAlign: 'center' }}>

                                                Viral load test
                                            <br></br>
                                                <div style={{ flexGrow: 1 }}>
                                                    <Grid container spacing={3}>
                                                        <Grid item xs={6}>
                                                            Initial test
                                            </Grid>
                                                        <Grid item xs={4}>
                                                            Repeat test
                                            </Grid>
                                                    </Grid>
                                                </div>
                                            </div>
                                        </th>
                                        <th >
                                            RESULTS
                                   </th>

                                        <tr>
                                            <td>
                                                <TextField
                                                    id="address"
                                                    type="text"
                                                    name="SN"
                                                    onChange={handleResult}
                                                    value={hcv.result1['SN']}
                                                    className={classes.textField}
                                                    InputProps={{ disableUnderline: true }}
                                                />
                                            </td>
                                            <td>
                                                <TextField
                                                    id="address"
                                                    name="clientName"
                                                    value={hcv.result1['clientName']}
                                                    type="text"
                                                    className={classes.textField}
                                                    InputProps={{ disableUnderline: true }}
                                                />
                                            </td>
                                            <td>
                                                <TextField
                                                    id="address"
                                                    type="text"
                                                    name="clientNationalID"
                                                    value={hcv.result1['clientNationalID']}
                                                    className={classes.textField}
                                                    InputProps={{ disableUnderline: true }}
                                                />
                                            </td>
                                            <td>
                                                <TextField
                                                    id="address"
                                                    name="age"
                                                    onChange={handleResult}
                                                    value={hcv.result1['age']}
                                                    type="text"
                                                    className={classes.textField}
                                                    InputProps={{ disableUnderline: true }}
                                                />
                                            </td>
                                            <td>
                                                <TextField
                                                    id="address"
                                                    name="sex"
                                                    value={hcv.result1['sex']}
                                                    type="text"
                                                    className={classes.textField}
                                                    InputProps={{ disableUnderline: true }}
                                                />
                                            </td>

                                            <tr >
                                                <td>
                                                    <TextField
                                                        id="address"
                                                        type="text"
                                                        name="initialTest"
                                                        value={hcv.result1['initialTest']}
                                                        onChange={handleResult}
                                                        className={classes.textField}
                                                        InputProps={{ disableUnderline: true }}
                                                    />
                                                </td>

                                                <td>
                                                    <TextField
                                                        id="address"
                                                        type="text"
                                                        name="repeatTest"
                                                        value={hcv.result1['repeatTest']}
                                                        onChange={handleResult}
                                                        className={classes.textField}
                                                        InputProps={{ disableUnderline: true }}
                                                    />
                                                </td>
                                            </tr>

                                            <td>
                                                <TextField
                                                    id="address"
                                                    type="text"
                                                    name="result"
                                                    onChange={handleResult}
                                                    value={hcv.result1['result']}
                                                    className={classes.textField}
                                                    InputProps={{ disableUnderline: true }}
                                                />
                                            </td>
                                        </tr>

                                        <tr>
                                            <td>
                                                <TextField
                                                    id="address"
                                                    type="text"
                                                    name="SN"
                                                    value={hcv.result2['SN']}
                                                    onChange={handleResult1}
                                                    className={classes.textField}
                                                    InputProps={{ disableUnderline: true }}
                                                />
                                            </td>
                                            <td>
                                                <TextField
                                                    id="address"
                                                    type="text"
                                                    name="clientName"
                                                    value={hcv.result2['clientName']}
                                                    className={classes.textField}
                                                    InputProps={{ disableUnderline: true }}
                                                />
                                            </td>
                                            <td>
                                                <TextField
                                                    id="address"
                                                    type="text"
                                                    name="clientNationalID"
                                                    value={hcv.result2['clientNationalID']}
                                                    className={classes.textField}
                                                    InputProps={{ disableUnderline: true }}
                                                />
                                            </td>
                                            <td>
                                                <TextField
                                                    id="address"
                                                    type="text"
                                                    name="age2"
                                                    onChange={handleResult1}
                                                    value={hcv.result2['age2']}
                                                    className={classes.textField}
                                                    InputProps={{ disableUnderline: true }}
                                                />
                                            </td>
                                            <td>
                                                <TextField
                                                    id="address"
                                                    type="text"
                                                    name="sex"
                                                    value={hcv.result2['sex']}
                                                    className={classes.textField}
                                                    InputProps={{ disableUnderline: true }}
                                                />
                                            </td>

                                            <tr style={{ width: '100%' }}>
                                                <td>
                                                    <TextField
                                                        id="address"
                                                        name="initialTest2"
                                                        type="text"
                                                        value={hcv.result2['initialTest2']}
                                                        onChange={handleResult1}
                                                        className={classes.textField}
                                                        InputProps={{ disableUnderline: true }}
                                                    />
                                                </td>

                                                <td>
                                                    <TextField
                                                        id="address"
                                                        type="text"
                                                        name="repeatTest2"
                                                        value={hcv.result2['repeatTest2']}
                                                        onChange={handleResult1}
                                                        className={classes.textField}
                                                        InputProps={{ disableUnderline: true }}
                                                    />
                                                </td>
                                            </tr>

                                            <td>
                                                <TextField
                                                    id="address"
                                                    name="result2"
                                                    type="text"
                                                    value={hcv.result2['result2']}
                                                    onChange={handleResult1}
                                                    className={classes.textField}
                                                    InputProps={{ disableUnderline: true }}
                                                />
                                            </td>
                                        </tr>
                                    </table>
                                </Grid>
                            </Grid>
                        </div>

                        <div style={{ flexGrow: 1 }}>

                            <Grid container spacing={1}>
                                <Grid item xs={1}>

                                </Grid>
                                <Grid item xs={1}>
                                    <br></br>
                                    <b><u>At NHL : </u></b>
                                </Grid>
                            </Grid>
                        </div>

                        <div style={{ flexGrow: 1 }}>

                            <Grid container spacing={1}>

                                <Grid item xs={1}>

                                </Grid>
                                <Grid item xs={3}>
                                    <b>  Reported by : </b>
                                    <TextField
                                        id="address"
                                        type="text"
                                        name="reportBy"
                                        value={hcv.reportBy}
                                        onChange={handleChange}

                                        className={classes.textField}
                                    />
                                </Grid>
                                <Grid item xs={3}>
                                    <b>   Date : </b>
                                    {purpose == "update" ? <input type="text" value={hcv.referralDate} /> :
                                        <TextField
                                            id="date"
                                            name="referralDate"
                                            type="date"

                                            onChange={handleChange}
                                            className={classes.textField}
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                        />}
                                </Grid>
                                <Grid item xs={3}>
                                    <b>  Sig : </b>
                                    <TextField
                                        name="reportSig"
                                        id="address"
                                        onChange={handleChange}
                                        type="text"
                                        value={hcv.reportSig}
                                        className={classes.textField}
                                    />
                                </Grid>


                            </Grid>
                        </div>

                        <div style={{ flexGrow: 1 }}>
                            <Grid container spacing={1}>
                                <Grid item xs={1}>

                                </Grid>
                                <Grid item xs={3}>
                                    <b>  Approaved by : </b>
                                    <TextField
                                        name="approveBy"
                                        id="address"
                                        onChange={handleChange}
                                        value={hcv.approveBy}
                                        type="text"
                                        className={classes.textField}
                                    />
                                </Grid>
                                <Grid item xs={3}>
                                    <b>   Date : </b>
                                    {purpose == "update" ? <input type="text" value={hcv.approveDate} /> :
                                        <TextField
                                            id="date"
                                            name="approveDate"
                                            onChange={handleChange}
                                            type="date"

                                            className={classes.textField}
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                        />}
                                </Grid>
                                <Grid item xs={3}>
                                    <b>  Sig : </b>
                                    <TextField
                                        name="approveSig"
                                        id="address"
                                        onChange={handleChange}
                                        value={hcv.approveSig}
                                        type="text"
                                        className={classes.textField}
                                    />
                                </Grid>
                                <Grid item xs={3}>

                                </Grid>

                            </Grid>
                            <button class="btn btn-primary" onClick={submitter}>Submit</button>
                        </div>

                    </Typography >

                </CardContent >
            </Card >
        </div>
    );
}

export default HBLViralComp;