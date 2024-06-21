import React from 'react';
import signupImg from '../assets/signup.png';
import Template from '../Components/Template';

function Signup({ setLoggedIn }) {
  return (
    <Template
      title="Join the millions learning to code with studyNotion for free"
      desc1="Build skills for today, tomorrow and beyond."
      desc2="Education to future-proof your career."
      image={signupImg}
      formtype="signup"
      setLoggedIn={setLoggedIn} // Ensure setLoggedIn is correctly passed
    />
  );
}

export default Signup;
