import React from 'react';
import frameImage from "../assets/frame.png";
import SignupForm from './SignupForm';
import LoginForm from './LoginForm';
import { FcGoogle } from 'react-icons/fc';

function Template({ title, desc1, desc2, image, formtype, setLoggedIn }) {
  return (
    <div className='flex flex-col md:flex-row justify-between w-full max-w-[1160px] py-6 md:py-12 mx-auto gap-x-6 gap-y-6 overflow-hidden h-screen'>
      <div className='w-full md:w-1/2 max-w-[450px]'>
        <h1 className='text-richblack-5 font-semibold text-[1.875rem] leading-[2.375rem]'>
          {title}
        </h1>
        <p className='text-[1.125rem] leading-[1.625rem] mt-4'>
          <span className="text-richblack-100">{desc1}</span>
          <br />
          <span className='text-blue-100 italic'>{desc2}</span>
        </p>

        {formtype === "signup" ? (
          <SignupForm setLoggedIn={setLoggedIn} />
        ) : (
          <LoginForm setLoggedIn={setLoggedIn} />
        )}

        <div className='flex w-full items-center my-4 gap-x-2'>
          <div className='w-full h-[1px] bg-richblack-700'></div>
          <p className='text-richblack-700 font-medium leading-[1.375rem]'>OR</p>
          <div className='w-full h-[1px] bg-richblack-700'></div>
        </div>
        <button className="w-full flex justify-center items-center rounded-[8px] font-medium text-richblack-100 border border-richblack-700 px-[12px] py-[8px] gap-x-2 mt-6">
          <FcGoogle />
          Sign up with Google
        </button>
      </div>

      <div className='relative w-full md:w-1/2 max-w-[450px] h-full'>
        <img
          src={frameImage}
          alt='Pattern'
          className='w-full h-auto'
          loading='lazy'
        />
        <img
          src={image}
          alt='Students'
          className='absolute top-0 right-0 w-full h-auto'
          loading='lazy'
        />
      </div>
    </div>
  );
}

export default Template;
