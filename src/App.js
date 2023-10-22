import React from "react";
import { Provider } from "react-redux";
import store from "./store"; // Import your Redux store
import EmailList from "./components/EmailList";
import EmailBody from "./components/EmailBody";
import { connect } from "react-redux";
import "./App.css";

const App = ({ selectedEmail }) => {
  return (
    <Provider store={store}>
      <div className="container">
        <EmailList selectedEmail={selectedEmail} />
        {selectedEmail && <EmailBody selectedEmail={selectedEmail} />}
      </div>
    </Provider>
  );
};

const mapStateToProps = (state) => {
  return {
    selectedEmail: state.emails.selectedEmail, // Access selectedEmail from the Redux store
  };
};

export default connect(mapStateToProps)(App);
