import React,{useState,useEffect} from 'react';
import { BrowserRouter, Link,withRouter } from 'react-router-dom';
import Lsidebar from './Lsidebar'
import ResultFill from './ResultFill';
import Swal from 'sweetalert2'
import BasicInformation from '../Doctor/HForm/BasicInformation'
import axios from 'axios'
const TestFill = (props) => {
    const [data,setData] = useState({PatientUHID:"",signature:"",referralDate:new Date(),firstName:"",
    fatherName:"",grandFatherName:"",age:"",birthDate:"",gender:"",bloodGroup:"",ward:"",bedNo:"",referringNo:"",
    result:{resultWBC:"",resultRBC:"",resultHGB:"",resultHCT:"",mcvResult:"",mchResult:"",mchcResult:"",esrResult:"",
    retcResult:"",pltResult:"",bltResult:"",cltTime:"",ptSecResult:"",ptInrResult:"",pttSecResult:"",diffResult:"",
    neutrophilSegResult:"",neutrophilBandResult:"",lymphocyteResult:"",monocyteResult:"",eosinophilResult:"",
    basophilResult:"",hemoParasite:"",cellMorphology:"",other:""},priority:"",department:"",DoctorID:"",test:"Hematology"})

    const [res,setRes] = useState( {Results:{resultWBC:"",resultRBC:"",resultHGB:"",resultHCT:"",mcvResult:"",mchResult:"",mchcResult:"",esrResult:"",
    retcResult:"",pltResult:"",bltResult:"",cltTime:"",ptSecResult:"",ptInrResult:"",pttSecResult:"",diffResult:"",
    neutrophilSegResult:"",neutrophilBandResult:"",lymphocyteResult:"",monocyteResult:"",eosinophilResult:"",
    basophilResult:"",hemoParasite:"",cellMorphology:"",other:""}})
    useEffect(()=>{
        axios.get(`http://localhost:4001/api/labRequest/hematology/${props.match.params.RequestID}`)
          .then(res=>{
            
                  setData(res.data)
                  console.log(data)
          })
          .catch(error=>console.log(error))
        },[])
    const updateStaffDatas=(e)=>{
        e.preventDefault()
        console.log(data)
        const datas = {... res}
        datas.Results[e.currentTarget.name] = e.currentTarget.value
        setRes(datas)
    }
    const updateStaffData=()=>{

    }
    const submission = (e)=>{
        e.preventDefault()
        console.log(data)
        axios.put(`http://localhost:4001/api/labRequest/hematology/${props.match.params.RequestID}`,{ 
            results: res.Results
        })
        .then(res => {
            Swal.fire("Results Updated")
            props.history.push("/FormView")
        });

    }
 console.log(data)
 if(!data)
 {
     return "Loading"
 }
 else{
    return ( 
            <div>
                  <Lsidebar/>
     
     <div style={{marginLeft:'220px'}}>
       <div style={{padding:'20px'}}>
       <form  onSubmit={submission}>
       <div style={{backgroundColor:"white",padding:"30px",clear:'both'}}>
       <h5 style={{paddingTop:'10px',float:"left"}}>Basic Information</h5>
       <  BasicInformation  basic={data} updateInfo={updateStaffData}  />
  
       </div>
       <div style={{backgroundColor:"white",padding:"30px",clear:'both'}}>
      
            <ResultFill id={props.match.params.RequestID} data={res} updateInfo={updateStaffDatas} />
            </div>
            <button class="btn btn-primary" type="submit" style={{float:'right',margin:'10px'}}> Submit</button>
 </form>
        </div>
        </div>
            </div>
     );}
}
 
export default TestFill;
