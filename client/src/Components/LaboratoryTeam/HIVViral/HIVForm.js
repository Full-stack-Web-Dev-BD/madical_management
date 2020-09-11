import React, { useState, useEffect } from 'react';
import HIVViralComp from '../../Doctor/NHLForms/HIVViralComp'
import axios from 'axios'
import sidebar from '../../sidebar';
import Dsidebar from '../../Doctor/Dsidebar';
import queryString from 'query-string'
import decoder from 'jwt-decode'
import Lsidebar from '../Lsidebar';



const HBLform = (props) => {
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
    if (params.for === 'submit' || params.for === "view") {
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
                    updatedData.result2.clientName = res.data[0].basic.name
                    updatedData.result1.clientNationalID = res.data[0].basic.nationalIdNumber
                    updatedData.result2.clientNationalID = res.data[0].basic.nationalIdNumber
                    setHCV(updatedData)
                }
            })
            .catch(err => {
                console.log(err)
            })
    }
}, [])


    const initialChange = (e) => {
        const copyData = { ...hcv }
        copyData['PatientUHID'] = e.currentTarget.value
        setHCV(copyData)
    }
    const handleChange = (e) => {
        if (e.target.name === 'goodCondition' || e.target.name === 'inadequateCondition') {
    
            console.log(e.target.value)
            const data = { ...hcv }
            data[e.target.name] = true
            setHCV(data)
        } else {
            console.log(e.target.value)
            const data = { ...hcv }
            data[e.target.name] = e.target.value
            setHCV(data)
        }
    }
    const handleResult = (e) => {
        const data = { ...hcv }

        const { name, value } = e.currentTarget
        data.result1[name] = value
        console.log(hcv)
        setHCV(data)
    }
    const handleResult1 = (e) => {
        const data = { ...hcv }
        const { name, value } = e.currentTarget
        data.result2[name] = value
        console.log(hcv)
        setHCV(data)

    }
    const retrieve = () => {
    }
    const submitter = (e) => {
        let decoded = decoder(window.localStorage.getItem('userStore'))
        let params = queryString.parse(window.location.search)
    
    
    
        if (params.for === 'submit') {
            axios.post(`/submitResult`, { id: params.id, testInfo: hcv })
    
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
                testInfo: hcv
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
        } else if (params.for === "submit") {
            return (
                <Lsidebar />
            )
        } else {
            return (
                <Dsidebar />
            )
        }
    }
    
    return (
        <div>
            <DR/>
            <div style={{ marginLeft: '220px' }}>
                <div style={{ padding: '20px' }}>
                    <HIVViralComp mode={params.for} hcv={hcv} handleChange={handleChange}
                        handleResult={handleResult} handleResult1={handleResult1}
                        submitter={submitter} initialChange={initialChange}
                        retrieve={retrieve}
                        purpose="update" />
                </div>
            </div>
        </div>
    );
}

export default HBLform;
