import React, { useState, useEffect } from 'react';
import Page2 from '../NHLForms/page2'
import axios from 'axios'
import Dsidebar from '../Dsidebar'
import Pdf from "react-to-pdf";
import Lsidebar from '../../LaboratoryTeam/Lsidebar';
import queryString from 'query-string'
import decoder from 'jwt-decode'

const ref = React.createRef();

const Tbreport = (props) => {
    const [params, setParams] = useState({})
    const [decoded, setDecoded] = useState({})
    const [data, setData] = useState({
        PatientUHID: "", priority: "", department: "", DoctorID: "", nationalIdNumber: "", test: "", firstName: "", sex: "",
        eritreanID: "", dateOfBirth: "", address: "", labSerial: "", round: "", facultyName: "",
        doctorName: "", referralDate: null, mgitCulture: "", mgitMicroscopy: "", ljCulture: "", geneXpertRapidTest: ""
        , DST: {
            stremptomycin: "", isoniazed: "", rifampcin: "", rthambutol: "", pyrazinamide: "", amikacin: "", capreomycin: "",
            kanamycin: "", levloxacin: "", ofloxacin: ""
        }, result: "", comments: "", reportedBy: "", recievedBy: ""
    })



    useEffect(() => {
        let params = queryString.parse(window.location.search)
        setDecoded(decoder(window.localStorage.getItem('userStore')))
        setParams(params)
        if (params.for === 'submit' || params.for === "view") {
            axios.get(`/findTest/${params.id}`)
                .then(res => {
                    let getData = res.data.testInfo[0]
                    setData(getData)
                })
                .catch(err => {
                    console.log(err)
                })
        } else {
            axios.get(`/get-single-patient/${params.UHID}`)
                .then(res => {
                    if (res.data) {
                        let updatedData = data
                        updatedData.firstName = res.data[0].basic.name
                        updatedData.nationalIdNumber = res.data[0].basic.nationalIdNumber
                        updatedData.dateOfBirth = res.data[0].basic.date
                        updatedData.villCity = res.data[0].contact.village
                        updatedData.tele = res.data[0].contact.phoneNumber
                        setData(updatedData)
                    }
                })
                .catch(err => {
                    console.log(err)
                })
        }
    }, [])


    const handleChange = (e) => {

        
        const updatedData = { ...data }

        updatedData[e.target.name] = e.target.value
        // console.log(updatedData)
        setData(updatedData)
    }
    // const handleResult = (e) => {
    //     const data = { ...data }

    //     const { name, value } = e.currentTarget
    //     data.result1[name] = value
    //     setData(data)
    // }
    const handleDst = (e) => {
        const updatedData = { ...data }
        updatedData.DST[e.target.name]=e.target.value
        setData(updatedData)
    }

    const submitter = (e) => {
        let decoded = decoder(window.localStorage.getItem('userStore'))
        let params = queryString.parse(window.location.search)

        if (params.for === 'submit') {
            axios.post(`/submitResult`, { id: params.id, testInfo: data })

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
                testInfo: data
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
            <DR />
            <div style={{ marginLeft: '220px' }}>
                <Pdf targetRef={ref} filename="code-example.pdf" options={options}>
                    {({ toPdf }) => <button onClick={toPdf}>Generate Pdf</button>}
                </Pdf>
                <div ref={ref} style={{ padding: '20px' }}>
                    <Page2 data={data} mode={params.for} handleChange={handleChange}
                        handleDst={handleDst}
                        stat="done"
                        submitter={submitter} />
                </div>
            </div>
        </div>
    );
}
const options = {

    unit: "in",
    format: [884, 1184]
};
export default Tbreport;