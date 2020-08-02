export const initialState = {
  basket: [
    {
      id: "124545",
      title:
        "The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses Paperback",
      image:
        "https://images-na.ssl-images-amazon.com/images/I/41Um2UPO1yL._SX325_BO1,204,203,200_.jpg",
      price: 11.96,
      rating: 5,
    },
    {
      id: "124545",
      title:
        "The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses Paperback",
      image:
        "https://images-na.ssl-images-amazon.com/images/I/41Um2UPO1yL._SX325_BO1,204,203,200_.jpg",
      price: 11.96,
      rating: 5,
    },
  ],
  user: null,
};

// the data layer is refered with state, and is manipulated using actions eg. Add item to basket
const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_BASKET":
      // Logic for adding item to basket
      return {
        ...state,
        basket: [...state.basket, action.item],
      };

    case "REMOVE_FROM_BASKET":
      // Logic for removing item from basket
      let newBasket = [...state.basket];

      const index = state.basket.findIndex(
        (basketItems) => basketItems.id === action.id
      );

      if (index >= 0) {
        // item exits in basket, remove it...
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `Can't remove product (id: ${action.id}) as its non-existent`
        );
      }

      return { ...state, basket: newBasket };

    default:
      return state;
  }
};

export default reducer;
