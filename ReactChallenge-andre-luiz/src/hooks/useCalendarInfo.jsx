export function useCalendarInformation(pickedYear, pickedMonth) {
  function daysInMonth(year, month) {
    var dateObj = new Date(year, month);
    return new Date(dateObj.getFullYear(), dateObj.getMonth() + 1, 0).getDate();
  }
  function getArrayOfDays() {
    let days = [...Array(daysInMonth(pickedYear, pickedMonth)).keys()];
    days = days.map((day) => day + 1);
    return days;
  }
  function getArrayOfPastDays() {
    const ONE_MONTH = 1;
    const amountOfPastDays = new Date(pickedYear, pickedMonth, 1).getDay();
    const amountOfDaysInPreviousMonth = daysInMonth(
      pickedYear,
      pickedMonth - ONE_MONTH
    );
    let pastDays = new Array(amountOfPastDays).fill(
      amountOfDaysInPreviousMonth
    );
    pastDays = pastDays.map((day, index) =>
      new Date(
        pickedYear,
        pickedMonth - ONE_MONTH,
        day - (pastDays.length - index) + 1
      ).getDate()
    );

    return pastDays;
  }
  function getMonthsNames() {
    return {
      0: "Jan",
      1: "Fev",
      2: "Mar",
      3: "Apr",
      4: "May",
      5: "Jun",
      6: "Jul",
      7: "Ago",
      8: "Sep",
      9: "Out",
      10: "Nov",
      11: "Dec",
    };
  }
  return {
    days: getArrayOfDays(),
    pastDays: getArrayOfPastDays(),
    monthsNames: getMonthsNames(),
  };
}
