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

import TestFill from './Components/LaboratoryTeam/TestFill'
import ChemLay from './Components/LaboratoryTeam/chemistry/Chemlay'
import HCVForm from './Components/LaboratoryTeam/HCVViral/HCVForm'
import HBLform from './Components/LaboratoryTeam/HBLViral/HBLform'
import HIVForm from './Components/LaboratoryTeam/HIVViral/HIVForm'
import TBreport from './Components/LaboratoryTeam/TBReport/TBreport'
import Culture from './Components/LaboratoryTeam/culture/Culture'



// Lab
import Lhome from './Components/LaboratoryTeam/Lhome'
import LabTechRouter from './util/LabTechRouter.js'
import FormView from './Components/LaboratoryTeam/FormView'

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

        <ReceptionistRoute path="/testFill" exact component={TestFill} />
        <ReceptionistRoute path="/Chemlab" component={ChemLay} />
        <ReceptionistRoute path="/HCVViralform" component={HCVForm} />
        <ReceptionistRoute path="/HBLViralform" component={HBLform} />
        <ReceptionistRoute path="/HIVViralform" component={HIVForm} />
        <ReceptionistRoute path="/LabTbreport" component={TBreport} />
        <ReceptionistRoute path="/Culture" component={Culture} />


        {/* Lab */}
        <LabTechRouter path="/LabManagement" component={Lhome} />
        <LabTechRouter path="/FormView" component={FormView} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
