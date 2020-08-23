import React,{useEffect,useState} from 'react';
import Card from './card'
import DSidebar from '../Dsidebar'
import Consultation from './consultation'
import Department from './department'
import Medication from './medication'
import Vital from './vital'
import Document from './document'
import TRequest from './Trequest'
import TResult from './Tresult'
import axios from 'axios'
const PatientManagement = (props) => {
    const [patient,setPatient] = useState({})
    useEffect(()=>
    {
            console.log(props.match.params.UHID)
            axios
            .get(`http://localhost:4001/api/BookAppoint/${props.match.params.UHID}`)
            .then(res=>{
                console.log(res.data)
                setPatient(res.data)
               
            })
            .catch(error=> console.log(error))
                console.log(patient)
    },[])
    console.log(patient)
    return ( 
        <div>
        <DSidebar/>
     
     <div style={{marginLeft:'220px',padding:'20px'}}>
         <div class="row">
             <div class="col-md-4  p-4" >
        <Card data={patient}/>
        </div>
        <div class="col-md-4 p-4" >
          <TRequest/>
        <div class="pt-4">
        <Medication/>
        </div>
        </div>
        <div class="col-md-4 p-4" >
       <TResult/>
        <div class="pt-4">
        <Vital/>
        </div>
        </div>
        
        </div>
        <div class="row">
            <div class="col-4">
            <Document/>
            </div>

            <div class="col-4">
            <Consultation/> 
            </div>

            <div class="col-4">
            <Department/>
            </div>
        </div>
</div>
        </div>
     );
}
 
export default PatientManagement;