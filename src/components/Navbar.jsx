import React, { useEffect, useState } from "react";
import logo from "../../public/logo.png";
import { AiOutlineUser } from "react-icons/ai";
import Modal from "./Modal";

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
        <a
          href="/"
          className="text-white text-xl hover:text-button hover:bg-transparent "
        >
          Home
        </a>
      </li>

      <li>
        <a
        
          href="/recipes"
          className="text-white text-xl hover:text-button hover:bg-transparent"
        >
          Recipes
        </a>
      </li>

      <li>
        <a
          href="/forum"
          className="text-white text-xl hover:text-button hover:bg-transparent"
        >
          Pages
        </a>
      </li>

      <li>
        <a
          href="/contactUs"
          className="text-white text-xl hover:text-button hover:bg-transparent"
        >
          Contact Us
        </a>
      </li>
    </>
  );
  return (
    <header
      className={`bg-[#f8b212] max-w-screen-2xl container mx-auto fixed top-0 left-0 right-0 transition-all duration-300 ease-in-out`}
    >
      <div
       
        className={`navbar xl:px-24 ${
          isSticky ? "shadow-md transition-all duration-300 ease-in-out" : ""
        }`}
      >
        <div className=" navbar-start" >
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
          <a href="/profile" className="h-20">
            <img className="h-full w-full" src={logo} alt="" />
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 ">
            {/* nav Items */}
            {navItems}
          </ul>
        </div>
        <div className="navbar-end">
          {/* login button */}
          <button
            onClick={() => document.getElementById("my_modal_5").showModal()}
            className="btn bg-button hover:bg-[#ba4545] hover:border-none rounded-full border-none px-6 text-white flex items-center gap-2"
          >
            <AiOutlineUser />
            Login
          </button>
          <Modal />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
