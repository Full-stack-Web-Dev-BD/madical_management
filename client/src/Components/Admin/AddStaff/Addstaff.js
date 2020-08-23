import React,{useState} from 'react';
import Basicinfo from './Basicinfo'
import Childrenlist from './Childrenlist'
import Contactinfo from './Contactinfo'
import Emergencycontactdetails from './Emergencycontactdetails'
import HLeducation from './HLeducation'
import Languageproficiency from './Languageproficiency'
import Specialtraining from './Specialtraining'
import Staffinfo from './Staffinfo'
import Workexperience from './Workexperience'
import Workstatus from './Workstatus'
import Sidebar from '../Asidebar'
import Swal from 'sweetalert2'
import axios from 'axios'
import { BrowserRouter, Link,withRouter } from 'react-router-dom';
const Addstaff = (props) => {

    const [staffData, setStaffData] = useState({staff:{},basic:{},contact:{},highLevel:{},workStatus:{},specialTraining:{},
    workExperience:{},languageProficiency:{},childrenList:{},emergencyContact:{}})
    function updateStaffData(e)
    {
        e.preventDefault()
        console.log(e.target.value)
        console.log(e.target.name)

    const updateStaffData ={...staffData}
    updateStaffData.staff[e.currentTarget.name] = e.currentTarget.value;
    setStaffData(updateStaffData)
    console.log(updateStaffData)
    }
    function updateBasicData(e)
    {
        e.preventDefault()
        console.log(e.target.value)
        console.log(e.target.name)

        const updateStaffData ={...staffData}
        updateStaffData.basic[e.currentTarget.name] = e.currentTarget.value;
        setStaffData(updateStaffData)
        console.log(updateStaffData)
    }
    function updateContactData(e)
    {
        e.preventDefault()
        console.log(e.target.value)
        console.log(e.target.name)
        const updateStaffData ={...staffData}
        updateStaffData.contact[e.currentTarget.name] = e.currentTarget.value;
        setStaffData(updateStaffData)
        console.log(updateStaffData)
    }
    function updateHLData(e)
    {
        e.preventDefault()
        console.log(e.target.value)
        console.log(e.target.name)
        const updateStaffData ={...staffData}
        updateStaffData.highLevel[e.currentTarget.name] = e.currentTarget.value;
        setStaffData(updateStaffData)
        console.log(updateStaffData)
    }

    function updateWordData(e)
    {
        e.preventDefault()
        console.log(e.target.value)
        console.log(e.target.name)
        const updateStaffData ={...staffData}
        updateStaffData.workStatus[e.currentTarget.name] = e.currentTarget.value;
        setStaffData(updateStaffData)
        console.log(updateStaffData)
    }

    function updateSTData(e)
    {
        e.preventDefault()
        console.log(e.target.value)
        console.log(e.target.name)
        const updateStaffData ={...staffData}
        updateStaffData.specialTraining[e.currentTarget.name] = e.currentTarget.value;
        setStaffData(updateStaffData)
        console.log(updateStaffData)
    }
    
    function updateWEData(e)
    {
        e.preventDefault()
        console.log(e.target.value)
        console.log(e.target.name)
        const updateStaffData ={...staffData}
        updateStaffData.workExperience[e.currentTarget.name] = e.currentTarget.value;
        setStaffData(updateStaffData)
        console.log(updateStaffData)
    }
    
    function updateLPData(e)
    {
        e.preventDefault()
        console.log(e.target.value)
        console.log(e.target.name)
        const updateStaffData ={...staffData}
        updateStaffData.languageProficiency[e.currentTarget.name] = e.currentTarget.value;
        setStaffData(updateStaffData)
        console.log(updateStaffData)
    }
   
    function updateCLData(e)
    {
        e.preventDefault()
        console.log(e.target.value)
        console.log(e.target.name)
        const updateStaffData ={...staffData}
        updateStaffData.childrenList[e.currentTarget.name] = e.currentTarget.value;
        setStaffData(updateStaffData)
        console.log(updateStaffData)
    }

    function updateECDData(e)
    {
        e.preventDefault()
        console.log(e.target.value)
        console.log(e.target.name)
        const updateStaffData ={...staffData}
        updateStaffData.emergencyContact[e.currentTarget.name] = e.currentTarget.value;
        setStaffData(updateStaffData)
        console.log(updateStaffData)
    }
    
    const registerStaff=(e)=>{
            e.preventDefault()

            
        axios
        .post("http://localhost:4001/api/Staff",{
            staff:staffData.staff,
            basic:staffData.basic,
            contact:staffData.contact,
            highLevel:staffData.highLevel,
            workStatus:staffData.workStatus,
            specialTraining:staffData.specialTraining,
            workExperience:staffData.workExperience,
            languageProficiency:staffData.languageProficiency,
            childrenList:staffData.childrenList,
            emergencyContact:staffData.emergencyContact

        })
        .then(res=>
            {
                console.log(res.data)
              
                axios
                .post("http://localhost:4001/api/user",{
                    name:staffData.basic.name,
                    email:staffData.contact.email,
                    type:staffData.staff.staffType
                })
                .then(res=>
                    {
                     console.log(res)
                    
                        Swal.fire("Password to Login is ",res)
                        props.history.push("/AdminDashboard")

                    })
                .catch(error=>
                    {
                        console.log(error)
                    })
             
               
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
          
          
       <form style={{padding:"30px"}} onSubmit={registerStaff}>
       <div style={{backgroundColor:"white",padding:"30px"}}>
       <h5 style={{paddingTop:'10px',float:"left"}}>Staff Information</h5>
       <  Staffinfo   updateInfo={updateStaffData}/>
  
       </div>
  
  <div style={{backgroundColor:"white",padding:"30px",marginTop:'30px'}}>
       <h5 style={{paddingTop:'10px',float:"left"}}>Basic Information</h5>
          <Basicinfo  updateInfo={updateBasicData}/>
  </div>
  
  <div style={{backgroundColor:"white",padding:"30px",marginTop:'30px'}}>
       <h5 style={{paddingTop:'10px',float:"left"}}> Contact Details</h5>
          <Contactinfo updateInfo={updateContactData}/>
  </div>
   
  <div style={{backgroundColor:"white",padding:"30px",marginTop:'30px'}}>
       <h5 style={{paddingTop:'10px',float:"left"}}>High Level Education</h5>
          <HLeducation updateInfo={updateHLData}/>
  </div>
   
  <div style={{backgroundColor:"white",padding:"30px",marginTop:'30px'}}>
       <h5 style={{paddingTop:'10px',float:"left"}}>Work Status</h5>
          <Workstatus  updateInfo={updateWordData}/>
  </div>
   
  <div style={{backgroundColor:"white",padding:"30px",marginTop:'30px'}}>
       <h5 style={{paddingTop:'10px',float:"left"}}> Special Training</h5>
          <Specialtraining updateInfo={updateSTData}/>
  </div>
   
  <div style={{backgroundColor:"white",padding:"30px",marginTop:'30px'}}>
       <h5 style={{paddingTop:'10px',float:"left"}}>Work Experience</h5>
          <Workexperience updateInfo={updateWEData}/>
  </div>
   
  <div style={{backgroundColor:"white",padding:"30px",marginTop:'30px'}}>
       <h5 style={{paddingTop:'10px',float:"left"}}>Language Proficiency</h5>
          <Languageproficiency  updateInfo={updateLPData}/>
  </div>
   
  <div style={{backgroundColor:"white",padding:"30px",marginTop:'30px'}}>
       <h5 style={{paddingTop:'10px',float:"left"}}>Children List</h5>
          <Childrenlist  updateInfo={updateCLData}/>
  </div>

  <div style={{backgroundColor:"white",padding:"30px",marginTop:'30px'}}>
       <h5 style={{paddingTop:'10px',float:"left"}}>Emergency Contact Details</h5>
          <Emergencycontactdetails  updateInfo={updateECDData}/>
  </div>
  
  <button type="submit" class="btn btn-primary m-2 mt-4">Add Doctor </button>
  <button type="button" class="btn btn-primary m-2 mt-4">Cancel</button>
  </form>
    </div>
    </div>
     );
}
 
export default withRouter(Addstaff);