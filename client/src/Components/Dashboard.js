import React,{useEffect,useState} from 'react';
import Sidebar from './sidebar'
import Receptionist from '../Image/Receptionist.png'
import Appoint from '../Image/Appoint.png'
import Doctor from '../Image/Doctor.png'
import User from '../Image/user.png'
import jwt_decode from 'jwt-decode';
import { BrowserRouter, Link,withRouter } from 'react-router-dom';
import './css/Rdashboard.css'
import axios from 'axios'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardActionArea from '@material-ui/core/CardActionArea';
import Typography from '@material-ui/core/Typography'
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import TouchAppIcon from '@material-ui/icons/TouchApp';
import AccessibleIcon from '@material-ui/icons/Accessible';
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';
const useStyles = makeStyles({
    root: {

    },
    media: {
        width: 151,
        padding:'20px',
        marginTop:'10px',
        margin:'auto',
        borderRadius:'80px',
        border:'5px solid #688ACE'
        },
  });
const Dashboard = (props) => {
    const [recep,setRecep] = useState({})
    const [appoint,setAppoint] = useState()
    const [doctor,setDoctor] = useState()
    const [patient,setPatient] = useState()
    useEffect(() => {
        const data = localStorage.getItem('userStore')
        const decoded = jwt_decode(data);
        console.log(decoded)
    
        if(data == null)
        {
            props.history.push('/');
        }
        else{
            
            const getData =async()=>{
                const staff = await axios.get(`http://localhost:4001/api/User/${decoded.email}`)
                const Appointments = await axios.get(`http://localhost:4001/api/BookAppoint`);
                const Doctor = await axios.get(`http://localhost:4001/api/Staff`);
                const patient = await axios.get(`http://localhost:4001/api/patient`);
              
                var doctor = Doctor.data.filter(({staffInformation:{staffType : type}})=>type === "Doctor")
                var patients = patient.data
                
                setRecep(staff.data)
                setAppoint(Appointments.data.length)
                setDoctor(doctor.length)
                setPatient(patients.length)
                console.log(Appointments.data.length)
            }
          getData()
        }
    }, [])
    const classes = useStyles();
    return (  
        <div class="stats">
                <Sidebar/>
           
           <div  class="statSection">
       <center>        <h3 style={{paddingTop:'5px'}}>Receptionist Portal</h3></center>
            <Grid container spacing={2} style={{padding:'20px'}}>
           <Grid lg={3} md={6} sm={12}  style={{marginTop:'10px'}}>
            <div style={{height:"200px",width:'250px'}}>     
          <center>  <div class="card-title" style={{paddingTop:"10px",marginLeft:'10px'}} >
                   <h5 style={{fontWeight:'bold',color:'white',backgroundColor:'#4F87B2',padding:'10px'}}>{recep.name}</h5>
                </div></center>
               <img src={Receptionist} class="card-img-top" />
             
                 
                </div>
                </Grid>
              
                <Grid item lg={3} md={6} sm={12} style={{marginTop:'30px',}}>
                  <Card className={classes.root} style={{overflow:'visible'}}>
    <CardHeader 
                          title={<h5> Manage Doctors</h5>}
                       
                          avatar={<EmojiPeopleIcon style={{fontSize:'60px',marginTop:'-50px',color:"#3C5BF6"}} />} />
      <CardActionArea>
       
        <CardContent >
        <Typography gutterBottom variant="p" style={{paddingLeft:'3px',marginTop:'15px'}} component="h5">
        <Link to="/viewAllDoctor">View All Doctors</Link>  </Typography>
        <Typography gutterBottom variant="p" style={{paddingLeft:'3px',marginTop:'15px'}} component="h5">
        <Link to="">Search Doctors</Link> </Typography>
       </CardContent>
      </CardActionArea>
    </Card>
            
                  </Grid>
                  <Grid item lg={3} md={6} sm={12} style={{marginTop:'30px',}} >
    <Card className={classes.root} style={{overflow:'visible'}}>
               
    <CardHeader 
                          title={<h5> Manage Patient</h5>}
                       
                          avatar={<AccessibleIcon style={{fontSize:'60px',marginTop:'-50px',color:"#3C5BF6"}} />} />
      <CardActionArea>
       
        <CardContent >
        <Typography gutterBottom variant="p" style={{paddingLeft:'3px',marginTop:'15px'}} component="h5">
        <Link to="/viewPatients">View All Patients</Link>  </Typography>
        <Typography gutterBottom variant="p" style={{paddingLeft:'3px',marginTop:'15px'}} component="h5">
        <Link to="/addPatient">Add Patients</Link> </Typography>
       </CardContent>
      </CardActionArea>
    </Card>
                  </Grid>

                  <Grid item lg={3} md={6} sm={12} style={{marginTop:'30px',}} >
    <Card className={classes.root} style={{overflow:'visible'}}>
    <CardHeader 
                    title={<h5> Appointments</h5>}
                    avatar={<TouchAppIcon style={{fontSize:'60px',marginTop:'-50px',color:"#3C5BF6"}} />} />
      <CardActionArea>
        <CardContent >
        <Typography gutterBottom variant="p" style={{paddingLeft:'3px',marginTop:'15px'}} component="h5">
           <span style={{fontWeight:'bold'}}></span> Total Appointments : <b>{appoint} </b>
          </Typography>
       </CardContent>
      </CardActionArea>
    </Card>
    </Grid>
            </Grid>
        <Grid container spacing={2} style={{marginTop:'40px',padding:'20px'}}>     
        
    <Grid item xs={10} md={6} lg={6} style={{padding:'0',backgroundColor:'white'}}>
                   <img src={Appoint} style={{height:"130px"}} class="card-img-top" />
                    <div class="card-body" style={{padding:'0'}}>
                 <div class="card-title" style={{marginTop:'-5px',marginLeft:'10px'}}><h5><Link to="/bookAppointment">Make Appointments</Link></h5></div>
                    <div class="card-title" style={{marginTop:'-5px',marginLeft:'10px'}}><h5><Link to="">View All Appointments</Link></h5></div>
                    </div>
               </Grid>


               <Grid item lg={3} md={6} sm={12} style={{marginTop:'30px',}} >
               <Card className={classes.root} style={{overflow:'visible'}}>
    <CardHeader 
                    title={<h5> Register Doctors:</h5>}
                    avatar={<TouchAppIcon style={{fontSize:'60px',marginTop:'-50px',color:"#3C5BF6"}} />} />
      <CardActionArea>
        <CardContent >
        <Typography gutterBottom variant="p" style={{paddingLeft:'3px',marginTop:'15px'}} component="h5">
           <span style={{fontWeight:'bold'}}></span> Total Register Doctors : <b>{doctor} </b>
          </Typography>
       </CardContent>
      </CardActionArea>
    </Card>
                  </Grid>

                  
               <Grid item lg={3} md={6} sm={12} style={{marginTop:'30px',}} >
               <Card className={classes.root} style={{overflow:'visible'}}>
    <CardHeader 
                    title={<h5> Register Patients:</h5>}
                    avatar={<TouchAppIcon style={{fontSize:'60px',marginTop:'-50px',color:"#3C5BF6"}} />} />
      <CardActionArea>
        <CardContent >
        <Typography gutterBottom variant="p" style={{paddingLeft:'3px',marginTop:'15px'}} component="h5">
           <span style={{fontWeight:'bold'}}></span> Total Register Patients : <b>{patient} </b>
          </Typography>
       </CardContent>
      </CardActionArea>
    </Card>
                  </Grid>
               </Grid>
               
            </div>

     </div>
    );
}
 
export default Dashboard;
