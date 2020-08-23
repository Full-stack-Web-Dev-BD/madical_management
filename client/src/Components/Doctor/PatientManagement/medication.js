import React from 'react';
import User from '../../../Image/user.png'
import { BrowserRouter, Link,withRouter } from 'react-router-dom';
const Medication = () => {
    return ( 
        <div class="card p-3" style={{borderRadius:'10px',height:'170px'}}>
               <h4 class="card-title" class="mt-2 ml-3">
                   Medication
                </h4>
                <div class="ml-4">
              <Link> View repeat medication</Link><br></br>
          
                  </div>
                </div>
          
     );
}
 
export default withRouter(Medication);