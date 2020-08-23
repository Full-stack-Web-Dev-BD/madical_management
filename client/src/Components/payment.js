import React,{useEffect,useState} from 'react';
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
import {connect}  from 'react-redux'
import Swal from 'sweetalert2'
import {store,persistor} from '../store/index'
import { bookingAppointment } from '../action/bookAppointAction';
const Payment = (props) => {
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
      const [bookingAppointData,setBookingAppointData] = useState({})
   
    useEffect(() => {

        console.log(props)
        const initial = store.getState().BookingReducer.data
        const initialName = store.getState().BookingReducer.data.basicInformation.name
        setBookingAppointData({...initial,PName:initialName})
        console.log(bookingAppointData)
}, [])
    const payment=async()=>{
        const { value: UHID } = await Swal.fire({
            title: 'UHID number',
            input: 'text',
            inputPlaceholder: 'Enter your UHID Number'
          })
          props.history.push('/paymentForm')
    }
    const primary=()=>{
        console.log(bookingAppointData.basicInformation.name)
    }
    if(bookingAppointData === '')
    {
      return "Loading"
    }
    return ( 
        <div>
<Sidebar/>
<div style={{paddingLeft:'220px',paddingTop:'30px',paddingRight:'20px'}}>
        <div class="form-group col-md-12 pt-4 ">

        </div>
        <TableContainer component={Paper}>
                     <Table aria-label="simple table">
                     <TableHead>
          <TableRow>

          <StyledTableCell align="center">UHID</StyledTableCell>
          <StyledTableCell align="center"> Patient</ StyledTableCell>
            <StyledTableCell align="center">Doctor</StyledTableCell>
            <StyledTableCell align="center">Department No </StyledTableCell>
            <StyledTableCell align="center"> Time</StyledTableCell>
            <StyledTableCell align="center">Priority</StyledTableCell>
            <StyledTableCell align="center">Action</StyledTableCell>
                
                         </TableRow>
        </TableHead>

        
        <TableBody>

  
                   <StyledTableRow >
                  <StyledTableCell align="center">{bookingAppointData.UHID}</StyledTableCell>
          <StyledTableCell align="center"> {bookingAppointData.PName}</ StyledTableCell>
            <StyledTableCell align="center">{bookingAppointData.DName}</StyledTableCell>
            <StyledTableCell align="center">{bookingAppointData.Department} </StyledTableCell>
            <StyledTableCell align="center"> {bookingAppointData.appointmentDate}</StyledTableCell>
            <StyledTableCell align="center">{bookingAppointData.priority}</StyledTableCell>
            <StyledTableCell align="center"><button class="btn btn-primary" onClick={payment}>Pay</button></StyledTableCell>
              
 </StyledTableRow>
                      
                      
            
                </TableBody>
               
                </Table>
            </TableContainer>

        </div>
        </div>
     );}

     const mapStateToProps = state => ({ counter: state.BookingReducer.data })
export default connect(mapStateToProps)(Payment);

