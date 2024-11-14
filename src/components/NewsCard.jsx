import React from "react";
import { FaShareAlt } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";
import { BsEye } from "react-icons/bs";

const NewsCard = ({ news }) => {
  console.log(news);
  const { author, date, title, thumbnail_url, summary, rating, views } = news;
  return (
    <div className="max-w-full mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      {/* Header with Author Info */}
      <div className="flex items-center p-4">
        <img
          className="w-10 h-10 rounded-full"
          src={author.img}
          alt={author.name}
        />
        <div className="ml-3">
          <h3 className="text-gray-800 font-semibold">{author.name}</h3>
          <p className="text-gray-500 text-sm">
            {new Date(date).toLocaleDateString()}
          </p>
        </div>
        <button className="ml-auto text-gray-500 hover:text-gray-800">
          <FaShareAlt size={20} />
        </button>
      </div>

      {/* Title */}
      <h2 className="px-4 py-2 text-lg font-bold text-gray-800">{title}</h2>

      {/* Image */}
      <img
        className="w-full h-[262px] object-fill"
        src={thumbnail_url}
        alt="Article Thumbnail"
      />

      {/* Content Preview */}
      <div className="p-4">
        <p className="text-gray-600 text-sm mb-2">{summary}</p>
        <button className="text-red-500 font-semibold hover:underline">
          Read More
        </button>
      </div>

      {/* Rating and Views */}
      <div className="flex items-center justify-between p-4 border-t">
        <div className="flex items-center text-yellow-500">
          <AiFillStar size={20} />
          <span className="ml-1 font-semibold text-gray-700">
            {/* {rating.toFixed(1)} */}
          </span>
        </div>
        <div className="flex items-center text-gray-500">
          <BsEye size={20} />
          <span className="ml-1 font-semibold">{views}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
