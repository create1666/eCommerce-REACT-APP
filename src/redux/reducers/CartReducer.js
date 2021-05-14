const CartReducer = (state = [], action) => {
  const { type } = action;

  //   switch (type) {
  //     case 'ADD_TO_CART': {
  //       const item = state.find((item) => item.id === action.payload.id);
  //       console.log(item, "item already incart");

  //       if (item) {
  //         const newCartItems = state.map((item) => {
  //           if (item.id === action.payload.id) {
  //             return {
  //               ...item,
  //               quantity: item.quantity + 1,
  //             };
  //           } else {
  //             return item;
  //           }
  //         });

  //         return newCartItems;
  //       }

  //       const newItem = {
  //         ...action.payload,
  //         quantity: 1,
  //       };

  //       return [...state, newItem];
  //     }

  //     case 'REMOVE_FROM_CART': {

  //     }

  //     default:
  //       return state;
  //   }
  if (type === "ADD_TO_CART") {
    const item = state.find((item) => item.id === action.payload.id);
    console.log(item, "item already incart");

    if (item) {
      const newCartItems = state.map((item) => {
        if (item.id === action.payload.id) {
          return {
            ...item,
            quantity: item.quantity + 1,
          };
        } else {
          return item;
        }
      });

      return newCartItems;
    }

    const newItem = {
      ...action.payload,
      quantity: 1,
    };

    return [...state, newItem];
  } else if (type === "REMOVE_FROM_CART") {
    const itemExist = state.find((item) => item.id === action.payload.id);

    if (itemExist) {
      const newFilteredItems = state.filter((item) => {
        return item.id !== action.payload.id;
      });
      return newFilteredItems;
    }
  } else if (type === "INC_QUANTITY") {
    const newCartItems = state.map((item) => {
      if (item.id === action.payload.id) {
        return {
          ...item,
          quantity: item.quantity + 1,
        };
      } else {
        return item;
      }
    });

    return newCartItems;
  } else if (type === "DEC_QUANTITY") {
    const newCartItems = state.map((item) => {
      if (item.id === action.payload.id) {
        return {
          ...item,
          quantity: item.quantity <= 1 ? 1 : item.quantity - 1,
        };
      } else {
        return item;
      }
    });

    return newCartItems;
  } else if (type === "DELETE_CART_ITEM_ROW") {
    const filteredCart = state.filter((item) => {
      return item.id !== action.payload.id;
    });

    return filteredCart;
  } else {
    return state;
  }
};

export default CartReducer;
