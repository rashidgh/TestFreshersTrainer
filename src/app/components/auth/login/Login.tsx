import React from "react";
import TF_logo from "./TF_logo";
import LoginMiddle from "./LoginMiddle";
const Login: React.FC = () => {
  return (
    <div className="loginPage py-12 px-24">
      <div>
        <TF_logo />
      </div>
      <div>
        <LoginMiddle />
      </div>
      <div className="text-white text-[12px] mt-8 flex justify-between">
        <p>Copyright @ Test Freshers All Rights Reserved</p>
        <p>Contact us at: +91-7338471266 | help@qspiders.com</p>
      </div>
    </div>
  );
};

export default Login;
