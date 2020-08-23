import React,{useState,useEffect} from 'react';
import { BrowserRouter, Link,withRouter } from 'react-router-dom';
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
 
      useEffect(()=>{
        console.log(data)
      },[data])
      useEffect(()=>
      {
        var setarr = []
          console.log("asdasd")
          const chem = axios.get("http://localhost:4001/api/labRequest/chemistry");
          const haem = axios.get("http://localhost:4001/api/labRequest/hematology")
          const hcvViral = axios.get("http://localhost:4001/api/labRequest/hcvViral")
          const hblViral = axios.get("http://localhost:4001/api/labRequest/hblViral")
          const hivViral = axios.get("http://localhost:4001/api/labRequest/hivViral")
          const TBReport = axios.get("http://localhost:4001/api/labRequest/TBReport")
          const culture = axios.get("http://localhost:4001/api/labRequest/culture")
          axios.all([chem,haem,hcvViral,hblViral,hivViral,TBReport,culture])
  .then(axios.spread((...res)=> {
   
      var chem = res[0].data.filter(res=>res.status === "pending")
      var haem = res[1].data.filter(res=>res.status === "pending")
      var hcvViral = res[2].data.filter(res=>res.status === "pending")
      var hblViral = res[3].data.filter(res=>res.status === "pending")
      var hivViral = res[4].data.filter(res=>res.status === "pending")
      var TBReport = res[5].data.filter(res=>res.status === "pending")
      var culture = res[6].data.filter(res=>res.status === "pending")
      console.log(chem)
      console.log(haem)
      console.log(TBReport)
      setData(chem.concat(haem,hcvViral,hblViral,hivViral,TBReport,culture))
  }))
  .catch(error=> console.log(error))

      console.log(data)
  

      },[]) 

      const Checkit = (data)=>{
          console.log(data.RequestID)
          if(data.test === "Hematology")
          {
            props.history.push('/testFill/'+data.RequestID)
          }
          else if(data.test === "Chemistry")
          {
            props.history.push('/Chemlab/'+data.RequestID)
          }
          else if(data.test === "HCVViral")
          {
            console.log(data.RequestID)
            props.history.push('/HCVViralform/'+data.RequestID)
          }
          else if(data.test === "HBLViral")
          {
            props.history.push('/HBLViralform/'+data.RequestID)
          }
          else if(data.test === "HIVViral")
          {
            props.history.push('/HIVViralform/'+data.RequestID)
          }
          else if(data.test === "TBReport")
          {
            props.history.push('/LabTbreport/'+data.RequestID)
          }
          else if(data.test === "culture and sensitivity")
          {
            props.history.push('/Culture/'+data.RequestID)
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
            <StyledTableCell align="center"><b>Check</b></StyledTableCell>
                
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
              <StyledTableCell align="center"> <button class="btn btn-primary" onClick={()=>Checkit(pat)}>  Check </button></StyledTableCell>


 </StyledTableRow>
                      
                        
                      ) )
                    }     
            
                </TableBody>
               
                </Table>
            </TableContainer>
        </div>
     );
}
 
export default withRouter(FormReceive);