import './Login.css'
import twitterLogo  from './Twitter.png'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import { useHistory } from 'react-router'
const Login = () =>{
    const [input,setInput] = useState("")
    const history = useHistory()
    const loginForm=(evt)=>{
        evt.preventDefault();
        window.localStorage.setItem("token",input);
        document.querySelector(".login-form__input").value="";
        history.push("/")
      }

    return(
        <>
            <div className="login-twitter-logo">
                <img src={twitterLogo} width="120" alt="twitter" className="twitter-logo"></img>
                <h1 className="login__heading">Login in to Twitter</h1>
            </div>
            <form className="login-form " onSubmit={loginForm}>
                    <input className="login-form__input" type="text" placeholder="Phone,email or username" onChange={(evt)=>setInput(evt.target.value)} />
                    <input className="login-form__input" type="password" placeholder="Password" />
                    <button type="submit" className="login-form__btn">Log in</button>
                    <NavLink to="/signup" className=" signup-link" >SignUp</NavLink>               
                    <NavLink to="/" className="forgot-password" >Forgot password?</NavLink>
                    
            </form>
        </>
  
    )
}
export default Login