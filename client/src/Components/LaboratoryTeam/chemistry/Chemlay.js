import React,{useState,useEffect} from 'react';
import Lsidebar from '../Lsidebar'
import axios from 'axios'
import DatePicker from 'react-date-picker';
import { makeStyles } from '@material-ui/core/styles';
import ChemComp from '../../Doctor/NHLForms/ChemComp'
import ChemTable from '../../Doctor/NHLForms/ChemTable'
import Swal from 'sweetalert2'
const useStyles = makeStyles((theme) => ({
    
    brdr: {
      border: '1px solid black',
      borderCollapse: 'collapse'

  }
}));
const ChemLay = (props) => {
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
        VDRL:false,WEILOX19:false,WEILOX2:false,WEILOXK:false,WIDAL:false,Rheumatoid:false
    },
    TherapeuticDrugs:{
        Carbamazepine:false,Phenobarbital:false,ValproicAcid:false
    },test:"Chemistry"
      })

      useEffect(()=>{
          console.log(chemistry)
      },[chemistry])
      useEffect(()=>{
        axios.get(`http://localhost:4001/api/labRequest/chemistry/${props.match.params.RequestID}`)
          .then(res=>{
                  console.log(res.data)
                  setChemistry(res.data)
           
          })
          .catch(error=>console.log(error))
        },[])
      const setDate=(date)=>{
        const data= {...chemistry}
 
        
    }
    const setDates=(date)=>{
        const data= {...chemistry}
            
        data["dateCollected"] = date
          
        setChemistry(data)
        
    }
      const initialChange=(e)=>{
          e.preventDefault()
        
      }
      const initialChanged=(e)=>{
        e.preventDefault()
     
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
        axios.put(`http://localhost:4001/api/labRequest/chemistry/${props.match.params.RequestID}`,{ 
            chemistryData:chemistry.chemistryData,
            HaemotologyData:chemistry.HaemotologyData,
            ImmunoHaematol:chemistry.ImmunoHaematol,
            MicroBiology:chemistry.MicroBiology,
            Immunoserology:chemistry.Immunoserology,
            TherapeuticDrugs:chemistry.TherapeuticDrugs         })
        .then(res => {
            Swal.fire("Results Updated")
            props.history.push("/FormView")
        });
    }
    const retrieve=()=>{

    }
    return ( 
        <div>
            <Lsidebar/>
            <div style={{marginLeft:'220px'}}>
       <div style={{padding:'20px'}}>
       <form className={classes.root} onSubmit={handleSubmit} noValidate autoComplete="off" style={{backgroundColor:'white'}}>
   <ChemComp setDate={setDate} retrieve={retrieve}
    chemistry={chemistry} 
   initialChange={initialChange} initialChanged={initialChanged}
   
   setDates={setDates}/>
    <ChemTable 
    chemistry={chemistry} 
    handleMicroBiology={handleMicroBiology}
    handleInitialChange={handleInitialChange}
    handleHaemotologyChange={handleHaemotologyChange}
 handleTherapeuticDrugs={handleTherapeuticDrugs}
    handleImmunoHaematol={handleImmunoHaematol}
     handleImmunoserology={handleImmunoserology} 
    handleHaemotologyChange={handleHaemotologyChange}
    />
<button class="btn btn-primary" style={{float:'right',margin:'10px'}}> Cancel</button>
       <button class="btn btn-primary" type="submit" style={{float:'right',margin:'10px'}}> Submit</button>
 

    </form>
           </div>
            </div>
            </div>
     );
}
 
export default ChemLay;