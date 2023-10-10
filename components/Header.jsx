"use client";
import Link from "next/link";
import { useState } from "react";
import { BsFacebook, BsGithub, BsInstagram, BsLinkedin, BsYoutube } from "react-icons/bs";
function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <header className="bg-white  fixed top-0 left-0 right-0 shadow-lg z-50">
        <div
          className={`${
            isOpen && ""
          }  md:border-none`}
        >
          <nav className="w-full px-5 md:px-16 bg-white flex justify-between items-center  ">
            <div className="flex items-center justify-center">
              <Link href="/">
                <img
                  className="w-20 cursor-pointer md:mt-3"
                  src="tpicpclogo.png"
                  alt=""
                />
              </Link>
            </div>

            <div className="hidden md:flex">
              <ul className="flex md:flex-row flex-col md:items-center gap-10">
                <li>
                  <Link
                    className="hover:text-orange-500  decoration-2 font-bold"
                    href="/"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    className="hover:text-orange-500  decoration-2 font-bold"
                    href="/about"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    className="hover:text-orange-500 decoration-2 font-bold"
                    href="/team"
                  >
                    Team
                  </Link>
                </li>
                <li>
                  <Link
                    className="hover:text-orange-500  decoration-2 font-bold"
                    href="/blogs"
                  >
                    Blogs
                  </Link>
                </li>
                <li>
                  <Link
                    className="hover:text-orange-500  decoration-2 font-bold"
                    href="/events"
                  >
                    Events
                  </Link>
                </li>
                <li className="md:hidden lg:flex sm:hidden">

                  <a
                    className="cursor-pointer md:px-2 text-2xl mt-2"
                    target="_blank"
                    href="https://www.facebook.com/TPICPCThakurgonPolytechnicInstitute"
                  >
                   <BsFacebook className="w-7 h-7 text-blue-500"/>
                  </a>
                  <a
                    className="cursor-pointer md:px-2 text-2xl mt-2"
                    target="_blank"
                    href="https://www.linkedin.com/company/tpicpc"
                  >
                 <BsLinkedin className="w-7 h-7 text-blue-500" />
                  </a>
                  <a
                    className="cursor-pointer md:px-2 text-2xl mt-2"
                    target="_blank"
                    href="https://github.com/tpicpc"
                  >
                    <BsGithub className="w-7 h-7 "/>
                  </a>
                  <a
                    className="cursor-pointer md:px-2 text-2xl mt-2"
                    target="_blank"
                    href="https://www.instagram.com/tpicpc"
                  >
                    <BsInstagram className="w-7 h-7 text-rose-600"/>
                  </a>
                  <a
                    className="cursor-pointer md:px-2 text-2xl mt-2"
                    target="_blank"
                    href="https://www.youtube.com/@tpicpc"
                  >
                    <BsYoutube className="w-7 h-7 text-rose-600"/>
                  </a>
                </li>
              </ul>
            </div>
            <div className="hidden md:flex items-center gap-6">
              <a
                href="https://forms.gle/DasAW1sHs5RfbYNb9"
                target="_blank"
                className="hidden md:flex bg-gradient-to-r from-[#B32A1C] to-[#FBBA31] text-white px-5 py-2 rounded-full hover:bg-secondary animate-ping absolute h-10 w-[100px]"
              ></a>
              <a
                href="https://forms.gle/DasAW1sHs5RfbYNb9"
                target="_blank"
                className="hidden md:flex bg-gradient-to-r from-[#B32A1C] to-[#FBBA31] text-white px-5 py-2 rounded-full hover:bg-secondary relative "
              >
                Join Now
              </a>
            </div>
            {/* <div className="hidden md:flex items-center gap-6">

              <a
                href="https://forms.gle/DasAW1sHs5RfbYNb9"
                target="_blank"
                className="hidden md:flex bg-red-700 text-white px-5 py-2 rounded-full hover:bg-red-800 relative "
              >
                   Registration Closed
              </a>
            </div> */}
            <div className="md:hidden ">
              {!isOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-7 h-7 cursor-pointer"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-7 h-7 cursor-pointer"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </div>
          </nav>
        </div>
        {/* Mobile Navbar */}
        {isOpen && (
          <div className={`container md:hidden py-5  transition-transform  `}>
            <ul className="flex flex-col justify-center gap-4 items-center ">
              <li>
                <Link
                  onClick={() => setIsOpen(!isOpen)}
                  className="hover:text-orange-500  decoration-2 font-bold"
                  href="/"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => setIsOpen(!isOpen)}
                  className="hover:text-orange-500  decoration-2 font-bold"
                  href="/about"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => setIsOpen(!isOpen)}
                  className="hover:text-orange-500 decoration-2 font-bold"
                  href="/team"
                >
                  Team
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => setIsOpen(!isOpen)}
                  className="hover:text-orange-500  decoration-2 font-bold"
                  href="/blogs"
                >
                  Blogs
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => setIsOpen(!isOpen)}
                  className="hover:text-orange-500  decoration-2 font-bold"
                  href="/events"
                >
                  Events
                </Link>
              </li>
              <li className="flex gap-4">
              <a
                    className="cursor-pointer md:px-2 text-2xl mt-2"
                    target="_blank"
                    href="https://www.facebook.com/TPICPCThakurgonPolytechnicInstitute"
                  >
                   <BsFacebook className="w-7 h-7 text-blue-500"/>
                  </a>
                  <a
                    className="cursor-pointer md:px-2 text-2xl mt-2"
                    target="_blank"
                    href="https://www.linkedin.com/company/tpicpc"
                  >
                 <BsLinkedin className="w-7 h-7 text-blue-500" />
                  </a>
                  <a
                    className="cursor-pointer md:px-2 text-2xl mt-2"
                    target="_blank"
                    href="https://github.com/tpicpc"
                  >
                    <BsGithub className="w-7 h-7 "/>
                  </a>
                  <a
                    className="cursor-pointer md:px-2 text-2xl mt-2"
                    target="_blank"
                    href="https://www.instagram.com/tpicpc"
                  >
                    <BsInstagram className="w-7 h-7 text-rose-600"/>
                  </a>
                  <a
                    className="cursor-pointer md:px-2 text-2xl mt-2"
                    target="_blank"
                    href="https://www.youtube.com/@tpicpc"
                  >
                    <BsYoutube className="w-7 h-7 text-rose-600"/>
                  </a>
              </li>
            </ul>
            <div className="flex justify-center mt-5 text-center mx-auto items-center ">
              <div>
                <a
                  href="https://forms.gle/DasAW1sHs5RfbYNb9"
                  target="_blank"
                  className="flex md:hidden items-center bg-gradient-to-r from-[#B32A1C] to-[#FBBA31] text-white px-5 py-2 rounded-full hover:bg-secondary animate-ping absolute h-10 w-[100px]"
                ></a>
                <a
                  href="https://forms.gle/DasAW1sHs5RfbYNb9"
                  target="_blank"
                  className="flex md:hidden bg-gradient-to-r from-[#B32A1C] to-[#FBBA31] text-white px-5 py-2 rounded-full hover:bg-secondary relative "
                >
                  Join Now
                </a>
              </div>
            </div>
            <div className="flex justify-center mt-5 text-center mx-auto items-center">
              <a
                href="https://forms.gle/DasAW1sHs5RfbYNb9"
                target="_blank"
                className="hidden md:flex bg-gradient-to-r from-[#B32A1C] to-[#FBBA31] text-white px-5 py-2 rounded-full hover:bg-secondary animate-ping absolute h-10 w-[100px]"
              ></a>
              <a
                href="https://forms.gle/DasAW1sHs5RfbYNb9"
                target="_blank"
                className="hidden md:flex bg-gradient-to-r from-[#B32A1C] to-[#FBBA31] text-white px-5 py-2 rounded-full hover:bg-secondary relative "
              >
                Join Now
              </a>
            </div>
            {/* <div className="flex justify-center mt-5 text-center mx-auto items-center ">
              <div>
             
                <a
                  href="https://forms.gle/DasAW1sHs5RfbYNb9"
                  target="_blank"
                  className="flex md:hidden bg-red-700 text-white px-5 py-2 rounded-full hover:bg-red-800 relative "
                >
                  Registration Closed
                </a>
              </div>
            </div> */}
          </div>
        )}
      </header>
    </>
  );
}

export default Header;
