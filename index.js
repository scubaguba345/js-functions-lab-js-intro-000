function happyHolidays() {
  return "Happy holidays!"
  happyHolidays();
}
function happyHolidaysTo (name) {
    return "Happy holidays, " + `${name}` + "!";
    return `Happy holidays, ${name}!`;
  }

  function happyCustomHolidayTo (holiday, name) {
    return "Happy " + `${holiday}` + ", " + `${name}` + "!";
    return `Happy ${holiday}, ${name}!`;
  }

  function holidayCountdown (holiday, days) {
    return "It's " + `${days}` + " days until " + `${holiday}` + "!";
    return `It's ${days} days until ${holiday}!`;
  }
