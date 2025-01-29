const _ = require("lodash");
const moment = require("moment");

const holidays = [
  { name: "Christmas", date: "2025-12-25" },
  { name: "Canada Day", date: "2025-07-01" },
  { name: "New Year", date: "2025-01-01" },
  { name: "Thanksgiving", date: "2025-10-13" },
];

function daysUntilHoliday(dateString) {
  const today = moment();
  const holidayDate = moment(dateString);
  return holidayDate.diff(today, "days");
}

console.log("Days until each holiday:");
holidays.forEach((holiday) => {
  console.log(`${holiday.name}: ${daysUntilHoliday(holiday.date)} days`);
});

const randomHoliday = _.sample(holidays);
console.log("\nRandom Holiday:", randomHoliday);

const indexes = _.map(["Christmas", "Canada Day"], (holidayName) =>
  _.findIndex(holidays, { name: holidayName })
);
console.log("\n");
console.log("Indexes of 'Christmas' and 'Canada Day':", indexes);
