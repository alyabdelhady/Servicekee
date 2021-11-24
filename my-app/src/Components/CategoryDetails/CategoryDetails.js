import React from "react";
import { useSelector } from "react-redux";
import "./CategoryDetails.css";
import CategoryMovies from "../CategoryMovies/CategoryMovies";

function CategoryDetails() {
  const categoryDetails = useSelector((state) => state.selectedCategory);

  return (
    <div className="category-info container">
      <div className="category-child">
        <div>
          <h5>Name</h5>
          <h6>{categoryDetails.name}</h6>
        </div>
        <div>
          <h5>Description</h5>
          <h6>{categoryDetails.description}</h6>
        </div>
      </div>
      <div className="section-movies">
        <h5>Movies</h5>
        <CategoryMovies />
      </div>
    </div>
  );
}

export default CategoryDetails;
