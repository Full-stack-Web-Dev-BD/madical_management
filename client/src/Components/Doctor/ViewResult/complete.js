import React,{useState,useEffect} from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import axios from 'axios'
import jwt_decode from 'jwt-decode';
import { BrowserRouter, Link,withRouter } from 'react-router-dom';
const Complete = (props) => {
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
      const [data, setData] = useState([])
 
      useEffect(()=>
      {
               const data = localStorage.getItem('userStore')
        const decoded = jwt_decode(data);
        console.log(decoded)
        var setarr = []
        console.log("asdasd")
        const chem = axios.get("http://localhost:4001/api/labRequest/chemistry");
        const haem = axios.get("http://localhost:4001/api/labRequest/hematology")
        const hcvViral = axios.get("http://localhost:4001/api/labRequest/hcvViral")
        const hblViral = axios.get("http://localhost:4001/api/labRequest/hblViral")
        const hivViral = axios.get("http://localhost:4001/api/labRequest/hivViral")
        const TBReport = axios.get("http://localhost:4001/api/labRequest/TBReport")

        axios.all([chem,haem,hcvViral,hblViral,hivViral,TBReport])
.then(axios.spread((...res)=> {
 
    
    var chem = res[0].data.filter(res=>res.status === "completed"  && res.DoctorID == decoded.SID)
    var haem = res[1].data.filter(res=>res.status === "completed"  && res.DoctorID == decoded.SID)
    var hcvViral = res[2].data.filter(res=>res.status === "completed"  && res.DoctorID == decoded.SID)
    var hblViral = res[3].data.filter(res=>res.status === "completed"  && res.DoctorID == decoded.SID)
    var hivViral = res[4].data.filter(res=>res.status === "completed"  && res.DoctorID == decoded.SID)
    var TBReport = res[5].data.filter(res=>res.status === "completed"  && res.DoctorID == decoded.SID)
    console.log(chem)
    console.log(haem)
  
    setData(chem.concat(haem,hcvViral,hblViral,hivViral,TBReport))
}))
.catch(error=> console.log(error))

    

      },[])
      const viewData=(data)=>{
          if(data.test === "Chemistry")
          {
          props.history.push('/Chemshow/'+data.RequestID)
          }
          else if(data.test === "Hematology")
          {
            props.history.push('/Viewdata/'+data.RequestID)
          }
          else if(data.test === "HCVViral")
          {
            props.history.push('/HCVViralvew/'+data.RequestID)
          }
          else if(data.test === "HBLViral")
          {
            props.history.push('/HBLViralview/'+data.RequestID)
          }
          else if(data.test ==="HIVViral")
          {
            props.history.push('/Hivvirals/'+data.RequestID)
          }
          else if(data.test ==="TBReport")
          {
            props.history.push('/Tbreport/'+data.RequestID)
          }
      }
    return ( 
        <div>
  <TableContainer component={Paper}>
                     <Table aria-label="simple table">
                     <TableHead>
          <TableRow>

          <StyledTableCell><b>Request ID</b></StyledTableCell>
          <StyledTableCell align="center"><b> Date</b></ StyledTableCell>
            <StyledTableCell align="center"><b>UHID</b></StyledTableCell>
            <StyledTableCell align="center"><b>Patient Name</b> </StyledTableCell>
            <StyledTableCell align="center"> <b>Department</b></StyledTableCell>
            <StyledTableCell align="center"><b>Test Type</b></StyledTableCell>
            <StyledTableCell align="center"><b>Priority</b></StyledTableCell>
            <StyledTableCell align="center"><b>View</b></StyledTableCell>
                
                         </TableRow>
        </TableHead>
        <TableBody>

                {data.map(pat=>(
                   <StyledTableRow >

              <StyledTableCell align="center">{pat.RequestID}</StyledTableCell>
              <StyledTableCell align="center"> {pat.referralDate} </StyledTableCell>
              <StyledTableCell align="center">  {pat.PatientUHID}</StyledTableCell>
              <StyledTableCell align="center">  {pat.firstName}</StyledTableCell>
              <StyledTableCell align="center">  {pat.department}</StyledTableCell>
              <StyledTableCell align="center">  {pat.test}</StyledTableCell>
              <StyledTableCell align="center">  {pat.priority}</StyledTableCell>
              <StyledTableCell align="center">  <button class="btn btn-primary" onClick={()=>viewData(pat)}>View</button></StyledTableCell>


 </StyledTableRow>
                      
                        
                      ) )
                    }     
            
                </TableBody>
               
                </Table>
            </TableContainer>
        </div>
     );
}
 
 
export default withRouter(Complete);