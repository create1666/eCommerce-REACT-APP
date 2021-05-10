import { createStore, combineReducers, applyMiddleware } from "redux";
import {composeWithDevTools} from 'redux-devtools-extension'
import logger from "redux-logger";
import thunk from 'redux-thunk'
import CartReducer from "./reducers/CartReducer";
import ProductReducer from "./reducers/ProductReducer";

const reducers = combineReducers({
  products: ProductReducer,
  cart: CartReducer,
});

const middlewares = [thunk, logger]

const store = createStore(reducers, composeWithDevTools(applyMiddleware(...middlewares)));

export default store;


