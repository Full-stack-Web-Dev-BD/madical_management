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
import { doctorsState ,allAppoinmentState} from '../util/recoilState'


const ViewAllAppoinment = () => {
  const [getAllAppoinmentState,setAllAppoinmentState] =useRecoilState(allAppoinmentState)

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
    axios.get('/get-appoints')
    .then(res=>{
      setAllAppoinmentState(res.data)
    })
    .catch(err=>{
      console.log(err)
    })
  }, [])

  function data() {
    console.log(patient)
  }
  const updateInfo = (e) => {
    // const searchName = e.currentTarget.value
    // const allData = [...patient]
    // if (searchName == "") {
    //   return setuPatient(patient)
    // }
    // const filteredCountries = allData.filter(pat => {
    //   return pat.SID.toString().indexOf(searchName) !== -1;
    // });
    // setuPatient(filteredCountries)
    // setSearch(searchName)
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
                <StyledTableCell align="center">UHID</ StyledTableCell>
                <StyledTableCell align="center"> Name</ StyledTableCell>
                <StyledTableCell align="center">Time</StyledTableCell>
                <StyledTableCell align="center">Date </StyledTableCell>
                <StyledTableCell align="center"> Priority</StyledTableCell>
                <StyledTableCell align="center"> Manage</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {getAllAppoinmentState.map(single => (
                <StyledTableRow >
                  <StyledTableCell align="center"> {single.UHID}</StyledTableCell>
                  <StyledTableCell align="center"> {single.patientInformation[0].basic.name}  </StyledTableCell>
                  <StyledTableCell align="center">{single.time}</StyledTableCell>
                  <StyledTableCell align="center"> {single.patientInformation[0].basic.date} </StyledTableCell>
                  <StyledTableCell align="center"> {single.priority} </StyledTableCell>
                  <StyledTableCell align="center"> Manage </StyledTableCell>
                </StyledTableRow>
              ))
              }
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
}

export default ViewAllAppoinment;