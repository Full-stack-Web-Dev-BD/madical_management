import React,{useEffect,useState} from 'react';
import axios from 'axios'
import Admin from '../../Image/Admin.jpg'
import Asidebar from './Asidebar'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardActionArea from '@material-ui/core/CardActionArea';
import Typography from '@material-ui/core/Typography'
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import jwt_decode from 'jwt-decode';
import Doctor from '../../Image/Doctor.png'
import Patient from '../../Image/patient.png'
import Appointment from '../../Image/appointment.png'
import DoctorIcon from '../../Image/doctoricon.png'
import AdminIcon from '../../Image/Adminicon.png'
import TextField from '@material-ui/core/TextField'
import InfoIcon from '@material-ui/icons/Info';
import autoMergeLevel1 from 'redux-persist/es/stateReconciler/autoMergeLevel1';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import PanToolIcon from '@material-ui/icons/PanTool';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChalkboardTeacher,faUserMd,faUtensils,faCalendar,faPhone,faEnvelope,faLanguage,faPray,faUsers,faChalkboard } from '@fortawesome/free-solid-svg-icons'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

import {Bar,Line,Pie,Doughnut } from 'react-chartjs-2'
import DoubleArrowIcon from '@material-ui/icons/DoubleArrow';
const useStyles = makeStyles({
    root: {

    },
    media: {
        width: 151,
      
        marginTop:'10px',
        margin:'auto',
        borderRadius:'80px',
        border:'5px solid #688ACE'
        },
  });
const Adashboard = (props) => {
    const classes = useStyles();
    const [doctor,setDoctor] = useState()
    const [patient,setPatient] = useState()
    const [admin,setAdmin] = useState({
        name:"",
        type:"",
        email:"",
        password:""
    })

    const [lab,setLab] = useState()
    const [booking,setBooking] = useState()

    useEffect(() => {
        const data = localStorage.getItem('userStore')
        console.log(data)
        if(data == null)
        {
            
            props.history.push('/');
        }
        else{
           
            const decoded = jwt_decode(data);
            console.log(decoded)
            const Ustaff = axios.get(`http://localhost:4001/api/user/${decoded.email}`)
            const staff = axios.get(`http://localhost:4001/api/Staff`);
            const patient = axios.get(`http://localhost:4001/api/patient`);
            const book = axios.get(`http://localhost:4001/api/BookAppoint`);
            axios.all([Ustaff,staff,patient,book])
    .then(axios.spread((...res)=> {
        
        var uStaff = res[0].data
        console.log(uStaff)
        var doctor = res[1].data.filter(({staffInformation:{staffType : type}})=>type === "Doctor")
        var lab = res[1].data.filter(({staffInformation:{staffType}})=>staffType === "Lab Technician")
        var patient = res[2].data
        var book = res[3].data
        console.log(doctor.length)
        console.log(lab.length)
        console.log(patient.length)
        setAdmin(uStaff)
        setDoctor(doctor.length)
        setLab(lab.length)
        setPatient(patient.length)
        setBooking(book.length)
    }))
    .catch(error=> console.log(error))
  
        console.log(data) }
    }, [])

    if(!admin)
    {
        return "laoding"
    }
    else
    {
    return (
        <div class="stats" >
        <Asidebar/>
      <div style={{backgroundColor:'#EFEEEE'}}>
          <div style={{marginLeft:'220px',padding:'20px',paddingTop:'50px',height:'100vh'}}>
              <Grid container spacing={3}>
                  <Grid item xs={12} md={4}>
          <Card className={classes.root}>
<CardActionArea>
  <CardMedia
    className={classes.media}
    image={AdminIcon}
    component="img"
    title="Contemplative Reptile"
 
  />
  <CardContent >
  <Typography gutterBottom variant="p" style={{paddingLeft:'3px',marginTop:'15px'}} component="h5">
     <span style={{fontWeight:'bold'}}>Name:</span>  {admin.name}
    </Typography>
    <Typography gutterBottom variant="p" style={{paddingLeft:'3px',marginTop:'25px'}} component="h5">
    <span style={{fontWeight:'bold'}}>Email:</span>  {admin.email}
    </Typography>
  
  </CardContent>
</CardActionArea>

</Card>
</Grid>
<Grid xs={1}/>

<Grid item xs={12} md={6} style={{marginTop:'5px'}}>


<Bar
          data={{
            labels:["Doctor","Patient","Appointment"],
           
              datasets:[{
                label:"People",
                data:[doctor,patient,booking,0],
                backgroundColor:['#D6B9F3','#F3BDB9','#BFF3B9']
            }]
          }}
          />
</Grid>
</Grid>

  <Grid container spacing={4} style={{marginTop:'50px'}}>
      <Grid item xs={12} md={4} style={{backgroundColor:'#D6B9F3'}}>
<Card className={classes.root} style={{overflow:'visible'}}>
    <div>
<CardMedia
    style={{width:'110px',padding:'20px'}}
    image={DoctorIcon}
    component="img"
    title="Contemplative Reptile"
    
  />
  <DoubleArrowIcon style={{fontSize:'60px',marginTop:'-85px',color:"#905A8C",float:'right',marginRight:'20px'}}/>
  </div>
<CardActionArea>
 
  <CardContent >
  <Typography gutterBottom variant="p" style={{paddingLeft:'3px'}} component="h6">
     <span style={{fontWeight:'bold'}}></span> Total Register Doctors   <b> {doctor}</b>
    </Typography>

  
  </CardContent>
</CardActionArea>

</Card>
</Grid>

<Grid item xs={12} md={4} style={{backgroundColor:'#F3BDB9',}}>
<Card className={classes.root} style={{overflow:'visible'}}>
<CardMedia
    style={{width:'110px',padding:'20px'}}
    image={Patient}
    component="img"
    title="Contemplative Reptile"
  />
  <DoubleArrowIcon style={{fontSize:'60px',marginTop:'-85px',color:"#D1163B",float:'right',marginRight:'20px'}}/>
<CardActionArea>
  <CardContent >
  <Typography gutterBottom variant="p" style={{paddingLeft:'3px'}} component="h6">
     <span style={{fontWeight:'bold'}}></span> Total Register Patients <b> {patient} </b>
    </Typography>
  </CardContent>
</CardActionArea>
</Card>
</Grid>


<Grid item xs={12} md={4} style={{backgroundColor:'#BFF3B9'}}>
<Card className={classes.root} style={{overflow:'visible'}}>
<CardMedia
    style={{width:'110px',padding:'20px'}}
    image={Appointment}
    component="img"
    title="Contemplative Reptile"
  />
  <DoubleArrowIcon style={{fontSize:'60px',marginTop:'-85px',color:"#08CEA0",float:'right',marginRight:'20px'}}/>
<CardActionArea>
  <CardContent >
  <Typography gutterBottom variant="p" style={{paddingLeft:'3px'}} component="h6">
     <span style={{fontWeight:'bold'}}></span> Confirm Appointments <b>{booking} </b>
    </Typography>
  </CardContent>
</CardActionArea>
</Card>
</Grid>
</Grid>
          </div>
          </div>
</div>
      );
}}
 
export default Adashboard;