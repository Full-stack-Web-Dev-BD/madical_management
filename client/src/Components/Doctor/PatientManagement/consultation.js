import React from 'react';
import User from '../../../Image/user.png'
import { BrowserRouter, Link,withRouter } from 'react-router-dom';
const Consultation = () => {
    return ( 
        <div class="card p-2" style={{borderRadius:'10px'}}>
               <h4 class="card-title" class="mt-2 ml-3">
                   Consultation
                </h4>
                <div class="ml-4">
              <Link to="/consultation"> Add new Consultation</Link><br></br>
              <Link> View Past Consultation</Link>
                  </div>
                </div>
          
     );
}
 
export default withRouter(Consultation);