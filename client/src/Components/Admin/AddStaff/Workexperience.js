import React from 'react';

const Workexperience = (props) => {
    return ( 
        <div style={{clear:'both'}}>
            
        <div class="form-row" style={{paddingTop:'20px'}}>
    <div class="form-group col-md-4">
    
    <input type="text" class="form-control"  name="workType"  onChange={(e)=>props.updateInfo(e)} required id="inputEmail4" placeholder="Type of Work"/>
    </div>
    <div class="form-group col-md-4">
    
    <input type="date" class="form-control"  name="startDate"  onChange={(e)=>props.updateInfo(e)} required id="inputPassword4" placeholder="Start Date"/>
    </div>
    
    <div class="form-group col-md-4">
    
    <input type="date" class="form-control"  name="endDate"  onChange={(e)=>props.updateInfo(e)} required id="inputPassword4" placeholder="End Date"/>
    </div>
    </div>
    
    <div class="form-row">
    <div class="form-group col-md-4">
    <input type="text" class="form-control" name="position" placeholder="Position" onChange={(e)=>props.updateInfo(e)} id="inputCity" required/>
    </div>
    <div class="form-group col-md-4">
    <input type="text" class="form-control" name="supervisor" placeholder="Supervisor" onChange={(e)=>props.updateInfo(e)} id="inputCity" required/>
    </div>
    <div class="form-group col-md-4">
    <input type="text" class="form-control" name="section" placeholder="Section/Department" onChange={(e)=>props.updateInfo(e)} id="inputCity" required/>
   
    </div>
    </div>
    <div class="form-row">
    <div class="form-group col-md-4">
    
    <input type="text" class="form-control" name="place" required id="inputEmail4" placeholder="Place" onChange={(e)=>props.updateInfo(e)}/>
    </div>
    <div class="form-group col-md-4">
    
    <input type="text" class="form-control" name="salary" required id="inputPassword4" onChange={(e)=>props.updateInfo(e)} placeholder="Salary"/>
    </div>
   
    </div>
    
   
    
    
            </div>
     );
}
 
export default Workexperience;