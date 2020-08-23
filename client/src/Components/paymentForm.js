import React,{useEffect,useState} from 'react';
import Sidebar from './sidebar'
import {store,persistor} from '../store/index'
import {connect,useSelector} from 'react-redux'
import { Formik, Field, Form, ErrorMessage, FieldArray } from "formik";
import axios from 'axios'
const PaymentForm = (props) => {
    
    const [paymentData,setPaymentData] = useState({})
    useEffect(() => {

        console.log(props)
        const initial = store.getState().BookingReducer.data
        const initialName = store.getState().BookingReducer.data.basicInformation.name
        const initialGender = store.getState().BookingReducer.data.basicInformation.gender
        setPaymentData({...initial,PName:initialName,PGender:initialGender})
        console.log(store.getState())
}, [])
useEffect(()=>{
      console.log(paymentData
        )
},[paymentData])
    const [cDate,setCDate] = useState(new Date().toLocaleString())
    if(!paymentData)
    {
        return "Loading"
    }

    function updateInfo(e)
    {

    }
    return ( 
        <div style={{backgroundColor:'white',height:'600px'}}>
        <Sidebar/>
        <Formik
           enableReinitialize
    initialValues={{Info:paymentData,pType:"",service:[{item:"",quantity:"",rate:"",amount:""}]}}
    onSubmit={ values => {
      axios
      .post("http://localhost:4001/api/BookAppoint",{
          info:values.Info,
          pType:values.pType,
          service:values.service
      })
      .then((res)=>{
        console.log("Success")
        props.history.push('/Appointment')
      })
      .catch((error)=>{
        console.log("error")
      })
      }}>
          {({values,handleChange,handleSubmit})=>(
        <Form onSubmit={handleSubmit}>
        <div style={{paddingLeft:'220px',paddingTop:'30px'}}>
            <div class="form-row" style={{padding:'20px'}}>
        <div class="col-md-6" style={{padding:'20px'}}>
            <p style={{width:'280px'}}><span style={{fontWeight:'bold'}}>Name:</span> <span style={{paddingLeft:'80px'}}>{paymentData.PName}</span></p>
            <p style={{width:'230px'}}><span style={{fontWeight:'bold'}}>UHID:</span> <span style={{paddingLeft:'90px'}}>{paymentData.UHID}</span></p>
            <p style={{width:'250px'}}><span style={{fontWeight:'bold'}}>Gender:</span>: <span style={{paddingLeft:'80px'}}>{paymentData.PGender}</span></p>
            <div >      <span style={{fontWeight:'bold',width:'180px',float:'left'}}>Payment Type:</span>
              <select id="inputState" class="form-control" name="pType"  onChange={handleChange} style={{float:'left',width:'180px'}} required >
  <option disabled selected>Payment Type:</option>
  <option>Private</option>
  <option >Public</option>
  <option >Sick</option>
  </select>
  </div>
         </div>
  <div class=" col-md-6" style={{padding:'20px'}}>
            <p style={{width:'280px'}}><span style={{fontWeight:'bold'}}>Invoice Id:</span> <span style={{paddingLeft:'80px'}}> 23123</span></p>
            <p style={{width:'400px'}}><span style={{fontWeight:'bold'}}>Date & Time:</span> <span style={{paddingLeft:'80px'}}>{cDate} </span></p>
            <p style={{width:'280px'}}><span style={{fontWeight:'bold'}}>Balance Due:</span><span style={{paddingLeft:'80px'}}>  N/A</span></p>
            <p style={{width:'160px'}}><span style={{fontWeight:'bold'}}>Due Date:</span> </p>
  </div>
  </div>


  <table style={{paddingTop:'50px',borderCollapse:'collapse',width:'92%'}}>
  <tr style={{borderWidth:'1px',backgroundColor:"#dddddd",border:'1px solid black'}}>
    <th style={{padding:'10px',border:'1px solid black'}}>Item/Service</th>
    <th style={{border:'1px solid black'}}>Quantity</th>
    <th style={{border:'1px solid black'}}>Rate</th>
    <th style={{border:'1px solid black'}}>Amount</th>
  </tr>
  
  </table>
  
 
             <FieldArray name="service">
            {({ insert, remove, push }) => (
              <div>
                {values.service.length > 0 &&
                  values.service.map((ser, index) => (
                    <div className="row" key={index}>
                      <div className="col-5" >
                          <Field
                          name={`service.${index}.item`}
                          placeholder="Jane Doe"
                          onChange={handleChange}
                          type="text"
                          style={{width:'90%'}}
                        />
                      
                      </div>
                      <div className="col-2">
                        <Field
                          name={`service.${index}.quantity`}
                          placeholder=""
                          onChange={handleChange}
                          style={{width:'90%'}}
                          type="text"
                        />
                     </div>
                     <div className="col-2">
                        <Field
                          name={`service.${index}.rate`}
                          onChange={handleChange}
                          placeholder="Rate"
                          style={{width:'70%'}}
                          type="text"
                        />
                     </div>
                     <div className="col">
                        <Field
                          name={`service.${index}.amount`}
                          placeholder="Amount"
                          onChange={handleChange}
                          type="text"
                          style={{width:'50%'}}
                        />
                     </div>
                    
                    </div>
                  ))}
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => push({item:"",quantity:"",rate:"",amount:""})}
                >
                  Add 
                </button>
              </div>
            )}
          </FieldArray>
         
         

<div style={{float:'right'}}>
     <div style={{marginRight:'180px',paddingTop:"20px"}}>   <span>Total: </span> <span> 0</span></div>
     <div style={{marginRight:'120px',paddingTop:"20px"}}>   <span>Amount Paid: </span> <span><input style={{width:'70px'}} type="text"/> </span></div>
     <div style={{marginRight:'180px',paddingTop:"20px"}}>   <span>Balance Due: </span> <span>- </span></div>
     <div style={{marginRight:'60px',paddingTop:"20px"}}>  <button class="btn btn-primary" type="submit" style={{fontSize:'15px'}}>Make Payment</button> <button style={{fontSize:'15px',border:'1px solid black'}} class="btn">Cancel Payment</button></div>

</div>
        </div>
        </Form>
          )}
         
    </Formik>
        </div>
     );


}
export default PaymentForm;