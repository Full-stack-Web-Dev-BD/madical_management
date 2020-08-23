import React,{useEffect,useState} from 'react';
import DSidebar from './Dsidebar'
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
const PatientList = (props) => {
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
      const [patient, setPatient] = useState([])
      const [upatient, setuPatient] = useState([])
      const [search, setSearch] = useState("")
      useEffect(()=>
      {
        const data = localStorage.getItem('userStore')
        console.log(data)
        const decoded = jwt_decode(data);
        
        axios
        .get("http://localhost:4001/api/BookAppoint")
        .then(res=>{
          console.log(decoded.SID)
          var chem = res.data.filter(({info})=>info.SID == decoded.SID)
            
            setPatient(chem)
            setuPatient(chem)
            console.log(chem)
        })
        .catch(error=> console.log(error))

      },[])
    
      function data()
      {
          console.log(patient)
      }
      const updateInfo=(e)=>{
          const searchName = e.currentTarget.value.toLowerCase()
          const allData = [... patient]
         if(searchName =="")
         {
             return setuPatient(patient)
         }
         console.log("search Names  ",searchName)
          patient.map(pat=>console.log(pat.basicInformation.name.toLowerCase()))
          const filteredCountries = allData.filter(pat => {
            return pat.basicInformation.name.toLowerCase().indexOf(searchName) !== -1;
          });
          console.log("Filtered Countries   ",filteredCountries)
          setuPatient(filteredCountries)
          setSearch(searchName)
      }
      const manage=(data)=>
      {
          console.log(data.UHID)
        props.history.push('/patientManagement/'+data.info.UHID)
      }
      return ( 
        <div>
        <DSidebar/>
        <div style={{paddingLeft:'220px',paddingTop:'30px'}}>
        <div class="form-group col-md-12">

        <input type="text" class="form-control"  name="SearchPatient"  onChange={(e)=>updateInfo(e)} required id="inputPassword4" placeholder="Search Patient"/>
        </div>
        <div style={{padding:'20px'}}>
        <TableContainer component={Paper}>
                     <Table aria-label="simple table">
                     <TableHead>
          <TableRow>

          <StyledTableCell>UHID</StyledTableCell>
          <StyledTableCell align="right"> Name</ StyledTableCell>
            <StyledTableCell align="right">Gender</StyledTableCell>
            <StyledTableCell align="right">BloodGroup </StyledTableCell>
            <StyledTableCell align="right"> Date of Birth</StyledTableCell>
            <StyledTableCell align="right">Manage</StyledTableCell>

                
                         </TableRow>
        </TableHead>
        <TableBody>

                {upatient.map(pat=>(
                   <StyledTableRow >
                       

<TableCell  scope="row">
    {pat.info.UHID}
              </TableCell>
              <StyledTableCell align="right">{pat.info.basicInformation.name}</StyledTableCell>
              <StyledTableCell align="right"> {pat.info.basicInformation.gender}  </StyledTableCell>
              <StyledTableCell align="right">  {pat.info.basicInformation.bloodGroup}</StyledTableCell>
              <StyledTableCell align="right">  {pat.info.basicInformation.date}</StyledTableCell>
              <StyledTableCell align="right"><button onClick={()=>manage(pat)} class="btn btn-primary">Manage</button></StyledTableCell>


 </StyledTableRow>
                      
                        
                      ) )
                    }     
            
                </TableBody>
               
                </Table>
            </TableContainer>
            </div>
        </div>
        </div>
     );
}
 
export default PatientList;