import React,{useEffect} from 'react';
import Popup from "reactjs-popup";
import Swal from 'sweetalert2'
const PatientEmergencyInfo = (props) => {
  
    console.log("Helo")
    return ( 
        <div>
             <div class="form-row" style={{paddingTop:'20px'}}>
<div class="form-group col-md-4">

<input type="text" class="form-control" onChange={(e)=>props.updateInfo(e)}required id="inputEmail4" name="name" placeholder="Name"/>
</div>
<div class="form-group col-md-4">

<input type="text" class="form-control" onChange={(e)=>props.updateInfo(e)} required id="inputPassword4" name="fatherName" placeholder="Father Name"/>
</div>

<div class="form-group col-md-4">

<input type="text" class="form-control" onChange={(e)=>props.updateInfo(e)} required id="inputPassword4" name="grandFatherName" placeholder="GrandFather Name"/>
</div>
</div>

<div class="form-row">
<div class="form-group col-md-12">

<input type="text" class="form-control" onChange={(e)=>props.updateInfo(e)} required id="inputEmail4" name="address" placeholder="Street Address"/>
</div>
</div>


<div class="form-row">

<div class="form-group col-md-4">
<input type="text" class="form-control" onChange={(e)=>props.updateInfo(e)} required id="inputEmail4" name="village" placeholder="Village"/>

</div>
<div class="form-group col-md-4">
<select id="inputState" class="form-control" name="zone" onChange={(e)=>props.updateInfo(e)} required >
<option disabled selected>Zone</option>
<option>Anseba</option>
      <option >Debub</option>
      <option>Debubawi Keyhi Bahri</option>
      <option >Gash-barka</option>
      <option>Maakel</option>
      <option>Semenawi Keyhi Bahri</option>

</select>
</div>

<div class="form-group col-md-4">
<select id="inputState" class="form-control" name="subZone" onChange={(e)=>props.updateInfo(e)} required>
<option disabled selected>Sub Zone</option>
      <option>Adi-Tekelezan</option>
      <option >Asmat</option>
      <option>Elabered</option>
      <option >Geleb</option>
      <option>Habero</option>
      <option>Hagaz</option>
      <option>Halhal</option>
      <option >Hamelmalo</option>
      <option>Keren</option>
      <option >Adi-Keih</option>
      <option>Adi-Quala</option>
      <option>Areza</option>
      <option>Dbarwa</option>
      <option >Dekemhare</option>
      <option>Emi-Haily</option>
      <option >May-Aynee</option>
      <option>May-Mine</option>
      <option>Mendefera</option>
      <option >Segheneyti</option>
      <option>Senafe</option>
      <option>Tsorena</option>
      <option>Areta</option>
      <option >Assab</option>
      <option>DE-Denkalia</option>
      <option >Makelay Keyhi Bahri</option>
      <option>Agordat</option>
      <option>Barentu</option>
      <option >Dighe</option>
      <option>Forto</option>
      <option>Gogne</option>
      <option>Guluj</option>
      <option >Haycota</option>
      <option>Kerkebet</option>
      <option >Laelay Gash</option>
      <option>Logo AN</option>
      <option>Mensura</option>
      <option >Mogolo</option>
      <option>Mulki</option>
      <option >Sela</option>
      <option>Shambuko</option>
      <option>Tesseney</option>
      <option>Berikh</option>
      <option>Ghala Nefhi</option>
      <option >North East Asmara</option>
      <option>North West Asmara</option>
      <option >Serejeka</option>
      <option>South East Asmara</option>
      <option>South West Asmara</option>
      <option >Adobha</option>
      <option>Afabet</option>
      <option >Dahlak</option>
      <option>Foro</option>
      <option>Ghelaelo</option>
      <option >Ghindae</option>
      <option>Karora</option>
      <option >Massawa</option>
      <option>Nakfa</option>
      <option>Shieb</option>


</select>
</div>
</div>



<div class="form-row">

<div class="form-group col-md-4">
<input type="Date" class="form-control" name="date" onChange={(e)=>props.updateInfo(e)} required id="inputEmail4" name="date" placeholder="Date of Birth"/>

</div>
<div class="form-group col-md-4">
<select id="inputState" class="form-control" onChange={(e)=>props.updateInfo(e)} name="gender" required >
<option disabled selected>Select Gender</option>
  <option>Male</option>
  <option>Female</option>
  <option >Prefer Not To Say</option>

</select>
</div>

<div class="form-group col-md-4">
<select id="inputState" class="form-control" name="relationship" onChange={(e)=>props.updateInfo(e)} required>
  <option disabled selected>Type of RelationShip</option>
  <option>Single</option>
  <option >Married</option>


</select>
</div>
</div>
<div class="form-row">

<div class="form-group col-md-4">
<input type="text" class="form-control"required id="inputEmail4" name="homeNumber" onChange={(e)=>props.updateInfo(e)} placeholder="Home number"/>

</div>
<div class="form-group col-md-4">
<input type="text" class="form-control"required id="inputEmail4" name="mobileNumber" onChange={(e)=>props.updateInfo(e)} placeholder="Mobile number"/>

</div>
<div class="form-group col-md-4">
<input type="text" class="form-control"required id="inputEmail4" name="emailAddress" onChange={(e)=>props.updateInfo(e)} placeholder="Email address"/>

</div>
</div>
        </div>
     );
}
 
export default PatientEmergencyInfo;