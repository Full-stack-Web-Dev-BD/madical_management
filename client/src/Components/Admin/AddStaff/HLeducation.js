import React from 'react';
const HLeducation = (props) => {
    return ( 
        <div style={{clear:'both'}}>
            
        <div class="form-row" style={{paddingTop:'20px'}}>
    <div class="form-group col-md-4">
    
   
    <select id="inputState" class="form-control" name="literacy" required onChange={(e)=>props.updateInfo(e)}>
      <option disabled selected>Choose Literacy</option>
      {/* <option>Africa</option>
      <option >United Kingdom</option>
      <option>Norway</option>
      <option >Iran</option>
      <option>Afghanistan</option>
      <option>U.A.E</option> */}
      <option>Literate</option>
      <option>Iliterate</option>
    </select>
     </div>
    <div class="form-group col-md-4">
  
   
    <select id="inputState" class="form-control" name="grade" required onChange={(e)=>props.updateInfo(e)}>
      <option disabled selected>Choose Grade</option>
      {/* <option>Africa</option>
      <option >United Kingdom</option>
      <option>Norway</option>
      <option >Iran</option>
      <option>Afghanistan</option>
      <option>U.A.E</option> */}
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
      <option>6</option>
      <option>7</option>
      <option>8</option>
      <option>9</option>
      <option>10</option>
      <option>11</option>

    </select>
      </div>
    <div class="form-group col-md-4">
    
    <select id="inputState" class="form-control" name="award" required onChange={(e)=>props.updateInfo(e)}>
      <option disabled selected>Choose Awards</option>
      {/* <option>Africa</option>
      <option >United Kingdom</option>
      <option>Norway</option>
      <option >Iran</option>
      <option>Afghanistan</option>
      <option>U.A.E</option> */}
      <option>Certificate</option>
      <option>Diploma</option>
      <option>Advanced Diploma</option>
      <option>Bachelor Degree</option>
      <option>Post Graduate</option>
      <option>Masters Degree</option>
      <option>MD/GP</option>
      <option>MD Specialist</option>
      <option>PHD</option>

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