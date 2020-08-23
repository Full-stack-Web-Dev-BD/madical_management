import React,{useState,useEffect} from 'react';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Checkbox from '@material-ui/core/Checkbox';
import { makeStyles } from '@material-ui/core/styles';
import DSidebar from '../Dsidebar'
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Swal from 'sweetalert2'
import axios from 'axios'
import DatePicker from 'react-date-picker';
import ChemComp from './ChemComp'
import ChemTable from './ChemTable'
const useStyles = makeStyles((theme) => ({
    
      brdr: {
        border: '1px solid black',
        borderCollapse: 'collapse'

    }
  }));
const Chemistry = (props) => {
    const classes = useStyles();
    const [chemistry,setChemistry] = useState({
        PatientUHID:"",firstName:"",nationalIdNumber:"",dateOfBirth:null,sex:"",patientZopaSub:"",hospital:"",ward:"",
        priority:"",department:"",DoctorID:"",bedNo:"",paymentPC:false,paymentPR:false,referralDate:null,dateCollected:"",collectorInitial:"",PatientSurvey:false,
        PatientFree:false,
        physicianName:"",signature:"",opdReceiptNo:"",
        chemistryData:{Albumin:false,AlkalinePhosphatase:false,
        AltSGPT:false,Amylase:false,AstSGOT:false,BilirubinTotal:false,BilirubinDirect:false,Bun:false,Calcium:false,CarbonDioxide:false,
    Chloride:false,CreativeKinase:false,CKMB:false,Creatinine:false,Electrolytes:false,Ferritin:false,GlucoseFasting:false,GlucoseRandm:false,
    GlutamylTransferase:false,HepaticFunction:false,LDH:false,LipidPandel:false,Lipase:false,IronTotal:false,Oxygen:false,Phosphorus:false,
    Potassium:false,ProteinTotal:false,T3UPTAKE:false,T4TOTAL:false,Sodium:false,Triglycerides:false,TSH:false,UricAcid:false
},
    HaemotologyData:{
        BloodFilmDifferential:false,BloodFilmMorphology:false,CBC:false,FactorAnalysis:false,Prothrombin:false,PTAPTT:false,
        Reticulocyte:false
    },
    ImmunoHaematol:{
        ABO:false,AutoImmuneCold:false,AutoImmuneWarm:false,BloodGroupABO:false,BloodGroupAntiBody:false,Coombs:false,PreNatal:false,
        RhHDN:false
    },
    MicroBiology:{
        CultureSenstivity:false,CultureFungus:false
    },
    Immunoserology:{
        AslO:false,Brucella:false,CRP:false,DAT:false,Pylori:false,HbsAG:false,HepatitisAnti:false,HIV:false,Infectious:false,Rubella:false,
        Rheumatoid:false,
        VDRL:false,WEILOX19:false,WEILOX2:false,WEILOXK:false,WIDAL:false
    },
    TherapeuticDrugs:{
        Carbamazepine:false,Phenobarbital:false,ValproicAcid:false
    },test:"Chemistry"
      })
      const retrieve=(e)=>{
        e.preventDefault()
        console.log("AS")
        if(!chemistry.PatientUHID)
        {
         return
        }
        else{
       
          axios.get(`http://localhost:4001/api/BookAppoint/${chemistry.PatientUHID}`)
          .then(res=>{
            const copyData = {...chemistry}
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
                  setChemistry(copyData)
          })
          .catch(error=>console.log(error))
        }
    }
    const setDate=(date)=>{
        const data= {...chemistry}
            
        data["referralDate"] = date
          
        setChemistry(data)
        
    }
    const setDates=(date)=>{
        const data= {...chemistry}
            
        data["dateCollected"] = date
          
        setChemistry(data)
        
    }
      const initialChange=(e)=>{
          e.preventDefault()
          const data= {...chemistry}
            
          data[e.target.name] = e.target.value
            
          setChemistry(data)
      
          console.log(chemistry)
      }
      const initialChanged=(e)=>{
        e.preventDefault()
        // console.log(e.currentTarget.checked)
         const data = {...chemistry}
         data[e.currentTarget.name] = e.currentTarget.checked
         setChemistry(data)
         console.log(chemistry)
      }
     const handleInitialChange=(e)=>{
          e.preventDefault()
           // console.log(e.currentTarget.checked)
            const data = {...chemistry}
            data.chemistryData[e.currentTarget.name] = e.currentTarget.checked
            setChemistry(data)
            console.log(chemistry)
      }
      const handleHaemotologyChange=(e)=>{
        e.preventDefault()
         // console.log(e.currentTarget.checked)
          const data = {...chemistry}
          data.HaemotologyData[e.currentTarget.name] = e.currentTarget.checked
          setChemistry(data)
          console.log(chemistry)
    }
    const handleImmunoHaematol=(e)=>{
        e.preventDefault()
        // console.log(e.currentTarget.checked)
         const data = {...chemistry}
         data.ImmunoHaematol[e.currentTarget.name] = e.currentTarget.checked
         setChemistry(data)
         console.log(chemistry)
    }
    const handleMicroBiology=(e)=>{
        e.preventDefault()
        // console.log(e.currentTarget.checked)
         const data = {...chemistry}
         data.MicroBiology[e.currentTarget.name] = e.currentTarget.checked
         setChemistry(data)
         console.log(chemistry)
    }
    const handleImmunoserology=(e)=>{
        e.preventDefault()
        // console.log(e.currentTarget.checked)
         const data = {...chemistry}
         data.Immunoserology[e.currentTarget.name] = e.currentTarget.checked
         setChemistry(data)
         console.log(chemistry)
    }
    const handleTherapeuticDrugs=(e)=>{
        e.preventDefault()
        // console.log(e.currentTarget.checked)
         const data = {...chemistry}
         data.TherapeuticDrugs[e.currentTarget.name] = e.currentTarget.checked
         setChemistry(data)
         console.log(chemistry)
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log(chemistry)
        axios
        .post("http://localhost:4001/api/labRequest/chemistry",{
            PatientUHID:chemistry.PatientUHID,
            firstName:chemistry.firstName,
            nationalIdNumber:chemistry.nationalIdNumber,
            department:chemistry.department,
            DoctorID:chemistry.DoctorID,
            priority:chemistry.priority,
            dateOfBirth:chemistry.dateOfBirth,
            sex:chemistry.sex,
            patientZopaSub:chemistry.patientZopaSub,
            hospital:chemistry.hospital,
            ward:chemistry.ward,
            bedNo:chemistry.bedNo,
            test:chemistry.test,
            PaymentPC:chemistry.paymentPC,
            PaymentPR:chemistry.paymentPR,
            referralDate:chemistry.referralDate,
            dateCollected:chemistry.dateCollected,
            collectorInitial:chemistry.collectorInitial,
            PatientSurvey:chemistry.PatientSurvey,
            PatientFree:chemistry.PatientFree,
            physicianName:chemistry.physicianName,
            signature:chemistry.signature,
            opdReceiptNo:chemistry.opdReceiptNo,
            chemistryData:chemistry.chemistryData,
            HaemotologyData:chemistry.HaemotologyData,
            ImmunoHaematol:chemistry.ImmunoHaematol,
            MicroBiology:chemistry.MicroBiology,
            Immunoserology:chemistry.Immunoserology,
            TherapeuticDrugs:chemistry.TherapeuticDrugs 
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
    return ( 
      
             <form className={classes.root} onSubmit={handleSubmit} noValidate autoComplete="off" style={{backgroundColor:'white'}}>
   <ChemComp setDate={setDate} retrieve={retrieve}
    chemistry={chemistry} 
   initialChange={initialChange} initialChanged={initialChanged}
   handleInitialChange={handleInitialChange}
   setDates={setDates}
   />
    <ChemTable 
    chemistry={chemistry} 
    handleInitialChange={handleInitialChange}
    handleMicroBiology={handleMicroBiology}
    handleHaemotologyChange={handleHaemotologyChange}
 handleTherapeuticDrugs={handleTherapeuticDrugs}
    handleImmunoHaematol={handleImmunoHaematol}
     handleImmunoserology={handleImmunoserology} 
    handleHaemotologyChange={handleHaemotologyChange}
    />
<button class="btn btn-primary" style={{float:'right',margin:'10px'}}> Cancel</button>
       <button class="btn btn-primary" type="submit" style={{float:'right',margin:'10px'}}> Submit</button>
 

    </form>
     
  
     );
}
 
export default Chemistry;