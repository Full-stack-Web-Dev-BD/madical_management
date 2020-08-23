import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import { Route , withRouter} from 'react-router-dom';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Checkbox from '@material-ui/core/Checkbox';
import axios from 'axios'
import Swal from 'sweetalert2'
const useStyles = makeStyles({
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

const Page1 = (props)=> {
    const classes = useStyles();
    const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));

    const [data,setData] = useState({UHID:"",date:"",ref:"",ownerName:"",address:"",tel:"",referenceNo:"",
typeMaterial:"",totalAmount:"",amountTaken:"",samplingDate:"",time:"",sampleTaken:"",
requiredAnalysis:[
    {codeNo:"",microBiological:false,physicoChemical:false},
    {codeNo:"",microBiological:false,physicoChemical:false},
    {codeNo:"",microBiological:false,physicoChemical:false}],
    sampleBy:"",profession:"",signature:"",professionalOpinion:""})
    const handleSubmit=(e)=>{
        e.preventDefault()
        axios
        .post("http://localhost:4001/api/labRequest/asmara",{
            PatientUHID:data.UHID,
            date:data.date,
            ref:data.ref,
            ownerName:data.ownerName,
            address:data.address,
            tel:data.tel,
            referenceNo:data.referenceNo,
            typeMaterial:data.typeMaterial,
            totalAmount:data.totalAmount,
            amountTaken:data.amountTaken,
            samplingDate:data.samplingDate,
            time:data.time,
            sampleTaken:data.sampleTaken,
            requiredAnalysis:data.requiredAnalysis,
            sampleBy:data.sampleBy,
            profession:data.profession,
            signature:data.signature,
            professionalOpinion:data.professionalOpinion
        })
        .then((res)=>{
            console.log("Successful")
            Swal.fire("Form Successfully Submitted ")
            props.history.push("/patientList")
        })
        .catch((error)=>{
            console.log(error)
        })
    }
    const handleChange=(e,index)=>
    {
        console.log(index)
        const target = e.target
        console.log(e.currentTarget.type)
        console.log(e.currentTarget.name)
        const value = target.type === "checkbox"? target.checked :target.value
        console.log(value)
        console.log(data)
        var copyData ={...data}
        if(!index && index !=0)
        {
            copyData[target.name] = value
         
        }
        else{
            copyData.requiredAnalysis[index][target.name] = value
        }
        setData(copyData)
    }

    return (
        <Grid container spacing={12}>
                        
        <Grid item xs={12} >
        <form style={{marginTop:'30px'}} onSubmit={handleSubmit}>
            
        <Card className={classes.root} variant="outlined">
            <CardContent>

                <Typography variant="body2" component="p">
                    Date :
                      <TextField
                        id="date"
                        name="date"
                        onChange={handleChange}
                        type="date"
                        defaultValue="2017-05-24"
                        className={classes.textField}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                    <br>
                    </br><br></br>
                    Ref :
                    <TextField
                        id="ref"
                        name="ref"
                        type="text"
                        onChange={handleChange}
                        className={classes.textField}
                    />
                    <br></br><br></br>
                    <h2>
                  
                  <u>Asmara</u>   <br>
 </br><br></br>
              </h2>
                    Owner's name :
                    <TextField
                        id="owner's_name"
                        name="ownerName"
                        type="text"
                        onChange={handleChange}
                        className={classes.textField}
                    />
                      Patient UHID :
                    <TextField
                        id="owner's_name"
                        name="UHID"
                        type="text"
                        onChange={handleChange}
                        className={classes.textField}
                    />
  <br>
                    </br><br></br>
                    <div style={{ flexGrow: 1 }}>
                        <Grid container spacing={3}>
                            <Grid item xs={3}>
                                Address :
                               <TextField
                                    id="address"
                                    name="address"
                                    type="text"
                                    onChange={handleChange}
                                    className={classes.textField}
                                />
                            </Grid>
                            <Grid item xs={3}>
                                Tel :
                               <TextField
                                    id="address"
                                    name="tel"
                                    type="text"
                                    onChange={handleChange}
                                    className={classes.textField}
                                />
                            </Grid>
                            <Grid item xs={3}>

                            </Grid>
                        </Grid>
                    </div>

                    <br>
                    </br><br></br>
                    Reference No :
                    {'    '}
                    <TextField
                        id="address"
                        name="referenceNo"
                        type="text"
                        onChange={handleChange}
                        className={classes.textField}
                    />

                    <br>
                    </br><br></br>
                    Type material :
                    {'       '}
                    <TextField
                        id="address"
                        type="text"
                        name="typeMaterial"
                        onChange={handleChange}
                        className={classes.textField}
                    />
                    <br>
                    </br><br></br>
                    Total Amount :
                    {'    '}
                    <TextField
                        id="address"
                        name="totalAmount"
                        type="text"
                        onChange={handleChange}
                        className={classes.textField}
                    />
                    <br>
                    </br><br></br>
                    Amount taken from analysis :
                    {'    '}
                    <TextField
                        id="address"
                        name="amountTaken"
                        type="text"
                       
                        onChange={handleChange}
                        className={classes.textField}
                    />
                    <br>
                    </br><br></br>
                    <div style={{ flexGrow: 1 }}>
                        <Grid container spacing={3}>
                            <Grid item xs={3}>
                                Date of Sampling :
                                <TextField
                                    id="date"
                                    name="samplingDate"
                                    type="date"
                                    defaultValue="2017-05-24"
                                    onChange={handleChange}
                                    className={classes.textField}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />
                            </Grid>
                            <Grid item xs={3}>
                                Time :
                                <TextField
                                    id="time"
                                    name="time"
                                    onChange={handleChange}
                                    type="time"
                                    defaultValue="07:30"
                                    className={classes.textField}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    inputProps={{
                                        step: 300, // 5 min
                                    }}
                                />
                            </Grid>
                            <Grid item xs={3}>

                            </Grid>
                        </Grid>
                    </div>

                    <br>
                    </br><br></br>
                    Sample taken From :
                    {'    '}
                    <TextField
                        id="address"
                        name="sampleTaken"
                        onChange={handleChange}
                        type="text"
                        className={classes.textField}
                    />
                    <br>
                    </br><br></br>

                    <h3>Required Analysis :</h3>

                    <br>
                    </br>
                    {data.requiredAnalysis.map((required,index)=>
                    {
                                return     <div style={{ flexGrow: 1 }}>
                        <Grid container spacing={3}>
                            <Grid item xs={3}>
                                Code No :
                                 <TextField
                                    id="address"
                                    name="codeNo"
                                    onChange={(e)=>handleChange(e,index)}
                                    type="text"
                                    className={classes.textField}
                                    size="medium"
                                />
                            </Grid>
                            <Grid item xs={3}>
                                Microbiological
                                <Checkbox
                                    color="primary"
                                    name="microBiological"
                                    onChange={(e)=>handleChange(e,index)}
                                    size="medium"
                                    inputProps={{ 'aria-label': 'secondary checkbox' }}
                                />
                            </Grid>
                            <Grid item xs={3}>
                                Physico-chemical
                                <Checkbox
                                    color="primary"
                                    name="physicoChemical"
                                    onChange={(e)=>handleChange(e,index)}
                                    size="medium"
                                    inputProps={{ 'aria-label': 'secondary checkbox' }}
                                />
                            </Grid>
                        </Grid>
                    </div>
 } )}

        <br>
                    </br><br></br>
                    Sampled By :
                    {'    '}
                    <TextField
                        id="address"
                        onChange={handleChange}
                        name="sampleBy"
                        type="text"
                        className={classes.textField}
                    />
                    <br>
                    </br><br></br>

                    <div style={{ flexGrow: 1 }}>
                        <Grid container spacing={3}>
                            <Grid item xs={3}>
                                Profession :
                               <TextField
                                    id="address"
                                    name="profession"
                                    type="text"
                                    onChange={handleChange}
                                    className={classes.textField}
                                />
                            </Grid>
                            <Grid item xs={3}>
                                Signature :
                               <TextField
                                    id="address"
                                    name="signature"
                                    onChange={handleChange}
                                    type="text"
                                    className={classes.textField}
                                />
                            </Grid>
                            <Grid item xs={3}>

                            </Grid>
                        </Grid>
                    </div>

                    <br>
                    </br><br></br>
                    Professional Opinion :
                    {'    '}
                    <TextField
                     onChange={handleChange}
                     name="professionalOpinion"
                        id="address"
                        type="text"
                        style={{ width: '100%' }}
                        className={classes.textField}
                    />
                </Typography>
    <button type="submit" class="btn btn-primary">Submit</button>
            </CardContent>
        </Card>
        </form>
        </Grid>
        </Grid>
    );
}
export default withRouter(Page1)
