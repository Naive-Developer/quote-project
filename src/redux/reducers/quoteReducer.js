import * as ActionTypes from "../actions/actionTypes";
import { initalState, addQuoteData } from "./initalState";

export const quoteReducer = (state = initalState, action) => {
  switch (action.type) {
    case ActionTypes.GET_QUOTE_FETCHING:
      return [{ ...state[0], fetching: true }];
    case ActionTypes.GET_QUOTE_ERROR:
      return [{ ...state[0], error: true, fetching: false }];
    case ActionTypes.GET_QUOTE_FETCHED:
      return [
        { ...state[0], fetching: false, error: false, quotes: action.payload }
      ];

    default:
      return state;
  }
};

export const saveQuoteReducer = (state = addQuoteData, action) => {
  switch (action.type) {
    case ActionTypes.SAVE_QUOTE_DATA:
      const addState = [...state];
      addState.push(action.payload);
      console.log("AddState: ", addState);
      return [...addState];

    default:
      return state;
  }
};
