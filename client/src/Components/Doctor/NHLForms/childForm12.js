import React, { memo } from 'react';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import axios from 'axios'
const ChildForm12 = ({mode, culture, retrieve, handleChange, handleSubmit, initialChange }) => {

    
    const BT=()=>{
        if(mode==="view"){
            return(
                <button class="btn btn-primary" onClick={()=>{window.history.back()}}>Go Back</button>
                )
        }else {
            return(
            <button class="btn btn-primary" onClick={()=>{handleSubmit()}}>Submit</button>
            )
        }
    }
    return (

        <Card variant="outlined" style={{ padding: '20px' }} >
            <style>{`th,td{border:1px solid black;},#tdn:{border:none;}`}</style>
            <CardContent>
                <div>
                    <Grid container spacing={1}>
                        <Grid item xs={4}>
                        </Grid>
                        <Grid item xs={6}>
                            <h5 style={{ marginLeft: '50px' }}><b><u>NATIONAL HEALTH LABORATORY</u></b></h5>
                        </Grid>
                    </Grid>
                    <div style={{ flexGrow: 1 }}>
                        <Grid container spacing={1}>
                            <Grid item xs={4}>
                            </Grid>
                            <Grid item xs={6}>
                                <h5><b><u>MICROBIOLOGY DEPARTMENT RESULT SHEET</u></b></h5>
                            </Grid>
                        </Grid>
                    </div>
                    <br></br>
                    <div style={{ flexGrow: 1 }}>
                        <Grid container spacing={1}>
                            {/* <Grid item xs={3}> <div class="form-row" style={{ paddingTop: '20px' }}>
                                <div class="form-group col-md-4">
                                    <input type="text" onChange={initialChange} class="form-control" name="PatientUHID" required id="inputEmail4" placeholder="UHID" />
                                </div>
                                <input class="btn btn-primary" type="button" value="Get Data" onClick={retrieve} />
                            </div>
                            </Grid> */}
                            <Grid item xs={3}>
                                <b>  PATIENT NAME : </b>
                                <TextField
                                    id="PN"
                                    type="text"
                                    value={culture.firstName}
                                    name="firstName"
                                    onChange={handleChange}
                                    style={{ width: '50%' }}
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <b>   DATE SAMPLE RECEIVED : </b>
                                <TextField
                                    id="DSR"
                                    type="date"
                                    value={culture.referralDate}
                                    name="referralDate"
                                    onChange={handleChange}
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
                                    onChange={handleChange}
                                    type="text"
                                    value={culture.nationalIdNumber}
                                    name="national_ID_card"
                                    style={{ width: '60%' }}
                                />
                            </Grid>
                            <Grid item xs={2}>
                                <b>   AGE : </b>
                                <TextField
                                    id="AG"
                                    onChange={handleChange}
                                    name="age"
                                    value={culture.age}
                                    onChange={handleChange}
                                    type="text"

                                />
                            </Grid>
                            <Grid item xs={2}>
                                <b>   SEX : </b>
                                <TextField
                                    id="SX"
                                    onChange={handleChange}
                                    value={culture.sex}
                                    name="sex"
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
                                    onChange={handleChange}
                                    value={culture.location}
                                    name="location"
                                    style={{ width: '50%' }}
                                />
                            </Grid>
                            <Grid item xs={3}>
                                <b>   OPD/WARD : </b>
                                <TextField
                                    id="O/W"
                                    type="text"
                                    value={culture.OPD_Ward}
                                    name="OPD_Ward"
                                    onChange={handleChange}
                                />
                            </Grid>
                            <Grid item xs={3}>
                                <b>   PHYSICIAN NAME : </b>
                                <TextField
                                    id="PHN"
                                    type="text"
                                    onChange={handleChange}
                                    value={culture.physician_name}
                                    name="physician_name"
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
                                    onChange={handleChange}
                                    value={culture.sample_type}
                                    name="sample_type"
                                    style={{ width: '30%' }}
                                />
                            </Grid>
                            <Grid item xs={3}>
                                <b>   TEST REQUESTED : </b>
                                <TextField
                                    id="TR"
                                    type="text"
                                    onChange={handleChange}

                                    value={culture.test}

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
                                _________________________________________________________________________________________________________________________________________________________
                        </Grid>
                        </Grid>
                    </div>
                    <br></br>
                    <div style={{ flexGrow: 1 }}>
                        <Grid container spacing={1}>
                            <Grid item xs={4}>
                            </Grid>
                            <Grid item xs={6}>
                                <h5><b><u>CULTURE AND SENSITIVITY RESULTS</u></b></h5>
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
                                    onChange={handleChange}
                                    value={culture.isolate1}
                                    name="isolate1"
                                    style={{ width: '50%' }}
                                />
                            </Grid>
                        </Grid>
                    </div>

                    <br></br>
                    <div style={{ flexGrow: 1 }}>
                        <Grid container spacing={1}>
                            <Grid item xs={3}>
                            </Grid>
                            <Grid item xs={7}>
                                <b>ISOLATE 2 : </b>
                                <TextField
                                    id="I2"
                                    type="text"
                                    onChange={handleChange}
                                    value={culture.isolate2}
                                    name="isolate2"
                                    style={{ width: '50%' }}
                                />
                            </Grid>
                        </Grid>
                    </div>
                    <br></br>
                    <div style={{ flexGrow: 1 }}>
                        <Grid container spacing={1}>
                            <Grid item xs={5}>
                            </Grid>
                            <Grid item xs={6}>
                                <h5><b><u>SENSITIVITY RESULTS</u></b></h5>
                            </Grid>
                        </Grid>
                    </div>

                    <br></br>

                    <div style={{ flexGrow: 1 }}>
                        <Grid container spacing={1}>
                            <Grid item xs={3}>

                            </Grid>

                            <Grid item xs={2}>
                                <b>ISOLATE 1</b>
                            </Grid>
                            <Grid item xs={2}>
                                <b>ISOLATE 2</b>
                            </Grid>

                            <Grid item xs={2}>
                                <b>Isolate</b>     </Grid>
                            <Grid item xs={3}>
                                <TextField
                                    id="IS"
                                    type="text"
                                    onChange={handleChange}
                                    value={culture.isolate}
                                    name="isolate"
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
                            <Grid item xs={1}>
                                <b>Ampilicillin</b>
                            </Grid>
                            <Grid item xs={1}>

                            </Grid>
                            <Grid item xs={2}>

                                <TextField
                                    id="BLNK1"
                                    type="text"
                                    onChange={handleChange}
                                    name="blnk1"
                                    value={culture.blnk1}
                                    style={{ width: '50%' }}
                                />
                            </Grid>
                            <Grid item xs={2}>

                                <TextField
                                    id="BLNK2"
                                    type="text"
                                    onChange={handleChange}
                                    name="blnk2"
                                    style={{ width: '50%' }}
                                />
                            </Grid>
                            <Grid item xs={2}>
                                <b> Ciprofloxycin</b>
                            </Grid>
                            <Grid item xs={3}>

                                <TextField
                                    id="CI"
                                    type="text"
                                    onChange={handleChange}
                                    value={culture.CI}
                                    name="CI"
                                    style={{ width: '50%' }}
                                />
                            </Grid>
                        </Grid>
                    </div>

                    <div style={{ flexGrow: 1 }}>
                        <Grid container spacing={1}>
                            <Grid item xs={1}>

                            </Grid>
                            <Grid item xs={1}>
                                <b>Cephalexin</b>
                            </Grid>
                            <Grid item xs={1}>

                            </Grid>
                            <Grid item xs={2}>

                                <TextField
                                    id="BLNK3"
                                    type="text"
                                    onChange={handleChange}
                                    value={culture.blnk3}
                                    name="blnk3"
                                    style={{ width: '50%' }}
                                />
                            </Grid>
                            <Grid item xs={2}>

                                <TextField
                                    id="BLNK4"
                                    type="text"
                                    onChange={handleChange}
                                    value={culture.blnk4}
                                    name="blnk4"
                                    style={{ width: '50%' }}
                                />
                            </Grid>
                            <Grid item xs={2}>
                                <b> Chloramphenicel</b>
                            </Grid>
                            <Grid item xs={3}>

                                <TextField
                                    id="CH1"
                                    type="text"
                                    onChange={handleChange}
                                    name="CH1"
                                    value={culture.CH1}
                                    style={{ width: '50%' }}
                                />
                            </Grid>
                        </Grid>
                    </div>

                    <div style={{ flexGrow: 1 }}>
                        <Grid container spacing={1}>
                            <Grid item xs={1}>

                            </Grid>
                            <Grid item xs={1}>
                                <b>Ceeftriaxon</b>
                            </Grid>
                            <Grid item xs={1}>

                            </Grid>
                            <Grid item xs={2}>

                                <TextField
                                    id="BLNK5"
                                    onChange={handleChange}
                                    type="text"
                                    name="blnk5"
                                    value={culture.blnk5}
                                    style={{ width: '50%' }}
                                />
                            </Grid>
                            <Grid item xs={2}>

                                <TextField
                                    id="BLNK6"
                                    type="text"
                                    name="blnk6"
                                    onChange={handleChange}
                                    value={culture.blnk6}
                                    style={{ width: '50%' }}
                                />
                            </Grid>
                            <Grid item xs={2}>
                                <b> Cotrlmoxazole</b>
                            </Grid>
                            <Grid item xs={3}>

                                <TextField
                                    id="CO"
                                    type="text"
                                    onChange={handleChange}
                                    name="CO"
                                    value={culture.CO}
                                    style={{ width: '50%' }}
                                />
                            </Grid>
                        </Grid>
                    </div>

                    <div style={{ flexGrow: 1 }}>
                        <Grid container spacing={1}>
                            <Grid item xs={1}>

                            </Grid>
                            <Grid item xs={1}>
                                <b>Ceftriaxin</b>
                            </Grid>
                            <Grid item xs={1}>

                            </Grid>
                            <Grid item xs={2}>

                                <TextField
                                    id="BLNK7"
                                    type="text"
                                    onChange={handleChange}
                                    name="blnk7"
                                    value={culture.blnk7}
                                    style={{ width: '50%' }}
                                />
                            </Grid>
                            <Grid item xs={2}>

                                <TextField
                                    id="BLNK8"
                                    type="text"
                                    name="blnk8"
                                    onChange={handleChange}
                                    value={culture.blnk8}
                                    style={{ width: '50%' }}
                                />
                            </Grid>
                            <Grid item xs={2}>
                                <b> Clindamycin</b>
                            </Grid>
                            <Grid item xs={3}>

                                <TextField
                                    id="CL"
                                    type="text"
                                    name="CL"
                                    value={culture.CL}
                                    onChange={handleChange}
                                    style={{ width: '50%' }}
                                />
                            </Grid>
                        </Grid>
                    </div>

                    <div style={{ flexGrow: 1 }}>
                        <Grid container spacing={1}>
                            <Grid item xs={1}>

                            </Grid>
                            <Grid item xs={1}>
                                <b>Chloramphenicol</b>
                            </Grid>
                            <Grid item xs={1}>

                            </Grid>
                            <Grid item xs={2}>

                                <TextField
                                    id="BLNK9"
                                    type="text"
                                    name="blnk9"
                                    value={culture.blnk9}
                                    onChange={handleChange}
                                    style={{ width: '50%' }}
                                />
                            </Grid>
                            <Grid item xs={2}>

                                <TextField
                                    id="BLNK10"
                                    type="text"
                                    onChange={handleChange}
                                    name="blnk10"
                                    value={culture.blnk10}
                                    style={{ width: '50%' }}
                                />
                            </Grid>
                            <Grid item xs={2}>
                                <b> Eythromycin</b>
                            </Grid>
                            <Grid item xs={3}>

                                <TextField
                                    id="EY"
                                    type="text"
                                    onChange={handleChange}
                                    value={culture.EY}
                                    name="EY"
                                    style={{ width: '50%' }}
                                />
                            </Grid>
                        </Grid>
                    </div>

                    <div style={{ flexGrow: 1 }}>
                        <Grid container spacing={1}>
                            <Grid item xs={1}>

                            </Grid>
                            <Grid item xs={1}>
                                <b>Ciprofioaxtin</b>
                            </Grid>
                            <Grid item xs={1}>

                            </Grid>
                            <Grid item xs={2}>

                                <TextField
                                    id="BLNK11"
                                    type="text"
                                    name="blnk11"
                                    value={culture.blnk11}
                                    onChange={handleChange}
                                    style={{ width: '50%' }}
                                />
                            </Grid>
                            <Grid item xs={2}>

                                <TextField
                                    id="BLNK12"
                                    type="text"
                                    name="blnk12"
                                    value={culture.blnk12}
                                    onChange={handleChange}
                                    style={{ width: '50%' }}
                                />
                            </Grid>
                            <Grid item xs={2}>
                                <b> Gentamycin</b>
                            </Grid>
                            <Grid item xs={3}>

                                <TextField
                                    id="GE"
                                    type="text"
                                    name="GE"
                                    value={culture.GE}
                                    onChange={handleChange}
                                    style={{ width: '50%' }}
                                />
                            </Grid>
                        </Grid>
                    </div>


                    <div style={{ flexGrow: 1 }}>
                        <Grid container spacing={1}>
                            <Grid item xs={1}>

                            </Grid>
                            <Grid item xs={1}>
                                <b>Cotrimoxazole</b>
                            </Grid>
                            <Grid item xs={1}>

                            </Grid>
                            <Grid item xs={2}>

                                <TextField
                                    id="BLNK13"
                                    type="text"
                                    name="blnk13"
                                    onChange={handleChange}
                                    value={culture.blnk13}
                                    style={{ width: '50%' }}
                                />
                            </Grid>
                            <Grid item xs={2}>

                                <TextField
                                    id="BLNK14"
                                    type="text"
                                    onChange={handleChange}
                                    name="blnk14"
                                    value={culture.blnk14}
                                    style={{ width: '50%' }}
                                />
                            </Grid>
                            <Grid item xs={2}>
                                <b> Oxacillin</b>
                            </Grid>
                            <Grid item xs={3}>

                                <TextField
                                    id="OX"
                                    type="text"
                                    name="OX"
                                    onChange={handleChange}
                                    value={culture.OX}
                                    style={{ width: '50%' }}
                                />
                            </Grid>
                        </Grid>
                    </div>

                    <div style={{ flexGrow: 1 }}>
                        <Grid container spacing={1}>
                            <Grid item xs={1}>

                            </Grid>
                            <Grid item xs={1}>
                                <b>Gentamycin</b>
                            </Grid>
                            <Grid item xs={1}>

                            </Grid>
                            <Grid item xs={2}>

                                <TextField
                                    id="BLNK15"
                                    type="text"
                                    name="blnk15"
                                    value={culture.blnk15}
                                    onChange={handleChange}
                                    style={{ width: '50%' }}
                                />
                            </Grid>
                            <Grid item xs={2}>

                                <TextField
                                    id="BLNK16"
                                    type="text"
                                    onChange={handleChange}
                                    name="blnk16"
                                    value={culture.blnk16}
                                    style={{ width: '50%' }}
                                />
                            </Grid>
                            <Grid item xs={2}>
                                <b> Nitrofurontion</b>
                            </Grid>
                            <Grid item xs={3}>

                                <TextField
                                    id="NI"
                                    type="text"
                                    name="NI"
                                    onChange={handleChange}
                                    value={culture.NI}
                                    style={{ width: '50%' }}
                                />
                            </Grid>
                        </Grid>
                    </div>

                    <div style={{ flexGrow: 1 }}>
                        <Grid container spacing={1}>
                            <Grid item xs={1}>

                            </Grid>
                            <Grid item xs={1}>
                                <b>Naldicilic acid</b>
                            </Grid>
                            <Grid item xs={1}>

                            </Grid>
                            <Grid item xs={2}>

                                <TextField
                                    id="BLNK17"
                                    type="text"
                                    onChange={handleChange}
                                    name="blnk17"
                                    value={culture.blnk17}
                                    style={{ width: '50%' }}
                                />
                            </Grid>
                            <Grid item xs={2}>

                                <TextField
                                    id="BLNK18"
                                    type="text"
                                    onChange={handleChange}
                                    name="blnk18"
                                    value={culture.blnk18}
                                    style={{ width: '50%' }}
                                />
                            </Grid>
                            <Grid item xs={2}>
                                <b> Penicillne</b>
                            </Grid>
                            <Grid item xs={3}>

                                <TextField
                                    id="PN1"
                                    type="text"
                                    onChange={handleChange}
                                    value={culture.PN}
                                    name="PN"
                                    style={{ width: '50%' }}
                                />
                            </Grid>
                        </Grid>
                    </div>

                    <div style={{ flexGrow: 1 }}>
                        <Grid container spacing={1}>
                            <Grid item xs={1}>

                            </Grid>
                            <Grid item xs={1}>
                                <b>Tetracycline</b>
                            </Grid>
                            <Grid item xs={1}>

                            </Grid>
                            <Grid item xs={2}>

                                <TextField
                                    id="BLNK19"
                                    type="text"
                                    name="blnk19"
                                    onChange={handleChange}
                                    value={culture.blnk19}
                                    style={{ width: '50%' }}
                                />
                            </Grid>
                            <Grid item xs={2}>

                                <TextField
                                    id="BLNK20"
                                    type="text"
                                    onChange={handleChange}
                                    name="blnk20"
                                    value={culture.blnk20}
                                    style={{ width: '50%' }}
                                />
                            </Grid>
                            <Grid item xs={2}>
                                <b> Vancomycin</b>
                            </Grid>
                            <Grid item xs={3}>

                                <TextField
                                    id="VA"
                                    type="text"
                                    onChange={handleChange}
                                    name="VA"
                                    value={culture.VA}
                                    style={{ width: '50%' }}
                                />
                            </Grid>
                        </Grid>
                    </div>

                    <div style={{ flexGrow: 1 }}>
                        <Grid container spacing={1}>
                            <Grid item xs={1}>

                            </Grid>
                            <Grid item xs={1}>
                                <TextField
                                    id="BLNK21"
                                    type="text"
                                    onChange={handleChange}
                                    name="blnk21"
                                    value={culture.blnk21}
                                    style={{ width: '50%' }}
                                /> :
                        </Grid>
                            <Grid item xs={1}>
                                <TextField
                                    id="BLNK22"
                                    type="text"
                                    name="blnk22"
                                    onChange={handleChange}
                                    value={culture.blnk22}
                                    style={{ width: '50%' }}
                                />
                            </Grid>
                            <Grid item xs={2}>

                                <TextField
                                    id="BLNK23"
                                    type="text"
                                    name="blnk23"
                                    onChange={handleChange}
                                    value={culture.blnk23}
                                    style={{ width: '50%' }}
                                />
                            </Grid>
                            <Grid item xs={2}>
                                <TextField
                                    id="BLNK24"
                                    type="text"
                                    onChange={handleChange}
                                    value={culture.blnk24}
                                    name="blnk24"
                                    style={{ width: '50%' }}
                                /> :
                        </Grid>
                            <Grid item xs={2}>
                                <b> Chloramphenicel</b>
                            </Grid>
                            <Grid item xs={3}>
                                <TextField
                                    id="CH2"
                                    type="text"
                                    onChange={handleChange}
                                    name="CH2"
                                    value={culture.CH2}
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
                            <Grid item xs={1}>
                                <b>Interpretation : </b>
                            </Grid>

                            <Grid item xs={1}>

                            </Grid>

                            <Grid item xs={1}>
                                <b>'S' = Sensitive </b>
                            </Grid>
                            <Grid item xs={1}>

                            </Grid>

                            <Grid item xs={1}>
                                <b>'R' = Resistant </b>
                            </Grid>
                            <Grid item xs={1}>

                            </Grid>

                            <Grid item xs={1}>
                                <b>'I' = Intermediate</b>
                            </Grid>
                            <Grid item xs={1}>

                            </Grid>

                        </Grid>
                    </div>

                    <br></br>
                    <div style={{ flexGrow: 1 }}>
                        <Grid container spacing={1}>
                            <Grid item xs={1}>
                            </Grid>
                            <Grid item xs={5}>
                                <b>  Technologist: </b>
                                <TextField
                                    id="TE"
                                    type="text"
                                    name="TE"
                                    onChange={handleChange}

                                    value={culture.TE}
                                    style={{ width: '50%' }}
                                />
                            </Grid>
                            <Grid item xs={5}>
                                <b>  Reviewed by: </b>
                                <TextField
                                    id="RB"
                                    type="text"
                                    name="RB"
                                    onChange={handleChange}
                                    value={culture.RB}
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
                                <b>Date : </b>
                                <TextField
                                    id="Date1"
                                    type="date"
                                    name="DT1"
                                    value={culture.DT1}
                                    onChange={handleChange}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                /> :
                        </Grid>
                            <Grid item xs={1}>
                                <b>Sign: </b>
                                <TextField
                                    id="Sign1"
                                    type="text"
                                    name="SG1"
                                    value={culture.SG1}
                                    onChange={handleChange}
                                    style={{ width: '50%' }}
                                />
                            </Grid>
                            <Grid item xs={3}>
                            </Grid>

                            <Grid item xs={2}>
                                <b>Date : </b>
                                <TextField
                                    id="Date2"
                                    type="date"
                                    name="DT2"
                                    onChange={handleChange}
                                    value={culture.DT2}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                /> :
                        </Grid>
                            <Grid item xs={1}>
                                <b>Sign: </b>
                                <TextField
                                    id="Sign2"
                                    type="text"
                                    onChange={handleChange}
                                    name="SG2"
                                    value={culture.SG2}
                                    style={{ width: '50%' }}
                                />
                            </Grid>
                        </Grid>
                    </div>
                    <BT/>
                </div>

            </CardContent >
        </Card >
    );
}

export default memo(ChildForm12);