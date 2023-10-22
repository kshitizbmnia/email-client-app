import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { toggleFavorite } from "../actions/emailActions";
import { formatDateTime } from "../utils/dateTimeFormator";

const EmailBody = ({ selectedEmail, toggleFavorite }) => {
  const [emailBody, setEmailBody] = useState(null);

  useEffect(() => {
    // Fetch the email body content based on the selected email ID
    fetch(`https://flipkart-email-mock.now.sh/?id=${selectedEmail.id}`)
      .then((response) => response.json())
      .then((data) => {
        setEmailBody(data.body);
      })
      .catch((error) => {
        console.error("Error fetching email body:", error);
      });
  }, [selectedEmail]);

  const handleFavoriteClick = () => {
    // Dispatch the action to toggle the selected email's favorite status
    toggleFavorite(selectedEmail.id);
  };

  return (
    <div className="email-body">
      <div className="email-subject email-actions">
        <div className="avatar">
          {selectedEmail.from.name.charAt(0).toUpperCase()}
        </div>
        {selectedEmail.subject}
        <button onClick={handleFavoriteClick} className="favorite-button">
          {selectedEmail.isFavorite ? "Remove Favorite" : "Mark as Favorite"}
        </button>
      </div>
      <div className="email-date-time">
        {formatDateTime(selectedEmail.date)}
      </div>
      <div
        className="email-content"
        dangerouslySetInnerHTML={{ __html: emailBody }}
      />
    </div>
  );
};

const mapDispatchToProps = {
  toggleFavorite,
};

export default connect(null, mapDispatchToProps)(EmailBody);
