import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import DSidebar from './Dsidebar'
const useStyles = makeStyles({
    root: {
      minWidth: 275,
    },
   
 
  });
const Consultation = () => {
    const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
    return (  

        <div >
        <DSidebar/>
     
     <div style={{marginLeft:'220px',padding:'20px'}}>
     <form>
          <div style={{backgroundColor:'white',padding:'20px'}}>

        <h5> Disease registry</h5>
        <div class="form-row" style={{paddingTop:'20px'}}>
     <div class="form-group col-md-4">
     
     <input type="text" class="form-control"  name="signature"  required id="inputEmail4" placeholder="Search"/>
     </div>
     <div class="form-group col-md-4">
     
     
   <button class="btn btn-primary">Get LCD</button>
    </div>
    <div class="form-group col-md-4">
<select id="inputState" class="form-control"  name="bloodGroup"   required >
<option disabled selected>Choose LCD</option>
  <option>A+</option>
  <option>A-</option>
  <option >A+</option>
  <option>B+</option>
  <option >B-</option>
  <option>O+</option>
  <option>O-</option>
</select>
</div>
     </div>
     </div>
  

     <div style={{backgroundColor:'white',padding:'20px',marginTop:'20px'}}>

<h5> Reason for Consultation</h5>
<p>-Short History and P/E</p>
<div class="form-row" style={{paddingTop:'20px'}}>

<textarea type="text" class="form-control"  name="signature"  required id="inputEmail4" />
</div>

</div>

<div style={{backgroundColor:'white',padding:'20px',marginTop:'20px'}}>

<h5> Medication</h5>

<div class="form-row" style={{paddingTop:'20px'}}>

<div class="form-group col-md-4">
     <p style={{fontWeight:'bold'}}>Drug Doseage</p>
     <input type="text" class="form-control"  name="signature"  required id="inputEmail4" />
     </div>
     <div class="form-group col-md-4">
     <p style={{fontWeight:'bold'}}>Notes</p>
     <textarea type="text" class="form-control"  name="signature"  required id="inputEmail4" placeholder="Make notes here"/>
     </div>
     <div class="form-group col-md-4">
     <p style={{fontWeight:'bold'}}>Type</p>
     <select id="inputState" class="form-control"  name="bloodGroup"   required >
<option disabled selected>Choose Type</option>
  <option>A+</option>
  <option>A-</option>
  <option >A+</option>
  <option>B+</option>
  <option >B-</option>
  <option>O+</option>
  <option>O-</option>
</select>   </div>
</div>

</div>


<div style={{backgroundColor:'white',padding:'20px',marginTop:'20px'}}>

<h5> Report</h5>

<div class="form-row" style={{paddingTop:'20px'}}>

<textarea type="text" class="form-control"  name="signature"  required id="inputEmail4" />
</div>

</div>
<button class="btn btn-primary" style={{float:'right',margin:'10px'}}> Cancel</button>
       <button class="btn btn-primary" type="submit" style={{float:'right',margin:'10px'}}> Submit</button>
 
  </form>
            </div>
            </div>
    );
}
 
export default Consultation;