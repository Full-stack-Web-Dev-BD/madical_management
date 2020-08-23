import React from 'react';

const Languageproficiency = (props) => {
    return ( 
        <div style={{clear:'both'}}>
            
        <div class="form-row" style={{paddingTop:'20px'}}>
        <div class="form-group col-md-4">
    
    <select id="inputState" class="form-control" name="firstLanguage" required onChange={(e)=>props.updateInfo(e)}>
      <option disabled selected>Language</option>
      <option>Afar</option>
  <option >Bilen</option>
  <option>Hidarb</option>
  <option>Kunama</option>
  <option >Nara</option>
  <option>Rashaida</option>
  <option>Saho</option>
  <option >Tigre</option>
  <option>Tigrina</option>
  <option>English</option>
  <option >Italian</option>
  <option>Amharic</option>
  <option>Other</option>
    </select>
    </div>
    </div>
    
    <div class="form-row">
   
    <div class="form-group col-md-4">
    
    <select id="inputState" class="form-control" name="secondLanguage" required onChange={(e)=>props.updateInfo(e)}>
      <option disabled selected>Language</option>
      <option>Afar</option>
  <option >Bilen</option>
  <option>Hidarb</option>
  <option>Kunama</option>
  <option >Nara</option>
  <option>Rashaida</option>
  <option>Saho</option>
  <option >Tigre</option>
  <option>Tigrina</option>
  <option>English</option>
  <option >Italian</option>
  <option>Amharic</option>
  <option>Other</option>
    </select>
    </div>
    </div>
    <div class="form-row">
    <div class="form-group col-md-4">
 
    
    <select id="inputState" class="form-control" name="thirdLanguage" required onChange={(e)=>props.updateInfo(e)}>
      <option disabled selected>Language</option>
      <option>Afar</option>
  <option >Bilen</option>
  <option>Hidarb</option>
  <option>Kunama</option>
  <option >Nara</option>
  <option>Rashaida</option>
  <option>Saho</option>
  <option >Tigre</option>
  <option>Tigrina</option>
  <option>English</option>
  <option >Italian</option>
  <option>Amharic</option>
  <option>Other</option>
    </select>
    </div> 
    
    </div>
    
 
    
    
            </div>
     );
}
 
export default Languageproficiency;