import Link from "next/link";
import React from "react";
import HomePageLogo from "./HomePageLogo";

const SideBar = () => {
  return (
    <div className="bg-[#fff] w-[17vw] p-2 flex flex-col justify-between h-[100vh]">
      <div>
        <div>
          <HomePageLogo />
        </div>
        <div className="flex flex-col gap-3 mt-4">
          <Link
            href={"#"}
            className="flex text-[#575757] gap-3 p-2 hover:bg-[#f96900] hover:text-white rounded-lg"
          >
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.5em"
                height="1.5em"
                viewBox="0 0 24 24"
              >
                <g
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  color="currentColor"
                >
                  <path d="m16.596 20.699l-2.445.647c-2.263.6-3.395.899-4.281.408c-.887-.49-1.182-1.58-1.773-3.758l-1.462-5.391c-.59-2.179-.886-3.268-.367-4.13c.52-.863 1.651-1.163 3.914-1.762l4-1.06c2.264-.598 3.395-.898 4.282-.407c.886.49 1.182 1.58 1.772 3.758l1.468 5.413c.251.926.377 1.39.239 1.825m-5.347 4.457c.752-.2.758-.202 1.343-.704l2.743-2.355c.749-.642 1.123-.963 1.261-1.398m-5.347 4.457s.588-4.593 1.904-5.199c1.493-.687 3.443.742 3.443.742" />
                  <path d="M17 5.001c-.064-1.073-.243-1.749-.752-2.233c-.78-.742-2.03-.746-4.532-.754l-4.423-.013c-2.502-.007-3.753-.01-4.528.727s-.771 1.928-.764 4.31l.018 5.893c.008 2.381.011 3.572.79 4.314c.78.742 2.031.746 4.533.753l.681.002" />
                </g>
              </svg>
            </span>
            <span>Batches</span>
          </Link>
          <Link
            href={"#"}
            className="flex text-[#575757] gap-3 p-2 hover:bg-[#f96900] hover:text-white rounded-lg"
          >
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.5em"
                height="1.5em"
                viewBox="0 0 24 24"
              >
                <g fill="none" stroke="currentColor" stroke-width="1.5">
                  <path d="m20.312 12.647l.517-1.932c.604-2.255.907-3.382.68-4.358a4 4 0 0 0-1.162-2.011c-.731-.685-1.859-.987-4.114-1.591c-2.255-.605-3.383-.907-4.358-.68a4 4 0 0 0-2.011 1.162c-.587.626-.893 1.543-1.348 3.209l-.244.905l-.517 1.932c-.605 2.255-.907 3.382-.68 4.358a4 4 0 0 0 1.162 2.011c.731.685 1.859.987 4.114 1.592c2.032.544 3.149.843 4.064.73q.15-.019.294-.052a4 4 0 0 0 2.011-1.16c.685-.732.987-1.86 1.592-4.115Z" />
                  <path d="M16.415 17.974a4 4 0 0 1-1.068 1.678c-.731.685-1.859.987-4.114 1.591s-3.383.907-4.358.679a4 4 0 0 1-2.011-1.161c-.685-.731-.988-1.859-1.592-4.114l-.517-1.932c-.605-2.255-.907-3.383-.68-4.358a4 4 0 0 1 1.162-2.011c.731-.685 1.859-.987 4.114-1.592q.638-.172 1.165-.309" />
                  <path
                    stroke-linecap="round"
                    d="m11.777 10l4.83 1.294M11 12.898l2.898.776"
                  />
                </g>
              </svg>
            </span>
            <span>Questions</span>
          </Link>
          <Link
            href={"#"}
            className="flex text-[#575757] gap-3 p-2 hover:bg-[#f96900] hover:text-white rounded-lg"
          >
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.4em"
                height="1.4em"
                viewBox="0 0 24 24"
              >
                <g
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  color="currentColor"
                >
                  <path d="M7.998 16h4m-4-5h8M7.5 3.5c-1.556.047-2.483.22-3.125.862c-.879.88-.879 2.295-.879 5.126v6.506c0 2.832 0 4.247.879 5.127C5.253 22 6.668 22 9.496 22h5c2.829 0 4.243 0 5.121-.88c.88-.879.88-2.294.88-5.126V9.488c0-2.83 0-4.246-.88-5.126c-.641-.642-1.569-.815-3.125-.862" />
                  <path d="M7.496 3.75c0-.966.784-1.75 1.75-1.75h5.5a1.75 1.75 0 1 1 0 3.5h-5.5a1.75 1.75 0 0 1-1.75-1.75" />
                </g>
              </svg>
            </span>
            <span>Task</span>
          </Link>
          <Link
            href={"#"}
            className="flex text-[#575757] gap-3 p-2 hover:bg-[#f96900] hover:text-white rounded-lg"
          >
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.5em"
                height="1.5em"
                viewBox="0 0 24 24"
              >
                <g
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                >
                  <path d="M16.5 4H8a4 4 0 0 0-4 4v8.5a4 4 0 0 0 4 4h6.843a4 4 0 0 0 2.829-1.172l1.656-1.656a4 4 0 0 0 1.172-2.829V8a4 4 0 0 0-4-4" />
                  <path d="M20.5 14H17a3 3 0 0 0-3 3v3.5M8 8h7.5M8 12h5" />
                </g>
              </svg>
            </span>
            <span>Projects</span>
          </Link>
          <Link
            href={"#"}
            className="flex text-[#575757] gap-3 p-2 hover:bg-[#f96900] hover:text-white rounded-lg"
          >
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.3em"
                height="1.3em"
                viewBox="0 0 24 24"
              >
                <g
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                >
                  <path d="M4 21.4V2.6a.6.6 0 0 1 .6-.6h11.652a.6.6 0 0 1 .424.176l3.148 3.148A.6.6 0 0 1 20 5.75V21.4a.6.6 0 0 1-.6.6H4.6a.6.6 0 0 1-.6-.6M8 10h8m-8 8h8m-8-4h4" />
                  <path d="M16 2v3.4a.6.6 0 0 0 .6.6H20" />
                </g>
              </svg>
            </span>
            <span>Work Space</span>
          </Link>
        </div>
      </div>
      <div className="text-[#575757] flex gap-2">
        <p className="text-xl font-bold flex  item-center justify-center pt-[3px] rounded-full bg-[lightGray] w-[40px] h-[40px]">
          a
        </p>
        <p>
          <p className="font-semibold">Abhishek bandi</p>
          <p className="text-sm">Trainer</p>
        </p>
      </div>
    </div>
  );
};

export default SideBar;
