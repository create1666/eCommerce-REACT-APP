import axios from "axios";

export const fetchProduct = () => async (dispatch) => {
  dispatch({ type: "FETCH_PRODUCT_LOADING" });

  try {
    const results = await axios("https://fakestoreapi.com/products");
    dispatch({ type: "FETCH_PRODUCT_SUCCESS", payload: results.data });
  } catch (err) {
    dispatch({ type: "FETCH_PRODUCT_ERROR", payload: err.message });
  }
};
