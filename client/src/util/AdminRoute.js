import React, { useEffect, useState } from 'react'
import { Route, Redirect } from 'react-router-dom'

import Axios from 'axios'
import  decoder from 'jwt-decode'


import {useRecoilState,useRecoilValue} from 'recoil'
import {userInfoState,isAuthenticated} from './recoilState'


const AdminRoute = ({ component: Component, ...rest }) => {
    const [getUserInfo, setUserInfo] =useRecoilState(userInfoState)
    const [getIsAuthenticated, setIsAuthenticated] = useRecoilState(isAuthenticated)
    useEffect(()=>{
        let token =window.localStorage.getItem('userStore')
        let decoded=decoder(token)
        
        Axios.post('/get-permissoin',{email:decoded.email},{headers:{'authorization':token}})
        .then(res=>{
            setUserInfo(res.data.user)
            setIsAuthenticated(true)
        })
        .catch(err=>{
            window.localStorage.removeItem('userStore')
        })
    },[])
    return (
        <Route
            {...rest}
            render={
                props => {
                    if (window.localStorage.getItem('userStore')) {
                        return <Component {...[props]} />
                    } else {
                        return (
                            <Redirect
                                to={
                                    {
                                        pathname: "/",
                                        state: {
                                            from: props.location
                                        }
                                    }
                                }
                            />
                        )
                    }
                }
            }

        />
    )
}

export default AdminRoute