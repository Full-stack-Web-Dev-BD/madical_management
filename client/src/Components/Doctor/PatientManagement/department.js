import React from 'react';
import User from '../../../Image/user.png'
import { BrowserRouter, Link,withRouter } from 'react-router-dom';
const Department = () => {
    return ( 
        <div class="card p-2" style={{borderRadius:'10px'}}>
               <h4 class="card-title" class="mt-2 ml-3">
                   Department
                </h4>
                <div class="ml-4">
              <Link> Link</Link><br></br>
          
                  </div>
                </div>
          
     );
}
 
export default withRouter(Department);