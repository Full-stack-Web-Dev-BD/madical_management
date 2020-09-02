import React, { useState, useEffect } from 'react';
import HBLViralComp from '../../Doctor/NHLForms/HBLViralComp'
import axios from 'axios'
import ChildForm12 from '../../Doctor/NHLForms/childForm12'
import Lsidebar from '../Lsidebar'
const Culture = (props) => {
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
        console.log(props.match)
        axios.get(`http://localhost:4001/api/labRequest/culture`)
            .then(res => {
                console.log(res.data)
                setCulture(res.data)

            })
            .catch(error => console.log(error))
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
        e.preventDefault()

        axios
            .put(`http://localhost:4001/api/labRequest/culture`, {

                isolate1: culture.isolate1,
                isolate2: culture.isolate2,
                isolate: culture.isolate,
                blnk1: culture.blnk1,
                blnk2: culture.blnk2,
                blnk3: culture.blnk3,
                blnk4: culture.blnk4,
                blnk5: culture.blnk5,
                blnk6: culture.blnk6,
                blnk7: culture.blnk7,
                blnk8: culture.blnk8,
                blnk9: culture.blnk9,
                blnk10: culture.blnk10,
                blnk11: culture.blnk11,
                blnk12: culture.blnk12,
                blnk13: culture.blnk13,
                blnk14: culture.blnk14,
                blnk15: culture.blnk15,
                blnk16: culture.blnk16,
                blnk17: culture.blnk17,
                blnk18: culture.blnk18,
                blnk19: culture.blnk19,
                blnk20: culture.blnk20,
                CI: culture.CI,
                CH1: culture.CH1,
                CO: culture.CO,
                CL: culture.CL,
                EY: culture.EY,
                GE: culture.GE,
                OX: culture.OX,
                NI: culture.NI,
                PN: culture.PN,
                VA: culture.VA,
                blnk21: culture.blnk21,
                blnk22: culture.blnk22,
                blnk23: culture.blnk23,
                blnk24: culture.blnk24,
                CH2: culture.CH2,



            })
            .then((res) => {

                this.props.history.push("/FormView")


            })
            .catch((error) => {
                console.log(error)
            })
    }
    return (
        <div>
            <Lsidebar />
            <div style={{ marginLeft: '220px' }}>
                <div style={{ padding: '20px' }}>
                    <ChildForm12 culture={culture} handleChange={handleChange}
                        initialChange={initialChange} handleSubmit={handleSubmit} edit="partial" />
                </div>
            </div>
        </div>
    );
}

export default Culture;
