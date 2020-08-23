import React from 'react';
import User from '../../../Image/user.png'
import { BrowserRouter, Link,withRouter } from 'react-router-dom';
const Vital = () => {
    return ( 
        <div class="card p-3" style={{borderRadius:'10px',height:'200px'}}>
               <h5 class="card-title" class="mt-2 ml-3">
                   Vitals/Immunisation/Allergies
                </h5>
                <div class="ml-4">
              <Link> Add Vitals</Link><br></br>
              <Link> Add ALlergies</Link><br></br>
              <Link> Add immunisation</Link><br></br>
              <Link> VIew Vitals/Immunisatio/Allergies</Link><br></br>
                  </div>
                </div>
          
     );
}
 
export default withRouter(Vital);