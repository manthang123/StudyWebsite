import React, { useState } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';

function LoginForm({ setLoggedIn }) { // Destructure setLoggedIn from props
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  function changeHandler(event) {
    setFormData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  }

  function submitHandler(event) {
    event.preventDefault();
    setLoggedIn(true);
    toast.success('Logged In');
    navigate('/dashboard');
  }

  return (
    <form onSubmit={submitHandler}>
      <label>
        <p>Email Address <sup>*</sup></p>
        <input
          required
          type="email"
          value={formData.email}
          onChange={changeHandler}
          placeholder="Enter your email"
          name="email"
        />
      </label>
      <label>
        <p>Password <sup>*</sup></p>
        <input
          required
          type={showPassword ? 'text' : 'password'}
          value={formData.password}
          onChange={changeHandler}
          placeholder="Enter your password"
          name="password"
        />
        <span onClick={() => setShowPassword((prev) => !prev)}>
          {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
        </span>
      </label>
      <Link to="#">
        <p>Forgot password</p>
      </Link>
      <button type="submit">Sign In</button>
    </form>
  );
}

export default LoginForm;
