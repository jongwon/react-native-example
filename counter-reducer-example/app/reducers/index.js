import { combineReducers } from "redux";

import counter from "./Counter";

const reducers = combineReducers({
  counter,
});

export * from "./Counter";
export * from "react-redux";

export default reducers;
