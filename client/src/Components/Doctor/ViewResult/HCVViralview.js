import React, { useState, useEffect } from 'react';
import HCVViralComp from '../../Doctor/NHLForms/HCVViralComp'
import axios from 'axios'
import Dsidebar from '../Dsidebar'

import Pdf from "react-to-pdf";

import queryString from 'query-string'
import decoder from 'jwt-decode'
import Lsidebar from '../../LaboratoryTeam/Lsidebar';


const ref = React.createRef();


const HCVViralview = (props) => {
    const [params, setParams] = useState({})
    const [decoded, setDecoded] = useState({})

    const [hcv, setHCV] = useState({
        PatientUHID: "",
        priority: "",
        department: "",
        DoctorID: "",
        firstName: "",
        nationalIdNumber: "",
        dateOfBirth: null,
        subZoba: "",
        villCity: "",
        requestedBy: "",
        tele: "",
        specimenDate: "",
        NHLDate: "",
        goodCondition: false,
        inadequateCondition: false,
        result1: {
            SN: "",
            clientName: "",
            clientNationalID: "",
            age: "",
            sex: "",
            initialTest: "",
            repeatTest: "",
            result: "",
        },
        result2: {
            SN: "",
            clientName: "",
            clientNationalID: "",
            age2: "",
            sex: "",
            initialTest2: "",
            repeatTest2: "",
            result2: ""
        },
        reportBy: "",
        referralDate: "",
        reportSig: "",
        approveBy: "",
        approveDate: "",
        approveSig: ""
    })
    
    

    useEffect(() => {
        let params = queryString.parse(window.location.search)
        setDecoded(decoder(window.localStorage.getItem('userStore')))
        setParams(params)
        if (params.for === 'submit'||params.for==="view") {
            axios.get(`/findTest/${params.id}`)
                .then(res => {
                    let getData = res.data.testInfo[0]
                    console.log(getData)
                    setHCV(getData)
                    console.log('test ', res.data.testInfo[0])
                })
        } else {
            axios.get(`/get-single-patient/${params.UHID}`)
                .then(res => {
                    console.log(res.data)
                    let updateData = hcv

                    if (res.data) {
                        let updatedData = hcv
                        updatedData.firstName = res.data[0].basic.name
                        updatedData.nationalIdNumber = res.data[0].basic.nationalIdNumber
                        updatedData.dateOfBirth = res.data[0].basic.date
                        updatedData.villCity = res.data[0].contact.village
                        updatedData.tele = res.data[0].contact.phoneNumber
                        updatedData.result1.sex = res.data[0].basic.gender
                        updatedData.result2.sex = res.data[0].basic.gender
                        updatedData.result1.clientName = res.data[0].basic.name
                        updatedData.result2.clientName= res.data[0].basic.name
                        updatedData.result1.clientNationalID =  res.data[0].basic.nationalIdNumber
                        updatedData.result2.clientNationalID =  res.data[0].basic.nationalIdNumber

                        setHCV(updatedData)
                    }

                })
                .catch(err => {
                    console.log(err)
                })
        }
    }, [])


    const initialChange = (e) => {
    }
    const handleChange = (e) => {


    }
    const handleResult = (e) => {
    }
    const handleResult1 = (e) => {
    }
    const retrieve = () => {
    }
    
    const submitter = (e) => {
        e.preventDefault()
        let decoded = decoder(window.localStorage.getItem('userStore'))
        let params = queryString.parse(window.location.search)
        let testInfo = {
            priority: hcv.priority,
            department: hcv.department,
            firstName: hcv.firstName,
            nationalIdNumber: hcv.nationalIdNumber,
            dateOfBirth: hcv.dateOfBirth,
            healthFacility: hcv.healthFacility,
            zoba: hcv.healthFacility,
            subZoba: hcv.subZoba,
            villCity: hcv.villCity,
            requestedBy: hcv.requestedBy,
            tele: hcv.tele,
            specimenDate: hcv.specimenDate,
            NHLDate: hcv.NHLDate,
            goodCondition: hcv.goodCondition,
            inadequateCondition: hcv.inadequateCondition,
            result1: hcv.result1,
            result2: hcv.result2,
            reportBy: hcv.reportBy,
            referralDate: hcv.referralDate,
            reportSig: hcv.reportSig,
            approveBy: hcv.approveBy,
            approveDate: hcv.approveDate,
            approveSig: hcv.approveSig
        }



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
                <Pdf targetRef={ref} filename="code-example.pdf" >
                    {({ toPdf }) => <button onClick={toPdf}>Generate Pdf</button>}
                </Pdf>
                <div ref={ref} style={{ padding: '20px', width: '210mm', height: '297mm' }}>
                    <HCVViralComp hcv={hcv} handleChange={handleChange}
                        handleResult={handleResult} handleResult1={handleResult1}
                        submitter={submitter} initialChange={initialChange}
                        retrieve={retrieve}
                        purpose="update" />
                </div>
            </div>
        </div>
    );
}

const options = {
    orientation: 'landscape',
    unit: 'in',
    format: [4, 2]
};
export default HCVViralview;
