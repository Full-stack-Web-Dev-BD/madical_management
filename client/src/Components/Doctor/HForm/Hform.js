import React,{useState} from 'react';
import Puhid from './Puhid'
import DSidebar from '../Dsidebar'
import BasicInformation from './BasicInformation'
import TestingValues from './TestingValues'
import { Route , withRouter} from 'react-router-dom';
import Signature from './Signature'
import Swal from 'sweetalert2'
import axios from 'axios'
const Hform = (props) => {

    const [data,setData] = useState({PatientUHID:"",signature:"",referralDate:"",firstName:"",
fatherName:"",grandFatherName:"",DoctorID:"",age:"",birthDate:"",gender:"",bloodGroup:"",ward:"",bedNo:"",referringNo:"",
result:{resultWBC:"",resultRBC:"",resultHGB:"",resultHCT:"",mcvResult:"",mchResult:"",mchcResult:"",esrResult:"",
retcResult:"",pltResult:"",bltResult:"",cltTime:"",ptSecResult:"",ptInrResult:"",pttSecResult:"",diffResult:"",
neutrophilSegResult:"",neutrophilBandResult:"",lymphocyteResult:"",monocyteResult:"",eosinophilResult:"",
basophilResult:"",hemoParasite:"",cellMorphology:"",other:""},priority:"",department:"",DoctorID:"",test:"Hematology"})
    const Hematology=(e)=>{
        e.preventDefault()
        console.log(data)
        axios
        .post("http://localhost:4001/api/labRequest/hematology",{
            PatientUHID:data.PatientUHID,
            signature:data.signature,
            referralDate:data.referralDate,
            firstName:data.firstName,
            fatherName:data.fatherName,
            grandFatherName:data.grandFatherName,
            age:data.age,
            birthDate:data.birthDate,
            gender:data.gender,
            bloodGroup:data.bloodGroup,
            ward:data.ward,
            bedNo:data.bedNo,
            referringNo:data.referringNo,
            priority:data.priority,
            department:data.department,
            doctorID:data.DoctorID,
            result:data.result,
            test:data.test

        })
        .then((res)=>{
            console.log("Successful")
            Swal.fire("Form Successfully Submitted ")
            props.history.push("/patientList")
 
           
        })
        .catch((error)=>{
            console.log(error)
        })
    }

    const updateStaffData=(e)=>
    {
        e.preventDefault()
        console.log(data)
        const datas = {... data}
        datas[e.currentTarget.name] = e.currentTarget.value
        setData(datas)
    }
    const updateStaffDatas=(e)=>{
        e.preventDefault()
        console.log(data)
        const datas = {... data}
        datas.result[e.currentTarget.name] = e.currentTarget.value
        setData(datas)
    }
    const retrieveData=(e)=>{
        e.preventDefault()
        
        if(!data.PatientUHID)
        {
         return 
        }
        else{
       
          axios.get(`http://localhost:4001/api/BookAppoint/${data.PatientUHID}`)
          .then(res=>{
            const copyData = {...data}
                  console.log(res.data.info.basicInformation)
                  var today = new Date()
                  var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate()
                  copyData.referralDate = date
                  copyData.firstName = res.data.info.basicInformation.name
                  copyData.fatherName = res.data.info.basicInformation.fatherName
                  copyData.grandFatherName = res.data.info.basicInformation.grandFatherName
                  copyData.birthDate = res.data.info.basicInformation.date
                  copyData.bloodGroup = res.data.info.basicInformation.gender
                  copyData.gender = res.data.info.basicInformation.bloodGroup
                  copyData.priority = res.data.info.priority
                  copyData.department = res.data.info.Department
                  copyData.DoctorID = res.data.info.SID
                  console.log(copyData)
                  setData(copyData)
          })
          .catch(error=>console.log(error))
        }
    }
    return ( 

     <form  onSubmit={Hematology}>
       
       <div style={{paddingTop:'10px',paddingLeft:'30px'}}>
       
       <h5 >Patient UHID</h5>
       <  Puhid   updateInfo={updateStaffData} retrieve={retrieveData}/>
  
      </div>

       <div style={{backgroundColor:"white",padding:"30px",clear:'both'}}>
       <h5 style={{paddingTop:'10px',float:"left"}}>Basic Information</h5>
       <  BasicInformation  basic={data} updateInfo={updateStaffData}  />
  
       </div>
       <div style={{backgroundColor:"white",padding:"30px",clear:'both'}}>
      
       < TestingValues  updateInfo={updateStaffDatas}/>
  
       </div>
       <div style={{backgroundColor:"white",padding:"30px",clear:'both'}}>
      
      < Signature  updateInfo={updateStaffData}/>
 
      </div>
      <button class="btn btn-primary" style={{float:'right',margin:'10px'}}> Cancel</button>
       <button class="btn btn-primary" type="submit" style={{float:'right',margin:'10px'}}> Submit</button>
 
  </form>

     );
}
 
export default withRouter(Hform);