import * as ActionTypes from "./actionTypes";

export const saveQuoteData = quotes => {
  return {
    type: ActionTypes.SAVE_QUOTE_DATA,
    payload: quotes
  };
};

export const quoteFetching = () => {
  return {
    type: ActionTypes.GET_QUOTE_FETCHING
  };
};

export const quoteFetchError = () => ({
  type: ActionTypes.GET_QUOTE_ERROR
});

export const quoteFetched = quotes => {
  return {
    type: ActionTypes.GET_QUOTE_FETCHED,
    payload: quotes
  };
};

export const getQuotes = () => {
  return async dispatch => {
    dispatch(quoteFetching());

    try {
      const quotes = await (
        await fetch("https://random-math-quote-api.herokuapp.com/")
      ).json();
      console.log("quotes: ", quotes);
      dispatch(quoteFetched(quotes));
    } catch (error) {
      dispatch(quoteFetchError());
    }
  };
};
