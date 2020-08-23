import React,{useEffect} from 'react';
import User from '../../../Image/user.png'
const Card = ({data}) => {
    console.log(data.info)

    useEffect(() => {
       const x = data.info
       
      
       
    }, [data])
    if(!data.info)
    {
        console.log(data.info)
        return "Null"
    }
    else
            {
                console.log(data.info.basicInformation.date)
                const date = data.info.basicInformation.date.substring(0, 10)
    return ( 
        
        <div class="card" style={{borderRadius:'50px'}}>
               <center> <h4 class="card-title" class="mt-4">
                  {data.info.basicInformation.name}
                </h4>
                <img src={User} style={{height:'180px',width:'180px',padding:'20px'}}  /></center>
                <div class="row">
                    <div class="col-6" style={{padding:'20px',paddingLeft:'50px'}} >
                        <ul style={{listStyleType:'none'}}>
                        <li style={{height:'40px'}}>DOB:</li>
                        <li style={{height:'40px'}}>Blood Group:</li>
                        <li style={{height:'40px'}}>Martial Status:</li>
                        <li style={{height:'40px'}}> Gender:</li>
                        </ul>
                    </div>

                    <div class="col-6" style={{padding:'20px'}}>
                    <ul style={{listStyleType:'none'}}>
                    <li style={{height:'40px'}}>  {date}</li>
                        <li style={{height:'40px'}}>  {data.info.basicInformation.bloodGroup}</li>
                        <li style={{height:'40px'}}>  {data.info.basicInformation.maritalStatus}</li>
                        <li style={{height:'40px'}}>  {data.info.basicInformation.gender}</li>
                        </ul>
                    </div>
                </div>
            </div>
     );}
}
 
export default Card;