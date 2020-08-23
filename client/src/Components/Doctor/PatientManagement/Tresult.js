import React from 'react';
import User from '../../../Image/user.png'
import { BrowserRouter, Link,withRouter } from 'react-router-dom';
const TResult = () => {
    return ( 
        <div class="card p-2" style={{borderRadius:'10px'}}>
               <h5 class="card-title" class="mt-2 ml-3">
                   Test Results
                </h5>
                <div class="ml-4">
              <Link to="/ResultView"> View Lab Requests</Link><br></br>
              <Link> View Diagnostic & Imaging Tests
              Request</Link><br></br>
       
                  </div>
                </div>
          
     );
}
 
export default withRouter(TResult);