import React,{useState} from 'react';  
import Page2 from './page2'
import DSidebar from '../Dsidebar'
import axios from 'axios'
const Mpage2 = () => {
    const [data,setData] = useState({
        PatientUHID:"",priority:"",department:"",DoctorID:"",nationalIdNumber:"",test:"TBReport",firstName:"",sex:"",
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
    const retrieve=(e)=>{
        e.preventDefault()
        axios.get(`http://localhost:4001/api/BookAppoint/${data.PatientUHID}`)
        .then(res=>{
          const copyData = {...data}
                console.log(res.data.info.basicInformation)
                var today = new Date()
                var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate()
                copyData.priority = res.data.info.priority
                copyData.department = res.data.info.Department
                copyData.DoctorID = res.data.info.SID
                copyData.firstName = res.data.info.basicInformation.name
                copyData.nationalIdNumber = res.data.info.basicInformation.nationalIdNumber
                copyData.dateOfBirth = res.data.info.basicInformation.date
                copyData.sex = res.data.info.basicInformation.gender
                console.log(copyData)
                setData(copyData)
        })
        .catch(error=>console.log(error))

    }

    const submitter=(e)=>{
        console.log("SSSSSSSSSs")
        e.preventDefault()
        console.log(data)
        axios
        .post("http://localhost:4001/api/labRequest/TBReport",{
            PatientUHID:data.PatientUHID,
            priority:data.priority,
            department:data.department,
            nationalIdNumber:data.nationalIdNumber,
            test:data.test,
            DoctorID:data.DoctorID,
            firstName:data.firstName,
            sex:data.sex,
            dateOfBirth:data.dateOfBirth,
            eritreanID:data.eritreanID,
            address:data.address,
            labSerial:data.labSerial,
            round:data.round,
            facultyName:data.facultyName,
            doctorName:data.doctorName,
            referralDate:data.referralDate,
            mgitCulture:data.mgitCulture,
            mgitMicroscopy:data.mgitMicroscopy,
            ljCulture:data.ljCulture,
            geneXpertRapidTest:data.geneXpertRapidTest,
            DST:data.DST,
            result:data.result,
            comments:data.comments,
            reportedBy:data.reportedBy,
            recievedBy:data.recievedBy
         
        })
        .then((res)=>{
            console.log("Successful")
        })
        .catch((error)=>{
            console.log(error)
        })
    }
    return ( 
     
           <Page2 data={data} handleChange={handleChange}
           handleChanges={handleChanges}
           submitter={submitter} retrieve={retrieve}/>
    
 
     );
}
 
export default Mpage2;
