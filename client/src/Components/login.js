import React,{useState,useEffect} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import jwt_decode from 'jwt-decode';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import axios from 'axios'
import Paper from '@material-ui/core/Paper';
import Signup from './signup'
import Logo from '../Image/logo.png'
import {
    BrowserRouter as Router,
    withRouter,
    Link,
    Route,
    Switch
  } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: `url(${Logo})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
    backgroundColor:'white',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));
export default function Login(props) {
  const classes = useStyles();
  const [account,setAccount] = useState({
    email:"",
    password:""
})
const updateData=(e)=>
{
    e.preventDefault();
    console.log(e.currentTarget.value)
    const updateAccount ={...account}
    updateAccount[e.currentTarget.name] = e.currentTarget.value;
    setAccount(updateAccount)
    console.log(account)
}
const signIn=(e)=>
{
    e.preventDefault()
    console.log("Hello Signing up")
    axios
    .post("/api/auth",{
        email:account.email,
        password:account.password
    })
    .then(res=>
        {
            
          const decoded = jwt_decode(res.data);
          console.log(decoded)
          console.log(decoded.type)
            console.log(res)
            if(decoded.type == "Receptionist")
            {
             localStorage.setItem('userStore',res.data);
                props.history.push('/Dashboard')
            }
            else if(decoded.type == "Admin")
            {
              localStorage.setItem('userStore',res.data);
              props.history.push('/AdminDashboard')
            }
            else if(decoded.type == "Doctor")
            {
              localStorage.setItem('userStore',res.data);
              props.history.push('/DoctorDashboard')
            }
            else if(decoded.type == "Lab Technician")
            {
              localStorage.setItem('userStore',res.data);
              props.history.push('/LabManagement')
            }
        })
    .catch(error=>
        {
            console.log(error)
        })
}
useEffect(() => {
    const x =localStorage.getItem('userStore')
    console.log(x)
    if(x == null)
    {        
    }
    else
    {
     // localStorage.removeItem('userStore');
      props.history.push('/Dashboard');
    }
}, [])
  return (
   
    <Grid container component="main" className={classes.root}>
    <CssBaseline />
     <Grid item xs={false} sm={4} md={7} style={{marginBottom:'40px'}} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} noValidate onSubmit={signIn}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            value={account.email} 
            onChange={(e)=>updateData(e)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={account.passwor} 
            onChange={(e)=>updateData(e)}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              
            </Grid>
            <Grid item>
            
              <a href="/Signup">Dont't have an Account? Signup</a>
            
            </Grid>
          </Grid>
        </form>
      </div>
      </Grid>
    </Grid>

  );
}
