import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { Office } from "../assets";
import { SignUp } from "../components";
// Get user information from Redux store
const Auth = () => {
  const { user } = useSelector((state) => state.user);
  const [open, setOpen] = useState(true); // State to control the SignUp component's visibility
  const location = useLocation(); // Get location information from React Router

  // Determine the URL to redirect to after successful login or registration
  let from = location?.state?.from?.pathname || "/";
 // If user is already logged in, redirect to the specified URL
  if (user.token) { 
    return window.location.replace(from);
  }
  // Render the authentication page
  return (
    <div className='w-full '>
      <img src={Office} alt='Office' className='object-contain ' />

      <SignUp open={open} setOpen={setOpen} />
    </div>
  );
};

export default Auth;
