import React from "react";
import "./App.css";
import AddCategory from "./Components/AddCategory/AddCategory";
import MoviesData from "./Components/MoviesData/MoviesData";

function App() {
  return (
    <div className="App">
      <AddCategory />
      <MoviesData/>
    </div>
  );
}

export default App;
