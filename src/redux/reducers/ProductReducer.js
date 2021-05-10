const initialState = {
  data: [],
  loading: false,
  error: null,
};

const ProductReducer = (state = initialState, action) => {
  const { type } = action;
  if (type === "FETCH_PRODUCT_LOADING") {
    return {
      ...state,
      loading: true,
    };
  } else if (type === "FETCH_PRODUCT_SUCCESS") {
    return {
      ...state,
      loading: false,
      data: action.payload,
    };
  } else if (type === "FETCH_PRODUCT_ERROR") {
      console.log(action.payload, 'ejtiti')
    return {
      ...state,
      loading: false,
      error: action.payload,
    };
  } else {
      return state
  }
};

export default ProductReducer
