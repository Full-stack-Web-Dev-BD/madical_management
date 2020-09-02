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
import PatientModal from './PatientModal';

const Payment = (props) => {

  const [invoices, setInvoices] = useState([])
  useEffect(() => {
    axios.get('/get-all-invoice')
      .then(res => {
        console.log(res.data)
        setInvoices(res.data)
      })
      .catch(err => {
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
  const [bookingAppointData, setBookingAppointData] = useState({})

  return (
    <div>
      <Sidebar />
      <div style={{ paddingLeft: '220px', paddingTop: '30px', paddingRight: '20px' }}>
        <div class="form-group col-md-12 pt-4 ">
        </div>
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>

                <StyledTableCell align="center">UHID</StyledTableCell>
                <StyledTableCell align="center"> Invoice ID</ StyledTableCell>
                <StyledTableCell align="center">Total Amount</StyledTableCell>
                <StyledTableCell align="center">Paid Amount </StyledTableCell>
                <StyledTableCell align="center">Balance Due </StyledTableCell>
                <StyledTableCell align="center"> Due Date</StyledTableCell>
                <StyledTableCell align="center">Action</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {
                invoices.map(s => {
                  return (
                    <StyledTableRow >
                      <StyledTableCell align="center">{s.UHID}</StyledTableCell>
                      <StyledTableCell align="center"> {s.invoiceID}</ StyledTableCell>
                      <StyledTableCell align="center">{s.total} </StyledTableCell>
                      <StyledTableCell align="center">{s.paid} </StyledTableCell>
                      <StyledTableCell align="center">{(s.total-s.paid)} </StyledTableCell>
                      <StyledTableCell align="center"> {s.dueDate}</StyledTableCell>
                      <StyledTableCell align="center"><PatientModal s={s}/></StyledTableCell>
                    </StyledTableRow>
                  )
                })
              }
            </TableBody>
          </Table>
        </TableContainer>
        {
          invoices.length < 1 ?
            <h3 className="text-center text-info" style={{ marginTop: '140px' }}> Empty</h3> : ''
        }
      </div>
    </div>
  );
}
export default Payment

