import React, { useState } from "react";
import { connect } from "react-redux";
import { filterEmails } from "../actions/emailActions";

const FilterOptions = ({ filter, filterEmails }) => {
  const [selectedButton, setSelectedButton] = useState("");

  const handleFilterChange = (value) => {
    if (filter === value) {
      filterEmails("all");
      setSelectedButton("all");
    } else {
      filterEmails(value);
      setSelectedButton(value);
    }
  };

  return (
    <div className="filter-options">
      <label>Filter By:</label>
      <button
        className={`button ${
          selectedButton === "unread" ? "buttonSelected" : ""
        }`}
        onClick={() => handleFilterChange("unread")}
      >
        Unread
      </button>

      <button
        className={`button ${
          selectedButton === "read" ? "buttonSelected" : ""
        }`}
        onClick={() => handleFilterChange("read")}
      >
        Read
      </button>

      <button
        className={`button ${
          selectedButton === "favorites" ? "buttonSelected" : ""
        }`}
        onClick={() => handleFilterChange("favorites")}
      >
        Favorites
      </button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  filter: state.emails.filter,
});

export default connect(mapStateToProps, { filterEmails })(FilterOptions);
