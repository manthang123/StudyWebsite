import React from 'react';
import Template from '../Components/Template';
import loginImg from '../assets/login.png';

function Login({ setLoggedIn }) {
  return (
    <div>
      <Template
        title="Welcome back"
        desc1="Build skills for today, tomorrow and beyond.."
        desc2="Education to future-proof your career .."
        image={loginImg}
        formtype="login"
        setLoggedIn={setLoggedIn} // Ensure setLoggedIn is correctly passed down
      />
    </div>
  );
}

export default Login;
