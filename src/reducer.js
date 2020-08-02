export const initialState = {
  basket: [],
  user: null,
};

// the data layer is refered with state, and is manipulated using actions eg. Add item to basket
const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "ADD_TO_BASKET":
      // Logic for adding item to basket
      return {
        ...state,
        basket: [...state.basket, action.item],
      };

    case "REMOVE_FROM_BASKET":
      // Logic for removing item from basket
      return { state };

    default:
      return state;
  }
};

export default reducer;
