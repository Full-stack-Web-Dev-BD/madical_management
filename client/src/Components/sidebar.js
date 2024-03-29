import React, { useEffect } from 'react';
import './css/Sidebar.css'
import "bootstrap/dist/css/bootstrap.css";
import Sideback from '../Image/sideback.jpg'
import SideImg from '../Image/sideImage.jpeg'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, withRouter } from 'react-router-dom';
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
        console.log('log out ')
        e.preventDefault();
        localStorage.removeItem('userStore');
        window.location.href='/'
    }
    return (
        <div class="mainDashboard " style={{ backgroundImage: `url(${Sideback})` }}>
            <div style={{ backgroundColor: "white", height: "90px", borderBottom: "1px solid white" }}>
                <img src={SideImg} style={{ height: '90px', width: '90%' }} />
            </div>
            <ul class="ulDashboard ">
                <li><Link to="/ReceptionistDashboard" id="word"> Dashboard</Link></li>
                <li><Link to="/viewAppoinment" id="word"> Appointments</Link></li>
                <li><Link to="/view-invoice" id="word"> Payment</Link></li>
                <li><Link to="/create-invoice" id="word"> Create Invoice</Link></li>
                <li><Link to="/make-request" id="word"> Make A Request</Link></li>
                <li><Link to="/view-result" id="word"> View Result</Link></li>
                <li><a style={{cursor:"pointer"}} id="word" onClick={(e)=>{logout(e)}}> Sign Out</a></li>
            </ul>
        </div>
    );
}
export default withRouter(Sidebar)
