import React, { useState, useEffect } from 'react';
import { BrowserRouter, Link, withRouter } from 'react-router-dom';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import axios from 'axios'




const FormReceive = (props) => {
  const [data, setData] = useState([])





  
  useEffect(() => {
    axios.get('/get-all-request')
    .then(res=>{
       let filtered =res.data.filter(single=> single.status==='submitted')
       setData(filtered)
    })
    .catch(err=>{
      console.log(err)
    })
  }, [])
  
  
  
  const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);




  const StyledTableRow = withStyles((theme) => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }))(TableRow);

  const Checkit = (data) => {
    if (data.type === "HIVViral") {
      props.history.push(`/LHIVViral?for=view&mode=view&id=${data._id}`)
    }
    else if (data.type === "LabTbreport") {
      props.history.push(`/LLabTbreport?for=view&mode=view&id=${data._id}`)
    }
    else if (data.type === "Chemistry") {
      props.history.push('/Chemlab')
    }
    else if (data.type === "HCVViral") {
      console.log(data.RequestID)
      props.history.push('/HCVViralform')
    }
    else if (data.type === "HBLViral") {
      props.history.push('/HBLViralform')
    }
    else if (data.type === "HIVViral") {
      props.history.push('/HIVViralform')
    }
    else if (data.type === "culture and sensitivity") {
      props.history.push('/Culture')
    }
  }

  return (
    <div>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <StyledTableCell><b>Request ID</b></StyledTableCell>
              <StyledTableCell align="center"><b>UHID</b></StyledTableCell>
              <StyledTableCell align="center"><b>Patient Name</b> </StyledTableCell>
              <StyledTableCell align="center"><b>Test Type</b></StyledTableCell>
              <StyledTableCell align="center"><b>Check</b></StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map(pat => (
              <StyledTableRow >
                <StyledTableCell align="center">{pat.requester}</StyledTableCell>
                <StyledTableCell align="center">  {pat.patient}</StyledTableCell>
                <StyledTableCell align="center">  {pat.testInfo[0].firstName}</StyledTableCell>
                <StyledTableCell align="center">  {pat.type}</StyledTableCell>
                <StyledTableCell align="center"> <button class="btn btn-primary" onClick={() => Checkit(pat)}>  View Details </button></StyledTableCell>
              </StyledTableRow>
            ))
            }
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default withRouter(FormReceive);