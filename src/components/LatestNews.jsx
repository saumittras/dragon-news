import React from "react";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const LatestNews = () => {
  return (
    <div className="flex items-center justify-center gap-2 bg-gray-200 p-2">
      <p className="bg-[#D72050] text-xl px-6 py-2 inline-block text-base-100">
        Latest
      </p>
      <Marquee pauseOnHover={true} className="space-x-10">
        <Link to="/news">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam,
          voluptatem?
        </Link>
        <Link to="/news">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam,
          voluptatem?
        </Link>
        <Link to="/news">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam,
          voluptatem?
        </Link>
      </Marquee>
    </div>
  );
};

export default LatestNews;
