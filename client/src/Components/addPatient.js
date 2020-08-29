import React, { useState, useEffect } from 'react';
import Sidebar from './sidebar'
import PatientBasicInfo from './patientBasicInfo'

import PatientContactInfo from './patientContactInfo'
import PatientEmergencyInfo from './patientEmergencyInfo'
import axios from 'axios'
import { Link } from 'react-router-dom';
const AddPatient = (props) => {
    const [patientData, setPatientData] = useState({ basic: {}, contact: {}, emergency: {} })
    const [isPatientAdded, setIsPatientAdded] = useState(false)
    function updateData(e) {
        e.preventDefault()


        const updatePatientData = { ...patientData }
        updatePatientData.basic[e.currentTarget.name] = e.currentTarget.value;
        setPatientData(updatePatientData)
    }
    function updateDatas(e) {
        e.preventDefault()


        const updatePatientData = { ...patientData }
        updatePatientData.contact[e.currentTarget.name] = e.currentTarget.value;
        setPatientData(updatePatientData)
    }
    function updateDatass(e) {
        e.preventDefault()


        const updatePatientData = { ...patientData }
        updatePatientData.emergency[e.currentTarget.name] = e.currentTarget.value;
        setPatientData(updatePatientData)
    }
    const registerPatient = (e) => {
        e.preventDefault()
        axios
            .post("/add-patient", {
                basic: patientData.basic,
                contact: patientData.contact,
                emergency: patientData.emergency
            })
            .then(res => {
                setIsPatientAdded(true)
                setTimeout(() => {
                    setIsPatientAdded(false)
                    window.location.href='/viewPatients'
                }, 2000);
            })
            .catch(error => {
                console.log(error)
            })
    }

    return (
        <div>
            <Sidebar />
            <div style={{ marginLeft: '220px' }}>
                {
                    isPatientAdded?
                <h1 className="text-success text-center pt-5 p-5">Patient Added</h1>:
                <form style={{ padding: "30px" }} onSubmit={registerPatient}>
                    <div style={{ backgroundColor: "white", padding: "30px" }}>
                        <h3 style={{ paddingTop: '20px' }}>Basic Information</h3>
                        <PatientBasicInfo updateInfo={updateData} />
                    </div>
                    <div style={{ backgroundColor: "white", padding: "30px", marginTop: '30px' }}>
                        <h3 style={{ paddingTop: '20px' }}>Contact Information</h3>
                        <PatientContactInfo updateInfo={updateDatas} />
                    </div>
                    <div style={{ backgroundColor: "white", padding: "30px", marginTop: '30px' }}>
                        <h3 style={{ paddingTop: '20px' }}>Emergency Contact Details</h3>
                        <PatientEmergencyInfo updateInfo={updateDatass} />
                    </div>
                    <button type="submit" class="btn btn-primary m-2 mt-4">Register </button>
                    <Link to='/ReceptionistDashboard'><button type="button" class="btn btn-primary m-2 mt-4">Cancel</button></Link>
                </form>
                }
            </div>
        </div>

    );
}

export default AddPatient;