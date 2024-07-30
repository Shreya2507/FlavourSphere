import React from "react";
import { FaFacebookF, FaGithub, FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-footer-gradient flex items-center justify-center">
      <div className="rounded-xl max-w-md bg-white shadow w-full mx-auto flex items-center justify-center my-20">
        <div className="modal-action flex flex-col justify-center mt-0">
          <form className="card-body" method="dialog">
            <h3 className="font-bold text-lg text-gray-500 text-center">
              Sign Up!
            </h3>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-[#656565]">Email</span>
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="input input-bordered bg-white"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-[#656565]">Password</span>
              </label>
              <input
                type="password"
                placeholder="Enter your password"
                className="input input-bordered bg-white"
              />
              <label className="label mt-1">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            {/* Sign Up button */}
            <div className="form-control mt-6">
              <input
                type="submit"
                value="Signup"
                className="btn bg-navbarBg hover:bg-[#feb103] hover:border-none border-none text-white shadow-lg"
              />
            </div>
            <p className="text-center my-2 text-[#656565]">
              Have an account?{" "}
              <Link to="/" className="underline text-button ml-1">
                Login
              </Link>
              <Link to="/">
                <button
                  htmlFor="my_modal"
                  onClick={() => document.getElementById("my_modal").close()}
                  className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                >
                  ✕
                </button>
              </Link>
            </p>
          </form>
          {/* social sign in */}
          <div className="text-center space-x-3 mb-5">
            <button className="btn btn-circle bg-[#F1F2F4] hover:bg-yellow hover:border-yellow text-gray-500 hover:text-white border-2 border-yellow">
              <FaGoogle />
            </button>
            <button className="btn btn-circle bg-[#F1F2F4] hover:bg-yellow hover:border-yellow text-gray-500 hover:text-white border-2 border-yellow">
              <FaFacebookF />
            </button>
            <button className="btn btn-circle bg-[#F1F2F4] hover:bg-yellow hover:border-yellow text-gray-500 hover:text-white border-2 border-yellow">
              <FaGithub />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
