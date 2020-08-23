import React,{useEffect} from 'react';

const BasicInformation = (props) => {
    useEffect(()=>
    {

    },[props])
    return ( 
        <div  style={{clear:'both'}}>

    <div class="form-row" style={{paddingTop:'20px'}}>
<div class="form-group col-md-4">

<input type="text" class="form-control"  name="referralDate"  onChange={(e)=>props.updateInfo(e)} required id="inputEmail4" placeholder="Referral Date"/>
</div>
<div class="form-group col-md-4">

<input type="text" class="form-control"  name="firstName"  onChange={(e)=>props.updateInfo(e)} required id="inputPassword4" placeholder="First Name"/>
</div>

<div class="form-group col-md-4">

<input type="text" class="form-control"  name="fatherName"  onChange={(e)=>props.updateInfo(e)} required id="inputPassword4" placeholder="Father Name"/>
</div>
</div>

<div class="form-row">

<div class="form-group col-md-4">
<input type="text" class="form-control" name="grandFatherName" onChange={(e)=>props.updateInfo(e)} placeholder="GrandFather Name" required id="inputEmail4" />

</div>
<div class="form-group col-md-4">
<input type="text" class="form-control" name="age" onChange={(e)=>props.updateInfo(e)} placeholder="Age" required id="inputEmail4" />

</div>

<div class="form-group col-md-4">
<input type="text" class="form-control" name="birthDate" onChange={(e)=>props.updateInfo(e)} placeholder="Date of Birth" required id="inputEmail4" />

</div>
</div>
<div class="form-row">
<div class="form-group col-md-4">
<select id="inputState" class="form-control" name="gender" required onChange={(e)=>props.updateInfo(e)}>
  <option disabled selected>Gender</option>
  <option>Male</option>
  <option >Female</option>
  <option>Prefer not to Say</option>

</select>
</div>
<div class="form-group col-md-4">
<select id="inputState" class="form-control"  name="bloodGroup"  onChange={(e)=>props.updateInfo(e)} required >
<option disabled selected>BloodGroup</option>
  <option>A+</option>
  <option>A-</option>
  <option >A+</option>
  <option>B+</option>
  <option >B-</option>
  <option>O+</option>
  <option>O-</option>
</select>
</div>
<div class="form-group col-md-4">
  
<input type="text" class="form-control" name="ward/opd" required id="inputEmail4" placeholder="WARD/OPD" onChange={(e)=>props.updateInfo(e)}/>

</div>
</div>


<div class="form-row">
<div class="form-group col-md-4">
<input type="text" class="form-control" name="bedNo" required id="inputEmail4" placeholder="Bed No:" onChange={(e)=>props.updateInfo(e)}/>

</div>
<div class="form-group col-md-4">
  <input type="text" class="form-control" name="referringNo" required id="inputEmail4" placeholder="Referring No:" onChange={(e)=>props.updateInfo(e)}/>

</div>
<div class="form-group col-md-4">
  <input type="text" class="form-control" name="clinicalDetail" required id="inputEmail4" placeholder="Clinical Details:" onChange={(e)=>props.updateInfo(e)}/>

</div>
<div class="form-group col-md-4">
  
</div>
</div>


</div>
     );
}
 
export default BasicInformation;