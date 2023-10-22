import { combineReducers } from "redux";
import emailReducer from "./emailReducer"; // Import your email-related reducer

// Combine and export the reducers
const rootReducer = combineReducers({
  emails: emailReducer, // You can add more reducers here if needed
});

export default rootReducer;
