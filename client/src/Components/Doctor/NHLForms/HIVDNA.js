import React from 'react';
import { Formik } from 'formik';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Checkbox from '@material-ui/core/Checkbox';
import DSidebar from '../Dsidebar'
import { makeStyles } from '@material-ui/core/styles';
import Dsidebar from '../Dsidebar';
import { Card, CardContent } from '@material-ui/core';
const HIVDNA = () => {
    return (
      <div>
        <Dsidebar/>
            <div style={{ marginLeft: '200px', padding: '20px' }}>
      <div>
           <Formik  
            initialValues={{FacultyName:"",SubZone:"",Zone:"",ChildName:"",ChildIdNo:"",AgeMonths:"",
            ChildDOB:"",Weight:"",MotherName:"",MotherId:"",MotherPhoneno:"",initial:false,repeat:false,
            DateTime:""}} 
            onSubmit={(values)=>{
                console.log(values)
            }}
            >
 {({
         values,
         errors,
         touched,
         handleChange,
         handleBlur,
         handleSubmit,
         isSubmitting,
         /* and other goodies */
       }) => (
            <form onSubmit={handleSubmit}>
                <Typography variant="body2" component="p">
                    <Grid container style={{marginTop:'20px'}}>
              <Grid item xs={6}>
                  Name of Health Facility:
                <TextField
                type="text"
                name="FacultyName"
                value={values.FacultyName}
                onChange={handleChange}
                />
              </Grid>
              <Grid item xs={3}>
                  SubZone:
                  <TextField
                type="text"
                name="SubZone"
                onChange={handleChange}
                />
              </Grid>
              <Grid item xs={3}>
                  Zone:
                  <TextField
                type="text"
                name="Zone"
                onChange={handleChange}
                />
              </Grid>
              
      </Grid>
      <Grid container spacing={3} style={{marginTop:'20px'}}>
              <Grid item xs={6}>
                 Child's Name
                <TextField
                type="text"
                name="ChildName"
                onChange={handleChange}
                />
              </Grid>
              <Grid item xs={3}>
                  Child's ID No:
                  <TextField
                type="text"
                name="ChildIdNo"
                onChange={handleChange}
                />
              </Grid>
              <Grid item xs={3}>
                  Age Months:
                  <TextField
                type="text"
                name="AgeMonths"
                onChange={handleChange}
                />
              </Grid>
              
      </Grid>
      <Grid container spacing={3} style={{marginTop:'20px'}}>
              <Grid item xs={6}>
                  Child's DOB:
                <TextField
                type="text"
                name="ChildDOB"
                onChange={handleChange}
                />
              </Grid>
              <Grid item xs={3}>
                  Weight (at birth):
                  <TextField
                type="text"
                name="Weight"
                onChange={handleChange}
                />
              </Grid>
         
      </Grid>
      <Grid container spacing={3} style={{marginTop:'20px'}}>
              <Grid item xs={6}>
                  Mother's Name:
                <TextField
                type="text"
                name="MotherName"
                onChange={handleChange}
                />
              </Grid>
              <Grid item xs={5}>
                  Mother's ID No:
                  <TextField
                type="text"
                name="MotherId"
                onChange={handleChange}
                />
              </Grid>
              
              <Grid item xs={3}>
              
                 <button class="btn btn-primary" type="submit">Click</button>
              </Grid>
      </Grid>
      <Grid container spacing={3} style={{marginTop:'20px'}}>
              <Grid item xs={12}>
                  Mother's/Caretaker's address and Phone no:
                <TextField
                type="text"
                name="MotherPhoneno"
                style={{width:'90%'}}
                onChange={handleChange}
                />
              </Grid>
           
      </Grid>
      <Grid container spacing={3} style={{marginTop:'20px'}}>
              <Grid item xs={5}>
                  Reason for Test:
                
                <Checkbox name="initial" onChange={handleChange}/>Initial Diagnostic
               
                <Checkbox name="repeat" onChange={handleChange}/>Repeat/confirmatory
              </Grid>
              <Grid item xs={5}>
                  Date/Time of Specimen
                  <TextField
                             
                                    type="date"
                                    name="DateTime"
                                    style={{width:'90%'}}
                                    onChange={handleChange}     
                                />
              </Grid>
      </Grid>
    <center>  <Typography component="h2" variant="h5" style ={{marginTop:'20px'}} >PMTCT INFORMATION</Typography>
    </center>  
    
    <Grid container spacing={3} style={{marginTop:'20px'}}>
              <Grid item xs={4}>
                  HIV rapid test result:
           
              </Grid>
              <Grid item xs={8}>
                Child:
              
                <Checkbox name="initial" onChange={handleChange}/>Positive
                <Checkbox name="repeat" onChange={handleChange}/>Negative
                <Checkbox name="repeat" onChange={handleChange}/>Indeterminate
                <Checkbox name="repeat" onChange={handleChange}/>Unknown
              </Grid>
      </Grid>
      <Grid container spacing={3} >
              <Grid item xs={4}>
               
           
              </Grid>
              <Grid item xs={8}>
                Mother:
              
                <Checkbox name="initial" onChange={handleChange}/>Positive
                <Checkbox name="repeat" onChange={handleChange}/>Negative
                <Checkbox name="repeat" onChange={handleChange}/>Indeterminate
                <Checkbox name="repeat" onChange={handleChange}/>Unknown
              </Grid>
      </Grid>

      <Grid container spacing={3} >
              <Grid item xs={12}>
               Mother
               <Checkbox name="initial" onChange={handleChange}/>None
                <Checkbox name="repeat" onChange={handleChange}/>Sd-Nvp
                <Checkbox name="repeat" onChange={handleChange}/>Mother on Art
               <span style={{marginLeft:'20px'}} > Other </span>  <Checkbox name="repeat" onChange={handleChange}/>
                <TextField
                type="text"
                />
              </Grid>
             
      </Grid>

      <Grid container spacing={3} >
              <Grid item xs={12}>
               Child:
               <Checkbox name="initial" onChange={handleChange}/>None
                <Checkbox name="repeat" onChange={handleChange}/>Sd-Nvp
                <Checkbox name="repeat" onChange={handleChange}/>Nvp 6 Weeks
               <span style={{marginLeft:'20px'}} > Other </span>  <Checkbox name="repeat" onChange={handleChange}/>
                <TextField
                type="text"
                />
              </Grid>
             
      </Grid>

      <Grid container spacing={3} >
              <Grid item xs={12}>
               Child Breast Feeding Status:
               <Checkbox name="initial" onChange={handleChange}/>Never Breast Feed
                <Checkbox name="repeat" onChange={handleChange}/>Stop /feeding
                <Checkbox name="repeat" onChange={handleChange}/>Exclusive Breast feeding
                <Checkbox name="repeat" onChange={handleChange}/>Formula feeding
                <Checkbox name="repeat" onChange={handleChange}/>Still Breast feeding
                <Checkbox name="repeat" onChange={handleChange}/>unknown
               
              </Grid>
             
      </Grid>

      <Grid container spacing={3} >
              <Grid item xs={4}>
               HealthWorker:
               <TextField
               type="text"
               name="HeathWorker"
               style={{width:'90%'}}
               onChange={handleChange} 
               />
              </Grid>

              <Grid item xs={4}>
               PhoneNo:
               <TextField
               type="text"
               name="PhoneNo"
               style={{width:'90%'}}
               onChange={handleChange} 
               />
              </Grid>

              <Grid item xs={4}>
               Signature:
               <TextField
               type="text"
               name="Signature"
               style={{width:'90%'}}
               onChange={handleChange} 
               />
              </Grid>
             
      </Grid>
   <center>   <Typography component="h5" variant="h5" style={{padding:'20px'}} >FOR LABORATORY USE</Typography></center>
  
  <Grid container spacing={5}>
  <Grid item xs={6}>
               Child Laborator no:
               <TextField
               type="text"
               name="PhoneNo"
               style={{width:'90%'}}
               onChange={handleChange} 
               />
              </Grid>

              <Grid item xs={6}>
               Date/Time of specimen received:
               <TextField
               type="text"
               name="Signature"
               style={{width:'90%'}}
               onChange={handleChange} 
               />
              </Grid>
  </Grid>
  

  <Grid container spacing={1}>
  <Grid item xs={12}>
               Initial DNA-PCR Test Result:
               <Checkbox name="initial" onChange={handleChange}/>Detected
                <Checkbox name="repeat" onChange={handleChange}/>Not Detected
                <Checkbox name="repeat" onChange={handleChange}/>Indeterminate
                <Checkbox name="repeat" onChange={handleChange}/>Sample Rejected
    

              </Grid>
              <Grid item xs={12}>
               Repeat/confirmatory DNA-PCR Test Result:(incase the child is Rapid positive)<br></br>
               <Checkbox name="initial" onChange={handleChange}/>Detected
                <Checkbox name="repeat" onChange={handleChange}/>Not Detected
                <Checkbox name="repeat" onChange={handleChange}/>Indeterminate
                <Checkbox name="repeat" onChange={handleChange}/>Sample Rejected
    

              </Grid>
              <Grid item xs={10}>
               Repeat/confirmatory DNA-PCR Test Result:(incase the child is Rapid positive)<br></br>
            
                <TextField
                type="text"
                name="confirmatory"
                style={{width:'90%'}}
                />
              </Grid>
  </Grid>
<Grid container spacing={1}>
    <Grid item xs={5}>
        Name of Lab Technologist
        <TextField
            type="text"
            style={{width:'90%'}}
            name="LabTechnologist"

        />
            </Grid>
            <Grid item xs={4}>
        Signature:
        <TextField
            type="text"
            style={{width:'90%'}}
            name="LabTechnologist"
            
        />
            </Grid>
            <Grid item xs={3}>
        Date:
        <TextField
            type="text"
            style={{width:'90%'}}
            name="LabTechnologist"
            
        />
            </Grid>
</Grid>


<Grid container spacing={1}>
    <Grid item xs={5}>
        Reviewed By:
        <TextField
            type="text"
            style={{width:'90%'}}
            name="ReviewedBy"

        />
            </Grid>
            <Grid item xs={4}>
        Signature:
        <TextField
            type="text"
            style={{width:'90%'}}
            name="LabTechnologist"
            
        />
            </Grid>
            <Grid item xs={3}>
        Date:
        <TextField
            type="text"
            style={{width:'90%'}}
            name="LabTechnologist"
            
        />
            </Grid>
</Grid>


<Grid container spacing={1}>
    <Grid item xs={5}>
        Date Result received:
        <TextField
            type="text"
            style={{width:'90%'}}
            name="ReviewedBy"

        />
            </Grid>
            <Grid item xs={4}>
        Health Worker Name:
        <TextField
            type="text"
            style={{width:'90%'}}
            name="LabTechnologist"
            
        />
            </Grid>
            <Grid item xs={3}>
        Signature:
        <TextField
            type="text"
            style={{width:'90%'}}
            name="LabTechnologist"
            
        />
            </Grid>
</Grid>
    </Typography>
            </form>
         )}
         </Formik>
      </div>
      </div>
      </div>
     );
}
 
export default HIVDNA;