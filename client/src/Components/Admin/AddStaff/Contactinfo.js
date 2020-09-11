import React from 'react';
import ZoneSelection from '../../ZoneSelection';

const Contactinfo = (props) => {
  return (
    <div style={{ clear: 'both' }}>

      <div class="form-row" style={{ paddingTop: '20px' }}>
        <div class="form-group col-md-12">
          <input type="text" class="form-control" name="address" onChange={(e) => props.updateInfo(e)} required id="inputEmail4" placeholder="Street Address" />
        </div>
      </div>
      <ZoneSelection updateInfo={props.updateInfo}/>
      <div class="form-row">
        <div class="form-group col-md-4">

          <input type="text" class="form-control" name="homeNumber" placeholder="Home Number" onChange={(e) => props.updateInfo(e)} id="inputCity" required />

        </div>
        <div class="form-group col-md-4">
          <input type="text" class="form-control" name="mobileNumber" placeholder="Mobile Number" onChange={(e) => props.updateInfo(e)} id="inputCity" required />

        </div>
        <div class="form-group col-md-4">
          <input type="text" class="form-control" name="email" placeholder="Email" onChange={(e) => props.updateInfo(e)} id="inputCity" required />

        </div>
      </div>


    </div>
  );
}

export default Contactinfo;