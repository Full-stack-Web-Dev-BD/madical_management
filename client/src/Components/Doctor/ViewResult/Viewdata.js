import React, {useState, useEffect } from 'react';
import DSidebar from '../Dsidebar'
import axios from 'axios'
import Showdata from './Showdata'
import ResultFill from '../../LaboratoryTeam/ResultFill'
import BasicInformation from '../HForm/BasicInformation'
const Viewdata = (props) => {
    const [data,setData] = useState({PatientUHID:"",signature:"",referralDate:null,firstName:"",
    fatherName:"",grandFatherName:"",age:"",birthDate:"",gender:"",bloodGroup:"",ward:"",bedNo:"",referringNo:"",
    Results:{resultWBC:"",resultRBC:"",resultHGB:"",resultHCT:"",mcvResult:"",mchResult:"",mchcResult:"",esrResult:"",
    retcResult:"",pltResult:"",bltResult:"",cltTime:"",ptSecResult:"",ptInrResult:"",pttSecResult:"",diffResult:"",
    neutrophilSegResult:"",neutrophilBandResult:"",lymphocyteResult:"",monocyteResult:"",eosinophilResult:"",
    basophilResult:"",hemoParasite:"",cellMorphology:"",other:""},priority:"",department:"",DoctorID:"",test:"Hematology"})
      
    useEffect(()=>{
   
        console.log(props.match.params.RequestID)
        axios.get(`http://localhost:4001/api/labRequest/hematology/${props.match.params.RequestID}`)
        
        .then(res => {
       
            setData(res.data)
            console.log(res.data)
        });

    },[])
    const updateStaffData=()=>{
        console.log("sa")
    }
    const updateStaffDatas=()=>{
        console.log("sa")
    }
 
    if(!data.referralDate == null)
    {
        return "loading"
    }
    else{
    return ( 
        <div>
                <DSidebar/>
                 
     <div style={{marginLeft:'220px'}}>
       <div style={{padding:'20px'}}>
       <  BasicInformation  basic={data} updateInfo={updateStaffData}  />
  
       <div style={{backgroundColor:"white",padding:"30px",clear:'both'}}>
      
       <ResultFill id={props.match.params.RequestID}  data={data} updateInfo={updateStaffDatas} />
      </div>
      </div>
        </div>
        </div>
     );}
}
export default Viewdata;