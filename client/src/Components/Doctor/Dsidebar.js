import React,{useEffect, useState} from 'react';
import '../css/Sidebar.css'
import Sideimg from '../../Image/sidebar.JPG'
import SideImg from '../../Image/sideImage.jpeg'
import Sideback from '../../Image/sideback.jpg'
import "bootstrap/dist/css/bootstrap.css";
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Link,withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Navbar,Form,Nav,NavDropdown,Dropdown} from 'react-bootstrap';
import { faUser,faCalendarWeek,faBell,faCommentAlt,faSignOutAlt,faTachometerAlt ,faCaretDown} from '@fortawesome/free-solid-svg-icons'
const DSidebar = (props) => {
    const[display,setDisplay] = useState(false)
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
    const show=()=>
    {
        setDisplay(!display)
    }
  return (
    
        <div class="mainDashboard " style={{backgroundImage:`url(${Sideback})`}}>




          
                    <div style={{backgroundColor:"white",height:"90px",borderBottom:"1px solid white"}}>
             <img src={SideImg} style={{height:'90px',width:'90%'}} />
                 </div>
             	<ul class="ulDashboard " >
                    <li><b> <Link to="/DoctorDashboard" id="word"> Dashboard</Link></b></li>
                 
     
                	<li><button class="btn" onClick={show} style={{marginLeft:'12px',fontSize:'17px',color:'white',border:'hidden'}} > <b> Department</b><span style={{marginLeft:'10px'}}><FontAwesomeIcon icon={faCaretDown}/></span></button></li>
           {display===true?      <div  style={{marginLeft:'25px',marginBottom:'-20px'}} >
             <p>  <Link to="/Hform" style={{color:'#D5CFCF',fontSize:'17px',}}  > Hematology</Link></p>
             <p  style={{marginTop:'-10px'}}>  <Link to="/Pform" style={{color:'#D5CFCF',fontSize:'17px',marginTop:'-20px'}}> Parasite</Link></p>
  </div>:''}
                   <li><Link to="/patientList" id="word"> <b> Patient</b></Link></li>
                    <li><a href="" id="word" onClick={logout}><b> Logout</b></a></li>
                  
                </ul>
      
    </div>
  );
}
export default withRouter(DSidebar)
