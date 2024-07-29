import React, { useState } from "react";
import loginIcon from "../assest/login3.gif";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";

const SignUp = () => {
    const [showPassword, setShowPassword] = useState(false);
  return (
    <section id="sign-up">
      <div className="mx-auto container p-8">
        <div className="bg-white p-5 w-full max-w-sm mx-auto rounded">
          <div className="w-20 h-20 mx-auto">
            <img src={loginIcon} alt="login icon" />
          </div>
          <form className="pt-6">
            <div className="grid">
              <label htmlFor="">Name : </label>
              <div className="bg-slate-300 p-1">
                <input
                  type="text"
                  placeholder="Enter Your Name"
                  className="w-full h-full outline-none bg-transparent"
                />
              </div>
            </div>
            <div className="grid mt-2">
              <label htmlFor="">Email : </label>
              <div className="bg-slate-300 p-1">
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  className="w-full h-full outline-none bg-transparent"
                />
              </div>
            </div>
            <div>
              <label className="grid mt-2">Password : </label>
              <div className="bg-slate-300 p-1 flex">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter Password"
                  className="w-full h-full outline-none bg-transparent"
                />
                <div
                  className="cursor-pointer text-xl"
                  onClick={() => setShowPassword((prev) => !prev)}
                >
                  <span>{showPassword ? <FaEyeSlash /> : <FaEye />}</span>
                </div>
              </div>
              <label className="grid mt-2">Confirm Password : </label>
              <div className="bg-slate-300 p-1 flex">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter Password"
                  className="w-full h-full outline-none bg-transparent"
                />
                <div
                  className="cursor-pointer text-xl"
                  onClick={() => setShowPassword((prev) => !prev)}
                >
                  <span>{showPassword ? <FaEyeSlash /> : <FaEye />}</span>
                </div>
              </div>
            </div>
            <button className="text-white bg-blue-600 w-full px-5 py-2 rounded mt-2 hover:bg-blue-800 transition mx-auto">
              Sign Up
            </button>
          </form>
          <p className="my-4 ">
            Already have an account?{" "}
            <Link
              to={"/login"}
              className="text-blue-600 hover:underline hover:text-purple-600"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </section>
  )
}

export default SignUp