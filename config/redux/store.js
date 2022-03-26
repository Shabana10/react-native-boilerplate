import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import userReducers from "./reducers/userreducer";

const rootReducer = combineReducers({userReducers})
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
