import serverReducer from "./server";
import { combineReducers } from 'redux';
import cryptoReducer from "./crypto";

const rootReducer = combineReducers({
  server: serverReducer,
  crypto: cryptoReducer
})

export default rootReducer;