import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { reducer } from "./cart/reducer";

const loggerMiddleware = (store) => (next) => (action) => {
    console.log(action.payload)
  const { id,name, datetime, statusCode, requests, response, componentName } =
    action.payload;
  const logEntry = {
    name:name||id,
    datetime,
    statusCode,
    requests,
    response,
    componentName,
  };
  delete action.payload.datetime;
  delete action.payload.statusCode;
  delete action.payload.requests;
  delete action.payload.response;
  delete action.payload.componentName;
  console.log("Redux Log:", Object.values(logEntry).join("     -     "));
  return next(action);
};

const rootReducer = combineReducers({
  reducer,
});
export const store = legacy_createStore(
  rootReducer,
  applyMiddleware(thunk,loggerMiddleware)
);
