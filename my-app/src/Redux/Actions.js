export const setCategories = (categories) => {
  return {
    type: "SET-CATEGORIES-LIST",
    payload: categories,
  };
};

export const addCategory = (category) => {
  return {
    type: "ADD-CATEGORY",
    payload: category,
  };
};
export const updateCategory = (category) => {
  return {
    type: "UPDATE-CATEGORY",
    payload: category,
  };
};
export const setSelectedCategory = (selectedCategory) => {
  return {
    type: "SET-SELECTED-CATEGORY",
    payload: selectedCategory,
  };
};
export const clearSelectedCategory = () => {
  return {
    type: "CLEAR-SELECTED-CATEGORY",
  };
};
