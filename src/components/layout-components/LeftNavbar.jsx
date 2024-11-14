import React, { useEffect, useState } from "react";

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
          <button
            key={cat.category_id}
            className="btn bg-base-100 border-none w-full"
          >
            {cat.category_name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default LeftNavbar;
