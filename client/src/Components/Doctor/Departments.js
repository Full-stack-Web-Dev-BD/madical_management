import React from 'react';
import DSidebar from './Dsidebar'
import { BrowserRouter, Link,withRouter } from 'react-router-dom';
const DDepartments = () => {
    return ( 
        <div>
        <DSidebar/>
     
     <div style={{marginLeft:'220px'}}>
    <p> <Link to="/Hform"> Hematology Form</Link></p>
    <p> <Link to="/Pform"> Parasitology Form</Link></p>
        </div>
        </div>
     );
}
 
export default withRouter(DDepartments);