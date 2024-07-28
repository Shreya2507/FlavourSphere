import React, { useEffect, useState } from "react";
import logo from "../../public/logo.png";
import { AiOutlineUser } from "react-icons/ai";

const Navbar = () => {
  const [isSticky, setSticky] = useState(false);

  //handles scrolling
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 0) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.addEventListener("scroll", handleScroll);
    };
  }, []);
  const navItems = (
    <>
      <li>
        <a href="/" className="text-white text-xl hover:underline">
          Home
        </a>
      </li>

      <li>
        <a href="/" className="text-white text-xl hover:underline">
          Recipes
        </a>
      </li>

      <li>
        <a href="/" className="text-white text-xl hover:underline">
          Forum
        </a>
      </li>

      <li>
        <a href="/" className="text-white text-xl hover:underline">
          Contact Us
        </a>
      </li>
    </>
  );
  return (
    <header className=" max-w-screen-2xl container mx-auto fixed top-0 right-0 transition-all duration-300 ease-in-out">
      <div
        className={`navbar xl:px-24 xl:py-4 ${
          isSticky ? "shadow-md transition-all duration-300 ease-in-out" : ""
        }`}
      >
        <div className="navbar-start">
          <div className="dropdown ">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {navItems}
            </ul>
          </div>
          <a href="/" className="h-20">
            <img className="h-full w-full" src={logo} alt="" />
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {/* nav Items */}
            {navItems}
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn bg-button rounded-full border-none px-6 text-white flex items-center gap-2">
            <AiOutlineUser />
            Login
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
