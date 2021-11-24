import React from "react";
import { useSelector } from "react-redux";
import "./CategoriesList.css";
import { useDispatch } from "react-redux";
import { setSelectedCategory } from "../../Redux/Actions";
import CategoryDetails from "../CategoryDetails/CategoryDetails";
import { clearSelectedCategory } from "../../Redux/Actions";

function CategoriesList() {
  const categoriesList = useSelector((state) => state.setCategories);
  const selectedCategory = useSelector((state) => state.selectedCategory);

  const dispatch = useDispatch();

  const handleSelectedCategory = (category) => {
    dispatch(setSelectedCategory(category));
    if (selectedCategory && category.id === selectedCategory.id) {
      dispatch(clearSelectedCategory());
    } else {
      return null;
    }
  };

  return (
    <div className="category-list container">
      <h3>Movies Data</h3>
      {categoriesList.map((category) => (
        <div key={category.id}>
          <div
            className="category-row"
            onClick={() => handleSelectedCategory(category)}
          >
            <i className="fas fa-bars"></i>
            <h5>{category.name}</h5>
          </div>
          {selectedCategory && selectedCategory.id === category.id ? (
            <CategoryDetails />
          ) : null}
        </div>
      ))}
    </div>
  );
}

export default CategoriesList;
