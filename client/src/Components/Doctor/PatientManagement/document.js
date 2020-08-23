import React from 'react';
import User from '../../../Image/user.png'
import { BrowserRouter, Link,withRouter } from 'react-router-dom';
const Document = () => {
    return ( 
        <div class="card p-2" style={{borderRadius:'10px'}}>
               <h5 class="card-title" class="mt-2 ml-3">
                   Documents
                </h5>
                <div class="ml-4">
              <Link> Uploads</Link><br></br>
              <Link> View Files</Link><br></br>
          
                  </div>
                </div>
          
     );
}
 
export default withRouter(Document);