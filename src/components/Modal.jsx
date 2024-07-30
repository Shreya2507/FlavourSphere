import React from "react";
import { FaFacebookF, FaGithub, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";

const Modal = () => {
  return (
    <dialog id="my_modal_5" className="modal modal-middle sm:modal-middle">
      <div className="modal-box bg-white">
        <div className="modal-action flex flex-col justify-center mt-0">
          <form className="card-body" method="dialog">
            <h3 className="font-bold text-lg text-gray-500 text-center">
              Please Login!
            </h3>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-[#656565]">Email</span>
              </label>
              <input
                type="email"
                placeholder="Enter your Email"
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
            {/* Login button */}
            <div className="form-control mt-4">
              <input
                type="submit"
                value="Login"
                className="btn bg-navbarBg hover:bg-[#feb103] hover:border-none border-none text-white shadow-lg"
              />
            </div>
            <p className="text-center my-2 text-[#656565]">
              Do not have an account?{" "}
              <Link to="/signup" className="underline text-button ml-1">
                Signup Now
              </Link>
            </p>
            <button
              htmlFor="my_modal_5"
              onClick={() => document.getElementById("my_modal_5").close()}
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            >
              ✕
            </button>
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
    </dialog>
  );
};

export default Modal;
