import React from 'react';
import User from '../../../Image/user.png'
import { BrowserRouter, Link,withRouter } from 'react-router-dom';
const TRequest = () => {
    return ( 
        <div class="card p-2" style={{borderRadius:'10px'}}>
               <h5 class="card-title" class="mt-2 ml-3">
                   Test Requests
                </h5>
                <div class="ml-4">
              <Link to="/RequestTest"> Lab Tests</Link><br></br>
              <Link> Diagnostic & Imaging Test</Link><br></br>

                  </div>
                </div>
          
     );
}
 
export default withRouter(TRequest);