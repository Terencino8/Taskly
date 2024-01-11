import React from 'react'
import "./logincontainer.css"
import facebook from "../../../T_images/facebook-Icon.png"
import linkedin from "../../../T_images/linkedin-Icon.png"
import gmail from "../../../T_images/gmail-Icon.png"

const Logincontainer = () => {
  return (
<div className="logincontainer">
            <div className="loginform">
                <h1 className="logintitle"> Sign in to Account <hr /></h1>
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


            <div className="loginimg">
                <h1>Hello, Friend! <hr /></h1>
               
                <p>Fill up personal information and <br />start journey with  Us</p>
                <button>Sign Up</button>
            </div>
        </div>
  )
}

export default Logincontainer