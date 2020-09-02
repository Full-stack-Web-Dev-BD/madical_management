import React, { useEffect, useState } from 'react';
import "bootstrap/dist/css/bootstrap.css";
import List from '@material-ui/core/List'
import Sideimg from '../../Image/sidebar.JPG'
import Sideback from '../../Image/sideback.jpg'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Link, withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Navbar, Form, Nav, NavDropdown, Dropdown } from 'react-bootstrap';
import { faUser, faCaretDown, faCalendarWeek, fBella, faCommentAlt, faSignOutAlt, faTachometerAlt } from '@fortawesome/free-solid-svg-icons'

const Lsidebar = (props) => {
  const [display, setDisplay] = useState(false)
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
  const show = () => {
    setDisplay(!display)
  }
  return (

    <div class="mainDashboard " style={{ backgroundImage: `url(${Sideback})` }}>
      <div style={{ backgroundColor: "#8C8CB6", height: "80px", borderBottom: "1px solid white" }}>
        <h5 class="headDashboard">National Laboratory</h5>
      </div>
      <ul class="ulDashboard ">
        <li><Link id="word"> Dashboard</Link></li>
        <li><Link to="/FormView" id="word"> CheckRequest</Link></li>
        <li><a href="" id="word" onClick={()=>{logout()}}> Logout</a></li>
      </ul>
    </div>
  );
}

export default withRouter(Lsidebar);