import React from 'react'
import {BrowserRouter,Switch,Route} from 'react-router-dom'
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




const App = () => {
  
  
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Login}/>
        <Route path='/signup' component={Signup}/>
      <AdminRoute path='/AdminDashboard' component={Adashboard}/>
      <AdminRoute path="/AddStaff" component={Astaff}/>


      {/* Receptionist */}
      
      <ReceptionistRoute path="/ReceptionistDashboard" component={Dashboard}/>
      <ReceptionistRoute path="/viewAllDoctor" component={ViewAllDoctor}/>
      <ReceptionistRoute path="/addPatient" component={AddPatient} />
      <ReceptionistRoute path="/viewPatients" component={ViewPatient} />
      <ReceptionistRoute path="/bookAppointment" component={BookAppointment} />
      <ReceptionistRoute path="/viewAppoinment" component={ViewAllAppoinment} />
      <ReceptionistRoute path="/view-invoice" component = {Payment}/>
      <ReceptionistRoute path="/create-invoice" component={PaymentForm}/>


      </Switch>
    </BrowserRouter>
  )
}

export default App
