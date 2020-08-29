import React, { useEffect, useState } from 'react';
import Sidebar from './sidebar'
import { Formik, Field, Form, ErrorMessage, FieldArray } from "formik";
import axios from 'axios'
import { Link } from 'react-router-dom';
import { array } from 'joi';
const PaymentForm = (props) => {

  const [paymentData, setPaymentData] = useState({})
  const [cDate, setCDate] = useState(new Date().toLocaleString())
  const [patient, setPatient] = useState({})
  const [UHID, setUHID] = useState('')
  const [invoiceID, setInvoiceID] = useState('')
  const [total, setTotal] = useState('')
  const [paid, setPaid] = useState('')
  const [v, setV] = useState()
  const [dueDate, setDueDate] = useState('')



  useEffect(() => {

    function getRandom(length) {
      return Math.floor(Math.pow(10, length - 1) + Math.random() * 9 * Math.pow(10, length - 1));
    }
    setInvoiceID(getRandom(10) + 'P')
  }, [])
  useEffect(() => {
    if (v) {
      console.log(v)
      let total = 0
      v.service.forEach(single => {
        total = (total + single.quantity * single.rate)
      })
      setTotal(total)
    }
  }, [v])

  const findPatient = () => {
    axios.get(`/get-single-patient/${UHID}`)
      .then(res => {
        if (res.data.length > 0) {
          let update = { ...res.data[0] }
          update.UHID = UHID
          setPatient(update)
        } else {
          alert('Patient not Found ')
          setPatient({})
          setUHID('')
        }
      })
      .catch(err => {
        console.log(err)
      })
  }
  return (
    <div style={{ backgroundColor: 'white', height: '600px' }}>
      <Sidebar />
      <Formik
        enableReinitialize
        initialValues={{ Info: paymentData, pType: "", service: [{ item: "", quantity: "", rate: "", amount: "" }] }}
        onSubmit={values => {
          axios
            .post("/create-invoice", {
              info: values.Info,
              pType: values.pType,
              service: values.service,
              UHID: patient.UHID,
              invoiceID: invoiceID,
              total: total,
              paid: paid,
              dueDate: dueDate
            })
            .then((res) => {
              console.log("Success")
              alert('Invoice Created')
              props.history.push('/')
            })
            .catch((error) => {
              alert('server error')
              console.log("error")
            })
        }}>
        {({ values, handleChange, handleSubmit }) => (
          <Form onSubmit={handleSubmit} style={{ textTransform: 'capitalize' }}>
            <div style={{ paddingLeft: '220px', paddingTop: '30px' }}>
              <div className="pt-5 row">
                <div className="col-4">
                  <input value={UHID} onChange={e => setUHID(e.target.value)} placeholder="Search a patient by UHID " className="form-control" />
                </div>
                <div className="col-1">
                  {
                    UHID ?
                      <button type="button" onClick={() => { findPatient() }} className="btn btn-success">Search</button> :
                      <button type="button" className="btn btn-success">Search</button>
                  }
                </div>
                <div className="col-5">
                  {patient.basic ?
                    <h5 className="text-center text-success">Patient Founded  Name : <span style={{ textTransform: 'capitalize' }}> {patient.basic.name} </span></h5>
                    : <h4 className="text-danger ">Find a Patient  to make  Invoice</h4>
                  }
                </div>
              </div>
              <div class="form-row" style={{ padding: '20px' }}>
                <div class="col-md-6" style={{ padding: '20px' }}>
                  <p style={{ width: '280px' }}><span style={{ fontWeight: 'bold' }}>Name:</span> <span style={{ paddingLeft: '80px' }}>{patient.basic ? patient.basic.name : 'N/A'}</span></p>
                  <p style={{ width: '230px' }}><span style={{ fontWeight: 'bold' }}>UHID:</span> <span style={{ paddingLeft: '90px' }}>{patient.UHID?patient.UHID:'N/A'}</span></p>
                  <p style={{ width: '250px' }}><span style={{ fontWeight: 'bold' }}>Gender:</span>: <span style={{ paddingLeft: '80px' }}>{patient.basic ? patient.basic.gender : 'N/A'}</span></p>
                </div>
                <div class=" col-md-6" style={{ padding: '20px' }}>
                  <p style={{ width: '280px' }}><span style={{ fontWeight: 'bold' }}>Invoice Id:</span> <span style={{ paddingLeft: '80px' }}> {invoiceID}</span></p>
                  <p style={{ width: '400px' }}><span style={{ fontWeight: 'bold' }}>Date & Time:</span> <span style={{ paddingLeft: '80px' }}>{cDate} </span></p>
                  <p style={{ width: '280px' }}><span style={{ fontWeight: 'bold' }}>Balance Due:</span><span style={{ paddingLeft: '80px' }}>{(total - paid) ? (total - paid) : 'N/A'}</span></p>
                </div>
              </div>


              <table style={{ paddingTop: '50px', borderCollapse: 'collapse', width: '92%' }}>
                <tr style={{ borderWidth: '1px', backgroundColor: "#dddddd", border: '1px solid black' }}>
                  <th style={{ padding: '10px', border: '1px solid black' }}>Item/Service</th>
                  <th style={{ border: '1px solid black' }}>Quantity</th>
                  <th style={{ border: '1px solid black' }}>Rate</th>
                  <th style={{ border: '1px solid black' }}>Amount</th>
                </tr>

              </table>


              <FieldArray name="service">
                {({ insert, remove, push }) => (
                  <div className="mb-4">
                    {values.service.length > 0 &&
                      values.service.map((ser, index) => (
                        <div className="row " key={index}>
                          <div className="col-5" >
                            <input
                              required
                              onFocus={setV(values)}
                              className="form-control"
                              name={`service.${index}.item`}
                              placeholder="Jane Doe"
                              onChange={handleChange}
                              type="text"
                              style={{ width: '95%' }}
                            />
                          </div>
                          <div className="col-2">
                            <input
                              required
                              onFocus={setV(values)}
                              className="form-control"
                              name={`service.${index}.quantity`}
                              placeholder="Enter Qualtity"
                              onChange={handleChange}
                              style={{ width: '151%', position: 'relative', right: '53px' }}
                              type="text"
                            />
                          </div>
                          <div className="col-2">
                            <input
                              required
                              onFocus={setV(values)}
                              className="form-control"
                              name={`service.${index}.rate`}
                              onChange={handleChange}
                              placeholder="Service Rate "
                              style={{ width: '81%' }}
                              type="text"
                            />
                          </div>
                          <div className="col-2">
                            <input
                              required
                              onFocus={setV(values)}
                              className="form-control"
                              name={`service.${index}.amount`}
                              placeholder="Autometed counted"
                              onChange={handleChange}
                              disabled
                              value={values.service[index].quantity * values.service[index].rate}
                              type="text"
                              style={{ width: '141%', position: 'relative', left: '-61px' }}
                            />
                          </div>
                        </div>
                      ))}
                    <button type="button" className="btn btn-primary mt-3" onClick={() => push({ item: "", quantity: "", rate: "", amount: "" })}>Add a Row</button>
                    <div style={{ float: 'right',width:'600px' }}>
                      {/* <button className="btn btn-info" type="button" onClick={() => { setV(values) }}> Make Total</button> */}
                      <div style={{ marginRight: '180px', paddingTop: "20px" }}>   <span style={{ fontWeight: 'bold', width: '180px' }}>Total: {total} </span> <span>  </span></div>
                      <div >
                        <span style={{ fontWeight: 'bold', width: '180px', float: 'left' }}>Amount Paid :</span>
                        <input  required className='form-control' placeholder='Enter Paid Amount' type="number" onChange={e => { setPaid(e.target.value) }}style={{ float: 'left', width: '180px' }}  />
                      </div> 
                      <div className="clearfix"></div>
                      <div >
                        <span style={{ fontWeight: 'bold', width: '180px', float: 'left' }}>Due Date :</span>
                        <input  required className='form-control' placeholder='Enter Pay Date' type="date" onChange={e => { setDueDate(e.target.value) }}style={{ float: 'left', width: '180px' }}  />
                      </div>
                      <div className="clearfix"></div>
                      <div >
                        <span style={{ fontWeight: 'bold', width: '180px', float: 'left' }}>Payment Type:</span>
                        <select id="inputState" class="form-control" name="pType" onChange={handleChange} style={{ float: 'left', width: '180px' }} required >
                          <option disabled selected>Payment Type:</option>
                          <option>Private</option>
                          <option >Public</option>
                          <option >Sick</option>
                        </select>
                      </div>
                      <div className="clearfix"></div>
                      <div style={{ marginRight: '60px', paddingTop: "20px" }}>
                        {
                          patient.basic ?
                            <button class="btn btn-primary" type="submit" style={{ fontSize: '15px' }}>Make Payment</button>
                            : <p className="text-danger ">Find a Patient and fill up all required filed to  make a Invoice</p>
                        }
                        <Link className="ml-3" to='/ReceptionistDashboard'>
                          <button style={{ fontSize: '15px', border: '1px solid black' }} class="btn">Cancel Payment</button>
                        </Link>
                      </div>
                    </div>
                  </div>

                )}
              </FieldArray>
            </div>
          </Form>
        )}

      </Formik>
    </div>
  );


}
export default PaymentForm;


