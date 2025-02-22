import { useContext } from "react";
import AuthContext from "../context/AuthProvider";

export const useLogin = ()=>{
    const  loginData =useContext(AuthContext);
    return {...loginData}
}

