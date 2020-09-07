import React, { useState, useEffect } from 'react';
import HBLViralComp from '../../Doctor/NHLForms/HBLViralComp'
import axios from 'axios'
import ChildForm12 from '../../Doctor/NHLForms/childForm12'
import Lsidebar from '../Lsidebar'
import Dsidebar from '../../Doctor/Dsidebar';
import queryString from 'query-string'
import decoder from 'jwt-decode'

const Culture = (props) => {
    const [params, setParams] = useState({})
    const [decoded, setDecoded] = useState({})
    
    const [culture, setCulture] = useState({
        PatientUHID: "",
        firstName: "",
        referralDate: null,
        nationalIdNumber: "",
        age: "",
        test: "culture and sensitivity",
        sex: "",
        location: "",
        OPD_Ward: "",
        physician_name: "",
        sample_type: "",
        test_requested: "",
        isolate1: "",
        isolate2: "",
        isolate: "",
        blnk1: "",
        blnk2: "",
        blnk3: "",
        blnk4: "",
        blnk5: "",
        blnk6: "",
        blnk7: "",
        blnk8: "",
        blnk9: "",
        blnk10: "",
        blnk11: "",
        blnk12: "",
        blnk13: "",
        blnk14: "",
        blnk15: "",
        blnk16: "",
        blnk17: "",
        blnk18: "",
        blnk19: "",
        blnk20: "",
        CI: "",
        CH1: "",
        CO: "",
        CL: "",
        EY: "",
        GE: "",
        OX: "",
        NI: "",
        PN: "",
        VA: "",
        blnk21: "",
        blnk22: "",
        blnk23: "",
        blnk24: "",
        CH2: "",
        TE: "",
        RB: "",
        DT1: "",
        DT2: "",
        SG1: "",
        SG2: "",
        priority: "",
        department: "",
        DoctorID: "",
        dateOfBirth: null
    })
    
    useEffect(() => {
        let params = queryString.parse(window.location.search)
        setDecoded(decoder(window.localStorage.getItem('userStore')))
        setParams(params)
        if (params.for === 'submit'||params.for==="view") {
            axios.get(`/findTest/${params.id}`)
                .then(res => {
                    let getData = res.data.testInfo[0]
                    setCulture(getData)
                })
                .catch(err=>{
                    console.log(err)
                })
        } else {
            axios.get(`/get-single-patient/${params.UHID}`)
                .then(res => {
                    console.log(res.data)
                    if (res.data) {
                        let updatedData = culture
                        updatedData.firstName = res.data[0].basic.name
                        updatedData.nationalIdNumber = res.data[0].basic.nationalIdNumber
                        updatedData.dateOfBirth = res.data[0].basic.date
                        updatedData.villCity = res.data[0].contact.village
                        updatedData.sex = res.data[0].basic.gender
                        setCulture(updatedData)
                    }
                })
                .catch(err => {
                    console.log(err)
                })
        }
    }, [])
    const handleChange = (e) => {
        var copy = { ...culture }
        copy[e.currentTarget.name] = e.currentTarget.value
        setCulture(copy)
        console.log(culture)
    }
    const initialChange = (e) => {
        e.preventDefault()
        const data = { ...culture }

        data[e.target.name] = e.target.value
        setCulture(data)
    }

    const handleSubmit = (e) => {
        // e.preventDefault()

        
        let decoded = decoder(window.localStorage.getItem('userStore'))
        let params = queryString.parse(window.location.search)
        let testInfo =culture



        if (params.for === 'submit') {
            axios.post(`/submitResult`, { id: params.id, testInfo: testInfo })
            
            .then((res) => {
                console.log("Successful")
                window.location.href = '/LabManagement'
            })
            .catch((error) => {
                console.log(error)
            })
        } else {
            axios.post("/make-request", {
                type: params.test,
                PatientUHID: params.UHID,
                requester: decoded.email,
                testInfo: testInfo
            })
                .then((res) => {
                    console.log("Successful")
                    window.location.href = '/make-request'
                })
                .catch((error) => {
                    console.log(error)
                })
        }
    }
    
    const DR = () => {
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
            <DR/>
            <div style={{ marginLeft: '220px' }}>
                <div style={{ padding: '20px' }}>
                    <ChildForm12 mode={params.for} culture={culture} handleChange={handleChange}
                        initialChange={initialChange} handleSubmit={handleSubmit} edit="partial" />
                </div>
            </div>
        </div>
    );
}

export default Culture;
