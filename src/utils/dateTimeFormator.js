export const formatDateTime = (dateString) => {
  // Parse the date string into a Date object
  const date = new Date(dateString);

  // Create options for formatting
  const options = {
    day: "2-digit", // Two-digit day
    month: "2-digit", // Two-digit month
    year: "numeric", // Four-digit year
    hour: "2-digit", // Two-digit hour
    minute: "2-digit", // Two-digit minute
    hour12: true, // Use 12-hour clock (am/pm)
  };

  // Format the date and time
  return date.toLocaleString("en-US", options);
};
