import React, { useEffect } from 'react'
import { Route, Redirect } from 'react-router-dom'

const PublicRoute = ({component:Component,...rest}) => {
    const [userInfo, setUserInfo] = useState({})
    useEffect(()=>{
        let token=window.localStorage.getItem('userStore')
        let decoded = token?jwtDecoder(token):{}
        setUserInfo(decoded)
    },[])
    return (
        <Route
            {...rest}
            render={
                props=>{
                    if(window.localStorage.getItem('userStore')){
                        if(userInfo.type=='admin'){
                            
                           return (<Redirect 
                            to={
                                {
                                    pathname:"/AdminDashboard",
                                    state:{
                                        from:props.location
                                    }
                                }
                            }
                        />)
                        }
                    }else{
                        return <Component {...[props]} />
                    }
                }
            }
        
        />
    )
}

export default PublicRoute