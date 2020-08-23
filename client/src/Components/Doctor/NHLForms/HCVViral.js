import React,{useState,useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import DatePicker from 'react-date-picker';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Checkbox from '@material-ui/core/Checkbox';
import DSidebar from '../Dsidebar'
import axios from 'axios'
import HCVViralComp from './HCVViralComp'
const useStyles = makeStyles({
    brdr: {
        border: '1px solid black',
        borderCollapse: 'collapse'
    },
    root: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});

export default function HCVViral(props) {
    const classes = useStyles();
    const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));
    const [hcv, setHCV] = useState({
        PatientUHID:"",
        priority:"",
        department:"",
        DoctorID:"",
        firstName:"",
        nationalIdNumber:"",
        dateOfBirth:null,
        healthFacility:"",
        zoba:"",
        subZoba:"",
        villCity:"",
        requestedBy:"",
        tele:"",
        specimenDate:null,
        NHLDate:null,
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
        referralDate:null,
        reportSig:"",
        approveBy:"",
        approveDate:null,
        approveSig:""
    })
 

    const initialChange=(e)=>{
        const copyData = {...hcv}
        copyData['PatientUHID'] = e.currentTarget.value
        setHCV(copyData)
    }
    const handleChange=(e)=>{
        const data = {...hcv}
        const {name,type,value} = e.currentTarget
        console.log(e.currentTarget.type)
        console.log(e.currentTarget)
        if(type == 'checkbox')
        {
            data[name] = e.currentTarget.checked
        }
        else{
        data[name] = value
        }
        console.log(hcv)
        setHCV(data)
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
        
        axios.get(`http://localhost:4001/api/BookAppoint/${hcv.PatientUHID}`)
        .then(res=>{
          const copyData = {...hcv}
                console.log(res.data.info.basicInformation)
                var today = new Date()
                var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate()
                copyData.priority = res.data.info.priority
                copyData.department = res.data.info.Department
                copyData.DoctorID = res.data.info.SID
                copyData.firstName = res.data.info.basicInformation.name
                copyData['result1'].clientName =  res.data.info.basicInformation.name
                copyData['result2'].clientName =  res.data.info.basicInformation.name
                copyData.nationalIdNumber = res.data.info.basicInformation.nationalIdNumber
                copyData['result1'].clientNationalID = res.data.info.basicInformation.nationalIdNumber
                copyData['result2'].clientNationalID = res.data.info.basicInformation.nationalIdNumber
                copyData.dateOfBirth = res.data.info.basicInformation.date
                copyData['result1'].sex = res.data.info.basicInformation.gender
                copyData['result2'].sex = res.data.info.basicInformation.gender
                console.log(copyData)
                setHCV(copyData)
        })
        .catch(error=>console.log(error))

    }
    const submitter=(e)=>{
        console.log("SSSSSSSSSs")
        e.preventDefault()
        console.log(hcv)
        axios
        .post("http://localhost:4001/api/labRequest/hcvViral",{
            PatientUHID:hcv.PatientUHID,
            priority:hcv.priority,
            department:hcv.department,
            DoctorID:hcv.DoctorID,
            firstName:hcv.firstName,
            nationalIdNumber:hcv.nationalIdNumber,
            dateOfBirth:hcv.dateOfBirth,
            healthFacility:hcv.healthFacility,
            zoba:hcv.healthFacility,
            subZoba:hcv.subZoba,
            villCity:hcv.villCity,
            requestedBy:hcv.requestedBy,
            tele:hcv.tele,
            specimenDate:hcv.specimenDate,
            NHLDate:hcv.NHLDate,
            goodCondition:hcv.goodCondition,
            inadequateCondition:hcv.inadequateCondition,
            result1:hcv.result1,
            result2:hcv.result2,
            reportBy:hcv.reportBy,
            referralDate:hcv.referralDate,
            reportSig:hcv.reportSig,
            approveBy:hcv.approveBy,
            approveDate:hcv.approveDate,
            approveSig:hcv.approveSig
        })
        .then((res)=>{
            console.log("Successful")
            props.history.push("/patientList")
 
           
 
           
        })
        .catch((error)=>{
            console.log(error)
        })
    }
    return (
            <HCVViralComp hcv={hcv} handleChange={handleChange} 
            handleResult={handleResult} handleResult1={handleResult1} 
            submitter={submitter} initialChange={initialChange} 
            retrieve={retrieve}/>
     
    );
}
