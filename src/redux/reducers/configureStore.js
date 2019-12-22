import rootReducer from "./index";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";

const middleware = applyMiddleware(thunk, logger);
const configureStore = () => createStore(rootReducer, middleware);

export default configureStore;
