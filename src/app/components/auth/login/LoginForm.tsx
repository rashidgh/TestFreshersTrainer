"use client";

import AxiosInstance from "@/app/api/AxiosInstance";
import { ChangeEvent, FormEvent, useState } from "react";
import toast from "react-hot-toast";

const LoginForm: React.FC = () => {
  interface Credentials {
    email: string;
    password: string;
  }
  const [loginData, setLoginData] = useState<Credentials>({
    email: "",
    password: "",
  });
  const [singIng, setSignIng] = useState<boolean>(false);
  const { email, password } = loginData;

  // !handle submit:
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSignIng(true);

    try {
      const data = await AxiosInstance.post(`/v1/login`, loginData);
      console.log(data);
      setLoginData({
        email: "",
        password: "",
      });
      window.sessionStorage.setItem("trainer_token", data.data.token);
      if (data.status == 200) {
        toast.success(data.data.message);
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      }
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message);
      } else {
        // If the error is not an instance of Error, use a generic message
        toast.error("An unknown error occurred.");
      }
    } finally {
      setSignIng(false);
    }
  };

  // ! handle change:
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };
  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="p-7 bg-white flex flex-col gap-4 rounded-lg"
      >
        <div className="flex gap-3 items-center">
          <p className="w-[5px] h-[35px] bg-[#f96900] rounded-r "></p>
          <p className="text-[#454545] font-bold text-[24px]">Sign In</p>
        </div>
        <div className="flex flex-col gap-3">
          <label
            htmlFor="Email/Mobile Number"
            className="text-[#454545] font-semibold"
          >
            Email/Mobile Number
          </label>
          <input
            className="p-3 border-[1px] rounded w-[330px] text-[13px] text-[#575757]"
            type="text"
            name="email"
            value={email}
            id="Email/Mobile Number"
            placeholder="Enter Your Email/Mobile Number"
            onChange={handleChange}
            required
          />
        </div>
        <div className="flex flex-col gap-3">
          <label
            htmlFor="Email/Mobile Number"
            className="text-[#454545] font-semibold"
          >
            Password
          </label>
          <input
            className="p-3 border-[1px] w-[330px] rounded text-[13px] text-[#575757]"
            type="text"
            name="password"
            value={password}
            id="Email/Mobile Number"
            placeholder="Enter Your Password"
            onChange={handleChange}
            required
          />
        </div>
        <button
          className={`${
            singIng ? "bg-white" : "bg-[#f96900]"
          }  w-[330px] p-3 rounded font-semibold mt-4 border-0`}
        >
          {singIng ? (
            <span className="text-white">Sign In...</span>
          ) : (
            <span>Sign In</span>
          )}
        </button>
        <p className="mt-8 text-[#454545] text-[12px]">
          By signing in you agree to all our terms & conditions
        </p>
      </form>
    </div>
  );
};
export default LoginForm;
