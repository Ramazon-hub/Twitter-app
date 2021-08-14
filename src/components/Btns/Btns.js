import './Btns.css';
import useAuth from "../../hooks/Auth";
import { Link } from "react-router-dom";
import profileIco from '../Sidebar/prof-icon.webp'
function Btns(){
    const [token] = useAuth()
    return(
        <>
        {
            token ? <Link to="/profile" className="profile">
                <img src={profileIco} alt="profile" width="50px"/>
            </Link> :<Link to="/login" className="login">Log in</Link>
        }
        </>
    )
}
export default Btns