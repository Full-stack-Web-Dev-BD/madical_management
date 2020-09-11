import React, { useState, useEffect } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import axios from 'axios'
import Login from './login'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
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

export default function Signup(props) {
  const [validationError, setValidationError] = useState({})
  const classes = useStyles();
  const [account, setAccount] = useState({
    name: "",
    email: "",
    password: "",
    type:"Admin"
  })
  const updateData = (e) => {
    e.preventDefault();
    const updateAccount = { ...account }
    updateAccount[e.currentTarget.name] = e.currentTarget.value;
    setAccount(updateAccount)
  }
  const signingup = (e) => {
    e.preventDefault()
    axios
      .post("/admin-register", {
        name: account.name,
        email: account.email,
        password: account.password,
        type:account.type
      })
      .then(res => {
        props.history.push('/');
      })
      .catch(error => {
        setValidationError(error.response.data)
      })
  }
  return (
    <Router>
      <Container component="main" maxWidth="xs">

        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Signup
        </Typography>
          <form className={classes.form} onSubmit={signingup}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              error={validationError.name?true:false}
              fullWidth
              id="name"
              label="Name"
              name="name"
              autoComplete="name"
              autoFocus
              value={account.name}
              onChange={(e) => updateData(e)}
            />
            <TextField
              variant="outlined"
              error={validationError.email?true:false}
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              value={account.email}
              onChange={(e) => updateData(e)}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              error={validationError.password?true:false}
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={account.password}
              onChange={(e) => updateData(e)}
            />
            {
              validationError.massage?
              <p className="text-danger"> {validationError.massage} </p>
              :''
            }
            {
              validationError.email?
              <p className="text-danger"> {validationError.email} </p>
              :''
            }
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
              Sign up
          </Button>
            <Grid container>

              <Grid item>

                <a href="/"> {"Already have an Account? Signin"}</a>

              </Grid>
            </Grid>
          </form>
        </div>

      </Container>

    </Router>
  );
}