import './UserProfile.css'
import useAuth from '../../hooks/Auth'
import foto from '../Sidebar/prof-icon.webp'
function UserProfile(){
    const [token] =useAuth();
    // const [foto,setFoto]=useState(false)
    console.log(token)
    
        
    return (
        <div className="profile-wrapper">    
            <img src={foto} alt="af" width="100px" className="profile-img"/>
            <h2>{token}</h2>
            <p>This is date of birth</p>
            <h3 className="tweets">Tweets</h3>

         </div>
    )
}
export default UserProfile