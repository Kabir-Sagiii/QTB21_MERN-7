import { legacy_createStore, applyMiddleware } from "redux";
import myReducer from "../reducer/myReducer";
import logger from "redux-logger";

let mystore = legacy_createStore(myReducer, applyMiddleware(logger));

export default mystore;
