import React from "react";
import { connect } from "react-redux";
import { selectEmail } from "../actions/emailActions"; // Import the selectEmail action
import { formatDateTime } from "../utils/dateTimeFormator";

const EmailItem = ({ email, selectEmail, selectedEmail }) => {
  const handleEmailClick = (email) => {
    // Dispatch the action to select the email
    selectEmail(email);
  };

  // Check if an email is selected
  const isSelected = (selectedEmail, emailToCheck) => {
    return selectedEmail && selectedEmail.id === emailToCheck.id;
  };

  return (
    <div
      key={email.id}
      className={`email-item ${email.isFavorite ? "favorite" : ""} ${
        email.isRead ? "read" : "unread"
      } ${isSelected(selectedEmail, email) ? "selected" : ""} ${
        email.isRead ? "read" : ""
      } `}
      onClick={() => handleEmailClick(email)} // Handle click on the email item
    >
      <div className="avatar">{email.from.name.charAt(0).toUpperCase()}</div>
      <div className="content">
        <div className="sender">
          From: <span>{`${email.from.name} <${email.from.email}>`}</span>
        </div>
        <div className="subject">
          Subject: <span>{email.subject}</span>
        </div>
        <div className="description">{email.short_description}</div>
        <div className="date-time">
          {formatDateTime(email.date)}
          <span className="favoriteLabel">
            {email.isFavorite ? "Favorite" : null}
          </span>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = {
  selectEmail,
};

export default connect(null, mapDispatchToProps)(EmailItem);
