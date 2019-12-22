import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getQuotes } from "../src/redux/actions/quoteAction";

import "./App.css";
import CardQuote from "./components/CardQuote";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getQuotes());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="App">
      <CardQuote />
    </div>
  );
}

export default App;
