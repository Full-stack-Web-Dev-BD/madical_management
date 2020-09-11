import React from 'react';
import ZoneSelection from '../../ZoneSelection';

const Emergencycontactdetails = (props) => {
  return (
    <div style={{ clear: 'both' }}>

      <div class="form-row" style={{ paddingTop: '20px' }}>
        <div class="form-group col-md-4">
          <input type="text" class="form-control" name="name" onChange={(e) => props.updateInfo(e)} required id="inputEmail4" placeholder="First Name" />
        </div>
        <div class="form-group col-md-4">

          <input type="text" class="form-control" name="fatherName" onChange={(e) => props.updateInfo(e)} required id="inputPassword4" placeholder="Father Name" />
        </div>

        <div class="form-group col-md-4">

          <input type="text" class="form-control" name="grandFatherName" onChange={(e) => props.updateInfo(e)} required id="inputPassword4" placeholder="GrandFather Name" />
        </div>
      </div>

      <div className="form-row">
        <div class="form-group col-md-12">
          <input type="text" class="form-control" name="address" required id="inputEmail4" placeholder="Street Address" onChange={(e) => props.updateInfo(e)} />
        </div>
      </div>

      <ZoneSelection updateInfo={props.updateInfo}/>
      <div class="form-row">

      </div>


    </div>
  );
}

export default Emergencycontactdetails;