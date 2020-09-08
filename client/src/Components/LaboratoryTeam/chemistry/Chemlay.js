import React, { useState, useEffect } from 'react';
import Lsidebar from '../Lsidebar'
import axios from 'axios'
import DatePicker from 'react-date-picker';
import { makeStyles } from '@material-ui/core/styles';
import ChemComp from '../../Doctor/NHLForms/ChemComp'
import ChemTable from '../../Doctor/NHLForms/ChemTable'
import Swal from 'sweetalert2'
import queryString from 'query-string'
import decoder from 'jwt-decode'
import { Link } from 'react-router-dom';
import Dsidebar from '../../Doctor/Dsidebar';

const useStyles = makeStyles((theme) => ({


    brdr: {
        border: '1px solid black',
        borderCollapse: 'collapse'

    }
}));
const ChemLay = (props) => {
    const [params, setParams] = useState({})
    const [decoded, setDecoded] = useState({})
    const classes = useStyles();

    const [chemistry, setChemistry] = useState({
        PatientUHID: "", firstName: "", nationalIdNumber: "", dateOfBirth: null, sex: "", patientZopaSub: "", hospital: "", ward: "",
        priority: "", department: "", DoctorID: "", bedNo: "", paymentPC: false, paymentPR: false, referralDate: null, dateCollected: "", collectorInitial: "", PatientSurvey: false,
        PatientFree: false,
        physicianName: "", signature: "", opdReceiptNo: "",
        chemistryData: {
            Albumin: false, AlkalinePhosphatase: false,
            AltSGPT: false, Amylase: false, AstSGOT: false, BilirubinTotal: false, BilirubinDirect: false, Bun: false, Calcium: false, CarbonDioxide: false,
            Chloride: false, CreativeKinase: false, CKMB: false, Creatinine: false, Electrolytes: false, Ferritin: false, GlucoseFasting: false, GlucoseRandm: false,
            GlutamylTransferase: false, HepaticFunction: false, LDH: false, LipidPandel: false, Lipase: false, IronTotal: false, Oxygen: false, Phosphorus: false,
            Potassium: false, ProteinTotal: false, T3UPTAKE: false, T4TOTAL: false, Sodium: false, Triglycerides: false, TSH: false, UricAcid: false
        },
        HaemotologyData: {
            BloodFilmDifferential: false, BloodFilmMorphology: false, CBC: false, FactorAnalysis: false, Prothrombin: false, PTAPTT: false,
            Reticulocyte: false
        },
        ImmunoHaematol: {
            ABO: false, AutoImmuneCold: false, AutoImmuneWarm: false, BloodGroupABO: false, BloodGroupAntiBody: false, Coombs: false, PreNatal: false,
            RhHDN: false
        },
        MicroBiology: {
            CultureSenstivity: false, CultureFungus: false
        },
        Immunoserology: {
            AslO: false, Brucella: false, CRP: false, DAT: false, Pylori: false, HbsAG: false, HepatitisAnti: false, HIV: false, Infectious: false, Rubella: false,
            VDRL: false, WEILOX19: false, WEILOX2: false, WEILOXK: false, WIDAL: false, Rheumatoid: false
        },
        TherapeuticDrugs: {
            Carbamazepine: false, Phenobarbital: false, ValproicAcid: false
        }, test: "Chemistry"
    })



    useEffect(() => {
        let params = queryString.parse(window.location.search)
        setDecoded(decoder(window.localStorage.getItem('userStore')))
        setParams(params)
        if (params.for === 'submit' || params.for === "view") {
            axios.get(`/findTest/${params.id}`)
                .then(res => {
                    let getData = res.data.testInfo[0]
                    setChemistry(getData)
                })
        } else {
            axios.get(`/get-single-patient/${params.UHID}`)
                .then(res => {
                    if (res.data) {
                        let updatedData = chemistry
                        updatedData.firstName = res.data[0].basic.name
                        updatedData.nationalIdNumber = res.data[0].basic.nationalIdNumber
                        updatedData.dateOfBirth = res.data[0].basic.date
                        updatedData.villCity = res.data[0].contact.village
                        updatedData.tele = res.data[0].contact.phoneNumber

                        setChemistry(updatedData)
                    }
                })
                .catch(err => {
                    console.log(err)
                })
        }
    }, [])



    const setDate = (date) => {
        const data = { ...chemistry }


    }
    const setDates = (date) => {
        const data = { ...chemistry }

        data["dateCollected"] = date

        setChemistry(data)

    }
    const initialChange = (e) => {
        const data = { ...chemistry }
        data[e.target.name] = e.target.value
        setChemistry(data)

    }
    const initialChanged = (e) => {
        const data = { ...chemistry }
        data[e.target.name] = true
        setChemistry(data)
    }
    const handleInitialChange = (e) => {
        const data = { ...chemistry }
        data.chemistryData[e.currentTarget.name] = e.currentTarget.checked
        setChemistry(data)
    }
    const handleHaemotologyChange = (e) => {
        const data = { ...chemistry }
        data.HaemotologyData[e.currentTarget.name] = e.currentTarget.checked
        setChemistry(data)
    }
    const handleImmunoHaematol = (e) => {
        const data = { ...chemistry }
        data.ImmunoHaematol[e.currentTarget.name] = e.currentTarget.checked
        setChemistry(data)
    }
    const handleMicroBiology = (e) => {
        const data = { ...chemistry }
        data.MicroBiology[e.currentTarget.name] = e.currentTarget.checked
        setChemistry(data)
    }
    const handleImmunoserology = (e) => {
        const data = { ...chemistry }
        data.Immunoserology[e.currentTarget.name] = e.currentTarget.checked
        setChemistry(data)
    }
    const handleTherapeuticDrugs = (e) => {
        const data = { ...chemistry }
        data.TherapeuticDrugs[e.currentTarget.name] = e.currentTarget.checked
        setChemistry(data)
    }
    const retrieve = () => {

    }


    const handleSubmit = (e) => {
        let decoded = decoder(window.localStorage.getItem('userStore'))
        let params = queryString.parse(window.location.search)



        if (params.for === 'submit') {
            axios.post(`/submitResult`, { id: params.id, testInfo: chemistry })

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
                testInfo: chemistry
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


    const BT = () => {
        if (params.for === "view") {
            return (
                <button class="btn btn-primary" onClick={() => { window.history.back() }}>Go Back</button>
            )
        } else {
            return (
                <div>
                    <button class="btn btn-primary" style={{ float: 'right', margin: '10px' }} onClick={() => { window.history.back() }}> Cancel</button>
                    <button class="btn btn-primary" onClick={()=>{handleSubmit()}}  style={{ float: 'right', margin: '10px' }}> Submit</button>
                </div>
            )
        }
    }




    return (
        <div>
            <DR />
            <div style={{ marginLeft: '220px' }}>
                <div style={{ padding: '20px' }}>
                    <div className={classes.root} onSubmit={handleSubmit} noValidate autoComplete="off" style={{ backgroundColor: 'white' }}>
                        <ChemComp setDate={setDate} retrieve={retrieve}
                            chemistry={chemistry}
                            initialChange={initialChange} initialChanged={initialChanged}
                            setDates={setDates} />
                        <ChemTable
                            chemistry={chemistry}
                            handleMicroBiology={handleMicroBiology}
                            handleInitialChange={handleInitialChange}
                            handleHaemotologyChange={handleHaemotologyChange}
                            handleTherapeuticDrugs={handleTherapeuticDrugs}
                            handleImmunoHaematol={handleImmunoHaematol}
                            handleImmunoserology={handleImmunoserology}
                            handleHaemotologyChange={handleHaemotologyChange}
                        />
                        <BT/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ChemLay;