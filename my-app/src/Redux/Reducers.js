export const setCategories = (state = [], action) => {
  switch (action.type) {
    case "SET-CATEGORIES-LIST":
      return (state = action.payload);
    case "ADD-CATEGORY":
      return (state = [...state, action.payload]);
    case "UPDATE-CATEGORY":
      return (state = state.map((item) => {
        if (item.id === action.payload.id) {
          const updatedItem = {
            id: action.payload.id,
            name: action.payload.name,
            description: action.payload.description,
            movies: action.payload.movies,
          };
          return updatedItem;
        }
        return item;
      }));
    default:
      return state;
  }
};

export const selectedCategory = (state = null, action) => {
  switch (action.type) {
    case "SET-SELECTED-CATEGORY":
      return (state = action.payload);
    case "CLEAR-SELECTED-CATEGORY":
      return (state = null);

    default:
      return state;
  }
};
