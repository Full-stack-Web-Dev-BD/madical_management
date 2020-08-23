import React from 'react';

const Puhid = (props) => {
    return ( 
        <div style={{clear:'both'}}>
            <div class="form-row" style={{paddingTop:'20px'}}>
    <div class="form-group col-md-4">
    
    <input type="text" class="form-control"  name="PatientUHID"  onChange={(e)=>props.updateInfo(e)} required id="inputEmail4" placeholder="UHID"/>
    </div>
    <input class="btn btn-primary" type="button"  value="Get Data" onClick={props.retrieve} />
    </div>
        </div>
     );
}
 
export default Puhid;