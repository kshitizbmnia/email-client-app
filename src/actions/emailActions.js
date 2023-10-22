import {
  FETCH_EMAILS,
  FILTER_EMAILS,
  SELECT_EMAIL,
  TOGGLE_FAVORITE,
  TOGGLE_FILTER,
} from "../constants";

// Action to fetch all emails
export const fetchEmails = () => {
  return async (dispatch) => {
    try {
      const response = await fetch("https://flipkart-email-mock.now.sh/");
      const emails = (await response.json()).list;
      dispatch({
        type: FETCH_EMAILS,
        payload: emails,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const toggleFavorite = (emailId) => {
  return {
    type: TOGGLE_FAVORITE,
    payload: emailId,
  };
};

// Action to filter emails
export const filterEmails = (filterType) => {
  return {
    type: FILTER_EMAILS,
    payload: filterType,
  };
};

export const selectEmail = (email) => {
  return {
    type: SELECT_EMAIL,
    payload: email,
  };
};

export const toggleFilter = (filter) => ({
  type: TOGGLE_FILTER,
  payload: filter,
});
