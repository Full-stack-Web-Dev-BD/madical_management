import React from 'react';

const PatientType = (props) => {
    return ( 
        <div>
       <input type="checkbox"  onChange={(e)=>props.updateInfo(e)} value="" />
       <label class="checkbox-inline" style={{marginLeft:'10px'}} >Bed Patient</label>
<input type="checkbox" style={{marginLeft:'10px'}} onChange={(e)=>props.updateInfo(e)} value=""/>
<label class="checkbox-inline" style={{marginLeft:'10px'}}>Ambulatory Patient</label>
   
        </div>
     );
}
 
export default PatientType