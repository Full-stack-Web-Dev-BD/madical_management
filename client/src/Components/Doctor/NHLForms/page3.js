import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Checkbox from '@material-ui/core/Checkbox';

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

export default function Page3() {
    const classes = useStyles();
    const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    return (
        <Card className={classes.root} variant="outlined" >
            <CardContent>

                <Typography variant="body2" component="p">

                    <div style={{ flexGrow: 1 }}>
                        <Grid container spacing={3}>

                            <Grid item xs={4}>
                                <b>Speciemen No :</b>
                                <TextField
                                    id="address"
                                    type="text"
                                    className={classes.textField}
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <b> Collection Date :</b>
                                <TextField
                                    id="date"

                                    type="date"
                                    defaultValue="2017-05-24"
                                    className={classes.textField}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />
                            </Grid>
                        </Grid>
                    </div>

                    <div style={{ flexGrow: 1 }}>
                        <Grid container spacing={3}>

                            <Grid item xs={4}>
                                <b>Zoba :</b>
                                <TextField
                                    id="address"
                                    type="text"
                                    className={classes.textField}
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <b>Name & Type of the Health Facility :</b>
                                <TextField
                                    id="address"
                                    type="text"
                                    className={classes.textField}
                                />
                            </Grid>
                        </Grid>
                    </div>
                    <br></br>

                    <div style={{ flexGrow: 1 }}>
                        <Grid container spacing={3}>
                            <Grid item xs={4}>
                                <b>MDR/TB Regisyeration Number :</b>
                                <TextField
                                    id="address"
                                    type="text"
                                    className={classes.textField}
                                />
                            </Grid>

                        </Grid>
                    </div>

                    <div style={{ flexGrow: 1 }}>
                        <Grid container spacing={3}>

                            <Grid item xs={6}>
                                <h2><b>Patient Identification</b></h2>
                            </Grid>

                        </Grid>
                    </div>

                    <div style={{ flexGrow: 1 }}>
                        <Grid container spacing={3}>

                            <Grid item xs={6}>
                                <b>Name of Paitent :</b>
                                <TextField
                                    id="address"
                                    type="text"
                                    className={classes.textField}
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <b>Sex :</b>
                                <TextField
                                    id="address"
                                    type="text"
                                    className={classes.textField}
                                />
                            </Grid>
                        </Grid>
                    </div>

                    <div style={{ flexGrow: 1 }}>
                        <Grid container spacing={3}>

                            <Grid item xs={3}>
                                <b>Date of Birth :</b>
                                <TextField
                                    id="address"
                                    type="text"
                                    className={classes.textField}
                                />
                            </Grid>
                            <Grid item xs={3}>
                                <b>Eritrean ID :</b>
                                <TextField
                                    id="address"
                                    type="text"
                                    className={classes.textField}
                                />
                            </Grid>
                            <Grid item xs={4}>
                                <b>Tel. </b>
                                <TextField
                                    id="address"
                                    type="text"
                                    className={classes.textField}
                                />
                            </Grid>
                        </Grid>
                    </div>

                    <div style={{ flexGrow: 1 }}>
                        <Grid container spacing={3}>

                            <Grid item xs={6}>
                                <b>Ward/Department (admitted patients) :</b>
                                <TextField
                                    id="address"
                                    type="text"
                                    className={classes.textField}
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <b>Address :</b>
                                <TextField
                                    id="address"
                                    type="text"
                                    className={classes.textField}
                                />
                            </Grid>
                        </Grid>
                    </div>

                    <div style={{ flexGrow: 1 }}>
                        <Grid container spacing={3}>

                            <Grid item xs={6}>
                                <h2><b>Disease Size and Type</b></h2>
                            </Grid>

                        </Grid>
                    </div>

                    <div style={{ flexGrow: 1 }}>
                        <Grid container spacing={3}>
                            <Grid item xs={1}>
                                <b>Site :</b>
                            </Grid>

                            <Grid item xs={3}>
                                <b>Pulmonary </b>
                                <Checkbox
                                    color="primary"
                                    size="medium"
                                    inputProps={{ 'aria-label': 'secondary checkbox' }}
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <b>Extra-pulmonary (specify)</b>
                                <Checkbox
                                    color="primary"
                                    size="medium"
                                    inputProps={{ 'aria-label': 'secondary checkbox' }}
                                />
                                <TextField
                                    id="address"
                                    type="text"
                                    className={classes.textField}
                                />
                            </Grid>
                        </Grid>
                    </div>


                    <div style={{ flexGrow: 1 }}>
                        <Grid container spacing={3}>
                            <Grid item xs={1}>
                                <b>Type:</b>
                            </Grid>

                            <Grid item xs={4}>
                                <b>New(or trated for less than 1 month) </b>
                                <Checkbox
                                    color="primary"
                                    size="medium"
                                    inputProps={{ 'aria-label': 'secondary checkbox' }}
                                />
                                <b>Relapce </b>
                                <Checkbox
                                    color="primary"
                                    size="medium"
                                    inputProps={{ 'aria-label': 'secondary checkbox' }}
                                /><b>Failure </b>
                                <Checkbox
                                    color="primary"
                                    size="medium"
                                    inputProps={{ 'aria-label': 'secondary checkbox' }}
                                />
                            </Grid>

                        </Grid>
                    </div>

                    <div style={{ flexGrow: 1 }}>
                        <Grid container spacing={3}>
                            <Grid item xs={1}>

                            </Grid>

                            <Grid item xs={5}>
                                <b>Return after default</b>
                                <Checkbox
                                    color="primary"
                                    size="medium"
                                    inputProps={{ 'aria-label': 'secondary checkbox' }}
                                />

                                <b>Chronic</b>
                                <Checkbox
                                    color="primary"
                                    size="medium"
                                    inputProps={{ 'aria-label': 'secondary checkbox' }}
                                />
                                <b>MDR Contact </b>
                                <Checkbox
                                    color="primary"
                                    size="medium"
                                    inputProps={{ 'aria-label': 'secondary checkbox' }}
                                /><b>Uncertain </b>
                                <Checkbox
                                    color="primary"
                                    size="medium"
                                    inputProps={{ 'aria-label': 'secondary checkbox' }}
                                />
                            </Grid>

                        </Grid>
                    </div>

                    <div style={{ flexGrow: 1 }}>
                        <Grid container spacing={3}>

                            <Grid item xs={6}>
                                <h2><b>AFB Microscopy Result of Health facility</b></h2>
                            </Grid>

                        </Grid>
                    </div>
                    <br></br>
                    <div style={{ flexGrow: 1 }}>
                        <Grid container spacing={12}>

                            <Grid item xs={6}>
                                <b> Smear : </b>
                                <b>Direact Smear :</b>
                                <TextField
                                    id="address"
                                    type="text"
                                    className={classes.textField}
                                    style={{ width: '10%' }}
                                />
                                <b>Concentrated Smear :</b>
                                <TextField
                                    id="address"
                                    type="text"
                                    className={classes.textField}
                                    style={{ width: '10%' }}
                                />
                                <br></br><br></br>

                                <b>    Staining :</b>
                                <b>Hot Zichi Neelson :</b>
                                <TextField
                                    id="address"
                                    type="text"
                                    className={classes.textField}
                                    style={{ width: '10%' }}
                                />
                                <b>Cold Staining :</b>
                                <TextField
                                    id="address"
                                    type="text"
                                    className={classes.textField}
                                    style={{ width: '10%' }}
                                />
                                <b>Fluoresc :</b>
                                <TextField
                                    id="address"
                                    type="text"
                                    className={classes.textField}
                                    style={{ width: '10%' }}
                                />
                                <br></br><br></br>

                                <b>  HIV-status :</b>
                                <b>Pos :</b>
                                <TextField
                                    id="address"
                                    type="text"
                                    className={classes.textField}
                                    style={{ width: '10%' }}
                                />
                                <b>Negative :</b>
                                <TextField
                                    id="address"
                                    type="text"
                                    className={classes.textField}
                                    style={{ width: '10%' }}
                                />
                                <b>Unknown :</b>
                                <TextField
                                    id="address"
                                    type="text"
                                    className={classes.textField}
                                    style={{ width: '10%' }}
                                />
                                <br></br><br></br>

                            </Grid>

                            <Grid item xs={5}>
                                <table className={classes.brdr} style={{ width: '100%' }} >
                                    <th className={classes.brdr}>
                                        NO
                                </th>
                                    <th className={classes.brdr}>
                                        NEG
                                </th>
                                    <th className={classes.brdr}>
                                        1-9
                                </th>
                                    <th className={classes.brdr}>
                                        1+
                                </th>
                                    <th className={classes.brdr}>
                                        2+
                                </th>
                                    <th className={classes.brdr}>
                                        3+
                                </th>
                                    <tr className={classes.brdr}>
                                        <td className={classes.brdr}>1</td>
                                        <td className={classes.brdr}></td>

                                        <td className={classes.brdr}></td>
                                        <td className={classes.brdr}></td>

                                        <td className={classes.brdr}></td>
                                        <td className={classes.brdr}></td>
                                    </tr>
                                    <tr className={classes.brdr}>

                                        <td className={classes.brdr}>2</td>
                                        <td className={classes.brdr}></td>

                                        <td className={classes.brdr}></td>
                                        <td className={classes.brdr}></td>

                                        <td className={classes.brdr}></td>
                                        <td className={classes.brdr}></td>
                                    </tr>
                                    <tr className={classes.brdr}>

                                        <td className={classes.brdr}>3</td>
                                        <td className={classes.brdr}></td>

                                        <td className={classes.brdr}></td>
                                        <td className={classes.brdr}></td>

                                        <td className={classes.brdr}></td>
                                        <td className={classes.brdr}></td>
                                    </tr>
                                </table>
                            </Grid>

                        </Grid>

                    </div>

                    <div style={{ flexGrow: 1 }}>
                        <Grid container spacing={3}>
                            <Grid item xs={5}>
                                <b>Health Facility GeneXpert Result :</b>
                                <TextField
                                    id="address"
                                    type="text"
                                    className={classes.textField}
                                    style={{ width: "60%" }}
                                />
                            </Grid>

                        </Grid>
                    </div>

                    <div style={{ flexGrow: 1 }}>
                        <Grid container spacing={3}>

                            <Grid item xs={3}>
                                <b>Reason for Request :</b>
                                <b>Diagnosis :</b>
                                <TextField
                                    id="address"
                                    type="text"
                                    className={classes.textField}
                                    style={{ width: '30%' }}
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <b> on treatment/follow up at :</b>
                                <TextField
                                    id="address"
                                    type="text"
                                    className={classes.textField}
                                />
                                <b> months After Treatment/Treatment</b>
                            </Grid>

                        </Grid>
                    </div>

                    <div style={{ flexGrow: 1 }}>
                        <Grid container spacing={3}>

                            <Grid item xs={3}>
                                <b>Follow-up at :</b>

                                <TextField
                                    id="address"
                                    type="text"
                                    className={classes.textField}
                                    style={{ width: '30%' }}
                                />
                                <b>months</b>
                            </Grid>
                            <Grid item xs={6}>
                                <b> Round</b>
                                <TextField
                                    id="address"
                                    type="text"
                                    className={classes.textField}
                                />
                            </Grid>

                        </Grid>
                    </div>

                    <div style={{ flexGrow: 1 }}>
                        <Grid container spacing={3}>

                            <Grid item xs={3}>
                                <b>Speciemen Type : Sputum</b>

                                <TextField
                                    id="address"
                                    type="text"
                                    className={classes.textField}
                                    style={{ width: '30%' }}
                                />

                            </Grid>
                            <Grid item xs={6}>
                                <b> others(specify)</b>
                                <TextField
                                    id="address"
                                    type="text"
                                    className={classes.textField}
                                />
                            </Grid>

                        </Grid>
                    </div>

                    <div style={{ flexGrow: 1 }}>
                        <Grid container spacing={3}>

                            <Grid item xs={12}>
                                <b>Requested tests Type : AFB</b>

                                <TextField
                                    id="address"
                                    type="text"
                                    className={classes.textField}
                                    style={{ width: '15%' }}
                                />
                                <b> Culture</b>
                                <TextField
                                    id="address"
                                    type="text"
                                    className={classes.textField}
                                />

                                <b> DST(First</b>
                                <TextField
                                    id="address"
                                    type="text"
                                    className={classes.textField}
                                    style={{ width: '5%' }}
                                />
                                <b> /</b>
                                <b> Second line</b>
                                <TextField
                                    id="address"
                                    type="text"
                                    className={classes.textField}
                                    style={{ width: '5%' }}
                                />
                                <b>  )</b>

                            </Grid>
                        </Grid>
                    </div>

                    <div style={{ flexGrow: 1 }}>
                        <Grid container spacing={3}>

                            <Grid item xs={4}>
                                <b>If Request for culture/DST: First Culture/DST</b>

                                <TextField
                                    id="address"
                                    type="text"
                                    className={classes.textField}
                                    style={{ width: '30%' }}
                                />

                            </Grid>
                            <Grid item xs={6}>
                                <b> previously reported on :</b>
                                <TextField
                                    id="date"

                                    type="date"
                                    defaultValue="2017-05-24"
                                    className={classes.textField}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />
                            </Grid>

                        </Grid>
                    </div>

                    <div style={{ flexGrow: 1 }}>
                        <Grid container spacing={3}>

                            <Grid item xs={8}>
                                <b>Person requesting Examination : Name</b>

                                <TextField
                                    id="address"
                                    type="text"
                                    className={classes.textField}
                                    style={{ width: '50%' }}
                                />

                            </Grid>
                        </Grid>
                    </div>

                    <div style={{ flexGrow: 1 }}>
                        <Grid container spacing={3}>

                            <Grid item xs={4}>
                                <b> Date :</b>
                                <TextField
                                    id="date"
                                    type="date"
                                    defaultValue="2017-05-24"
                                    className={classes.textField}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />

                            </Grid>
                            <Grid item xs={6}>
                                <b>Signature :</b>
                                <TextField
                                    id="address"
                                    type="text"
                                    className={classes.textField}
                                />
                            </Grid>
                        </Grid>
                    </div>
                </Typography>

            </CardContent>
        </Card >
    );
}
