import { useEffect } from "react";
import { useNavigate } from "react-router";
import { isLoggedIn } from "../auth";


function Protected(props) {

    const { Component }= props
    const navigate = useNavigate();

    useEffect(()=>{
        
        if(!isLoggedIn()){

            navigate('/Login')
        } 
    });

    return(
        <div>
            <Component/>
        </div>
    )
}

export default Protected