import React from "react";
import * as data from "../Movies-Data.json";
import { useDispatch } from "react-redux";
import { setCategories } from "../../Redux/Actions";
import CategoriesList from "../CategoriesList/CategoriesList";
import "./MoviesData.css"
function Movies() {
  const dispatch = useDispatch();

  dispatch(setCategories(data.default.categories));

  return (
    <div className="movie-data container">
      <CategoriesList />
    </div>
  );
}

export default Movies;
