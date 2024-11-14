import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";

const SocalLink = () => {
  return (
    <div className="socal-link mt-5 border-2 border-dashed p-3">
      <div>
        <h2 className="text-xl font-bold mb-3">Find Us On</h2>
      </div>
      <div className="join join-vertical w-full">
        <button className="btn bg-transparent join-item w-full flex justify-start">
          <span className="text-lg">
            <FaFacebook></FaFacebook>
          </span>
          Facebook
        </button>
        <button className="btn text-xl join-item bg-transparent flex justify-start">
          <span className="text-lg">
            <FaXTwitter className="text-xl"></FaXTwitter>
          </span>{" "}
          Twitter
        </button>
        <button className="btn join-item bg-transparent flex justify-start ">
          <span>
            <FaInstagramSquare></FaInstagramSquare>
          </span>
          Instagram
        </button>
      </div>
    </div>
  );
};

export default SocalLink;
