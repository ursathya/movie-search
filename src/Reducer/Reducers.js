import { combineReducers } from 'redux';
import  RecommendedReducer  from "./RecommendedReducer"



export default combineReducers({
   // user : RecommendedReducer.user,
    Movies:RecommendedReducer
})