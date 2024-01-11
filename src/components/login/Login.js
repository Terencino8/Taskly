import React from 'react'
import "../login/Login.css";
import Logincontainer from '../UI/logincontainer/Logincontainer';
import Signupcontainer from '../UI/signupcontainer/Signupcontainer';

const Login = () => {
  return (
    <div className='loginBox'>



        {/* <div className="log">
        <Logincontainer/>

        </div> */}
        <div className="sign">
        <Signupcontainer/>

        </div>

    
    </div>
  )
}

export default Login


