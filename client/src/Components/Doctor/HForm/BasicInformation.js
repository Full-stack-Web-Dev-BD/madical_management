import React, { useEffect, useState } from 'react';

const BasicInformation = (props) => {

  return (
    <div style={{ clear: 'both' }}>

      <div class="form-row" style={{ paddingTop: '20px' }}>
        <div class="form-group col-md-4">

          <input type="text" class="form-control" name="referralDate" value={props.basic.referralDate} onChange={(e) => props.updateInfo(e)} required id="inputEmail4" placeholder="Referral Date" />
        </div>
        <div class="form-group col-md-4">

          <input type="text" class="form-control" name="firstName" value={props.basic.firstName} onChange={(e) => props.updateInfo(e)} required id="inputPassword4" placeholder="First Name" />
        </div>

        <div class="form-group col-md-4">

          <input type="text" class="form-control" name="fatherName" value={props.basic.fatherName} onChange={(e) => props.updateInfo(e)} required id="inputPassword4" placeholder="Father Name" />
        </div>
      </div>

      <div class="form-row">

        <div class="form-group col-md-4">
          <input type="text" class="form-control" name="grandFatherName" value={props.basic.grandFatherName} onChange={(e) => props.updateInfo(e)} placeholder="GrandFather Name" required id="inputEmail4" />

        </div>
        <div class="form-group col-md-4">
          <input type="text" class="form-control" name="age" value={props.basic.age} onChange={(e) => props.updateInfo(e)} placeholder="Age" required id="inputEmail4" />

        </div>

        <div class="form-group col-md-4">
          <input type="text" class="form-control" name="birthDate" value={props.basic.birthDate} placeholder="Date of Birth" required id="inputEmail4" />

        </div>
      </div>
      <div class="form-row">
        <div class="form-group col-md-4">
          <select id="inputState" class="form-control" name="gender" value={props.basic.gender} required onChange={(e) => props.updateInfo(e)}>
            <option disabled selected>Gender</option>
            <option>Male</option>
            <option >Female</option>
            <option>Prefer not to Say</option>

          </select>
        </div>
        <div class="form-group col-md-4">
          <select id="inputState" class="form-control" name="bloodGroup" value={props.basic.bloodGroup} onChange={(e) => props.updateInfo(e)} required >
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

          <input type="text" class="form-control" name="ward" value={props.basic.ward} required id="inputEmail4" placeholder="WARD/OPD" onChange={(e) => props.updateInfo(e)} />

        </div>
      </div>
      <div class="form-row">
        <div class="form-group col-md-4">
          <input type="text" class="form-control" name="bedNo" value={props.basic.bedNo} required id="inputEmail4" placeholder="Bed No:" onChange={(e) => props.updateInfo(e)} />

        </div>
        <div class="form-group col-md-4">
          <input type="text" class="form-control" name="referringNo" value={props.basic.referringNo} required id="inputEmail4" placeholder="Referring No:" onChange={(e) => props.updateInfo(e)} />

        </div>
        <div class="form-group col-md-4">

        </div>
      </div>


    </div>
  );
}

export default BasicInformation;