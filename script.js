const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

(function () {
  const today = new Date();
  const day = today.getDay();
  const utcTime = today.toUTCString();
  const weekday = weekdays[day];

  document.getElementById("currentDayOfTheWeek").textContent = weekday;

  document.getElementById("UTC").textContent = utcTime;
})();
