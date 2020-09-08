import React,{useState} from 'react';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Checkbox from '@material-ui/core/Checkbox';
import { makeStyles } from '@material-ui/core/styles';
import DSidebar from '../Dsidebar'
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Swal from 'sweetalert2'
import axios from 'axios'
import DatePicker from 'react-date-picker';
const useStyles = makeStyles((theme) => ({
    
    brdr: {
      border: '1px solid black',
      borderCollapse: 'collapse'

  }
}));

const ChemComp = ({setDate,chemistry,retrieve,initialChanged,initialChange,setDates}) => {
    const classes = useStyles();
    const [today,setToday] = useState(new Date())
    return ( 
        <div style={{padding:'20px'}}>
        <center>  <Typography variant="h4" style={{marginRight:'15px'}}><u>Chemistry FORM</u></Typography></center>
       <Grid container spacing={3} style={{marginTop:'20px'}}>
      {/* <Grid item xs={12}> <div class="form-row" style={{paddingTop:'20px'}}>
     <div class="form-group col-md-4">
     
     <input type="text" onChange={initialChange} class="form-control"  name="PatientUHID"  required id="inputEmail4" placeholder="UHID"/>
     </div>
     <input class="btn btn-primary" type="button"  value="Get Data"  onClick={retrieve} />  
     </div>
     </Grid> */}
       <br></br>
  
  
                              </Grid>
                              <Grid container spacing={3}>
       <Grid item xs={5}>
             <b> Patient Name:</b>
       
             <TextField
                                 name="firstName"
                                  type="text"
                                  value={chemistry.firstName}
                                  className={classes.textField}
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
                                  value={chemistry.nationalIdNumber}
                                  className={classes.textField}
                                  InputLabelProps={{
                                     shrink: true,
                                 }}
                              />
                              </Grid>
     
                              </Grid>
                
 
                            
 
                              <Grid container spacing={3}>
       <Grid item xs={4}>
             <b> Date of Birth:</b>
       
         <DatePicker
          name="dateOfBirth"
           value={chemistry.dateOfBirth}
            disabled
         />
        </Grid>
        <Grid item xs={3} >
         <b>  Sex: </b>
                              <TextField
                                 name="sex"
                                  type="text"
                                  value={chemistry.sex}
                                  className={classes.textField}
                                  InputLabelProps={{
                                     shrink: true,
                                 }}
                              />
                              </Grid>
                              <Grid item xs={5} >
                              Patientʼs Zoba & Sub Zoba
 
                              <TextField
                                  name="patientZopaSub"
                                  type="text"
                                  value={chemistry.patientZopaSub}
                                  onChange={initialChange}
                                  className={classes.textField}
                                  InputLabelProps={{
                                     shrink: true,
                                 }}
                                 
                              />
                              </Grid>
                              </Grid>
                              <Grid container spacing={3}>
       <Grid item xs={3} >
                 <b> Hospital/Clinic: </b>
         <TextField
         onChange={initialChange}
           name="hospital"
           value={chemistry.hospital}
           type="text"
         />
        </Grid>
                              <Grid item xs={2}  >
                         <b>     Ward/OPD:  </b>
                              <TextField
                                  name="ward"
                                  onChange={initialChange}
                                  value={chemistry.ward}
                                  type="text"
                                  className={classes.textField}
                                  InputLabelProps={{
                                     shrink: true,
                                 }}
                              />
                              </Grid>
                              <Grid item xs={2} >
                             
                            Bed No:
                              <TextField
                                 name="bedNo"
                                 value={chemistry.bedNo}
                                 onChange={initialChange}
                                  type="text"
                                  className={classes.textField}
                                  InputLabelProps={{
                                     shrink: true,
                                 }}
                                 
                              />
                              </Grid>
                              <Grid  item xs={3} style={{marginLeft:'40px'}} >
                         <b>    Payment Type:</b>
                         <Checkbox onChange={initialChanged} checked={chemistry.paymentPC}  name="paymentPC"  />P/C
                              <Checkbox onChange={initialChanged} checked={chemistry.paymentPR} name="paymentPR" />P/R
                               </Grid>
                              </Grid>
 
                              <Grid container spacing={3}>
       <Grid item xs={3}>
       Date Ordered:
       
          
                                   <DatePicker
                                       name="referralDate"
                                       value={chemistry.referralDate}
                                       onChange={setDate}

                                 />

        </Grid>
                              <Grid item xs={2} style={{ flexGrow: 1 }}>
                         <b>     Date/Time Collected:  </b>
                              
                                   <DatePicker
                                       name="dateCollected"
                                       value={chemistry.dateCollected}
                                       onChange={setDates}

                                 />
                              </Grid>
                              <Grid item xs={2} >
                             
                             Collector Initial:
                              <TextField
                                  name="collectorInitial"
                                  type="text"
                                  value={chemistry.collectorInitial}
                                  onChange={initialChange}
                                  className={classes.textField}
                                  InputLabelProps={{
                                     shrink: true,
                                 }}
                                 
                              />
                              </Grid>
                              <Grid item xs={3}   style={{marginLeft:'40px'}}>
                             In Patient:
                              <Checkbox onChange={initialChanged} checked={chemistry.PatientSurvey} name="PatientSurvey"  />Survey
                              <Checkbox onChange={initialChanged}  checked={chemistry.PatientFree} name="PatientFree" />Free
                               </Grid>
                              </Grid>
                              <Grid container spacing={3}>
       <Grid item xs={4} >
   Physician's Name:
         <TextField
           name="physicianName"
           value={chemistry.physicianName}
           onChange={initialChange}
           type="text"
         />
        </Grid>
        <Grid item xs={3}  style={{ flexGrow: 1 }}>
           Signaturing:
                              <TextField
                                  name="signature"
                                  onChange={initialChange}
                                  type="text"
                                  value={chemistry.signature}
                                  className={classes.textField}
                                  InputLabelProps={{
                                     shrink: true,
                                 }}
                              />
                              </Grid>
                              <Grid item xs={4}  style={{ flexGrow: 1 }}  style={{marginLeft:'40px'}}>
                                     or OPD Receipt No:
                              <TextField
                                  name="opdReceiptNo"
                                  type="text"
                                  value={chemistry.opdReceiptNo}
                                  onChange={initialChange}
                                  className={classes.textField}
                                  InputLabelProps={{
                                     shrink: true,
                                 }}
                              />
                              </Grid>
                        
                              </Grid>
 <Grid item xs={12} style={{marginTop:'15px',border:'2px solid black'}}></Grid>
 
            <Typography variant="h6" style={{paddingTop:'20px',paddingBottom:'20px'}}>Clinical Details/Diagnosis</Typography>
 
         
        
 
 </div>
     );
}
 
export default ChemComp;