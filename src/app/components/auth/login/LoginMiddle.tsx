import React from "react";
import LoginForm from "./LoginForm";

const LoginMiddle:React.FC = () => {
  return (
    <div className="text-white flex justify-between ">
      <div className=" w-[45%] pt-16">
        <div className="text-3xl font-[800]">
          Welcome to Test <br /> Fresher
        </div>
        <div className="text-[18px] mt-4">
          Test Fresher is a comprehensive practice and assignment platform
          designed to help new graduates enhance their skills and prepare for
          job opportunities.
        </div>
      </div>
      <div className="">
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginMiddle;
