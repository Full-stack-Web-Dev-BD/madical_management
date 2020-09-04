import React, { useState, useEffect } from 'react';

import HBLViralComp from '../../Doctor/NHLForms/HBLViralComp'
import axios from 'axios'
import DSidebar from '../Dsidebar'
import Pdf from "react-to-pdf";

const ref = React.createRef();
const HBLViralview = (props) => {
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
    console.log(props.match)
    axios.get(`http://localhost:4001/api/labRequest/hblViral/`)
      .then(res => {
        console.log(res.data)
        setHCV(res.data)

      })
      .catch(error => console.log(error))
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

  }
  return (
    <div>
      <DSidebar />
      <div style={{ marginLeft: '220px' }}>
        <Pdf targetRef={ref} filename="code-example.pdf" options={options} x={.5} y={.5}>
          {({ toPdf }) => <button onClick={toPdf}>Generate Pdf</button>}
        </Pdf>
        <div ref={ref} style={{ padding: '20px' }}>
          <HBLViralComp hcv={hcv} handleChange={handleChange}
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

  unit: "in",
  format: [884, 984]
};
export default HBLViralview;
