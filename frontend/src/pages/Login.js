import React, { useState } from "react";
import loginIcon from "../assest/login4.gif";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  console.log("Data login", data);

  return (
    <section id="login">
      <div className="mx-auto container p-8">
        <div className="bg-white p-5 w-full max-w-sm mx-auto rounded">
          <div className="w-20 h-20 mx-auto">
            <img src={loginIcon} alt="login icon" />
          </div>
          <form className="pt-6" onSubmit={handleSubmit}>
            <div className="grid mt-2">
              <label htmlFor="">Email : </label>
              <div className="bg-slate-300 p-1">
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  name="email"
                  value={data.email}
                  onChange={handleOnChange}
                  required
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
                  name="password"
                  value={data.password}
                  onChange={handleOnChange}
                  required
                  className="w-full h-full outline-none bg-transparent"
                />
                <div
                  className="cursor-pointer text-xl"
                  onClick={() => setShowPassword((prev) => !prev)}
                >
                  <span>{showPassword ? <FaEyeSlash /> : <FaEye />}</span>
                </div>
              </div>
              <Link
                to="/forgot-password"
                className="block w-fit ml-auto hover:underline text-blue-600 hover:text-purple-700"
              >
                Forgot Password ?
              </Link>
            </div>
            <button className="text-white bg-blue-600 w-full px-5 py-2 rounded mt-2 hover:bg-blue-800 transition mx-auto">
              Login
            </button>
          </form>
          <p className="my-4 ">
            Don't have an account?{" "}
            <Link
              to={"/sign-up"}
              className="text-blue-600 hover:underline hover:text-purple-600"
            >
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Login;
