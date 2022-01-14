import serverReducer from "./server";
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  server: serverReducer
})

export default rootReducer;