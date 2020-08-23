import React from 'react';

const Staffinfo = (props) => {
    return ( 
        <div style={{clear:'both'}}>


<div class="form-row" style={{paddingTop:'20px'}}>

<div class="form-group col-md-4">

<select id="inputState" class="form-control" name="department" onChange={(e)=>props.updateInfo(e)}>
  <option disabled selected>Choose Department</option>
  <option>MicroBiology - Bacteriology</option>
  <option >MicroBiology - Serology</option>
  <option>MicroBiology - Tuberculosis</option>
  <option >Haematology</option>
  <option>Pathology</option>
  <option>Clinical Chemistry</option>
  <option>Micro Biology</option>
  <option >Food and Water Analysis</option>
  <option>MicroBiology Laboratory and test</option>
  <option>Parasitology</option>
  <option>MDR /TB</option>
 
</select>
</div>

<div class="form-group col-md-4">

<select id="inputState" class="form-control" name="staffType" required onChange={(e)=>props.updateInfo(e)}>
  <option disabled selected>Choose Staff Type</option>
  <option>Receptionist</option>
  <option >Doctor</option>
  <option>Nurse</option>
  <option >Lab Technician</option>
  <option>Diagnostic and Imaging</option>
 
</select>
</div>
</div>
        </div>
     );
}
 
export default Staffinfo;