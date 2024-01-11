import React from 'react'
import facebook from "../../../T_images/facebook-Icon.png"
import linkedin from "../../../T_images/linkedin-Icon.png"
import gmail from "../../../T_images/gmail-Icon.png"
import "./Signupcontainer.css"


const Signupcontainer = () => {
  return (
    <div className="signupcontainer">
           <div className="loginimg">
                <h1>Welcome Back!<hr /></h1>
               
                <p>To Keep track of your on going tasks <br />Login with your personal info</p>
                <button>Sign In</button>
            </div>
            
              <div className="loginform">
                <h1 className="logintitle"> Create Account <hr /></h1>
                <div className="loginoptions">
                    <div className="c facebook">
                        <img src={facebook} alt="" />
                    </div>
                    <div className="c linkedin">
                        <img src={linkedin} alt="" />
                    </div>
                    <div className="c gmail">
                        <img src={gmail} alt="" />
                    </div>
                </div>
                <span>or use your email</span>
                <form action="">
                <input type="email" id='email' placeholder='Email'/>
                <input type="text" id='name' placeholder='Full Name'/>
                <input type="password" id="password" placeholder='Password'/>


                <div className="others">
                    <div className="checkbox">
                        <input type="checkbox"  id="remember" />
                        <span>Remember Me</span>
                    </div>

                    <a href="#">forgotten password?</a>
                </div>

                <button>sign In</button>

                </form>

            </div>


           
        </div>
  )
}

export default Signupcontainer