import { combineReducers } from "redux";
import { quoteReducer, saveQuoteReducer } from "./quoteReducer";

const rootReducer = combineReducers({
  quoteReducer,
  saveQuoteReducer
});

export default rootReducer;
