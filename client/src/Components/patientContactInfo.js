import React, { useState, useEffect } from 'react';
import ZoneSelection from './ZoneSelection';

const PatientContactInfo = (props) => {
   
    return (
        <div>
            <div class="form-row" style={{ paddingTop: '20px' }}>
                <div class="form-group col-md-12">
                    <input type="text" class="form-control" name="address" required id="inputEmail4" onChange={(e) => props.updateInfo(e)} placeholder="Street Address" />
                </div>
            </div>
            <ZoneSelection updateInfo={props.updateInfo}/>
            <div class="form-row">

                <div class="form-group col-md-4">
                    <input type="text" class="form-control" required id="inputEmail4" name="homeNumber" onChange={(e) => props.updateInfo(e)} placeholder="Home number" />

                </div>
                <div class="form-group col-md-4">
                    <input type="text" class="form-control" required id="inputEmail4" name="phoneNumber" onChange={(e) => props.updateInfo(e)} placeholder="Mobile number" />

                </div>
                <div class="form-group col-md-4">
                    <input type="text" class="form-control" required id="inputEmail4" name="email" onChange={(e) => props.updateInfo(e)} placeholder="Email address" />

                </div>
            </div>
        </div>
    );
}

export default PatientContactInfo