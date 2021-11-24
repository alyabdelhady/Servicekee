import React from "react";
import "./ItemForm.css";

function ItemForm(props) {
  return (
    <div>
      <form onSubmit={props.handleSubmit}>
        <input
          className="category-name"
          type="text"
          value={props.name}
          placeholder="English Name"
          onChange={props.handleNameChange}
        />
        <textarea
          className="category-description"
          name=""
          id=""
          cols="30"
          rows="1"
          placeholder="English Description"
          value={props.description}
          onChange={props.handleDescriptionChange}
        ></textarea>
        <button className="btn btn-success">{props.title} </button>
      </form>
    </div>
  );
}

export default ItemForm;
