import React from 'react';

const Puhid = (props) => {
    return ( 
        <div style={{clear:'both'}}>
            <div class="form-row" style={{paddingTop:'20px'}}>
            <h5 style={{paddingTop:'3px',float:"left",fontSize:'14px'}}>Patient UHID</h5>
    <div class="form-group col-md-4">
    
    <input type="text" class="form-control" style={{fontSize:'12px'}} name="workType"  onChange={(e)=>props.updateInfo(e)} required id="inputEmail4" placeholder="UHID"/>
    </div>
    <div class="form-group col-md-3" >
        <button style={{float:'left',fontSize:'14px'}} class="btn btn-primary">Fill</button>
         </div> 
         <div class="form-group col-md-">
         <input type="checkbox"  onChange={(e)=>props.updateInfo(e)} value="" />
       <label class="checkbox-inline" style={{marginLeft:'10px'}} >Bed Patient</label>
<input type="checkbox" style={{marginLeft:'10px'}} onChange={(e)=>props.updateInfo(e)} value=""/>
<label class="checkbox-inline" style={{marginLeft:'10px'}}>Ambulatory Patient</label>
</div>
    </div>
        </div>
     );
}
 
export default Puhid;