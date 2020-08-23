import React,{useState,useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Checkbox from '@material-ui/core/Checkbox';
import DSidebar from '../Dsidebar'
import axios from 'axios'
import Pdf from "react-to-pdf";
import HIVViralComp from '../NHLForms/HIVViralComp'
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

const ref = React.createRef();

export default function HivVirals(props) {
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
 
    useEffect(()=>{
        console.log(props.match)
        axios.get(`http://localhost:4001/api/labRequest/hivViral/${props.match.params.RequestID}`)
        .then(res=>{
                console.log(res.data)
                setHCV(res.data)
         
        })
        .catch(error=>console.log(error))
    },[])
    const initialChange=(e)=>{
    
    }
    const handleChange=(e)=>{
      
    }
    const handleResult=(e)=>{

    }
    const handleResult1=(e)=>{
   
    }
    const retrieve=()=>{
        
       
    }
    const submitter=(e)=>{
       
 
    }

    return (
        <div>
        <DSidebar/>
         
<div style={{marginLeft:'220px'}}>
<div style={{padding:'20px'}}>
<Pdf targetRef={ref} filename="code-example.pdf">
        {({ toPdf }) => <button onClick={toPdf}>Generate Pdf</button>}
      </Pdf>
        <HIVViralComp hcv={hcv} handleChange={handleChange} 
        handleResult={handleResult} handleResult1={handleResult1} 
        submitter={submitter} initialChange={initialChange} 
        retrieve={retrieve} purpose="update"/>  
        </div>
        </div>
        </div>
     
    );
}
