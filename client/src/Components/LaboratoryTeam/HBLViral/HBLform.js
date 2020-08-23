import React,{useState,useEffect} from 'react';
import HBLViralComp from '../../Doctor/NHLForms/HBLViralComp'
import axios from 'axios'
import Lsidebar from '../Lsidebar'
const HBLform = (props) => {
    const [hcv,setHCV] = useState({
        PatientUHID:"",
        priority:"",
        department:"",
        DoctorID:"",
        firstName:"",
        nationalIdNumber:"",
        dateOfBirth:null,
        subZoba:"",
        villCity:"",
        requestedBy:"",
        tele:"",
        specimenDate:"",
        NHLDate:"",
        goodCondition:false,
        inadequateCondition:false,
        result1:{
        SN:"",
        clientName:"",
        clientNationalID:"",
        age:"",
        sex:"",
        initialTest:"",
        repeatTest:"",
        result:"",
        },
        result2:{
        SN:"",
        clientName:"",
        clientNationalID:"",
        age2:"",
        sex:"",
        initialTest2:"",
        repeatTest2:"",
        result2:""
        },
        reportBy:"",
        referralDate:"",
        reportSig:"",
        approveBy:"",
        approveDate:"",
        approveSig:""
    })
    useEffect(()=>{
        console.log(props.match)
        axios.get(`http://localhost:4001/api/labRequest/hblViral/${props.match.params.RequestID}`)
        .then(res=>{
                console.log(res.data)
                setHCV(res.data)
         
        })
        .catch(error=>console.log(error))
    },[])
    const initialChange=(e)=>{
        const copyData = {...hcv}
        copyData['PatientUHID'] = e.currentTarget.value
        setHCV(copyData)
    }
    const handleChange=(e)=>{
      
    
    }
    const handleResult=(e)=>{
 const data = {...hcv}

        const {name,value} = e.currentTarget
        data.result1[name] = value
        console.log(hcv)
        setHCV(data)
    }
    const handleResult1=(e)=>{
        const data = {...hcv}
        const {name,value} = e.currentTarget
        data.result2[name] = value
        console.log(hcv)
        setHCV(data)
        
    }
    const retrieve=()=>{
    }
    const submitter=(e)=>{
        console.log("SSSSSSSSSs")
        e.preventDefault()
        console.log(hcv.result1)
        console.log(hcv.result2)
            axios.put(`http://localhost:4001/api/labRequest/hblViral/${props.match.params.RequestID}`,{ 
                result1:hcv.result1,
             result2:hcv.result2,       })
            .then(res => {
                console.log("succes")
                props.history.push("/FormView")
 
            });
    }
    if(!hcv.priority)
    {
        return "loading"
    }
    else
    {
    return ( 
        <div>
        <Lsidebar/>
        <div style={{marginLeft:'220px'}}>
   <div style={{padding:'20px'}}>
        <HBLViralComp hcv={hcv} handleChange={handleChange} 
        handleResult={handleResult} handleResult1={handleResult1} 
        submitter={submitter} initialChange={initialChange} 
        retrieve={retrieve}
        purpose="update"/>
        </div></div></div>
     );
    }
}
 
export default HBLform;
