import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const LeftNavbar = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("https://openapi.programming-hero.com/api/news/categories")
      .then((response) => response.json())
      .then((data) => setCategories(data.data.news_category));
  }, []);
  return (
    <div>
      <h2 className="text-xl font-semibold">
        All Category ({categories.length})
      </h2>
      <div className="flex flex-col items-start space-y-3">
        {categories.map((cat) => (
          <NavLink
            to={`/category/${cat.category_id}`}
            key={cat.category_id}
            className="btn bg-base-100 border-none w-full"
          >
            {cat.category_name}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default LeftNavbar;
