import React from 'react';

const Specialtraining = (props) => {
    return ( 
        <div style={{clear:'both'}}>
            
        <div class="form-row" style={{paddingTop:'20px'}}>
        <div class="form-group col-md-4">
    
    <input type="date" class="form-control"  name="startDate"  onChange={(e)=>props.updateInfo(e)} required id="inputEmail4" placeholder="Start Date"/>
    </div>
    <div class="form-group col-md-4">
    
    <input type="date" class="form-control"  name="endDate"  onChange={(e)=>props.updateInfo(e)} required id="inputPassword4" placeholder="End Date"/>
    </div>
    
    <div class="form-group col-md-4">
    
    <input type="text" class="form-control" name="trainingType" placeholder="Type of Training" onChange={(e)=>props.updateInfo(e)} id="inputCity" required/>
 
     </div>
    </div>
    
    <div class="form-row">
    <div class="form-group col-md-4">
    <input type="text" class="form-control" name="trainingPlace" placeholder="Place of Training" onChange={(e)=>props.updateInfo(e)} id="inputCity" required/>
    </div>
    <div class="form-group col-md-4">
    <input type="text" class="form-control" name="trainingInstitute" placeholder="Training Institute" onChange={(e)=>props.updateInfo(e)} id="inputCity" required/>
    </div>
    <div class="form-group col-md-4">
    
    <input type="text" class="form-control" name="country" placeholder="Country" onChange={(e)=>props.updateInfo(e)} id="inputCity" required/>
  
    </div>
    </div>
    <div class="form-row">
    <div class="form-group col-md-4">
    
    <input type="text" class="form-control" name="award" required id="inputEmail4" placeholder="Award" onChange={(e)=>props.updateInfo(e)}/>
    </div>
 
    </div>
    
    
    
            </div>
     );
}
 
export default Specialtraining;