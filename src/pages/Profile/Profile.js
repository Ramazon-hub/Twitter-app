import './Profile.css'
import Tweets from "../../components/Tweets/Tweets"
import Sidebar from "../../components/Sidebar/Sidebar"
import UserProfile from '../../components/userProfile/UserProfile'
import useAuth from "../../hooks/Auth"
import { useEffect, useState } from "react"
import logOutIcon from './logout-icon.png'
import { Link } from 'react-router-dom'
const Profile = () =>{
  const [token] = useAuth()
  const [username,setUsername] = useState(token)
   
   useEffect(()=>{
     setUsername(token);
   },[token]);
   function logOut(){
     window.localStorage.clear();
   }
 
      return(
      
        <div className="wrapper">
            <div className="sidebar-wrapper">
              <Sidebar />
            </div>
            <div className="posts-wrapper">
                <div className="posts-wrapper-top">
                    <p className="title">Profile</p>
                   <Link to="/" onClick={logOut} className="logout">
                     <img src={logOutIcon} alt="logout-icon" width="50px" />
                     </Link>                    
                  </div>
                <UserProfile/>
                <Tweets username={username} />
                 </div>
            </div>

       
        
    )
}
export default Profile