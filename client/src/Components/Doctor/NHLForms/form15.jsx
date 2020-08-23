import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Dsidebar from '../Dsidebar'

export default class Form15 extends Component {


    constructor(props) {

        super(props);
    }

    onSubmit() {

        var patient_name = document.getElementById('PN').value;
        var date_sample = document.getElementById('DSR').value;
        var national_ID_card = document.getElementById('NIN').value;
        var age = document.getElementById('AG').value;
        var sex = document.getElementById('SX').value;
        var location = document.getElementById('LC').value;
        var OPD_Ward = document.getElementById('O/W').value;
        var physician_name = document.getElementById('PHN').value;
        var sample_type = document.getElementById('ST').value;
        var test_requested = document.getElementById('TR').value;

        var isolate1 = document.getElementById('I1').value;
        var isolate2 = document.getElementById('I2').value;

        var remarks = document.getElementById('RM1').value +
            document.getElementById('RM2').value +
            document.getElementById('RM3').value;

        var TE = document.getElementById('TE').value;
        var RB = document.getElementById('RB').value;
        var DT1 = document.getElementById('DT1').value;
        var DT2 = document.getElementById('DT2').value;
        var SG1 = document.getElementById('SG1').value;
        var SG2 = document.getElementById('SG2').value;

        console.log(
            patient_name + '\n' +
            date_sample + '\n' +
            national_ID_card + '\n' +
            age + '\n' +
            sex + '\n' +
            location + '\n' +
            OPD_Ward + '\n' +
            physician_name + '\n' +
            sample_type + '\n' +
            test_requested + '\n' +
            isolate1 + '\n' +
            isolate2 + '\n' +
            remarks + '\n' +

            TE + '\n' +
            RB + '\n' +

            DT1 + '\n' +
            SG1 + '\n' +

            DT2 + '\n' +
            SG2 + '\n'

        )
    }



