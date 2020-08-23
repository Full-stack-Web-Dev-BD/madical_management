import React from 'react';
const Signature = (props) => {
    return ( 
        <div style={{clear:'both'}}>
        <div class="form-row" style={{paddingTop:'20px'}}>
     <div class="form-group col-md-4">
     
     <p style={{fontWeight:'bold',fontSize:'15px'}}>Name and Signature of Requesting Doctor?</p>
         </div>
     <div class="form-group col-md-4">
     
     
   
     <input type="text" class="form-control" disabled name="name"  onChange={(e)=>props.updateInfo(e)} required id="inputEmail4" placeholder="Name"/>

     </div>
     
     <div class="form-group col-md-4">
   
<input type="text" class="form-control"  name="signature"  onChange={(e)=>props.updateInfo(e)} required id="inputEmail4" placeholder="Signature"/>

     </div>
     </div>
     </div>
     );
}
 
export default Signature;