import React from "react";
import { useSelector } from "react-redux";
import ItemForm from "../ItemForm/ItemForm";
import "./CategoryMovies.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setSelectedCategory, updateCategory } from "../../Redux/Actions";

function CategoryMovies() {
  const categoryDetails = useSelector((state) => state.selectedCategory);
  const [movieName, setMovieName] = useState("");
  const [movieDescription, setMovieDescription] = useState("");
  const [editMovie, setEditMovie] = useState(null);

  const dispatch = useDispatch();

  const dispatcher = (moviesList) => {
    dispatch(
      setSelectedCategory({
        id: categoryDetails.id,
        name: categoryDetails.name,
        description: categoryDetails.description,
        movies: moviesList,
      })
    );
    dispatch(
      updateCategory({
        id: categoryDetails.id,
        name: categoryDetails.name,
        description: categoryDetails.description,
        movies: moviesList,
      })
    );
    setMovieName("");
    setMovieDescription("");
    setEditMovie(null);
  };

  const handleNameChange = (e) => {
    setMovieName(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setMovieDescription(e.target.value);
  };

  const handleAddSubmit = (e) => {
    e.preventDefault();
    if (movieName === "") {
      return null;
    } else {
      const moviesList = [
        ...categoryDetails.movies,
        {
          id: parseInt(Math.random() * 100),
          name: movieName,
          description: movieDescription,
        },
      ];

      dispatcher(moviesList);
    }
  };

  const handleDelete = (id) => {
    const moviesList = categoryDetails.movies;
    const newMoviesList = moviesList.filter((item) => item.id !== id);
    dispatcher(newMoviesList);
  };

  const handleEdit = (movie) => {
    setEditMovie(movie);
    setMovieName(movie.name);
    setMovieDescription(movie.description);
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
    const movies = categoryDetails.movies;
    const newMovies = movies.map((item) => {
      if (item.id === editMovie.id) {
        const updatedItem = {
          id: editMovie.id,
          name: movieName,
          description: movieDescription,
          rate: editMovie.rate,
        };
        return updatedItem;
      }
      return item;
    });
    dispatcher(newMovies);
  };

  return (
    <div>
      <ItemForm
        handleNameChange={handleNameChange}
        handleDescriptionChange={handleDescriptionChange}
        handleSubmit={editMovie ? handleEditSubmit : handleAddSubmit}
        name={movieName}
        description={movieDescription}
        title={editMovie ? "Save" : "Create"}
      />
      <div className="movies-list">
        {categoryDetails.movies.map((movie) => (
          <div key={movie.id}>
            <div className="movies-row">
              <div className="movies-row-child">
                <i className="fas fa-bars"></i>
                <h5>{movie.name}</h5>
              </div>
              <div>
                <button
                  className="edit-button"
                  onClick={() => handleEdit(movie)}
                >
                  Edit
                </button>
                <button
                  className="delet-button"
                  onClick={() => handleDelete(movie.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CategoryMovies;
