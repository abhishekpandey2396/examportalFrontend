import { myAxios } from "./helper";

export const signUp = (userdata)=>{
   return myAxios.post("/user/",userdata).then((resp)=>resp.data)
}

export const loginUser=(loginDetails)=>{
   return myAxios.post("/generate-token",loginDetails)
   .then((resp)=>resp.data)
}

