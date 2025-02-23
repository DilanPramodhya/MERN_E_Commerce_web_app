import React from "react";
import Logo from "./Logo";
import { FcSearch } from "react-icons/fc";
import { FaCircleUser } from "react-icons/fa6";
import { FaCartArrowDown } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import SummaryApi from "../common";
import { toast } from "react-toastify";
import { setUserDetails } from "../store/userSlice";

const Header = () => {
  const user = useSelector((state) => state?.user?.user);
  const dispatch = useDispatch();

  // console.log("user header", user);

  const handleLogout = async () => {
    const fetchData = await fetch(SummaryApi.logout_user.url, {
      method: SummaryApi.logout_user.method,
      credentials: "include",
    });

    const data = await fetchData.json();

    if (data.success) {
      toast.success(data.message);
      dispatch(setUserDetails(null));
    }
    if (data.error) {
      toast.error(data.message);
    }
  };
  return (
    <header className="shadow-md bg-white">
      <div className="h-full container mx-auto flex items-center px-4 justify-between">
        <div className="">
          <Link to="/">
            <Logo w={120} h={60} onClick={() => {}} />
          </Link>
        </div>

        <div className="flex items-center w-full justify-between max-w-sm border rounded-md focus-within:shadow pl-6">
          <input
            type="text"
            placeholder="Search products"
            className="w-full outline-none ml-6"
          />
          <div className="text-xl min-w-[80px] w-12 flex items-center -mr-6">
            <FcSearch />
          </div>
        </div>

        <div className="flex items-center gap-7">
          <div className="text-5xl cursor-pointer">
            {user?.profilePic ? (
              <img
                src={user?.profilePic}
                alt={user?.name}
                className="w-10 h-10 rounded-full"
              />
            ) : (
              <FaCircleUser />
            )}
          </div>
          <div className="text-4xl cursor-pointer relative">
            <span>
              <FaCartArrowDown />
            </span>
            <div className="bg-red-600 text-white w-4 h-5 rounded-full p-1 flex items-center justify-center absolute -top-2 -right-2">
              <p className="text-sm">0</p>
            </div>
          </div>

          <div>
            {user?._id ? (
              <button
                onClick={handleLogout}
                className="px-4 py-2 rounded-full text-white bg-blue-600 hover:bg-blue-800"
              >
                Logout
              </button>
            ) : (
              <Link
                to="/login"
                className="px-4 py-2 rounded-full text-white bg-blue-600 hover:bg-blue-800"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
