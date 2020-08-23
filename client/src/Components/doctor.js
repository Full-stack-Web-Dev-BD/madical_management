import React,{useEffect} from 'react';
import Sidebar from './sidebar'
const Doctor  = (props) => {
    useEffect(() => {
        const data = localStorage.getItem('userStore')
        if(data == null)
        {
            props.history.push('/');
        }
        else{

        }
    }, [])
    return ( 
        <div>
  <div class="row">
                <div class="col-3">
                    <Sidebar/>
                </div>
                <div class="col-8">
                    Doctor
                    
                </div>
            </div>
        </div>
     );
}
 
export default Doctor ;