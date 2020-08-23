import React,{useState,useEffect} from 'react';
import Sidebar from './sidebar'
import PatientBasicInfo from './patientBasicInfo'
import Swal from 'sweetalert2'

import PatientContactInfo from './patientContactInfo'
import PatientEmergencyInfo from './patientEmergencyInfo'
import axios from 'axios'
const AddPatient = (props) => {
    const [patientData, setPatientData] = useState({basic:{},contact:{},emergency:{}})
    function updateData(e)
    {
        e.preventDefault()
        console.log(e.target.value)
        console.log(e.target.name)

        
    const updatePatientData ={...patientData}
    updatePatientData.basic[e.currentTarget.name] = e.currentTarget.value;
    setPatientData(updatePatientData)
    console.log(updatePatientData)
    }
    function updateDatas(e)
    {
        e.preventDefault()
        console.log(e.target.value)
        console.log(e.target.name)

        
    const updatePatientData ={...patientData}
    updatePatientData.contact[e.currentTarget.name] = e.currentTarget.value;
    setPatientData(updatePatientData)
    console.log(updatePatientData)
    }
    function updateDatass(e)
    {
        e.preventDefault()
        console.log(e.target.value)
        console.log(e.target.name)

        
    const updatePatientData ={...patientData}
    updatePatientData.emergency[e.currentTarget.name] = e.currentTarget.value;
    setPatientData(updatePatientData)
    console.log(updatePatientData)
    }
    const registerPatient=(e)=>
    {
        e.preventDefault()
        console.log(patientData)
        axios
        .post("http://localhost:4001/api/patient",{
            basic:patientData.basic,
            contact:patientData.contact,
            emergency:patientData.emergency
        })
        .then(res=>
            {
                console.log(res.data)
                Swal.fire("Patient Successfully Registered")
                props.history.push("/Dashboard")
               
            })
        .catch(error=>
            {
                console.log(error)
            })
    }
    
    return ( 
        <div>
        <Sidebar/>
     
     <div style={{marginLeft:'220px'}}>
        
        
     <form style={{padding:"30px"}} onSubmit={registerPatient}>
     <div style={{backgroundColor:"white",padding:"30px"}}>
     <h3 style={{paddingTop:'20px'}}>Basic Information</h3>
     <PatientBasicInfo updateInfo={updateData}/>

     </div>

<div style={{backgroundColor:"white",padding:"30px",marginTop:'30px'}}>
     <h3 style={{paddingTop:'20px'}}>Contact Information</h3>
        <PatientContactInfo updateInfo={updateDatas}/>
</div>

<div style={{backgroundColor:"white",padding:"30px",marginTop:'30px'}}>
     <h3 style={{paddingTop:'20px'}}>Emergency Contact Details</h3>
        <PatientEmergencyInfo updateInfo={updateDatass}/>
</div>

<button type="submit" class="btn btn-primary m-2 mt-4">Register </button>
<button type="button" class="btn btn-primary m-2 mt-4">Cancel</button>
</form>
  </div>
  </div>
  
     );
}
 
export default AddPatient;