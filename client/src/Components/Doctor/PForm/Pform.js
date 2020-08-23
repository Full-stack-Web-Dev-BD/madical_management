import React from 'react';
import Puhid from './Puhid'
import DSidebar from '../Dsidebar'
import BasicInformation from './Basicinformation'
import PatientType from './patientType'
import Parasite from './parasite'
import Signature from './Signature'
const PForm = () => {

    const Hematology=(e)=>{
        e.preventDefault()
    }

    const updateStaffData=()=>
    {

    }
    return ( 
 
       <form  onSubmit={Hematology}>
       
       <div >
    
       <  Puhid   updateInfo={updateStaffData}/>
  
       </div>
       <div style={{backgroundColor:"white",padding:"30px",marginTop:'20px',clear:'both'}}>
       <h5 style={{paddingTop:'10px',float:"left"}}>Basic Information</h5>
       <  BasicInformation  updateInfo={updateStaffData}/>
  
       </div>
     
       
       <div style={{backgroundColor:"white",padding:"30px",clear:'both'}}>
      <  Parasite  updateInfo={updateStaffData}/>
  
       </div>
         
       <div style={{backgroundColor:"white",padding:"30px",clear:'both'}}>
      <  Signature  updateInfo={updateStaffData}/>
  
       </div>
       
       <button class="btn btn-primary" style={{float:'right',margin:'10px'}}> Cancel</button>
       <button class="btn btn-primary" type="submit" style={{float:'right',margin:'10px'}}> Submit</button>
  </form>
  
     );
}
 
export default PForm;