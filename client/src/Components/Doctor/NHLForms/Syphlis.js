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
import DSidebar from '../Dsidebar'
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

export default function Syphlis() {
    var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24]
    const classes = useStyles();
    const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    return (
        <div>
        <DSidebar/>

<div style={{marginLeft:'200px',padding:'20px'}}>
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

                    <div style={{ flexGrow: 1 }}>
                        <Grid container spacing={1}>
                            <Grid item xs={1}>
                            </Grid>
                            <Grid item xs={6}>
                                <h3><b><u>SYPHILIS samples for quality control to be sent to NHL (Monthly)</u></b></h3>
                            </Grid>
                        </Grid>
                    </div>
                    <br></br>
                    <div style={{ flexGrow: 1 }}>
                        <Grid container spacing={1}>
                            <Grid item xs={1}>
                            </Grid>
                            <Grid item xs={2}>
                                <b>  Name of HTC SITE : </b>
                                <TextField
                                    id="address"
                                    type="text"
                                    className={classes.textField}
                                    style={{ width: '30%' }}
                                />
                            </Grid>
                            <Grid item xs={2}>
                                <b>   ZOBA : </b>
                                <TextField
                                    id="address"
                                    type="text"
                                    className={classes.textField}
                                />
                            </Grid>
                            <Grid item xs={2}>
                                <b>  SUB-ZOBA : </b>
                                <TextField
                                    id="address"
                                    type="text"
                                    className={classes.textField}
                                    style={{ width: '50%' }}
                                />
                            </Grid>
                            <Grid item xs={2}>
                                <b>  TOWN : </b>
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
                        <Grid container spacing={1}>

                            <Grid item xs={1}>
                            </Grid>
                            <Grid item xs={4}>
                                <b> Sent by: </b>
                                <TextField
                                    id="address"
                                    type="text"
                                    className={classes.textField}
                                    style={{ width: '60%' }}
                                />
                            </Grid>
                            <Grid item xs={4}>
                                <b>   Date samples sent: </b>
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


                    <br></br><br></br>
                    <div style={{ flexGrow: 1 }}>
                        <Grid container spacing={3}>

                            <Grid item xs={1}>
                            </Grid>
                            <Grid item xs={10}>
                                <table style={{ width: '90%' }}>
                                    <th >
                                        #
                                    </th>
                                    <th >
                                        code No
                                   </th>
                                    <th >
                                        Age
                                   </th>
                                    <th>
                                        sex
                                   </th>
                                    <th >
                                        Health Facility Result
                                    </th>
                                    <th >
                                        NHL Result
                                    </th>
                                    <th >
                                        REMARK
                                   </th>

                                    <tr>
                                        <td>
                                            <b>1.</b>
                                        </td>
                                        <td>

                                        </td>
                                        <td>

                                        </td>
                                        <td>

                                        </td>
                                        <td>
                                            <tr>
                                                <td style={{ border: 'none' }}>
                                                    <b>RPR</b>
                                                </td>
                                                <td style={{ border: 'none' }}>

                                                </td>
                                            </tr>
                                        </td>
                                        <td style={{ border: 'none' }}>
                                            <tr>
                                                <td style={{ border: 'none' }}>
                                                    <b>TPHA

                                                    </b>
                                                </td>
                                                <td style={{ border: 'none' }}>

                                                </td>
                                                <td style={{ border: 'none' }}>

                                                </td>
                                            </tr>
                                        </td>
                                        <td>

                                        </td>
                                    </tr>

                                    {arr.map(function (object, i) {
                                        return <tr>
                                            <td>
                                                <b>{i + 2}.</b>
                                            </td>
                                            <td>
                                                <TextField
                                                    id="address"
                                                    type="text"
                                                    className={classes.textField}
                                                    InputProps={{ disableUnderline: true }}
                                                />
                                            </td>
                                            <td>
                                                <TextField
                                                    id="address"
                                                    type="text"
                                                    className={classes.textField}
                                                    InputProps={{ disableUnderline: true }}
                                                />
                                            </td>
                                            <td>
                                                <TextField
                                                    id="address"
                                                    type="text"
                                                    className={classes.textField}
                                                    InputProps={{ disableUnderline: true }}
                                                />
                                            </td>
                                            <td>
                                                <tr>
                                                    <td style={{ border: 'none' }}>
                                                        <TextField
                                                            id="address"
                                                            type="text"
                                                            className={classes.textField}
                                                            InputProps={{ disableUnderline: true }}
                                                        />
                                                    </td>
                                                    <td style={{ borderTop: 'none', borderBottom: 'none', borderRight: 'none' }}>
                                                        <TextField
                                                            id="address"
                                                            type="text"
                                                            className={classes.textField}
                                                            InputProps={{ disableUnderline: true }}
                                                        />
                                                    </td>
                                                </tr>
                                            </td>
                                            <td>
                                                <tr >
                                                    <td style={{ border: 'none' }}>
                                                        <TextField
                                                            id="address"
                                                            type="text"
                                                            className={classes.textField}
                                                            InputProps={{ disableUnderline: true }}
                                                        />
                                                    </td>

                                                    <td style={{ borderTop: 'none', borderBottom: 'none', borderRight: 'none' }}>
                                                        <TextField
                                                            id="address"
                                                            type="text"
                                                            className={classes.textField}
                                                            InputProps={{ disableUnderline: true }}
                                                        />
                                                    </td>
                                                    <td style={{ borderTop: 'none', borderBottom: 'none', borderRight: 'none' }}>
                                                        <TextField
                                                            id="address"
                                                            type="text"
                                                            className={classes.textField}
                                                            InputProps={{ disableUnderline: true }}
                                                        />
                                                    </td>
                                                </tr>
                                            </td>
                                            <td>
                                                <TextField
                                                    id="address"
                                                    type="text"
                                                    className={classes.textField}
                                                    InputProps={{ disableUnderline: true }}
                                                />
                                            </td>
                                        </tr>

                                    })}

                                </table>
                            </Grid>
                        </Grid>
                    </div>

                    <div style={{ flexGrow: 1 }}>

                        <Grid container spacing={1}>
                            <Grid item xs={1}>

                            </Grid>
                            <Grid item xs={8}>
                                <br></br>
                                <b>Date SAMPLES RECEIVED AT NHL </b>
                                <TextField
                                    id="address"
                                    type="text"
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
                                <b>   REPORTED BY NAME : </b>
                                <TextField
                                    id="address"
                                    type="text"
                                    className={classes.textField}
                                />
                            </Grid>
                            <Grid item xs={3}>
                                <b>   DATE : </b>
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
                            <Grid item xs={3}>
                                <b>  SIG : </b>
                                <TextField
                                    id="address"
                                    type="text"
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
                                <b>  REVIEWED BY NAME : </b>
                                <TextField
                                    id="address"
                                    type="text"
                                    className={classes.textField}
                                />
                            </Grid>
                            <Grid item xs={3}>
                                <b>   DATE : </b>
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
                            <Grid item xs={3}>
                                <b>  SIG : </b>
                                <TextField
                                    id="address"
                                    type="text"
                                    className={classes.textField}
                                />
                            </Grid>
                            <Grid item xs={3}>

                            </Grid>

                        </Grid>
                    </div>

                </Typography >

            </CardContent >
        </Card >
        </div>
        </div>
    );
}
