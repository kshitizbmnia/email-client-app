import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchEmails, filterEmails } from "../actions/emailActions"; // Import actions
import EmailItem from "./EmailItem";
import FilterOptions from "./FilterOptions";

const EmailList = ({
  selectedEmail,
  emails,
  fetchEmails,
  filterEmails,
  filter,
}) => {
  useEffect(() => {
    // Fetch emails when the component mounts
    fetchEmails();
  }, [fetchEmails]);

  const filteredEmails = emails.filter((email) => {
    if (filter === "all") {
      return true; // Show all emails
    } else if (filter === "read") {
      return email.isRead; // Show only read emails
    } else if (filter === "favorites") {
      return email.isFavorite; // Show only favorite emails
    } else if (filter === "unread") {
      return !email.isRead; // Show only favorite emails
    }
  });
  console.log(emails);
  return (
    <div className="email-list">
      <FilterOptions />
      {filteredEmails?.map((email) => (
        <EmailItem key={email.id} email={email} selectedEmail={selectedEmail} />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  emails: state.emails.emails,
  filter: state.emails.filter,
});

export default connect(mapStateToProps, { fetchEmails, filterEmails })(
  EmailList
);
