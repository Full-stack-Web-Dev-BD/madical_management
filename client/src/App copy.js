import React from 'react';
import logo from './logo.svg';
import './App.css';



import Form12 from './Components/Doctor/NHLForms/form12'
import Form13 from './Components/Doctor/NHLForms/form13'
import Form14 from './Components/Doctor/NHLForms/form14'
import Form15 from './Components/Doctor/NHLForms/form15'

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from './Components/login.js'
import Signup from './Components/signup'
import Appointment from './Components/Appointment'
import Sidebar from './Components/sidebar'
import Patient from './Components/patient'
import Dashboard from './Components/Dashboard'
import Doctor from './Components/doctor'
import AddPatient from './Components/addPatient'
import Adashboard from './Components/Admin/Adashboard'
import Astaff from './Components/Admin/AddStaff/Addstaff';
import ViewAllDoctor from './Components/viewAllDoctor'
import DDashboard from './Components/Doctor/dashboard'
import DDepartments from './Components/Doctor/Departments'
import Hform from './Components/Doctor/HForm/Hform'
import PForm from './Components/Doctor/PForm/Pform'
import PatientManagement from './Components/Doctor/PatientManagement/home'
import PatientList from './Components/Doctor/PatientList'
import Asmara from './Components/Doctor/NHLForms/Asmara'
import MPage2 from './Components/Doctor/NHLForms/Mpage2'
import MPage3 from './Components/Doctor/NHLForms/Mpage3'
import Consultation from './Components/Doctor/Consultation'
import RLabTest from './Components/Doctor/RequestTest/RLabtest'
import Confirmationform from './Components/Doctor/NHLForms/Confirmationform'
import Chemistry from './Components/Doctor/NHLForms/Chemistry'
import HIVDNA from './Components/Doctor/NHLForms/HIVDNA'
import HBVViral from './Components/Doctor/NHLForms/HBLViral'
import Syphlis from './Components/Doctor/NHLForms/Syphlis'
import  HivSample from './Components/Doctor/NHLForms/HivSample'
import HIVViral from './Components/Doctor/NHLForms/HIVViral'
import ResultView from './Components/Doctor/ViewResult/resultView'
import Lhome from './Components/LaboratoryTeam/Lhome'
import FormView from './Components/LaboratoryTeam/FormView'
import TestFill from './Components/LaboratoryTeam/TestFill'
import Viewdata from './Components/Doctor/ViewResult/Viewdata'
import ChemLay from './Components/LaboratoryTeam/chemistry/Chemlay'
import ChemShow from './Components/LaboratoryTeam/chemistry/Chemshow'
import HCVForm from './Components/LaboratoryTeam/HCVViral/HCVForm'
import HBLform from './Components/LaboratoryTeam/HBLViral/HBLform'
import HIVForm from './Components/LaboratoryTeam/HIVViral/HIVForm'
import HivVirals from './Components/Doctor/ViewResult/hivViral'
import HCVViralview from './Components/Doctor/ViewResult/HCVViralview'
import HBLViralview from './Components/Doctor/ViewResult/HBLViralview'
import TBreport from './Components/LaboratoryTeam/TBReport/TBreport'
import Tbreport from './Components/Doctor/ViewResult/Tbreport'
import Culture from './Components/LaboratoryTeam/culture/Culture'




import ViewPatient from './Components/ViewPatients'
import BookAppointment from './Components/bookAppointment'
import Payment from './Components/payment'
import PaymentForm from './Components/paymentForm'

function App() {
  return (
    <div className="App">
     <Router >
      
    <Switch>
      <Route path="/HIVViral"  component={HIVViral}/>
      <Route path="/form12"  component={Form12}/>
      <Route path="/form13"  component={Form13}/>
      <Route path="/form14"  component={Form14}/>
      <Route path="/form15"  component={Form15}/>
      <Route path="/LabTbreport/:RequestID"  component={TBreport}/>
      <Route path="/Culture/:RequestID"  component={Culture}/>
      <Route path="/HCVViralvew/:RequestID"  component={HCVViralview}/>
      <Route path="/Tbreport/:RequestID"  component={Tbreport}/>
      <Route path="/HBLViralview/:RequestID"  component={HBLViralview}/>
      <Route path="/HCVViralform/:RequestID"  component={HCVForm}/>
      <Route path="/Chemlab/:RequestID" component={ChemLay} />
      <Route path="/Hivvirals/:RequestID" component={HivVirals} />
      <Route path="/Chemshow/:RequestID" component={ChemShow} />
      <Route path="/Viewdata/:RequestID" component={Viewdata} />
      <Route path="/HBLViralform/:RequestID" component={HBLform} />
      <Route path="/HIVViralform/:RequestID" component={HIVForm} />
      <Route path="/FormView" component={FormView} />
      <Route path="/ResultView"  component={ResultView}/>
      <Route path="/HivDna" component={HIVDNA} />
      <Route path="/HBVViral" component={HBVViral} />
      <Route path="/Syphlis" component={Syphlis} />
      <Route path="/LabManagement" component={Lhome} />
      <Route path="/HivSample" component={HivSample} />
      <Route path="/Confirmation" component={Confirmationform} />
      <Route path="/consultation" component={Consultation} />
      <Route path="/chemistry" component={Chemistry} />
      <Route path="/RequestTest" component={RLabTest} />
      <Route path="/testFill/:RequestID" exact component={TestFill} />
      <Route path="/patientManagement/:UHID" exact component={PatientManagement}/>
      <Route path="/patientList" exact component={PatientList}/>
      <Route path="/Hform" component={Hform}/>
      <Route path="/Asmara" component={Asmara}/>
      <Route path="/Page2" component={MPage2}/>
      <Route path="/Page3" component={MPage3}/>
      <Route path="/Pform" component={PForm} />
      <Route path="/Departments" component={DDepartments}/>
      <Route path="/DoctorDashboard" component={DDashboard}/>
      <Route path="/viewAllDoctor" component={ViewAllDoctor}/>
      <Route path="/Appointment" component={Appointment}/>
      <Route path="/sidebar" component={Sidebar} />
      {/* <Route path="/patient" component={Patient}/> */}
      {/* <Route path="/doctor" component={Doctor} /> */}
{/* login sign up  */}
<Route path="/Signup" component={Signup}/>
<Route path="/" exact component={Login}/>



      
{/* admin route */}
      <Route path='/AdminDashboard' component={Adashboard}/>
      <Route path="/AddStaff" component={Astaff}/>

{/* receptionist route */}
      <Route path="/Dashboard" component={Dashboard} />
      <Route path="/addPatient" component={AddPatient} />
      <Route path="/viewPatients" component={ViewPatient} />
      <Route path="/bookAppointment" component={BookAppointment} />
      <Route path="/payment" component = {Payment}/>
      <Route path="/paymentForm" component={PaymentForm}/>

      </Switch>
      </Router>
    </div>
  );
}

export default App;
