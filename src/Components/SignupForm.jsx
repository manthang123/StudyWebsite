import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

function SignupForm({ setLoggedIn }) {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value.trim(), // Trim leading/trailing spaces
    });
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
    // Validate password match
    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    // Simulate backend API call or perform actual logic
    setLoggedIn(true); // Update login state
    toast.success("Account created successfully");

    // Navigate to dashboard
    navigate("/dashboard");

    // Clear form data
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
    });
  };

  return (
    <div>
      <div>
        {/* Example role selection buttons */}
        <button>Student</button>
        <button>Instructor</button>
      </div>

      <form onSubmit={handleSubmit}>
        {/* First Name and Last Name fields */}
        <div>
          <label>
            <p>First Name <sup>*</sup></p>
            <input
              type='text'
              name='firstName'
              placeholder='Enter your first name'
              value={formData.firstName}
              onChange={handleInputChange}
              required
            />
          </label>
          <label>
            <p>Last Name <sup>*</sup></p>
            <input
              type='text'
              name='lastName'
              placeholder='Enter your last name'
              value={formData.lastName}
              onChange={handleInputChange}
              required
            />
          </label>
        </div>

        {/* Email Address field */}
        <label>
          <p>Email Address <sup>*</sup></p>
          <input
            type='email'
            name='email'
            placeholder='Enter your email'
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </label>

        {/* Password and Confirm Password fields */}
        <div>
          <label>
            <p>Create Password <sup>*</sup></p>
            <input
              type={showPassword ? 'text' : 'password'}
              name='password'
              placeholder='Enter your password'
              value={formData.password}
              onChange={handleInputChange}
              required
            />
            <span onClick={togglePasswordVisibility}>
              {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
            </span>
          </label>
          <label>
            <p>Confirm Password <sup>*</sup></p>
            <input
              type={showPassword ? 'text' : 'password'}
              name='confirmPassword'
              placeholder='Confirm your password'
              value={formData.confirmPassword}
              onChange={handleInputChange}
              required
            />
            <span onClick={togglePasswordVisibility}>
              {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
            </span>
          </label>
        </div>

        {/* Submit Button */}
        <button type='submit'>Create Account</button>
      </form>
    </div>
  );
}

export default SignupForm;
