import React,{useEffect,useState} from 'react';
import axios from 'axios'
import Dsidebar from './Dsidebar'
import { BrowserRouter, Link,withRouter } from 'react-router-dom';
import LinearProgress from '@material-ui/core/LinearProgress';
import CircularProgress from '@material-ui/core/CircularProgress';
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
import TextField from '@material-ui/core/TextField'
import InfoIcon from '@material-ui/icons/Info';
import autoMergeLevel1 from 'redux-persist/es/stateReconciler/autoMergeLevel1';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import PanToolIcon from '@material-ui/icons/PanTool';
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
const DDashboard = (props) => {
    const [profile,setProfile] =useState({})
    const [cData,setCData] = useState()
    const [pData,setPData] = useState()
    const classes = useStyles();
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
            const staff = axios.get(`http://localhost:4001/api/Staff/${decoded.email}`)
            const chem = axios.get(`http://localhost:4001/api/labRequest/chemistry/doc/${decoded.SID}`);
            const haemotology= axios.get(`http://localhost:4001/api/labRequest/hematology/doc/${decoded.SID}`);
            const hcvViral = axios.get(`http://localhost:4001/api/labRequest/hcvViral/doc/${decoded.SID}`)
            const hblViral = axios.get(`http://localhost:4001/api/labRequest/hblViral/doc/${decoded.SID}`)
            const hivViral = axios.get(`http://localhost:4001/api/labRequest/hivViral/doc/${decoded.SID}`)

            axios.all([staff,chem,haemotology,hcvViral,hblViral,hivViral])
        .then(axios.spread((...res)=> {
        
        var staffD = res[0].data
        var chem = res[1].data.filter(res=>res.status === "pending" && res.DoctorID == decoded.SID)
        var haem = res[2].data.filter(res=>res.status === "pending" && res.DoctorID == decoded.SID)
        var hcvViral = res[3].data.filter(res=>res.status === "pending" && res.DoctorID == decoded.SID)
        var hblViral = res[4].data.filter(res=>res.status === "pending" && res.DoctorID == decoded.SID)
        var hivViral = res[5].data.filter(res=>res.status === "pending" && res.DoctorID == decoded.SID)
        var cchem = res[1].data.filter(res=>res.status === "completed" && res.DoctorID == decoded.SID)
        var chaem = res[2].data.filter(res=>res.status === "completed" && res.DoctorID == decoded.SID)
        var chcvViral = res[3].data.filter(res=>res.status === "completed" && res.DoctorID == decoded.SID)
        var chblViral = res[4].data.filter(res=>res.status === "completed" && res.DoctorID == decoded.SID)
        var chivViral = res[5].data.filter(res=>res.status === "completed" && res.DoctorID == decoded.SID)
        console.log(cchem)
        console.log(chaem)
        console.log(chcvViral)
        console.log(chblViral)
        var x = chem.concat(haem,hcvViral,hblViral,hivViral)
        var y = cchem.concat(chaem,chcvViral,chblViral,chivViral)
        console.log(x.length)
        console.log(y.length)
        setPData(x.length)
        setCData(y.length)
        setProfile(staffD)
     
    }))
    .catch(error=> console.log(error))
  
        console.log(data) }
    }, [])
    if(!profile.SID)
    {
        
        return "loading"
    }
    else
    {
    return (  
        <div class="stats" >
              <Dsidebar/>
            <div style={{backgroundColor:'#EFEEEE'}}>
                <div style={{marginLeft:'220px',padding:'20px',paddingTop:'50px',height:'100vh'}}>
                    <Grid container spacing={3}>
                        <Grid item xs={12} md={4}>
                <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={Doctor}
          component="img"
          title="Contemplative Reptile"
       
        />
        <CardContent >
        <Typography gutterBottom variant="p" style={{paddingLeft:'3px',marginTop:'15px'}} component="h5">
           <span style={{fontWeight:'bold'}}>Name:</span> Dr {profile.basicInformation.name}
          </Typography>
          <Typography gutterBottom variant="p" style={{paddingLeft:'3px',marginTop:'25px'}} component="h5">
          <span style={{fontWeight:'bold'}}>Email:</span>  {profile.contactInformation.email}
          </Typography>
        
        </CardContent>
      </CardActionArea>
     
    </Card>
    </Grid>


    <Grid item xs={12} md={8} style={{marginTop:'5px'}}>
                <Card className={classes.root} style={{overflow:'visible'}}>
      <CardActionArea>
      <CardHeader 
                          title={<h5> Personal Information</h5>}
                       
                          avatar={<InfoIcon style={{fontSize:'80px',marginTop:'-50px',color:"#5651A5"}} />}
                        />
        <CardContent >
            <Grid container spacing={2}>
                <Grid item xs={6}>
        <Typography gutterBottom variant="p" style={{paddingLeft:'3px'}} component="h6">
           <span style={{fontWeight:'bold'}}>Name:</span> {profile.basicInformation.name}
          </Typography>
          </Grid>
            <Grid item xs={6}>
          <Typography gutterBottom variant="p" style={{paddingLeft:'3px'}} component="h6">
          <span style={{fontWeight:'bold'}}>Last Name:</span>  {profile.basicInformation.fatherName}
          </Typography>
          </Grid>
          </Grid>

          <Grid container  spacing={2} style={{marginTop:'15px'}}>
                <Grid item xs={6}>
                
        <Typography gutterBottom variant="p" style={{paddingLeft:'3px'}} component="h6">
           <span style={{fontWeight:'bold'}}>Department:</span> {profile.staffInformation.department}
          </Typography>
          </Grid>
            <Grid item xs={6}>
          <Typography gutterBottom variant="p" style={{paddingLeft:'3px'}} component="h6">
          <span style={{fontWeight:'bold'}}>Email Address:</span>  {profile.contactInformation.email}
          </Typography>
          </Grid>
          </Grid>

          <Grid container style={{marginTop:'15px'}}  spacing={2}>
                <Grid item xs={6}>
        <Typography gutterBottom variant="p" style={{paddingLeft:'3px'}} component="h6">
           <span style={{fontWeight:'bold'}}>Home Number:</span> {profile.contactInformation.homeNumber}
          </Typography>
          </Grid>
            <Grid item xs={6}>
          <Typography gutterBottom variant="p" style={{paddingLeft:'3px'}} component="h6">
          <span style={{fontWeight:'bold'}}>Mobile Number:</span>  {profile.contactInformation.mobileNumber}
          </Typography>
          </Grid>
          </Grid>
          
          <Grid container style={{marginTop:'15px'}}  spacing={2}>
                <Grid item xs={6}>
        <Typography gutterBottom variant="p" style={{paddingLeft:'3px'}} component="h6">
           <span style={{fontWeight:'bold'}}>Nationality:</span> {profile.basicInformation.nationality}
          </Typography>
          </Grid>
            <Grid item xs={6}>
          <Typography gutterBottom variant="p" style={{paddingLeft:'3px'}} component="h6">
          <span style={{fontWeight:'bold'}}>ID Number:</span>  {profile.basicInformation.nationalIdNumber}
          </Typography>
          </Grid>
          </Grid>
        </CardContent>
      </CardActionArea>
     
    </Card>
    </Grid>
    </Grid>

        <Grid container spacing={4} style={{marginTop:'50px'}}>
            <Grid item xs={6}>
    <Card className={classes.root} style={{overflow:'visible'}}>
    <CardHeader 
                          title={<h5> Pending Lab Requests</h5>}
                       
                          avatar={<PanToolIcon style={{fontSize:'80px',marginTop:'-50px',color:"#5651A5"}} />}
                        />
      <CardActionArea>
       
        <CardContent >
        <Typography gutterBottom variant="p" style={{paddingLeft:'3px',marginTop:'15px'}} component="h5">
           <span style={{fontWeight:'bold'}}></span> Current pending Requests are <b>{pData} </b>
          </Typography>
    
        
        </CardContent>
      </CardActionArea>
     
    </Card>
    </Grid>

    <Grid item xs={6}>
    <Card className={classes.root} style={{overflow:'visible'}}>
    <CardHeader 
                          title={<h5> Lab Requests Completed</h5>}
                       
                          avatar={<CheckCircleIcon style={{fontSize:'80px',marginTop:'-50px',color:"#5651A5"}} />}
                        />
      <CardActionArea>
       
        <CardContent >
        <Typography gutterBottom variant="p" style={{paddingLeft:'3px',marginTop:'15px'}} component="h5">
           <span style={{fontWeight:'bold'}}></span> Succesfully Completed Requests are <b>{cData} </b>
          </Typography>
    
        
        </CardContent>
      </CardActionArea>
     
    </Card>
    </Grid>
    </Grid>
                </div>
                </div>
     </div>
    );}
}
 
export default DDashboard;
