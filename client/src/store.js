import rootReducer from "./reducers";
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

const composeEnhancers = typeof window!=='undefined' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose: compose;
const store = createStore(rootReducer,composeEnhancers(applyMiddleware(thunk)));

export default store;