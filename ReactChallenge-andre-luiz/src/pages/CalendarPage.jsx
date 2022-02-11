import React from "react";
import Calendar from "../components/Calendar/Calendar";
import CalendarContext from "../components/Calendar/Context";

function CalendarPage() {
  return (
    <CalendarContext>
      <Calendar />
    </CalendarContext>
  );
}

export default CalendarPage;
