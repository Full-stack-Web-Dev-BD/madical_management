import React,{useState,useEffect} from 'react';
import Page2 from '../NHLForms/page2'
import axios from 'axios'
import Dsidebar from '../Dsidebar'
import Pdf from "react-to-pdf";

const ref = React.createRef();
const Tbreport = (props) => {
    const [data,setData] = useState({
        PatientUHID:"",priority:"",department:"",DoctorID:"",nationalIdNumber:"",test:"",firstName:"",sex:"",
        eritreanID:"",dateOfBirth:"",address:"",labSerial:"",round:"",facultyName:"",
        doctorName:"",referralDate:null,mgitCulture:"",mgitMicroscopy:"",ljCulture:"",geneXpertRapidTest:""
        ,DST:{stremptomycin:"",isoniazed:"",rifampcin:"",rthambutol:"",pyrazinamide:"",amikacin:"",capreomycin:"",
        kanamycin:"",levloxacin:"",ofloxacin:""},result:"",comments:"",reportedBy:"",recievedBy:""
    })
    const handleChange=(e)=>{
    }
    const handleChanges=(e)=>{
    
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
    
    }
    if(!data.priority)
    {
        return "loading"
    }
    else
    {
    return (
        <div>
        <Dsidebar/>
        <div style={{marginLeft:'220px'}}>
        <Pdf targetRef={ref} filename="code-example.pdf" options={options}>
        {({ toPdf }) => <button onClick={toPdf}>Generate Pdf</button>}
      </Pdf>
   <div ref={ref}  style={{padding:'20px'}}>
 
        <Page2 data={data} handleChange={handleChange}
        handleChanges={handleChanges}
        stat="done"
        submitter={submitter} retrieve={retrieve}/>
        </div>
        </div>
        </div>
      );
}}
const options = {
 
    unit: "in",
    format: [884, 1184]
  };
export default Tbreport;