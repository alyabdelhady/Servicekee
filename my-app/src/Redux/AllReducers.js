import { combineReducers } from "redux";
import { setCategories } from "./Reducers";
import { selectedCategory } from "./Reducers";
export const allReducers = combineReducers({
  setCategories: setCategories,
  selectedCategory: selectedCategory,
});
