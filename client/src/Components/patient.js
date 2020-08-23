import React,{useEffect} from 'react';
import Sidebar from './sidebar'
const Patient = (props) => {
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
                    hello
                </div>
            </div>
        </div>
    );
}
 
export default Patient;