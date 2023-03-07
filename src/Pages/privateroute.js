import React from 'react'
import { Navigate, Outlet } from 'react-router'
import { isLoggedIn } from '../auth'

const Privateroute=()=> {
    
    if(isLoggedIn()){
        return <Outlet/>
    } else{
        return <Navigate to={"/Login"}/>;
    }
}

export default Privateroute