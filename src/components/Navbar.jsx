import React from "react";
import { Link } from "react-router-dom";
import userIcon from "../assets/user.png";

const Navbar = () => {
  return (
    <div className="flex justify-between">
      <div className=""></div>
      <div className="nav space-x-5">
        <Link className="text-lg text-[#706F6F] font-normal" to="/">
          Home
        </Link>
        <Link to="/career">Career</Link>
        <Link to="/about">About</Link>
      </div>
      <div className="login flex items-center gap-2">
        <div className="">
          <img src={userIcon} alt="" />
        </div>
        <button className="btn btn-neutral rounded-none px-10 text-xl font-semibold">
          Login
        </button>
      </div>
    </div>
  );
};

export default Navbar;
