import React from "react";
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const SocalLogin = () => {
  return (
    <div className="border-2 border-dashed p-3">
      <h2 className="text-xl font-bold mb-3">Login With</h2>
      <div className=" flex flex-col gap-y-2">
        <button className="w-full gap-2 btn bg-transparent  border-2 flex justify-center items-center text-lg font-semibold">
          <FaGoogle></FaGoogle>
          <span>Login With Google</span>
        </button>
        <button className="w-full gap-2 btn bg-transparent  border-2 flex justify-center items-center text-lg font-semibold">
          <FaGithub></FaGithub>
          <span>Login With GitHub</span>
        </button>
      </div>
    </div>
  );
};

export default SocalLogin;
