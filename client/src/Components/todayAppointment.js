import React from 'react';


const TodayAppointment = () => {
    const Appointment =[
        {
            id:1,
            name:"Abdul Moiz",
            price:2444,
            Doctor:"Dentist"
        },
        {
            id:2,
            name:"Maheen",
            price:24114,
            Doctor:"Heart"
        },
        {
            id:3,
            name:"Zain",
            price:2444,
            Doctor:"Physician"
        },
        {
            id:4,
            name:"Haris",
            price:3214,
            Doctor:"Dentist"
        }
    ]
    return ( 
        <div>
           {    Appointment.map(appoint=>
                    <div>
                        
                    </div>
              )
            }
            </div>
     );
}
 
export default TodayAppointment;