function formatDate(isoString, withTime = false) {
  const date = new Date(isoString);

  // Full weekday, month, day, year
  const options = {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  };
  const formattedDate = date.toLocaleDateString("en-US", options);

  if (!withTime) return formattedDate;

  // Get hours and minutes
  let hours = date.getHours();
  const minutes = String(date.getMinutes()).padStart(2, "0");

  // Determine AM/PM
  const ampm = hours >= 12 ? "PM" : "AM";

  // Convert to 12-hour format
  hours = hours % 12;
  hours = hours ? hours : 12; // 0 → 12

  const formattedTime = `${hours}:${minutes}${ampm}`;

  return `${formattedDate} at ${formattedTime}`;
}

export default formatDate;
