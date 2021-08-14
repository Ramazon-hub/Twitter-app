import { useContext, useEffect } from "react";
import { Auth } from "../context/Authentication";
function useAuth(blabla){
    const {token,setToken} = useContext(Auth);
    useEffect(()=>{
        setToken(window.localStorage.getItem("token"))
    })
    // console.log(token)
    return blabla ? [token] : [token,setToken]
    
}
export default useAuth