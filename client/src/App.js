import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Login from './Components/login.js'
import Signup from './Components/signup'


// secure Router
import AdminRoute from './util/AdminRoute'
import ReceptionistRoute from './util/ReceptionistRoute'



// admin  component
import Adashboard from './Components/Admin/Adashboard'
import Astaff from './Components/Admin/AddStaff/Addstaff';



// Receptionist pages
import Dashboard from './Components/Dashboard'
import ViewAllDoctor from './Components/viewAllDoctor'
import AddPatient from './Components/addPatient'
import ViewPatient from './Components/ViewPatients'
import BookAppointment from './Components/bookAppointment'
import ViewAllAppoinment from './Components/ViewAllAppoinment'
import Payment from './Components/payment'
import PaymentForm from './Components/paymentForm'
import RequestForPatient from './Components/RequestForPatient.js'
import SeeResult from './Components/SeeResult.js'


import HIVViral from './Components/Doctor/NHLForms/HIVViral'
import Form12 from './Components/Doctor/NHLForms/form12'
import Form13 from './Components/Doctor/NHLForms/form13'
import Form14 from './Components/Doctor/NHLForms/form14'
import Form15 from './Components/Doctor/NHLForms/form15'
import TBreport from './Components/LaboratoryTeam/TBReport/TBreport'
import Tbreport from './Components/Doctor/ViewResult/Tbreport'
import Culture from './Components/LaboratoryTeam/culture/Culture'
import HCVViralview from './Components/Doctor/ViewResult/HCVViralview'
import HBLViralview from './Components/Doctor/ViewResult/HBLViralview'
import HCVForm from './Components/LaboratoryTeam/HCVViral/HCVForm'
import ChemLay from './Components/LaboratoryTeam/chemistry/Chemlay'
import HivVirals from './Components/Doctor/ViewResult/hivViral'
import ChemShow from './Components/LaboratoryTeam/chemistry/Chemshow'
import Viewdata from './Components/Doctor/ViewResult/Viewdata'
import HBLform from './Components/LaboratoryTeam/HBLViral/HBLform'
import HIVForm from './Components/LaboratoryTeam/HIVViral/HIVForm'
import FormView from './Components/LaboratoryTeam/FormView'
import ResultView from './Components/Doctor/ViewResult/resultView'
import HIVDNA from './Components/Doctor/NHLForms/HIVDNA'
import HBVViral from './Components/Doctor/NHLForms/HBLViral'
import Syphlis from './Components/Doctor/NHLForms/Syphlis'



// Lab
import Lhome from './Components/LaboratoryTeam/Lhome'
import LabTechRouter from './util/LabTechRouter'

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        {/* public */}
        <Route path='/' exact component={Login} />
        <Route path='/signup' component={Signup} />
        {/* admin  */}
        <AdminRoute path='/AdminDashboard' component={Adashboard} />
        <AdminRoute path="/AddStaff" component={Astaff} />


        {/* Receptionist */}

        <ReceptionistRoute path="/ReceptionistDashboard" component={Dashboard} />
        <ReceptionistRoute path="/viewAllDoctor" component={ViewAllDoctor} />
        <ReceptionistRoute path="/addPatient" component={AddPatient} />
        <ReceptionistRoute path="/viewPatients" component={ViewPatient} />
        <ReceptionistRoute path="/bookAppointment" component={BookAppointment} />
        <ReceptionistRoute path="/viewAppoinment" component={ViewAllAppoinment} />
        <ReceptionistRoute path="/view-invoice" component={Payment} />
        <ReceptionistRoute path="/create-invoice" component={PaymentForm} />
        <ReceptionistRoute path="/make-request" component={RequestForPatient} />
        <ReceptionistRoute path="/view-result" component={SeeResult} />

        <ReceptionistRoute path="/HIVViral" component={HIVViral} />
        <ReceptionistRoute path="/LabTbreport" component={TBreport} />
        <ReceptionistRoute path="/Culture" component={Culture} />
        <ReceptionistRoute path="/HCVViralvew" component={HCVViralview} />
        <ReceptionistRoute path="/Tbreport" component={Tbreport} />
        <ReceptionistRoute path="/HBLViralview" component={HBLViralview} />
        <ReceptionistRoute path="/HCVViralform" component={HCVForm} />
        <ReceptionistRoute path="/Chemlab" component={ChemLay} />
        <ReceptionistRoute path="/Hivvirals" component={HivVirals} />
        <ReceptionistRoute path="/Chemshow" component={ChemShow} />
        <ReceptionistRoute path="/HBLViralform" component={HBLform} />
        <ReceptionistRoute path="/HIVViralform" component={HIVForm} />
        <ReceptionistRoute path="/HivDna" component={HIVDNA} />
        <ReceptionistRoute path="/HBVViral" component={HBVViral} />

        <ReceptionistRoute path="/Viewdata" component={Viewdata} />
        <ReceptionistRoute path="/Syphlis" component={Syphlis} />

        
        <ReceptionistRoute path="/form12" component={Form12} />
        <ReceptionistRoute path="/form13" component={Form13} />
        <ReceptionistRoute path="/form14" component={Form14} />
        <ReceptionistRoute path="/form15" component={Form15} />

        <ReceptionistRoute path="/ResultView" component={ResultView} />
        <ReceptionistRoute path="/FormView" component={FormView} />




        {/* Lab */}
        <LabTechRouter path="/LabManagement" component={Lhome} />
        <LabTechRouter path="/FormView" component={FormView} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
