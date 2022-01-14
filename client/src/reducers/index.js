import serverReducer from "./server";
import { combineReducers } from 'redux';
import cryptoReducer from "./crypto";
import tickersReducer from "./tickers";
import fundsReducer from "./funds";

const rootReducer = combineReducers({
  server: serverReducer,
  crypto: cryptoReducer,
  tickers: tickersReducer,
  funds: fundsReducer
})

export default rootReducer;