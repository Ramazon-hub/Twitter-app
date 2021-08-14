import { createContext, useState } from "react";
const Auth = createContext();
function Provider( { children } ){
    const [token,setToken]= useState(window.localStorage.getItem("token"))
    // console.log(token)
    return(
        <>
        <Auth.Provider value={ {token,setToken} }>
            { children }
        </Auth.Provider>
        
        </>
    )
}
export{
    Provider,Auth
}