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
import PatientRequestModal from '../Components/PatientRequestModal'
import { useRecoilState } from 'recoil'
import { allPatientState } from '../util/recoilState'
import { Button } from '@material-ui/core';



const RequestForPatient = () => {
  const [getAllPatientState, setallPatientState] = useRecoilState(allPatientState)

  const [patient, setPatient] = useState([])
  const [upatient, setuPatient] = useState([])
  const [search, setSearch] = useState("")

  const [filteredPatient, setFilteredPatient] = useState([])

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
    axios.get('/get-patients')
      .then(res => {
        let filterDoctors = res.data.filter(single => single.request == !true||0)
        setFilteredPatient(filterDoctors)
      })
      .catch(err => {
      })
  }, [])
  return (
    <div>
      <Sidebar />
      <div style={{ paddingLeft: '220px', paddingTop: '30px' }}>
        <div class="form-group col-md-12">
          <h2>Make A Request</h2>
          <p onClick={() => { console.log(filteredPatient, getAllPatientState) }}> (Only Avilable Patient Included in Table)</p>
        </div>
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <StyledTableCell>UHID</StyledTableCell>
                <StyledTableCell align="center"> Name</ StyledTableCell>
                <StyledTableCell align="center">Gender</StyledTableCell>
                <StyledTableCell align="center">BloodGroup </StyledTableCell>
                <StyledTableCell align="center"> Date of Birth</StyledTableCell>
                <StyledTableCell align="center">Action</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredPatient.map(pat => (
                <StyledTableRow >
                  <TableCell scope="row">
                    {pat.UHID}
                  </TableCell>
                  <StyledTableCell align="center">{pat.patientInfo[0].basic.name}</StyledTableCell>
                  <StyledTableCell align="center"> {pat.patientInfo[0].basic.gender}  </StyledTableCell>
                  <StyledTableCell align="center">  {pat.patientInfo[0].basic.bloodGroup}</StyledTableCell>
                  <StyledTableCell align="center">  {pat.patientInfo[0].basic.date}</StyledTableCell>
                  <StyledTableCell align="center"> <PatientRequestModal s={pat} /> </StyledTableCell>
                </StyledTableRow>
              ))
              }
            </TableBody>
          </Table>
        </TableContainer>
        {
          filteredPatient.length < 1 ?
            <h3 className="text-center text-info" style={{ marginTop: '140px' }}> Empty</h3> : ''
        }
      </div>
    </div>
  );
}

export default RequestForPatient;