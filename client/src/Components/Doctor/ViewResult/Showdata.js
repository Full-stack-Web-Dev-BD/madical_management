import React, { useEffect, useState } from 'react';

const Showdata = ({info,infoResult}) => {
   console.log(infoResult.bltResult)
 
    return ( 
        <div>
      <div >   <h5 style={{display:'inline'}}>Result WBC:</h5>   <h5 style={{display:'inline',marginLeft:'30px'}}>{info.firstName}</h5></div>
    <h4>Results are:</h4>
      <div >   <h5 style={{display:'inline'}}>WBC * 103µl:</h5>   <h5 style={{display:'inline',marginLeft:'30px'}}></h5></div>
  
      <div >   <h5 style={{display:'inline'}}>Patient Name:</h5>   <h5 style={{display:'inline',marginLeft:'30px'}}>{info.firstName}</h5></div>
  
      <div >   <h5 style={{display:'inline'}}>Patient Name:</h5>   <h5 style={{display:'inline',marginLeft:'30px'}}>{info.firstName}</h5></div>
  
      <div >   <h5 style={{display:'inline'}}>Patient Name:</h5>   <h5 style={{display:'inline',marginLeft:'30px'}}>{info.firstName}</h5></div>
  
      <div >   <h5 style={{display:'inline'}}>Patient Name:</h5>   <h5 style={{display:'inline',marginLeft:'30px'}}>{info.firstName}</h5></div>
      </div>
     );
    
}
 
export default Showdata;