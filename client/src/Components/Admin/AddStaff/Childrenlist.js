import React from 'react';

const Childrenlist = (props) => {
    return ( 
        <div style={{clear:'both'}}>
            
        <div class="form-row" style={{paddingTop:'20px'}}>
    
    <div class="form-group col-md-4">
    <input type="text" class="form-control" name="name1" placeholder="Name" onChange={(e)=>props.updateInfo(e)} id="inputCity" />
    </div>
    <div class="form-group col-md-4">
    <input type="text" class="form-control" name="father1" placeholder="Father Name" onChange={(e)=>props.updateInfo(e)} id="inputCity" />
    </div>
    <div class="form-group col-md-4">
    <input type="date" class="form-control" name="birthDate1" placeholder="BirthDate" onChange={(e)=>props.updateInfo(e)} id="inputCity" />
   
    </div>
    </div>
    <div class="form-row">
  
    <div class="form-group col-md-4">
    <input type="text" class="form-control" name="name2" placeholder="Name" onChange={(e)=>props.updateInfo(e)} id="inputCity" />
    </div>
    <div class="form-group col-md-4">
    <input type="text" class="form-control" name="father2" placeholder="Father Name" onChange={(e)=>props.updateInfo(e)} id="inputCity" />
    </div>
    <div class="form-group col-md-4">
    <input type="date" class="form-control" name="birthDate2" placeholder="BirthDate" onChange={(e)=>props.updateInfo(e)} id="inputCity" />
   
    </div>
    </div>
    
    <div class="form-row">
    
    
    <div class="form-group col-md-4">
    <input type="text" class="form-control" name="name3" placeholder="Name" onChange={(e)=>props.updateInfo(e)} id="inputCity" />
    </div>
    <div class="form-group col-md-4">
    <input type="text" class="form-control" name="father3" placeholder="Father Name" onChange={(e)=>props.updateInfo(e)} id="inputCity" />
    </div>
    <div class="form-group col-md-4">
    <input type="date" class="form-control" name="birthDate3" placeholder="BirthDate" onChange={(e)=>props.updateInfo(e)} id="inputCity" />
   
    </div>
    </div>
    
    
            </div>
     );
}
 
export default Childrenlist;