import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios'
import HIVViralComp from './HIVViralComp'
import Dsidebar from '../Dsidebar';
import queryString from 'query-string'
import decoder from 'jwt-decode'
import Lsidebar from '../../LaboratoryTeam/Lsidebar';

const useStyles = makeStyles({
    brdr: {
        border: '1px solid black',
        borderCollapse: 'collapse'
    },
    root: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});

export default function HIVViral(props) {
    const [params, setParams] = useState({})
    const [decoded, setDecoded] = useState({})
    const classes = useStyles();
    const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));
    const [hcv, setHCV] = useState({
        PatientUHID: "",
        priority: "",
        department: "",
        DoctorID: "",
        firstName: "",
        nationalIdNumber: "",
        dateOfBirth: null,
        healthFacility: "",
        zoba: "",
        subZoba: "",
        villCity: "",
        requestedBy: "",
        tele: "",
        specimenDate: null,
        NHLDate: null,
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
        referralDate: null,
        reportSig: "",
        approveBy: "",
        approveDate: null,
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
        const copyData = { ...hcv }
        copyData['PatientUHID'] = e.currentTarget.value
        setHCV(copyData)
    }
    const handleChange = (e) => {
        const data = { ...hcv }
        const { name, type, value } = e.currentTarget
        
        if (type == 'checkbox') {
            data[name] = e.currentTarget.checked
        }
        else {
            data[name] = value
        }
        setHCV(data)
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

        axios.get(`http://localhost:4001/api/BookAppoint/${hcv.PatientUHID}`)
            .then(res => {
                const copyData = { ...hcv }
                console.log(res.data.info.basicInformation)
                var today = new Date()
                var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate()
                copyData.priority = res.data.info.priority
                copyData.department = res.data.info.Department
                copyData.DoctorID = res.data.info.SID
                copyData.firstName = res.data.info.basicInformation.name
                copyData['result1'].clientName = res.data.info.basicInformation.name
                copyData['result2'].clientName = res.data.info.basicInformation.name
                copyData.nationalIdNumber = res.data.info.basicInformation.nationalIdNumber
                copyData['result1'].clientNationalID = res.data.info.basicInformation.nationalIdNumber
                copyData['result2'].clientNationalID = res.data.info.basicInformation.nationalIdNumber
                copyData.dateOfBirth = res.data.info.basicInformation.date
                copyData['result1'].sex = res.data.info.basicInformation.gender
                copyData['result2'].sex = res.data.info.basicInformation.gender
                console.log(copyData)
                setHCV(copyData)
            })
            .catch(error => console.log(error))

    }
    const submitter = (e) => {
        // e.preventDefault()
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
            <div style={{ marginLeft: '200px', padding: '20px' }}>
                <HIVViralComp hcv={hcv} mode={params.mode} handleChange={handleChange}
                    handleResult={handleResult} handleResult1={handleResult1}
                    submitter={submitter} initialChange={initialChange}
                    retrieve={retrieve} />
            </div>
        </div>
    );
}
