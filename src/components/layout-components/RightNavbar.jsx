import React from "react";
import SocalLogin from "../SocalLogin";
import SocalLink from "../SocalLink";

const RightNavbar = () => {
  return (
    <div>
      <div>
        <SocalLogin></SocalLogin>
      </div>

      <div>
        <SocalLink></SocalLink>
      </div>
    </div>
  );
};

export default RightNavbar;
