import React, { useEffect, useState } from 'react';
import Sidebar from './sidebar'
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import axios from 'axios'


import { useRecoilState } from 'recoil'
import { doctorsState } from '../util/recoilState'


const ViewAllDoctor = () => {
  const [getDoctorsState, setDoctorsState] = useRecoilState(doctorsState)

  const [patient, setPatient] = useState([])
  const [upatient, setuPatient] = useState([])
  const [search, setSearch] = useState("")

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

  useEffect(() => {
    // axios
    //   .get("http://localhost:4001/api/Staff")
    //   .then(res => {
    //     console.log(res)
    //     setPatient(res.data)
    //     setuPatient(res.data)
    //   })
    //   .catch(error => console.log(error))

  }, [])
  useEffect(() => {
    axios.get('/get-admin-data')
      .then(res => {
        console.log(res.data)
        setDoctorsState(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  function data() {
    console.log(patient)
  }
  const updateInfo = (e) => {
  }
  return (
    <div>
      <Sidebar />
      <div style={{ paddingLeft: '220px', paddingTop: '30px' }}>
        <div class="form-group col-md-12">
          <input type="text" class="form-control" name="Search Doctor" onChange={(e) => updateInfo(e)} required id="inputPassword4" placeholder="Search Doctor" />
        </div>
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <StyledTableCell >Image</StyledTableCell>
                <StyledTableCell align="right"> Doctor ID</ StyledTableCell>
                <StyledTableCell align="right">Name</StyledTableCell>
                <StyledTableCell align="right">Gender </StyledTableCell>
                <StyledTableCell align="right"> Department</StyledTableCell>
                <StyledTableCell align="right"> Number</StyledTableCell>
                <StyledTableCell align="right">Availability</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {getDoctorsState.map(single => (
                <StyledTableRow >
                  <TableCell scope="row">Image</TableCell>
                  <StyledTableCell align="right">{single.ID}</StyledTableCell>
                  <StyledTableCell align="right"> {single.allInformation[0].basic.name}  </StyledTableCell>
                  <StyledTableCell align="right">  {single.allInformation[0].basic.gender}</StyledTableCell>
                  <StyledTableCell align="right"> {single.allInformation[0].staff.department} </StyledTableCell>
                  <StyledTableCell align="right">  {single.allInformation[0].contact.mobileNumber}</StyledTableCell>
                  <StyledTableCell align="right">Available</StyledTableCell>
                </StyledTableRow>
              ))
              }
            </TableBody>
          </Table>
        </TableContainer>
        {
          getDoctorsState.length < 1 ?
            <h3 className="text-center text-info" style={{ marginTop: '140px' }}> Empty</h3> : ''
        }
      </div>
    </div>
  );
}

export default ViewAllDoctor;