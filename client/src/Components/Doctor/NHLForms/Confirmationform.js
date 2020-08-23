import React from 'react';
import DSidebar from '../Dsidebar'
import FormControl from '@material-ui/core/FormControl';
const Confirmation = () => {
    return ( 
        <div >
        <DSidebar/>
     
     <div style={{marginLeft:'220px',padding:'20px',backgroundColor:'white'}}>
     <form>
     <h5> Confirmation Form</h5>
          <div >

       
        <div class="form-row" style={{paddingTop:'20px'}}>
     <div class="form-group col-md-12">
    <span style={{fontWeight:'bold'}}> NAME OF HCT SITE:</span>
     <input type="text" class="form-control"  name="signature"  required id="inputEmail4" placeholder="Search"/>
     </div>
 
  
     </div>
     </div>
  



<div class="form-row" >

<div class="form-group col-md-4">
     <span style={{fontWeight:'bold'}}>ZOBA</span>
     <input type="text" class="form-control"  name="signature"  required id="inputEmail4" />
     </div>
     <div class="form-group col-md-4">
     <span style={{fontWeight:'bold'}}>SUB-ZOBA</span>
     <input type="text" class="form-control"  name="signature"  required id="inputEmail4" placeholder="Make notes here"/>
     </div>
     <div class="form-group col-md-4">
     <span style={{fontWeight:'bold'}}>TOWN</span>
     <input type="text" class="form-control"  name="signature"  required id="inputEmail4" placeholder="Make notes here"/>
 
      </div>
</div>



<div class="form-row" >

<div class="form-group col-md-3">
     <span style={{fontWeight:'bold'}}>Code</span>
     <input type="text" class="form-control"  name="signature"  required id="inputEmail4" />
     </div>
     <div class="form-group col-md-3">
     <span style={{fontWeight:'bold'}}>Age</span>
     <input type="text" class="form-control"  name="signature"  required id="inputEmail4" placeholder="Make notes here"/>
     </div>
     <div class="form-group col-md-3">
     <span style={{fontWeight:'bold'}}>Sex</span>
     <input type="text" class="form-control"  name="signature"  required id="inputEmail4" placeholder="Make notes here"/>
 
      </div>
</div>
<h5>Test Result:</h5>
<span style={{fontWeight:'bold'}}>1. First Test</span>
     <input type="text" class="form-control"  name="signature"  required id="inputEmail4" />
     <span style={{fontWeight:'bold'}}>2. Second Test</span>
     <input type="text" class="form-control"  name="signature"  required id="inputEmail4" />
   
   
<div class="form-row pt-4" >

<div class="form-group col-md-3">
     <span style={{fontWeight:'bold'}}>Requesting counselor:</span>
     <input type="text" class="form-control"  name="signature"  required id="inputEmail4" />
     </div>
     <div class="form-group col-md-3">
     <span style={{fontWeight:'bold'}}>Date:</span>
     <input type="text" class="form-control"  name="signature"  required id="inputEmail4" placeholder="Make notes here"/>
     </div>
     <div class="form-group col-md-3">
     <span style={{fontWeight:'bold'}}>Signature</span>
     <input type="text" class="form-control"  name="signature"  required id="inputEmail4" placeholder="Make notes here"/>
 
      </div>
</div>

<h5 class="pt-5"> TO BE FILLED BY NATIONAL HEALTH LABORATORY ONLY</h5>
<div class="form-row pt-4" >
<h4>Test Result:</h4>
<div class="form-group col-md-12">
     <span style={{fontWeight:'bold'}}>First Test:</span>
     <input type="text" class="form-control"  name="signature"  required id="inputEmail4" />
     </div>
     <div class="form-group col-md-12">
     <span style={{fontWeight:'bold'}}>Second Test:</span>
     <input type="text" class="form-control"  name="signature"  required id="inputEmail4" placeholder="Make notes here"/>
     </div>
     <div class="form-group col-md-12">
     <span style={{fontWeight:'bold'}}>Third Test:</span>
     <input type="text" class="form-control"  name="signature"  required id="inputEmail4" placeholder="Make notes here"/>
 
      </div>
</div>
   
<div class="form-row pt-4" >

<div class="form-group col-md-5">
     <span style={{fontWeight:'bold'}}>Reported by:</span>
     <input type="text" class="form-control"  name="signature"  required id="inputEmail4" />
     </div>
     <div class="form-group col-md-3">
     <span style={{fontWeight:'bold'}}>Sig:</span>
     <input type="text" class="form-control"  name="signature"  required id="inputEmail4" placeholder="Make notes here"/>
     </div>
     <div class="form-group col-md-3">
     <span style={{fontWeight:'bold'}}>Date</span>
     <input type="text" class="form-control"  name="signature"  required id="inputEmail4" placeholder="Make notes here"/>
 
      </div>
</div>
<button class="btn btn-primary" style={{float:'right',margin:'10px'}}> Cancel</button>
       <button class="btn btn-primary" type="submit" style={{float:'right',margin:'10px'}}> Submit</button>
 
  </form>
  </div>
        </div>
     );
}
 
export default Confirmation;