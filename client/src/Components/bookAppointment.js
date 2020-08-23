import React,{useState} from 'react';
import Sidebar from './sidebar'
import { BrowserRouter, Link,withRouter } from 'react-router-dom';
import axios from 'axios';
import {store,persistor} from '../store/index'
import {bookingAppointment} from '../action/bookAppointAction'
const BookAppointment = (props) => {
  
 
  const [appointData,setAppointData] = useState({
    UHID:"",
    basicInformation:"",
    SID:"",
    appointmentDate:"",
    priority:"",
    time:"",
    DName:"",
    Department:""
    
  })

  const update =(e)=>
  {
   
    const copyData = {... appointData}
    copyData[e.currentTarget.name] = e.currentTarget.value
    setAppointData(copyData)

    console.log(appointData)
  }
  
  const getPatientData = (e)=>{
    e.preventDefault()
    console.log(store.getState())
    if(!appointData.UHID)
    {
     return
    }
    else{
   
      axios.get(`http://localhost:4001/api/patient/${appointData.UHID}`)
      .then(res=>{
        const data = {...appointData}
              console.log(res.data.basicInformation)
              data['basicInformation'] = res.data.basicInformation
              setAppointData(data)
      })
      .catch(error=>console.log(error))
    }

  }
  const Booking=(e)=>
  {
    e.preventDefault()
    console.log(appointData.SID)
     axios.get(`http://localhost:4001/api/Staff/doc/${appointData.SID}`)
    .then(({ data }) => {
      const appointdata = {...appointData}
      console.log(data.basicInformation)
      appointdata['DName'] = data.basicInformation.name
      appointdata['Department'] = data.staffInformation.department
      console.log(appointdata['DName'])
      const storeData = {...appointData,DName: data.basicInformation.name,Department:data.staffInformation.department}
      console.log(storeData)
      store.dispatch(bookingAppointment(storeData))
      props.history.push({
        pathname: '/payment',
        state: {
          id: 7,
          color: 'green'
        }
      })
  });
       
}
    return (  
        <div>
              <Sidebar/>
            <div style={{marginLeft:'220px'}}>
            <div style={{padding:'20px'}}>
            <form style={{padding:"50px",backgroundColor:'white'}} onSubmit={Booking}>
            <h5 style={{float:'left',marginBottom:'20px'}}>Book Appointment</h5>
                <div class="form-row" style={{clear:'both'}}>
              <div class="form-group col-md-4">
              <input type="text" class="form-control" onChange={update} name="UHID" required id="inputEmail4" placeholder="UHID"/>
                </div>
            <div class="form-group col-md-4">
            <input type="button" onClick={getPatientData} class="btn btn-primary" style={{float:'left'}} required id="inputPassword4" value="Get Patient" />
                </div>
            <div class="form-group col-md-4">
            <input type="text" class="form-control" onChange={update} name="SID" required id="inputPassword4" placeholder="Staff ID"/>
            </div></div>

        <div class="form-row">
          <div class="form-group col-md-4">
          <input type="date" class="form-control" onChange={update} name="appointmentDate" placeholder="Appointment Date"  required id="inputEmail4" />    
       </div>
      <div class="form-group col-md-4">
      <select id="inputState" class="form-control" onChange={update} name="priority" required >
      <option disabled selected>Choose Priority</option>
      <option>High</option>
      <option>low</option>
      </select></div>
      <div class="form-group col-md-4">
    <input type="time"  class="form-control" onChange={update} name="time" id="inputAddress" required placeholder="Time"/>
  </div>
  </div>

  <button type="submit" style={{float:"right"}} class="btn btn-primary">Book Appointment</button>
</form></div>
        </div>
        </div>
    );
}
 
export default withRouter(BookAppointment)
