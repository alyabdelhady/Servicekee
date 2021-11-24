import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./AddCategory.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addCategory } from "../../Redux/Actions";
import ItemForm from "../ItemForm/ItemForm";

function AddCategory() {
  const [categoryName, setCategoryName] = useState("");
  const [categoryDescription, setCategoryDescription] = useState("");

  const dispatch = useDispatch();

  const handleNameChange = (e) => {
    setCategoryName(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setCategoryDescription(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (categoryName === "") {
      return null;
    } else {
      dispatch(
        addCategory({
          id: parseInt(Math.random() * 1000),
          name: categoryName,
          description: categoryDescription,
          movies: [],
        })
      );
    }
    setCategoryName("");
    setCategoryDescription("");
  };

  return (
    <div className="add-category container">
      <h5>Add Category</h5>
      <ItemForm
        handleNameChange={handleNameChange}
        handleDescriptionChange={handleDescriptionChange}
        handleSubmit={handleSubmit}
        name={categoryName}
        description={categoryDescription}
        title={"Create Category"}
      />
    </div>
  );
}

export default AddCategory;
