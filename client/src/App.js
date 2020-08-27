import React from 'react'
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import Login from './Components/login.js'
import Signup from './Components/signup'


// secure Router
import AdminRoute from './util/AdminRoute'
import ReceptionistRoute from '../'
// admin  component
import Adashboard from './Components/Admin/Adashboard'
import Astaff from './Components/Admin/AddStaff/Addstaff';

// Receptionist component
import Dashboard from './Components/Dashboard'

const App = () => {
  
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Login}/>
        <Route path='/signup' component={Signup}/>



        
      <AdminRoute path='/AdminDashboard' component={Adashboard}/>
      <AdminRoute path="/AddStaff" component={Astaff}/>


      {/* Receptionist */}
      
      <AdminRoute path="/ReceptionistDashboard" component={Dashboard}/>

      </Switch>
    </BrowserRouter>
  )
}

export default App
