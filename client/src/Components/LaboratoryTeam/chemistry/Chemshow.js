import React,{useState,useEffect} from 'react';
import { BrowserRouter, Link,withRouter } from 'react-router-dom';
import Lsidebar from '../Lsidebar'
import axios from 'axios'
import DatePicker from 'react-date-picker';
import { makeStyles } from '@material-ui/core/styles';
import ChemComp from '../../Doctor/NHLForms/ChemComp'
import ChemTable from '../../Doctor/NHLForms/ChemTable'
import Dsidebar from '../../Doctor/Dsidebar'
import Pdf from "react-to-pdf";

const ref = React.createRef();
const useStyles = makeStyles((theme) => ({
    
    brdr: {
      border: '1px solid black',
      borderCollapse: 'collapse'

  }
}));
const ChemShow = (props) => {

    const [chemistry,setChemistry] = useState({
        PatientUHID:"",patientName:"",nationalIdNumber:"",dateOfBirth:null,sex:"",patientZopaSub:"",hospital:"",ward:"",
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
      const setDates=(date)=>{
        const data= {...chemistry}
            
        data["dateCollected"] = date
          
        setChemistry(data)
        
    }
      useEffect(()=>{
        axios.get(`http://localhost:4001/api/labRequest/chemistry/${props.match.params.RequestID}`)
          .then(res=>{
            
                  setChemistry(res.data)
              console.log(chemistry)
          })
          .catch(error=>console.log(error))
        },[])
        const setDate=(date)=>{
            const data= {...chemistry}
     
            
        }
          const initialChange=(e)=>{
              e.preventDefault()
            
          }
          const initialChanged=(e)=>{
            e.preventDefault()
         
          }
          const handleInitialChange=(e)=>{
      
        }
          const handleHaemotologyChange=(e)=>{
          
        }
        const handleImmunoHaematol=(e)=>{
          
        }
        const handleMicroBiology=(e)=>{
          
        }
        const handleImmunoserology=(e)=>{
      
        }
        const handleTherapeuticDrugs=(e)=>{
         
        }
      
        const retrieve=()=>{
    
        }
    return ( 
        <div>
                <Dsidebar/>

                     
     <div style={{marginLeft:'220px'}}>
     <Pdf targetRef={ref} filename="code-example.pdf" options={options} x={.5} y={.5}>
        {({ toPdf }) => <button onClick={toPdf}>Generate Pdf</button>}
      </Pdf>
       <div ref={ref}  style={{padding:'20px',}}>
       <ChemComp setDate={setDate} retrieve={retrieve}
    chemistry={chemistry} 
   initialChange={initialChange} initialChanged={initialChanged}
   handleInitialChange={handleInitialChange}
   setDates={setDates}
   />
    <ChemTable 
    chemistry={chemistry} 
    handleMicroBiology={handleMicroBiology}
    handleHaemotologyChange={handleHaemotologyChange}
    handleInitialChange={handleInitialChange}
 handleTherapeuticDrugs={handleTherapeuticDrugs}
    handleImmunoHaematol={handleImmunoHaematol}
     handleImmunoserology={handleImmunoserology} 
    handleHaemotologyChange={handleHaemotologyChange}
    />

       </div>
       </div>
        </div>
     );
}
const options = {
 
  unit: "in",
  format: [884, 1784]
};
export default ChemShow;