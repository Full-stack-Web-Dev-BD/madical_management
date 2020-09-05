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

import PatientRequestModal from './PatientRequestModal'

import { useRecoilState } from 'recoil'
import { allPatientState } from '../util/recoilState'
import decoder from 'jwt-decode'
import { Button } from '@material-ui/core';
import FormC from './LaboratoryTeam/FormC';


const SeeResult = () => {
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
    
    let token =window.localStorage.getItem('userStore')
    let decoded=decoder(token)
    
    axios.get('/get-patients')
      .then(res => {
        let filterDoctors = res.data.filter(single => single.request == decoded.email)
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
        <FormC/>
        {
          filteredPatient.length < 1 ?
            <h3 className="text-center text-info" style={{ marginTop: '140px' }}> Empty</h3> : ''
        }
      </div>
    </div>
  );
}

export default SeeResult