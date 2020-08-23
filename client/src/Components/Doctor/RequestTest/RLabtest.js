import React,{useState} from 'react';
import DSidebar from '../Dsidebar'
import HIVDNA from '../NHLForms/HIVDNA'
import HBLViral from '../NHLForms/HBLViral'
import Page1 from '../NHLForms/page1'
import Chemistry from '../NHLForms/Chemistry'
import Confirmation from '../NHLForms/Confirmationform'
import Hform from '../HForm/Hform'
import Pform from '../PForm/Pform'
import PForm from '../PForm/Pform';
import Page3 from '../NHLForms/page3'
import Page2 from '../NHLForms/page2'
import MPage2 from '../NHLForms/Mpage2'
import HIVViral from '../NHLForms/HIVViral'
import HCVViral from '../NHLForms/HCVViral'
import Form12 from '../NHLForms/form12'
import Form13  from '../NHLForms/form13'
import Form14 from '../NHLForms/form14'
import Form15 from '../NHLForms/form15'
const RLabTest = () => {
      const [test,setTest] = useState()

      const testChange=(e)=>{
        console.log(e.currentTarget.value)
        

        if(e.currentTarget.value=="HIV Test Request")
        {
          console.log("Hsa")
          setTest("HIVDNA")
        }
       else if(e.currentTarget.value=="Viral Load (HBV)")
        {
          console.log("Hsa")
          setTest("HBLViral")
        }
        else if(e.currentTarget.value=="Blood Transfusion Service")
        {
          console.log("Hsa")
          setTest("Asmara")
        }
        else if(e.currentTarget.value=="Chemistry")
        {
          console.log("Hsa")
          setTest("Chemistry")
        }
        else if(e.currentTarget.value=="Hematology")
        {
          console.log("Hsa")
          setTest("Hematology")
        }
        else if(e.currentTarget.value=="Parasitology")
        {
          console.log("Hsa")
          setTest("Parasitology")
        }
        else if(e.currentTarget.value=="TB Report")
        {
          console.log("Hsa")
          setTest("TB Report")
        }
        else if(e.currentTarget.value=="TB & Culture")
        {
          console.log("Hsa")
          setTest("TB & Culture")
        }
        else if(e.currentTarget.value =="Viral Load (HIV)")
        {
          setTest("HIVViral")
        }
        else if(e.currentTarget.value =="Viral Load (HCV)")
        {
          setTest("HCVViral")
        }
        else if(e.currentTarget.value =="MicroBiology ResultSheet")
        {
          setTest("MicroBiology ResultSheet")
        }
        else if(e.currentTarget.value =="Asmara Eriteria")
        {
          setTest("Asmara Eriteria")
        }
        else if(e.currentTarget.value =="Laboratory Test Report")
        {
          setTest("Laboratory Test Report")
        }
        else if(e.currentTarget.value =="MicroBiology Department")
        {
          setTest("MicroBiology Department")
        }
       
      }
      
    return (  
        <div >
        <DSidebar/>
     
     <div style={{marginLeft:'220px',padding:'20px'}}>
  
          <div style={{backgroundColor:'white',padding:'20px'}}>

        <h5> Request Test</h5>
        <div class="form-row" style={{paddingTop:'20px'}}>
     <div class="form-group col-md-4">
     
<select id="inputState" class="form-control"  name="test" onChange={testChange}  required >
<option disabled selected>Select Test</option>
<option>Blood Transfusion Service</option>
  <option>Gene Expert</option>
  <option>Hematology</option>
  <option >HIV Test Request</option>
  <option>Microbiology</option>
  <option >Parasitology</option>
  <option>Pathology</option>
  <option>Semen Analysis</option>
  <option >Serology</option>
  <option>Specimen Examination</option>
  <option>Sputum Examination</option>
  <option>Urinalysis</option>
  <option>Chemistry</option>
  <option >Viral Load (HCV)</option>
  <option>Viral Load (HBV)</option>
  <option>Viral Load (HIV)</option>
  <option>Sputum Examination</option>
  <option>TB Report</option>
  <option>TB & Culture</option>
  <option>MicroBiology ResultSheet</option>
  <option>Asmara Eriteria</option>
  <option>Laboratory Test Report</option>
  <option>MicroBiology Department</option>
</select>
</div>
    {test == "HIVDNA" ? <HIVDNA/> :""}
    {test == "HBLViral" ? <HBLViral/> :""}
    {test == "Asmara" ? <Page1/> :""}
    {test == "Chemistry" ? <Chemistry/> :""}
    {test == "Hematology" ? <Hform/> :""}
    {test == "Parasitology" ? <PForm/> :""}
    {test == "TB & Culture" ? <Page3/> :""}
    {test == "TB Report" ? <MPage2/> :""}
    {test == "HIVViral" ? <HIVViral/>:""}
    {test == "HCVViral" ? <HCVViral/>:""}
    {test == "MicroBiology ResultSheet" ? <Form12/>:""}
    {test == "Asmara Eriteria" ? <Form13/>:""}
    {test == "Laboratory Test Report" ? <Form14/>:""}
    {test == "MicroBiology Department" ? <Form15/>:""}
     </div>
     </div>
  


  
            </div>
            </div>
    );
}
 
export default RLabTest;