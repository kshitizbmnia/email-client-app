import {
  FETCH_EMAILS,
  FILTER_EMAILS,
  SELECT_EMAIL,
  TOGGLE_FAVORITE,
  TOGGLE_FILTER,
} from "../constants";

const initialState = {
  emails: [],
  filter: "all", // Initial filter (can be 'all', 'favorite', 'read', 'unread')
  selectedEmail: null,
};

const emailReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_EMAILS:
      return {
        ...state,
        emails: action.payload,
      };

    case TOGGLE_FAVORITE:
      const updatedSelectedEmail = { ...state.selectedEmail };
      updatedSelectedEmail.isFavorite = !updatedSelectedEmail.isFavorite;

      return {
        ...state,
        selectedEmail: updatedSelectedEmail,
        emails: state.emails.map((email) =>
          email.id === updatedSelectedEmail.id ? updatedSelectedEmail : email
        ),
      };

    case FILTER_EMAILS:
      return {
        ...state,
        filter: action.payload,
      };

    case SELECT_EMAIL:
      const selectedEmail = { ...action.payload, isRead: true };
      const updatedEmails = state.emails.map((email) =>
        email.id === selectedEmail.id ? selectedEmail : email
      );

      return {
        ...state,
        selectedEmail,
        emails: updatedEmails,
      };

    case TOGGLE_FILTER:
      return {
        ...state,
        filter: action.payload,
      };

    default:
      return state;
  }
};

export default emailReducer;
