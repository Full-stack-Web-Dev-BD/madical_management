import React,{useEffect} from 'react';
import Sidebar from './sidebar'
import BookAppoint from '../Image/BookAppoint.jpg'
import DeleteAppoint from '../Image/DeleteAppoint.jpg'
export default function Home(props)
{
    useEffect(() => {
        const data = localStorage.getItem('userStore')
        if(data == null)
        {
            props.history.push('/');
        }
        else{

        }
    }, [])
    function logout(e)
    {
        e.preventDefault();


      localStorage.removeItem('userStore');
      props.history.push('/');
    }
    return(
        <div>
          
           
            <Sidebar/>
           
            <div style={{marginLeft:'280px'}}>
           
            <h4  style={{padding:'40px',marginRight:'80px'}} >Manage  Appointments</h4>
       
                <div class="row container-fluid">
               
            <div class="card col-lg-5 col-md-8 col-sm-8" style={{marginTop:'40px',padding:'0'}}>
                    <img src={BookAppoint} style={{height:"240px"}} class="card-img-top" />
                    <div class="card-body">
                      <h5 class="card-title">Book Appointment</h5>
                   
                    <a href="/bookAppointment" class="btn btn-primary">Click here</a>
                    </div>
                  </div>
                  <div class="col-lg-1"></div>
                  <div class="card col-lg-5 col-md-8 col-sm-8" style={{marginTop:'40px',padding:'0'}}>
                    <img src={DeleteAppoint}style={{height:"240px"}} class="card-img-top" />
                    <div class="card-body">
                      <h5 class="card-title">Delete Appointment</h5>
                   
                    <a href="#" class="btn btn-primary">Click here</a>
                 
                  </div>

 </div></div>
</div>
            </div>
      
     
    )
}