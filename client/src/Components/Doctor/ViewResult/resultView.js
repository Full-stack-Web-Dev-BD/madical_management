import React from 'react';
import DSidebar from '../Dsidebar'
import ResultTable from './ResultTable'
const ResultView = () => {
    return ( 
        <div>
        <DSidebar/>
     
     <div style={{marginLeft:'220px'}}>
       <div style={{padding:'20px'}}>
           <ResultTable/>
        </div>
        </div>
        </div>
     );
}
 
export default ResultView;