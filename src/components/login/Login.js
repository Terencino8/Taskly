import React from 'react'
import "../login/Login.css";
import "../UI/logincontainer/logincontainer.css"
import "../UI/signupcontainer/Signupcontainer.css"
import facebook from "../../T_images/facebook-Icon.png"
import linkedin from "../../T_images/linkedin-Icon.png"
import gmail from "../../T_images/gmail-Icon.png"
import { Link } from 'react-router-dom'




const Login = () => {

  function handleClick(){
    document.getElementById("Log").style.display = 'none';
    document.getElementById("Sign").style.display = 'block';

}

function handleClickLog(){
  document.getElementById("Log").style.display = 'block';
  document.getElementById("Sign").style.display = 'none';

}




 

  return (
    <div className='loginBox'>


        <div className="log" id='Log'>

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
                        <input type="checkbox"  id="remember"/>
                        <span>Remember_Me</span>
                    </div>

                    <a href="0">forgotten password?</a>
                </div>

              <Link to="/home"><button>sign In</button></Link> 
                <div className='loginswitch' onClick={handleClick}>Keep track of your Task
                <br /> Sign Up now</div>

                </form>

            </div>


            <div className="loginimg">
                <h1>Hello, Friend! <hr /></h1>
               
                <p>Fill up personal information and <br />start journey with  Us</p>
                <button onClick={handleClick}>Sign Up</button>
            </div>
        </div>

        </div>






        <div className="sign" id='Sign'>

        <div className="signupcontainer">
           <div className="loginimg">
                <h1>Welcome Back!<hr /></h1>
               
                <p>To Keep track of your on going tasks <br />Login with your personal info</p>
                <button onClick={handleClickLog}>Sign In</button>
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
                        <span>Remember_Me</span>
                    </div>

                    <a href="0">forgotten password?</a>
                </div>

                <Link to="/home"><button>sign Up</button></Link>
                <div className='loginswitch' onClick={handleClickLog}>Login with your Personal info
                Login</div>

                </form>

            </div>



           
           
        </div>

        </div>




      

    
    </div>
  )
}

export default Login


