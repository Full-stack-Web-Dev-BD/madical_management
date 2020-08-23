import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Checkbox from '@material-ui/core/Checkbox';
import axios from 'axios'
import Pdf from "react-to-pdf";
const useStyles = makeStyles({
    brdr: {
        border: '1px solid black',
        borderCollapse: 'collapse'
    },
    textField:{
        marginTop:'-10px'
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

export default function Page2({handleChange,handleChanges,data,submitter,retrieve,stat}) {
    const classes = useStyles();
    const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));

    return (
        <Grid container spacing={12} >
                        
        <Grid item xs={12} >
        <form style={{marginTop:'30px'}}>
        <Card  variant="outlined" >
            <CardContent>

                <Typography variant="body2" component="p">

                        <Grid container xs={12} >
                            <Grid item xs={4 }>

                            </Grid>

                            <Grid item xs={7}>
                            <h5><u><b>NATONAL HEALTH LABORATORY </b></u></h5>
                            <br></br>
                                <h5><u><b>FINAL REPORT OF TB LABORATORY DEPARTMENT</b></u></h5>
                            </Grid>

                        </Grid>
                
                    <br></br><br></br>

                    <div >
                        <Grid container xs={12} >
                            <Grid item xs={5}>
                            <TextField    id="address"
                                    name="PatientUHID"
                                    value={data.PatientUHID}
                                    type="text"
                                    onChange={handleChange}
                                    className={classes.textField}
                                />
                                <button class="btn btn-primary" onClick={retrieve} >Get Data</button>
                            </Grid>
                            <Grid item xs={4}>
                                PATIENT NAME :
                              
                                <TextField
                           name="firstName"
                            type="text"
                            value={data.firstName}
                            className={classes.textField}
                            onChange={handleChange}
                            InputLabelProps={{
                               shrink: true,
                           }}
                        />

                          
                            </Grid>
                            <br></br>
                            <Grid item xs={3} >
                                SEX.
                               
                                <TextField
                                    id="address"
                                    name="sex"
                                    value={data.sex}
                                    onChange={handleChange}
                                    type="text"
                                    className={classes.textField}
                                />
                               
                           
                            </Grid>
                            <br></br>
                       
                        </Grid>
                    </div>
                    <br></br>
                        <Grid container xs={12} >
                            <Grid item xs={3}>
                            ERITREAN ID
                            <TextField
                                    id="address"
                                    type="text"
                                    value={data.eritreanID}
                                    onChange={handleChange}
                                    name="eritreanID"
                                    className={classes.textField}
                                    style={{ width: '35%' }}
                                />
                            </Grid>
                            <Grid item xs={4}>
                                DATE OF BIRTH :
                                <TextField
                                    id="text"
                                    name="dateOfBirth"
                                    value={data.dateOfBirth}
                           
                                    type="text"
                                    className={classes.textField}
                               
                                />
                            </Grid>
                            <br></br>
                            <Grid item xs={5}>
                                ADDRESS
                                <TextField
                                    id="address"
                                    onChange={handleChange}
                                    value={data.address}
                                    type="text"
                                    name="address"
                                    className={classes.textField}
                                />

                            </Grid>
                            <Grid item xs={3}>

                            </Grid>
                        </Grid>
                  
                    <Grid >
                            <Grid item xs={2}>

                            </Grid>
                            <br></br>
                            <Grid item xs={4}>
                                LAB SERIAL NO :
                                 <TextField
                                    id="address"
                                    onChange={handleChange}
                                    value={data.labSerial}
                                    name="labSerial"
                                    type="text"
                                    className={classes.textField}
                                />
                                <br></br>
                                ROUND
                                <TextField
                                    id="address"
                                    onChange={handleChange}
                                    type="text"
                                    value={data.round}
                                    name="round"
                                    className={classes.textField}
                                    style={{ width: '10%' }}

                                />
                            </Grid>
                            <br></br>
                            <Grid item xs={4}>
                                FACULTY NAME
                            <TextField
                                    id="address"
                                    name="facultyName"
                                    value={data.facultyName}
                                    onChange={handleChange}
                                    type="text"
                                    className={classes.textField}
                                />

                            </Grid>
                        </Grid>
                   
                    <br></br><br></br>
                    <div style={{ flexGrow: 1 }}>
                        <Grid >
                            <Grid item xs={2}>

                            </Grid>
                            <Grid item xs={4}>
                                DOCTOR'S NAME
                                <TextField
                                    id="address"
                                    type="text"
                                    value={data.doctorName}
                                    onChange={handleChange}
                                    name="doctorName"
                                    className={classes.textField}
                                />
                            </Grid>
                            <br></br>
                            <Grid item xs={6}>
                                DATE OF REPORT :
                                {stat === "update"? 
                                 <TextField
                                 id="date"
                                 name="referralDate"
                                 type="text"
                                 value={data.referralDate}
                                 defaultValue="2017-05-24"
                                 className={classes.textField}
                                 InputLabelProps={{
                                     shrink: true,
                                 }}
                             />:
                                <TextField
                                    id="date"
                                    name="referralDate"
                                    type="date"
                                    onChange={handleChange}
                                    defaultValue="2017-05-24"
                                    className={classes.textField}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />
                                }
                            </Grid>
                            <Grid item xs={3}>

                            </Grid>
                        </Grid>
                    </div>

                    <br></br><br></br>
                    <div style={{ flexGrow: 1 }}>
                        <Grid >
                            <Grid item xs={5}>

                            </Grid>

                            <Grid item xs={6}>
                                <h2><u><b>LAB FINDING</b></u></h2>
                            </Grid>

                        </Grid>
                    </div>

                    <br></br>
                    <div style={{ flexGrow: 1 }}>
                        <Grid >
                            <Grid item xs={2}>
                            </Grid>
                        
                            <Grid item xs={6}>
                                MGIT CULTURE :
                                 <TextField
                                    id="address"
                                    type="text"
                                    onChange={handleChange}
                                    name="mgitCulture"
                                    value={data.mgitCulture}
                                    className={classes.textField}
                                    style={{ width: '60%' }}
                                />
                            </Grid>
                        </Grid>
                    </div>
                    <br></br>
                    <div style={{ flexGrow: 1 }}>
                        <Grid >
                            <Grid item xs={2}>
                            </Grid>
                            <Grid item xs={6}>
                                MGIT AFB Microscopy :
                                 <TextField
                                    id="address"
                                    type="text"
                                    onChange={handleChange}
                                    name="mgitMicroscopy"
                                    value={data.mgitMicroscopy}
                                    className={classes.textField}
                                    style={{ width: '60%' }}
                                />
                            </Grid>
                        </Grid>
                    </div>
                    <br></br>
                    <div style={{ flexGrow: 1 }}>
                        <Grid c>
                            <Grid item xs={2}>
                            </Grid>
                            <Grid item xs={6}>
                                LJ CULTURE :
                                 <TextField
                                    id="address"
                                    type="text"
                                    onChange={handleChange}
                                    value={data.ljCulture}
                                    name="ljCulture"
                                    className={classes.textField}
                                    style={{ width: '60%' }}
                                />
                            </Grid>
                        </Grid>
                    </div>
                    <br></br>
                    <div style={{ flexGrow: 1 }}>
                        <Grid >
                            <Grid item xs={2}>
                            </Grid>
                            <Grid item xs={6}>
                                GeneXpert/ID Rapid test :
                                 <TextField
                                    id="address"
                                    onChange={handleChange}
                                    type="text"
                                    value={data.geneXpertRapidTest}
                                    name="geneXpertRapidTest"
                                    className={classes.textField}
                                    style={{ width: '60%' }}
                                />
                            </Grid>
                        </Grid>
                    </div>

                    <br></br><br></br>
                    <div style={{ flexGrow: 1 }}>
                        <Grid >
                            <Grid item xs={5}>

                            </Grid>

                            <Grid item xs={6}>
                                <h2><u><b>DST RESULT</b></u></h2>
                            </Grid>

                        </Grid>
                    </div>

                    <div style={{ flexGrow: 1 }}>
                        <Grid>
                            <Grid item xs={2}>
                            </Grid>
                            <Grid item xs={10}>
                                <table style={{ border: '1px solid black', width: '70%' }}>
                                    <th className={classes.brdr}>
                                        MGIT first line DST
                                   </th>
                                    <th className={classes.brdr}>
                                        MGIT Second line DST
                                   </th>

                                    <tr>
                                        <td>
                                            <table className={classes.brdr} >
                                                <tr className={classes.brdr}>
                                                    <td className={classes.brdr}>Drugs</td>
                                                    <td className={classes.brdr} style={{ width: '100%' }}>Result</td>
                                                </tr>
                                                <tr className={classes.brdr}>
                                                    <td className={classes.brdr}>Stremptomycin</td>
                                                    <td className={classes.brdr}> 
                                                     <TextField
                                    id="address"
                                    type="text"
                                    onChange={handleChanges}
                                    name="stremptomycin"
                                    value={data.DST['stremptomycin']}
                                    className={classes.textField}
                                /></td>
                                                </tr>
                                                <tr className={classes.brdr}>
                                                    <td className={classes.brdr}>Isoniazed</td>
                                                    <td className={classes.brdr}>
                                                    <TextField
                                    id="address"
                                    onChange={handleChanges}
                                    type="text"
                                    name="isoniazed"
                                    value={data.DST['isoniazed']}
                                    className={classes.textField}
                                />
                                                    </td>
                                                </tr>
                                                <tr className={classes.brdr}>
                                                    <td className={classes.brdr}>Rifampcin</td>
                                                    <td className={classes.brdr}>
                                                    <TextField
                                    id="address"
                                    type="text"
                                    onChange={handleChanges}
                                    name="rifampcin"
                                    value={data.DST['rifampcin']}
                                    className={classes.textField}
                                />
                                                    </td>
                                                </tr>
                                                <tr className={classes.brdr}>
                                                    <td className={classes.brdr}>Rthambutol</td>
                                                    <td className={classes.brdr}> 
                                                    <TextField
                                    id="address"
                                    type="text"
                                    onChange={handleChanges}
                                    value={data.DST['rthambutol']}
                                    className={classes.textField}
                                    name="rthambutol"
                                />
                                </td>
                                                </tr>
                                                <tr className={classes.brdr}>
                                                    <td className={classes.brdr}>Pyrazinamide</td>
                                                    <td className={classes.brdr}>
                                                    <TextField
                                    id="address"
                                    type="text"
                                    onChange={handleChanges}
                                    name="pyrazinamide"
                                    value={data.DST['pyrazinamide']}
                                    className={classes.textField}
                                />
                                                    </td>
                                                </tr>
                                            </table>
                                        </td>

                                        <td>
                                            <table className={classes.brdr}>
                                                <tr className={classes.brdr}>
                                                    <td className={classes.brdr}>Drugs</td>
                                                    <td className={classes.brdr} style={{ width: '100%' }}>Result</td>
                                                </tr>
                                                <tr className={classes.brdr}>
                                                    <td className={classes.brdr}>Amikacin</td>
                                                    <td className={classes.brdr}>
                                                    <TextField
                                    id="address"
                                    type="text"
                                    onChange={handleChanges}
                                    value={data.DST['amikacin']}
                                    name="amikacin"
                                
                                    className={classes.textField}
                                />
                                                    </td>
                                                </tr>
                                                <tr className={classes.brdr}>
                                                    <td className={classes.brdr}>Capreomycin</td>
                                                    <td className={classes.brdr}>
                                                    <TextField
                                    id="address"
                                    type="text"
                                    value={data.DST['capreomycin']}
                                    onChange={handleChanges}
                                    name="capreomycin"
                                   
                                    className={classes.textField}
                                />
                                                    </td>
                                                </tr>
                                                <tr className={classes.brdr}>
                                                    <td className={classes.brdr}>Kanamycin</td>
                                                    <td className={classes.brdr}>
                                                    <TextField
                                    id="address"
                                    type="text"
                                    onChange={handleChanges}
                                    value={data.DST['kanamycin']}
                                    name="kanamycin"
                                    className={classes.textField}
                                />
                                                    </td>
                                                </tr>
                                                <tr className={classes.brdr}>
                                                    <td className={classes.brdr}>Levloxacin</td>
                                                    <td className={classes.brdr}>
                                                    <TextField
                                    id="address"
                                    onChange={handleChanges}
                                    type="text"
                                    name="levloxacin"
                                    value={data.DST['levloxacin']}
                                   
                                    className={classes.textField}
                                />
                                                    </td>
                                                </tr>
                                                <tr className={classes.brdr}>
                                                    <td className={classes.brdr}>Ofloxacin</td>
                                                    <td className={classes.brdr}>
                                                    <TextField
                                    id="address"
                                    type="text"
                                    value={data.DST['ofloxacin']}
                                    onChange={handleChanges}
                                    name="ofloxacin"
                                    className={classes.textField}
                                />
                                                    </td>
                                                </tr>

                                            </table>
                                        </td>
                                    </tr>
                                </table>
                            </Grid>
                        </Grid>
                    </div>

                    <br></br> <br></br>
                    <div style={{ flexGrow: 1 }}>
                        <Grid >
                            <Grid item xs={2}>
                            </Grid>
                            <Grid item xs={6}>
                                <b> RESULT : </b>
                                <TextField
                                    id="address"
                                    type="text"
                                    name="result"
                                    value={data.result}
                                    onChange={handleChange}
                                    className={classes.textField}
                                    style={{ width: '50%' }}
                                />
                            </Grid>
                        </Grid>
                    </div>

                    <br></br>
                    <div style={{ flexGrow: 1 }}>
                        <Grid >
                            <Grid item xs={2}>
                            </Grid>
                            <Grid item xs={6}>
                                COMMENTS :
                                 <TextField
                                    id="address"
                                    type="text"
                                    onChange={handleChange}
                                    name="comments"
                                    value={data.comments}
                                    className={classes.textField}
                                    style={{ width: '60%' }}
                                />
                            </Grid>
                        </Grid>
                    </div>

                    <br></br><br></br>

                    <div style={{ flexGrow: 1 }}>
                        <Grid >
                            <Grid item xs={2}>

                            </Grid>
                            <Grid item xs={4}>
                                Reported By :
                               <TextField
                                    id="address"
                                    type="text"
                                    onChange={handleChange}
                                    name="reportedBy"
                                    value={data.reportedBy}
                                    className={classes.textField}
                                    style={{ width: '45%' }}
                                />
                            </Grid>
                            <Grid item xs={6}>
                                Recieved By :
                                <TextField
                                    id="address"
                                    name="recievedBy"
                                    value={data.recievedBy}
                                    onChange={handleChange}
                                    type="text"
                                    className={classes.textField}
                                />

                            </Grid>
                            <Grid item xs={3}>

                            </Grid>
                        </Grid>
                        {stat === "done"? "":
                        <button class="btn btn-primary" onClick={submitter}>Submit</button>
                            }
                    </div>

                </Typography>

            </CardContent>
        </Card >
        </form>
        </Grid></Grid>
    );
}
