import {
  legacy_createStore as createStore,
  applyMiddleware,
  combineReducers,
} from "redux";
import thunk from "redux-thunk";
import emailReducer from "./reducers/emailReducer";

// Combine reducers if you have multiple reducers
const rootReducer = combineReducers({
  emails: emailReducer,
});

// Create the Redux store
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
