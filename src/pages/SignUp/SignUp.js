import { NavLink } from 'react-router-dom'
import './SignUp.css'
import twitterImg from './twitter.png'
import twitterIco from './Twitter..png'
import { useState } from 'react'
import { useHistory } from 'react-router-dom'
const SignUp = () =>{
  const [input,setInput] = useState("")
  const history = useHistory()
  const signUpForm=(evt)=>{
    evt.preventDefault();
    window.localStorage.setItem("token",input);
    document.querySelector(".username-input").value="";
    history.push("/")
  }
  function usernamePlaceHolder(){
    
    
    let usernameLabel = document.querySelector('.username-label');
    let usernamePlaceholder=document.querySelector('.username-placeholder')
    usernamePlaceholder.style.cssText=`color:#12B4F6; top:25%; font-size:13px;`
    usernameLabel.style.cssText = `border:1px solid #12B4F6;`;   
  }
  function emailPlaceholder(){
     let emailLabel = document.querySelector('.email-label');
      let emailPlaceholder=document.querySelector('.email-placeholder')
         emailPlaceholder.style.cssText=`color:#12B4F6; top:25%; font-size:13px;`
         emailLabel.style.cssText = `border:1px solid #12B4F6;`;       

   }
    return(
      <div className="wrapper">
          <div className="wrapper-left">
            <img className="" src={twitterImg} alt="twitter img" width="300"></img>
            <div>
            <p className="already">Already have an account?</p>
            <NavLink to="/login" className="btn">Login</NavLink>

            </div>
          </div>
          <div className="wrapper-right">
              <h1 className="wrapper-title">Join Twitter today and start exploring the world's thoughts.</h1>
              <form className="signup-form" onSubmit={signUpForm}>
                <img className="twitter-img" src={twitterIco} alt="twitter img" width="50"></img>

                <h2 className="create-account">Create your account</h2>
                <label className="username-label" onClick={usernamePlaceHolder}>
                <input type="text" className="input username-input" onChange={(e)=>setInput(e.target.value)} />
                <span className="username-placeholder">Name</span>
                </label>
                <label className="email-label" onClick={emailPlaceholder} >
                <input type="email"className="input input-email" />
                <span className="email-placeholder">Email</span>
                </label>

                <h4>Date of birth</h4>
                <p>This will not be shown publicy.Confirm your own age,even is this account is for business,a pet,or something else.</p>
                {/* <div className="dateofbirth">
                <label className="input-label date-input" onClick={placeHolder}>
                <input type="text" className="input" />
                <span className="placeholder">Day</span>
                </label>  <label className="input-label date-input" onClick={placeHolder}>
                <input type="text" className="input" />
                <span className="placeholder">Month</span>
                </label>  <label className="input-label date-input" onClick={placeHolder}>
                <input type="text" className="input" />
                <span className="placeholder">Year</span>
                </label>
                </div> */}
                <button type="submit" className="signin-btn">Sign In</button>
              </form>
          </div>
      </div>
    //  #FEFEFE
    //  #5EA9DD
    )
}
export default SignUp