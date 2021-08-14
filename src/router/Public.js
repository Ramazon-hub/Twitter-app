import { Route,Redirect} from "react-router-dom"
// import { useHistory } from "react-router"
import useAuth from "../hooks/Auth"
import { useLocation } from "react-router"

function Public(props){
   const [token] = useAuth()
   const {pathname} = useLocation()
   if(token &&( pathname==='/login' || pathname==='/signup')){
    return <Redirect to="/"/>
   }
     return  <Route {...props}/>
   
}

export default Public