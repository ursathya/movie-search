import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import combineReducers from "./Reducer/Reducers";
import { composeWithDevTools } from 'redux-devtools-extension';

const middleware = [thunk];
const initialState = {};
const store = createStore(
     combineReducers,
  initialState,
  composeWithDevTools(
    applyMiddleware(...middleware)
  )
);

export default store;