    render() {

        return (
          <Card variant="outlined" style={{padding:'20px'}} >
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
                        <form >
                            <div style={{ flexGrow: 1 }}>
                                <Grid container spacing={1}>
                                    <Grid item xs={3}>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <h5 style={{ marginLeft: '50px' }}><b>NATIONAL HEALTH LABORATORY</b></h5>
                                    </Grid>
                                </Grid>
                            </div>

                            <div style={{ flexGrow: 1 }}>
                                <Grid container spacing={1}>
                                    <Grid item xs={3}>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <h5><b>MICROBIOLOGY DEPARTMENT RESULT SHEET</b></h5>
                                    </Grid>
                                </Grid>
                            </div>

                            <br></br>
                            <div style={{ flexGrow: 1 }}>
                                <Grid container spacing={1}>
                                    <Grid item xs={1}>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <b>  PATIENT NAME : </b>
                                        <TextField
                                            id="PN"
                                            type="text"
                                            name="pn"
                                            style={{ width: '50%' }}
                                        />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <b>   DATE SAMPLE RECEIVED : </b>
                                        <TextField
                                            id="DSR"
                                            type="date"
                                            defaultValue="2017-05-24"
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                        />
                                    </Grid>
                                </Grid>
                            </div>
                            <br></br>
                            <div style={{ flexGrow: 1 }}>
                                <Grid container spacing={1}>
                                    <Grid item xs={1}>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <b>  NATIONAL ID NO : </b>
                                        <TextField
                                            id="NIN"
                                            type="text"

                                            style={{ width: '60%' }}
                                        />
                                    </Grid>
                                    <Grid item xs={2}>
                                        <b>   AGE : </b>
                                        <TextField
                                            id="AG"
                                            type="text"

                                        />
                                    </Grid>
                                    <Grid item xs={2}>
                                        <b>   SEX : </b>
                                        <TextField
                                            id="SX"
                                            type="text"

                                        />
                                    </Grid>
                                </Grid>
                            </div>
                            <br></br>
                            <div style={{ flexGrow: 1 }}>
                                <Grid container spacing={1}>
                                    <Grid item xs={1}>
                                    </Grid>
                                    <Grid item xs={3}>
                                        <b>  LOCATION : </b>
                                        <TextField
                                            id="LC"
                                            type="text"

                                            style={{ width: '50%' }}
                                        />
                                    </Grid>
                                    <Grid item xs={3}>
                                        <b>   OPD/WARD : </b>
                                        <TextField
                                            id="O/W"
                                            type="text"

                                        />
                                    </Grid>
                                    <Grid item xs={3}>
                                        <b>   PHYSICIAN NAME : </b>
                                        <TextField
                                            id="PHN"
                                            type="text"
                                            style={{ width: '30%' }}
                                        />
                                    </Grid>
                                </Grid>
                            </div>
                            <br></br>
                            <div style={{ flexGrow: 1 }}>
                                <Grid container spacing={1}>
                                    <Grid item xs={1}>
                                    </Grid>
                                    <Grid item xs={2}>
                                        <b>  SAMPLE TYPE : </b>
                                        <TextField
                                            id="ST"
                                            type="text"
                                            style={{ width: '30%' }}
                                        />
                                    </Grid>
                                    <Grid item xs={3}>
                                        <b>   TEST REQUESTED : </b>
                                        <TextField
                                            id="TR"
                                            type="text"
                                            defaultValue='culture and sensitivity'
                                        />
                                    </Grid>
                                </Grid>
                            </div>

                            <br></br>

                            <div style={{ flexGrow: 1 }}>
                                <Grid container spacing={1}>
                                    <Grid item xs={1}>
                                    </Grid>
                                    <Grid item xs={3}>
                                        <b> _________________________________________________________________________________________________________________________________________________________</b>
                                    </Grid>
                                </Grid>
                            </div>
                            <br></br>
                            <br></br>
                            <div style={{ flexGrow: 1 }}>
                                <Grid container spacing={1}>
                                    <Grid item xs={4}>
                                    </Grid>
                                    <Grid item xs={2}>
                                        <b>RESULT OF CULTURE: </b>
                                    </Grid>
                                    <b>G</b>
                                    <Grid item xs={1}>
                                    </Grid>
                                    <b>NG</b>
                                </Grid>
                            </div>
                            <br></br>
                            <div style={{ flexGrow: 1 }}>
                                <Grid container spacing={1}>
                                    <Grid item xs={4}>
                                    </Grid>
                                    <Grid item xs={2}>
                                        <b>INTERPRETITION : </b>
                                    </Grid>

                                    <Grid item xs={1}>
                                        <b>'G' = GROWTH</b>
                                    </Grid>

                                    <Grid item xs={3}>
                                        <b>'NG' = NO GROWTH</b>
                                    </Grid>
                                </Grid>
                            </div>

                            <br></br>
                            <div style={{ flexGrow: 1 }}>
                                <Grid container spacing={1}>
                                    <Grid item xs={3}>
                                    </Grid>
                                    <Grid item xs={7}>
                                        <b>ISOLATE 1 : </b>
                                        <TextField
                                            id="I1"
                                            type="text"

                                            style={{ width: '50%' }}
                                        />
                                    </Grid>
                                </Grid>
                            </div>
                            <div style={{ flexGrow: 1 }}>
                                <Grid container spacing={1}>
                                    <Grid item xs={3}>
                                    </Grid>
                                    <Grid item xs={7}>
                                        <b>ISOLATE 2 : </b>
                                        <TextField
                                            id="I2"
                                            type="text"
                                            style={{ width: '50%' }}
                                        />
                                    </Grid>
                                </Grid>
                            </div>
                            <br></br>
                            <div style={{ flexGrow: 1 }}>
                                <Grid container spacing={1}>
                                    <Grid item xs={1}>
                                    </Grid>
                                    <Grid item xs={11}>
                                        <b>REMARKS : </b>
                                        <TextField
                                            id="RM1"
                                            type="text"
                                            style={{ width: '80%' }}
                                        />
                                    </Grid>
                                </Grid>
                            </div>

                            <div style={{ flexGrow: 1 }}>
                                <Grid container spacing={1}>
                                    <Grid item xs={1}>
                                    </Grid>
                                    <Grid item xs={11}>

                                        <TextField
                                            id="RM2"
                                            type="text"
                                            style={{ width: '86%' }}
                                        />
                                    </Grid>
                                </Grid>
                            </div>

                            <div style={{ flexGrow: 1 }}>
                                <Grid container spacing={1}>
                                    <Grid item xs={1}>
                                    </Grid>
                                    <Grid item xs={11}>

                                        <TextField
                                            id="RM3"
                                            type="text"
                                            style={{ width: '86%' }}
                                        />
                                    </Grid>
                                </Grid>
                            </div>

                            <br></br><br></br><br></br>
                            <div style={{ flexGrow: 1 }}>
                                <Grid container spacing={1}>
                                    <Grid item xs={1}>
                                    </Grid>
                                    <Grid item xs={5}>
                                        <b>  TECHNOLOGIST : </b>
                                        <TextField
                                            id="TE"
                                            type="text"

                                            style={{ width: '50%' }}
                                        />
                                    </Grid>
                                    <Grid item xs={5}>
                                        <b>  REVIED BY : </b>
                                        <TextField
                                            id="RB"
                                            type="text"

                                        />
                                    </Grid>
                                </Grid>
                            </div>

                            <br></br>
                            <div style={{ flexGrow: 1 }}>
                                <Grid container spacing={1}>
                                    <Grid item xs={1}>

                                    </Grid>
                                    <Grid item xs={5}>
                                        <b>DATE : </b>
                                        <TextField
                                            id="DT1"
                                            type="date"
                                            defaultValue="2017-05-24"
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                        /> :
                                </Grid>

                                    <Grid item xs={4}>
                                        <b>DATE : </b>
                                        <TextField
                                            id="DT2"
                                            type="date"
                                            defaultValue="2017-05-24"
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                        /> :
                                    </Grid>

                                </Grid>
                            </div>

                            <div style={{ flexGrow: 1 }}>
                                <Grid container spacing={1}>
                                    <Grid item xs={1}>

                                    </Grid>
                                    <Grid item xs={5}>
                                        <b>SIGN : </b>
                                        <TextField
                                            id="SG1"
                                            type="text"
                                        /> :
                                </Grid>

                                    <Grid item xs={4}>
                                        <b>SIGN : </b>
                                        <TextField
                                            id="SG2"
                                            type="text"
                                        /> :
                                    </Grid>
                                    <Button color="primary" onClick={this.onSubmit}> Submit </Button>
                                </Grid>
                            </div>
                        </form>
                    </Typography >

                </CardContent >
            </Card >
    
        );
    }
}