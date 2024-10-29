import React from "react";
import Logo from "./Logo";
import MiddleLogin from "./MiddleLogin";

const Login: React.FC = () => {
  return (
    <div className="h-[100vh] w-[100vw] px-24 py-12 loginPage">
      <div>
        <Logo />
      </div>
      <div>
        <MiddleLogin />
      </div>
      <div className="text-[12px] text-white mt-8 flex justify-between">
        <p>Copyright @ Test Freshers All Rights Reserved</p>
        <p>Contact us at: +91-7338471266 | help@qspiders.com</p>
      </div>
    </div>
  );
};

export default Login;
