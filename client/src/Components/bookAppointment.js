import React, { useState } from 'react';
import Sidebar from './sidebar'
import { withRouter } from 'react-router-dom';
import axios from 'axios';
const BookAppointment = (props) => {

  const [isFindPatient, setIsFindPatient] = useState(false)
  const [isAddedSuccess, setIsAddedSuccess] = useState(false)
  const [appointData, setAppointData] = useState({
    UHID: "",
    patientInformation: [],
    SID: "",
    appointmentDate: "",
    priority: "",
    time: ""
  })

  const update = (e) => {
    const copyData = { ...appointData }
    copyData[e.currentTarget.name] = e.currentTarget.value
    setAppointData(copyData)
  }

  const getPatientData = (e) => {
    e.preventDefault()
    if (!appointData.UHID) {
      return
    }
    else {
      axios.get(`/get-single-patient/${appointData.UHID}`)
        .then(res => {
          setIsFindPatient(true)
          console.log(res.data[0])
          const data = { ...appointData }
          data['patientInformation'] = res.data[0]
          setAppointData(data)
        })
        .catch(err => {
          if (err.response) {
            console.log(err.response.data)
          }
          console.log(err)
        })
    }

  }
  const Booking = (e) => {
    e.preventDefault()
    axios.post(`/book-appoint`, appointData)
      .then(res => {
        setIsAddedSuccess(true)
        setTimeout(() => {
          setIsAddedSuccess(false)
          setIsFindPatient(false)
          window.location.href = '/ReceptionistDashboard'
        }, 2000);
      })
      .catch(err => {
        console.log(err)
      })
  }
  return (
    <div>
      <Sidebar />
      <div style={{ marginLeft: '220px' }}>
        <div style={{ padding: '20px' }}>
          {
            isAddedSuccess ?
              <h1 className="p-5 text-center text-success"> Appointment Added Success !!! </h1> :
              <form style={{ padding: "50px", backgroundColor: 'white' }} onSubmit={Booking}>
                <h2 style={{ float: 'left', marginBottom: '20px' }}>Book Appointment</h2>
                <div class="form-row" style={{ clear: 'both' }}>
                  {
                    appointData.patientInformation.basic?
                    
                  <div class="form-group col-md-12">
                    <h4 className="mr-2 text-success d-block">Founded Patient : <b style={{textTransform:'capitalize'}}> {appointData.patientInformation.basic.name} </b></h4>
                  </div>:''
                  }
                  <div class="form-group col-md-4">
                    <input type="text" class="form-control" onChange={update} name="UHID" required id="inputEmail4" placeholder="Find Patient by UHID" />
                  </div>
                  <div class="form-group col-md-4">
                    <input type="button" onClick={getPatientData} class="btn btn-primary" style={{ float: 'left' }} required id="inputPassword4" value="Get Patient" />
                  </div>
                  <div class="form-group col-md-4">
                    <input type="text" class="form-control" onChange={update} name="SID" required id="inputPassword4" placeholder="Staff ID" />
                  </div></div>
                <div class="form-row">
                  <div class="form-group col-md-4">
                    <input type="date" class="form-control" onChange={update} name="appointmentDate" placeholder="Appointment Date" required id="inputEmail4" />
                  </div>
                  <div class="form-group col-md-4">
                    <select id="inputState" class="form-control" onChange={update} name="priority" required >
                      <option disabled selected>Choose Priority</option>
                      <option>High</option>
                      <option>low</option>
                    </select></div>
                  <div class="form-group col-md-4">
                    <input type="time" class="form-control" onChange={update} name="time" id="inputAddress" required placeholder="Time" />
                  </div>
                </div>
                <div>
                  {
                    isFindPatient ?
                      <button type="submit" style={{ float: "right" }} className="btn btn-primary">Book Appointment</button> :
                      <button type="submit" style={{ float: "right" }} className="btn btn-default text-warning" >Find a Patient to Create Appointment</button>
                  }
                </div>
              </form>
          }
        </div>
      </div>
    </div>
  );
}

export default withRouter(BookAppointment)
