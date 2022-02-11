import React, { useContext } from "react";
import { useCalendarInformation } from "../../hooks/useCalendarInfo";
import { Calendar as Container } from "./Calendar.styles";
import { Context } from "./Context";
import Day from "./Day/Day";
import Days from "./Days/Days";
import Header from "./Header/Header";

function Calendar() {
  const { year, month } = useContext(Context);
  const { days, pastDays } = useCalendarInformation(year, month);

  return (
    <Container>
      <Header />
      <Days>
        {pastDays.map((day, index) => (
          <Day key={index} day={day} isPast />
        ))}
        {days.map((day, index) => (
          <Day key={index} day={day} />
        ))}
      </Days>
    </Container>
  );
}

export default Calendar;
