import React, { useState, useEffect } from 'react';
import Page2 from '../../Doctor/NHLForms/page2'
import axios from 'axios'
import Lsidebar from '../Lsidebar'
import Dsidebar from '../../Doctor/Dsidebar';
import queryString from 'query-string'
import decoder from 'jwt-decode'
const TBreport = (props) => {
    const [params, setParams] = useState({})
    const [data, setData] = useState({
        PatientUHID: "", priority: "", department: "", DoctorID: "", nationalIdNumber: "", test: "", firstName: "", sex: "",
        eritreanID: "", dateOfBirth: "", address: "", labSerial: "", round: "", facultyName: "",
        doctorName: "", referralDate: null, mgitCulture: "", mgitMicroscopy: "", ljCulture: "", geneXpertRapidTest: ""
        , DST: {
            stremptomycin: "", isoniazed: "", rifampcin: "", rthambutol: "", pyrazinamide: "", amikacin: "", capreomycin: "",
            kanamycin: "", levloxacin: "", ofloxacin: ""
        }, result: "", comments: "", reportedBy: "", recievedBy: ""
    })
    const handleChange = (e) => {
        var copyData = { ...data }
        copyData[e.currentTarget.name] = e.currentTarget.value
        setData(copyData)
        console.log(copyData)
    }
    const handleChanges = (e) => {
        var copyData = { ...data }
        copyData.DST[e.currentTarget.name] = e.currentTarget.value
        setData(copyData)
        console.log(data)
    }
    useEffect(() => {
        let params = queryString.parse(window.location.search)
        setParams(params)
        if (params.for === 'submit') {
            axios.get(`/findTest/${params.id}`)
                .then(res => {
                    let getData = res.data.testInfo[0]
                    setData(getData)
                    console.log('got data',getData)
                })
                .catch(err=>{
                    console.log(err)
                })
        } else {
            axios.get(`/get-single-patient/${params.UHID}`)
                .then(res => {
                    console.log(res.data)
                    if (res.data) {
                        let updatedData = data
                        data.firstName = res.data[0].basic.name
                        data.sex = res.data[0].basic.gender
                        data.address = res.data[0].contact.address
                        data.dateOfBirth = res.data[0].basic.date
                        setData(updatedData)
                    }

                })
                .catch(error => console.log(error))
        }
    }, [])
    const retrieve = (e) => {

    }

    const submitter = (e) => {
        let params = queryString.parse(window.location.search)
        let decoded = decoder(window.localStorage.getItem('userStore'))
        e.preventDefault()
        if (params.for === 'submit'|| params.for==="view") {
            axios.post(`/submitResult`, { id: params.id, testInfo: data })
                .then((res) => {
                    console.log("Successful")
                    window.location.href = '/LabManagement'
                })
                .catch((error) => {
                    console.log(error)
                })
        } else {
            axios
                .post(`/make-request`, { testInfo: data, PatientUHID: params.UHID, type: params.test, requester: decoded.email })
                .then((res) => {
                    window.location.href = '/make-request'
                    // console.log("Successful")
                })
                .catch((error) => {
                    console.log(error)
                })
        }
    }
    
    const dR = () => {
        if (params.for === "view") {
            return (
                <span></span>
            )
        } else if(params.for==="submit") {
            return (
                <Lsidebar/>
            )
        }else{
            return(
                <Dsidebar/>
            )
        }
    }

    return (
        <div>
            <dR/>
            <div style={{ marginLeft: '220px' }}>
                <div style={{ padding: '20px' }}>
                    <Page2 mode={params.mode} data={data} handleChange={handleChange}
                        handleChanges={handleChanges}
                        stat="update"
                        submitter={submitter} retrieve={retrieve} />
                </div>
            </div>
        </div>
    );
}

export default TBreport;