import React from 'react'
import { Navigate, Outlet } from 'react-router'
import { isLoggedIn } from '../auth'
import { isadminLoggedIn } from '../auth/adminIndex'

const Privateroute=()=> {
    
    if(isadminLoggedIn()){
        return <Outlet/>
    } else if(isLoggedIn()){
        return <Outlet/>
    }else{
        return <Navigate to={"/Login"}/>;
    }
}

export default Privateroute