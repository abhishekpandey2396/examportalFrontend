//isLoggedIn
export const isadminLoggedIn=()=>{
    let data = localStorage.getItem("data");
    if(data!=null){
        return true;
    }else{
        return false
    }
    }

export const doadminLogin = (data,next)=>{
    localStorage.setItem("data",JSON.stringify(data));
    next();
}

//doLogout
export const doadminLogout = (next)=>{
    localStorage.removeItem("data");
    next();
}
//getCurrent user
export const getCurrentadmin = ()=>{
    if(isadminLoggedIn()){
        return JSON.parse(localStorage.getItem("data"))?.user;
    }else{
        return undefined;
    }
}
