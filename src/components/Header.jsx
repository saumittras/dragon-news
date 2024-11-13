import React from "react";
import logo from "../assets/logo.png";
import moment from "moment/moment";
const Header = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="logo pt-5 pb-4">
        <img className="w-[400px] h-16" src={logo} alt="" />
      </div>
      <h2 className="text-[#706F6F] text-lg font-normal font-poppins">
        Journalism Without Fear or Favour
      </h2>
      <p className="text-xl font-medium">
        {moment().format("dddd, MMMM Do YYYY")}
      </p>
    </div>
  );
};

export default Header;
