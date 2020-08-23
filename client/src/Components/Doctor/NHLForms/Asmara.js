import React from 'react';
import Page1 from './page1'
import DSidebar from '../Dsidebar'
const Asmara = () => {
    return ( 
        <div>
          <DSidebar/>
       
       <div style={{marginLeft:'200px',padding:'20px'}}>
           <Page1/>
        </div>
        </div>
     );
}
 
export default Asmara;