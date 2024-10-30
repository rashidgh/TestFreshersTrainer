"use client";
import React, { useState } from "react";

const Home: React.FC = () => {
  const [inpVal, setInpVal] = useState("");
  const [toggle, setToggle] = useState<boolean>(true);

  console.log(inpVal);
  return (
    <div className="flex justify-between w-[80vw] p-3">
      <div>
        <span className="absolute pl-2 mt-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1.4em"
            height="1.4em"
            viewBox="0 0 24 24"
          >
            <path
              fill="none"
              stroke="#575757"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              d="M19 11.5a7.5 7.5 0 1 1-15 0a7.5 7.5 0 0 1 15 0m-2.107 5.42l3.08 3.08"
            />
          </svg>
        </span>
        <input
          name="inpVal"
          value={inpVal}
          onChange={e => setInpVal(e.target.value)}
          placeholder="Search"
          className="pl-10 rounded-lg w-[28vw] p-[8px]"
        />
      </div>
      <div
        className="text-[14px] flex items-center text-[#f96900] gap-1 border-[1px] border-[#f96900] rounded-xl h-[35px]"
        onClick={() => setToggle(!toggle)}
      >
        <p
          className={` px-3 h-full flex items-center rounded-xl  cursor-pointer ${
            toggle && "bg-[#f96900] text-white"
          }`}
        >
          Active
        </p>
        <p
          className={` px-3 h-full flex items-center rounded-xl  cursor-pointer ${
            !toggle && "bg-[#f96900] text-white"
          }`}
        >
          Closed
        </p>
      </div>
      {/* <span
        className="bg-red-500 p-2 text-[10px] text-white rounded cursor-pointer"
        onClick={() => {
          window.sessionStorage.removeItem("trainer_token");
          window.location.reload();
        }}
      >
        Logout
      </span> */}
    </div>
  );
};

export default Home;
