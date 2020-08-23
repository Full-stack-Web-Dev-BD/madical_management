import React,{useState,useEffect} from 'react';
import Page2 from '../../Doctor/NHLForms/page2'
import axios from 'axios'
import Lsidebar from '../Lsidebar'
const TBreport = (props) => {
    const [data,setData] = useState({
        PatientUHID:"",priority:"",department:"",DoctorID:"",nationalIdNumber:"",test:"",firstName:"",sex:"",
        eritreanID:"",dateOfBirth:"",address:"",labSerial:"",round:"",facultyName:"",
        doctorName:"",referralDate:null,mgitCulture:"",mgitMicroscopy:"",ljCulture:"",geneXpertRapidTest:""
        ,DST:{stremptomycin:"",isoniazed:"",rifampcin:"",rthambutol:"",pyrazinamide:"",amikacin:"",capreomycin:"",
        kanamycin:"",levloxacin:"",ofloxacin:""},result:"",comments:"",reportedBy:"",recievedBy:""
    })
    const handleChange=(e)=>{
        var copyData = {... data}
        copyData[e.currentTarget.name] = e.currentTarget.value
        setData(copyData)
        console.log(copyData)
    }
    const handleChanges=(e)=>{
        var copyData = {...data}
        copyData.DST[e.currentTarget.name] = e.currentTarget.value
        setData(copyData)
        console.log(data)
    }
    useEffect(()=>{
        console.log(props.match)
        axios.get(`http://localhost:4001/api/labRequest/TBReport/${props.match.params.RequestID}`)
        .then(res=>{
                console.log(res.data)
                setData(res.data)
         
        })
        .catch(error=>console.log(error))
    },[])
    const retrieve=(e)=>{
    
    }

    const submitter=(e)=>{
        console.log("SSSSSSSSSs")
        e.preventDefault()
        console.log(data)
        axios
        .put(`http://localhost:4001/api/labRequest/TBReport/${props.match.params.RequestID}`,{
      
            DST:data.DST,
            result:data.result
         
        })
        .then((res)=>{
            console.log("Successful")
        })
        .catch((error)=>{
            console.log(error)
        })
    }
    if(!data.priority)
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
        <Page2 data={data} handleChange={handleChange}
        handleChanges={handleChanges}
        stat="update"
        submitter={submitter} retrieve={retrieve}/>
        </div>
        </div>
        </div>
     );
}}
 
export default TBreport;