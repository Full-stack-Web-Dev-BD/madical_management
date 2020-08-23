import React,{useEffect} from 'react';
import '../css/Sidebar.css'
import "bootstrap/dist/css/bootstrap.css";
import SideImg from '../../Image/sideImage.jpeg'
import Sideback from '../../Image/sideback.jpg'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Link,withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Navbar,Form,Nav,NavDropdown,Dropdown} from 'react-bootstrap';
import { faUser,faCalendarWeek,faBell,faCommentAlt,faSignOutAlt,faTachometerAlt } from '@fortawesome/free-solid-svg-icons'

const Asidebar = (props) => {

    useEffect(() => {
        const data = localStorage.getItem('userStore')
        if(data == null)
        {
            props.history.push('/');
        }
        else{

        }
    }, [])
    function logout(e)
    {
        e.preventDefault();


      localStorage.removeItem('userStore');
   props.history.push('/');
    }

    return ( 
        <div class="mainDashboard "  style={{backgroundImage:`url(${Sideback})`}}>
     
        <div style={{backgroundColor:"white",height:"90px",borderBottom:"1px solid white"}}>
        <img src={SideImg} style={{height:'90px',width:'90%'}} />
     </div>
     <ul class="ulDashboard ">
        <li><Link to="/AdminDashboard" id="word"> Dashboard</Link></li>
     

        <li><Link to="/AddStaff" id="word"> Add Staff</Link></li>
       
        <li><a href="" id="word" onClick={logout}> Logout</a></li>
      
    </ul>

</div>
     );
}
 
export default withRouter(Asidebar);