import React from 'react'
import LoginForm from './LoginForm';

const MiddleLogin:React.FC = () => {
  return (
    <div className="text-white flex justify-between mt-2">
      <div className=" w-[50%] mt-16">
        <p className="text-[32px] font-bold">Welcome to Test <br /> Fresher</p>
        <p className="text-[20px] mt-4">
          Test Fresher is a comprehensive practice and assignment platform
          designed to help new graduates enhance their skills and prepare for
          job opportunities.
        </p>
      </div>
      <div>
        <LoginForm />
      </div>
    </div>
  );
}

export default MiddleLogin