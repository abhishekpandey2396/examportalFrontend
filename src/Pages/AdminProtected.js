import { useEffect } from "react";
import { useNavigate } from "react-router";
import { isadminLoggedIn } from "../auth/adminIndex";

function AdminProtected(props) {

    const { Component }= props
    const navigate = useNavigate();

    useEffect(()=>{
        
        if(!isadminLoggedIn()){

            navigate('/Login')
        } 
    });

    return(
        <div>
            <Component/>
        </div>
    )
}

export default AdminProtected