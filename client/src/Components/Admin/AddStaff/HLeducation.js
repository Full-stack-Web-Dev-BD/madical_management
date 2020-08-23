import React from 'react';
const HLeducation = (props) => {
    return ( 
        <div style={{clear:'both'}}>
            
        <div class="form-row" style={{paddingTop:'20px'}}>
    <div class="form-group col-md-4">
    
   
    <select id="inputState" class="form-control" name="literacy" required onChange={(e)=>props.updateInfo(e)}>
      <option disabled selected>Choose Literacy</option>
      <option>Africa</option>
      <option >United Kingdom</option>
      <option>Norway</option>
      <option >Iran</option>
      <option>Afghanistan</option>
      <option>U.A.E</option>
    </select>
     </div>
    <div class="form-group col-md-4">
  
   
    <select id="inputState" class="form-control" name="grade" required onChange={(e)=>props.updateInfo(e)}>
      <option disabled selected>Choose Grade</option>
      <option>Africa</option>
      <option >United Kingdom</option>
      <option>Norway</option>
      <option >Iran</option>
      <option>Afghanistan</option>
      <option>U.A.E</option>
    </select>
      </div>
    <div class="form-group col-md-4">
    
    <select id="inputState" class="form-control" name="award" required onChange={(e)=>props.updateInfo(e)}>
      <option disabled selected>Choose Awards</option>
      <option>Africa</option>
      <option >United Kingdom</option>
      <option>Norway</option>
      <option >Iran</option>
      <option>Afghanistan</option>
      <option>U.A.E</option>
    </select>
    </div>
    </div>
    <div class="form-row">
    <div class="form-group col-md-4">
    
    <input type="text" class="form-control" name="fieldStudy" required id="inputEmail4" placeholder="Field of Study" onChange={(e)=>props.updateInfo(e)}/>
    </div>
    <div class="form-group col-md-8">
    
    <input type="text" class="form-control" name="profession" required id="inputPassword4" onChange={(e)=>props.updateInfo(e)} placeholder="Profession"/>
    </div>
    
    </div>
    
    
    
    
            </div>
     );
}
 
export default HLeducation;