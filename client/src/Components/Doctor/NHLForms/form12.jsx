import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Dsidebar from '../Dsidebar'
import axios from 'axios'
import ChildForm12 from './childForm12'
export default class Form12 extends Component {


    constructor(props) {

        super(props);
        this.state={
            culture:{
                PatientUHID:"",
                firstName:"",
                referralDate:null,
                nationalIdNumber:"",
                age:"",
                test:"culture and sensitivity",
                sex:"",
                location:"",
                OPD_Ward:"",
                physician_name:"",
                sample_type:"",
                test_requested:"",
                isolate1:"",
                isolate2:"",
                isolate:"",
                blnk1:"",
                blnk2:"",
                blnk3:"",
                blnk4:"",
                blnk5:"",
                blnk6:"",
                blnk7:"",
                blnk8:"",
                blnk9:"",
                blnk10:"",
                blnk11:"",
                blnk12:"",
                blnk13:"",
                blnk14:"",
                blnk15:"",
                blnk16:"",
                blnk17:"",
                blnk18:"",
                blnk19:"",
                blnk20:"",
                CI:"",
                CH1:"",
                CO:"",
                CL:"",
                EY:"",
                GE:"",
                OX:"",
                NI:"",
                PN :"",
                VA :"",
                blnk21:"",
                blnk22:"",
                blnk23:"",
                blnk24:"",
                CH2:"",
                TE:"",
                RB:"",
                DT1:"",
                DT2:"",
                SG1:"",
                SG2:"",
                priority:"",
                department:"",
                DoctorID:"",
                dateOfBirth:null
            }
        }
    }

    handleSubmit=(e)=> {
        e.preventDefault()
        console.log(this.state)
        axios
        .post("http://localhost:4001/api/labRequest/culture",{
            PatientUHID:this.state.culture.PatientUHID,
            firstName:this.state.culture.firstName,
            referralDate:this.state.culture.referralDate,
            nationalIdNumber:this.state.culture.nationalIdNumber,
            age:this.state.culture.age,
            test:this.state.culture.test,
            sex:this.state.culture.sex,
            location:this.state.culture.location,
            OPD_Ward:this.state.culture.OPD_Ward,
            physician_name:this.state.culture.physician_name,
            sample_type:this.state.culture.sample_type,
            test_requested:this.state.culture.test_requested,
            isolate1:this.state.culture.isolate1,
            isolate2:this.state.culture.isolate2,
            isolate:this.state.culture.isolate,
            blnk1:this.state.culture.blnk1,
            blnk2:this.state.culture.blnk2,
            blnk3:this.state.culture.blnk3,
            blnk4:this.state.culture.blnk4,
            blnk5:this.state.culture.blnk5,
            blnk6:this.state.culture.blnk6,
            blnk7:this.state.culture.blnk7,
            blnk8:this.state.culture.blnk8,
            blnk9:this.state.culture.blnk9,
            blnk10:this.state.culture.blnk10,
            blnk11:this.state.culture.blnk11,
            blnk12:this.state.culture.blnk12,
            blnk13:this.state.culture.blnk13,
            blnk14:this.state.culture.blnk14,
            blnk15:this.state.culture.blnk15,
            blnk16:this.state.culture.blnk16,
            blnk17:this.state.culture.blnk17,
            blnk18:this.state.culture.blnk18,
            blnk19:this.state.culture.blnk19,
            blnk20:this.state.culture.blnk20,
            CI:this.state.culture.CI,
            CH1:this.state.culture.CH1,
            CO:this.state.culture.CO,
            CL:this.state.culture.CL,
            EY:this.state.culture.EY,
            GE:this.state.culture.GE,
            OX:this.state.culture.OX,
            NI:this.state.culture.NI,
            PN :this.state.culture.PN,
            VA :this.state.culture.VA,
            blnk21:this.state.culture.blnk21,
            blnk22:this.state.culture.blnk22,
            blnk23:this.state.culture.blnk23,
            blnk24:this.state.culture.blnk24,
            CH2:this.state.culture.CH2,
            TE:this.state.culture.TE,
            RB:this.state.culture.RB,
            DT1:this.state.culture.DT1,
            DT2:this.state.culture.DT2,
            SG1:this.state.culture.SG1,
            SG2:this.state.culture.SG2,
            priority:this.state.culture.priority,
            department:this.state.culture.department,
            DoctorID:this.state.culture.DoctorID,
            dateOfBirth:this.state.culture.dateOfBirth 
        })
        .then((res)=>{
           
            this.props.history.push("/patientList")
 
           
        })
        .catch((error)=>{
            console.log(error)
        })
    }

    handleChange=(e)=>{
        var copy = {...this.state.culture}
        copy[e.currentTarget.name] = e.currentTarget.value
        this.setState({culture:copy})
        console.log(this.state.culture)
    }
    initialChange=(e)=>{
        e.preventDefault()
        const data= {...this.state.culture}
          
        data[e.target.name] = e.target.value
        this.setState({culture:data})  
    
        console.log(this.state.chemistry)
    }
     retrieve=(e)=>{
        e.preventDefault()
        console.log("AS")
        if(!this.state.culture.PatientUHID)
        {
         return
        }
        else{
       
          axios.get(`http://localhost:4001/api/BookAppoint/${this.state.culture.PatientUHID}`)
          .then(res=>{
            const copyData = {...this.state.culture}
                  console.log(res.data.info.basicInformation)
                  var today = new Date()
                  var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate()
                  copyData.priority = res.data.info.priority
                  copyData.department = res.data.info.Department
                  copyData.DoctorID = res.data.info.SID
                  copyData.firstName = res.data.info.basicInformation.name
                  copyData.nationalIdNumber = res.data.info.basicInformation.nationalIdNumber
                  copyData.dateOfBirth = res.data.info.basicInformation.date
                  copyData.sex = res.data.info.basicInformation.gender
                  
                  console.log(copyData)
                  this.setState({culture:copyData})
          })
          .catch(error=>console.log(error))
        }
    }
    render() {

        return (
         
            <ChildForm12  culture={this.state.culture} handleChange ={this.handleChange}
            initialChange={this.initialChange} handleSubmit={this.handleSubmit} retrieve={this.retrieve}/>

        
        );
    }
}
