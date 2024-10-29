"use client";
import AxiosInstance from "@/app/api/AxiosInstance";
import { useRouter } from "next/router";
import React, { ChangeEvent, FormEvent, useState } from "react";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";

const LoginForm: React.FC = () => {
  const [viewPassword, setViewPassword] = useState<boolean>(false);
  interface credentials {
    email: string;
    password: string;
  }
  const [formData, setFormData] = useState<credentials>({
    email: "",
    password: "",
  });
  const { email, password } = formData;

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const credentials = await AxiosInstance.post(`/v1/login`, formData);
      window.sessionStorage.setItem("trainer_token", credentials?.data?.token);
    } catch (error) {}
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  return (
    <div>
      <form
        className="p-7 bg-white text-[#454545] rounded-lg flex flex-col gap-4"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-bold flex gap-2">
          <p className="h-8 bg-[#f96900] w-[5px] rounded-e-md"></p> Sign In
        </h2>
        <div className="font-medium">
          <label htmlFor="Email/Mobile Number">Email/Mobile Number</label>{" "}
          <br />
          <input
            className="border-[1px] rounded-md p-3 w-[330px] text-[12px] font-normal"
            type="text"
            name="email"
            value={email}
            id="Email/Mobile Number"
            placeholder="Enter Your Email/Mobile Number"
            required
            onChange={handleChange}
          />
        </div>
        <div className="relative">
          <label htmlFor="Password">Password</label> <br />
          <input
            className="border-[1px] rounded-md p-3 w-[330px] text-[12px] font-normal "
            type={viewPassword ? "text" : "password"}
            name="password"
            value={password}
            id="Password"
            placeholder="Enter Your Password"
            required
            onChange={handleChange}
          />
          <span
            className="absolute text-[#f96900] text-[20px] top-9 right-4 cursor-pointer	"
            onClick={() => setViewPassword(!viewPassword)}
          >
            {viewPassword ? <IoMdEyeOff /> : <IoMdEye />}
          </span>
        </div>
        <button className="p-3 w-[330px] bg-[#f96900] rounded text-white mt-4">
          Sign In
        </button>
        <p className="text-[11px] pt-20 text-[#575757] font-semibold">
          By signing in you agree to all our terms & conditions
        </p>
      </form>
    </div>
  );
};

export default LoginForm;
