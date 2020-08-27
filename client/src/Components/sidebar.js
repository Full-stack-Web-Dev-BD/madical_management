import React, { useEffect } from 'react';
import './css/Sidebar.css'
import "bootstrap/dist/css/bootstrap.css";
import List from '@material-ui/core/List'
import Sideback from '../Image/sideback.jpg'
import ListItem from '@material-ui/core/ListItem'
import SideImg from '../Image/sideImage.jpeg'
import ListItemText from '@material-ui/core/ListItemText'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Link, withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Navbar, Form, Nav, NavDropdown, Dropdown } from 'react-bootstrap';
import { faUser, faCalendarWeek, faBell, faCommentAlt, faSignOutAlt, faTachometerAlt } from '@fortawesome/free-solid-svg-icons'
const Sidebar = (props) => {
    useEffect(() => {
        const data = localStorage.getItem('userStore')
        if (data == null) {
            props.history.push('/');
        }
        else {

        }
    }, [])
    function logout(e) {
        e.preventDefault();
        localStorage.removeItem('userStore');
        props.history.push('/');
    }
    return (

        <div class="mainDashboard " style={{ backgroundImage: `url(${Sideback})` }}>
            <div style={{ backgroundColor: "white", height: "90px", borderBottom: "1px solid white" }}>
                <img src={SideImg} style={{ height: '90px', width: '90%' }} />
            </div>
            <ul class="ulDashboard ">
                <li><Link to="/Dashboard" id="word"> Dashboard</Link></li>


                <li><Link to="/Appointment" id="word"> Appointments</Link></li>

                <li><a href="" id="word" onClick={()=>logout}> Logout</a></li>

            </ul>

        </div>
    );
}
export default withRouter(Sidebar)
