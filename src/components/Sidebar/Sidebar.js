import './Sidebar.css'
import twt_ico from './Twitter.png'
import { NavLink } from "react-router-dom"
const Sidebar =() =>{
    return(
        <>
            <nav className="sidebar-nav">
                <img src={twt_ico} width="50px" alt="twitter-icon" />
                <ul className="sidebar-list">
                        <li className="sidebar-list-item home-icon">
                                <NavLink className="sidebar-list-link "  activeClassName="sidebar-active-link"   to='/' exact >Home</NavLink>
                        </li>
                        <li className="sidebar-list-item login-icon">
                                <NavLink className="sidebar-list-link " activeClassName="sidebar-active-link" to='/login'>Login</NavLink>
                        </li>
                        <li className="sidebar-list-item signup-icon">
                                <NavLink className="sidebar-list-link " activeClassName="sidebar-active-link" to='/signup'>SignUp</NavLink>
                        </li>
                        <li className="sidebar-list-item profile-icon">
                                <NavLink className="sidebar-list-link " activeClassName="sidebar-active-link" to='/profile'>Profile</NavLink>
                        </li>
                </ul>
            </nav>
        
        </>
    )
}
export default Sidebar