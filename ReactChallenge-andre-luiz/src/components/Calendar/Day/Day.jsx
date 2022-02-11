import React, { useContext } from "react";
import Reminders from "../../Reminders/Reminders";
import { Context } from "../Context";
import { DayContainer } from "./Day.styles";

function Day({ day, isPast }) {
  const { createReminderOnDay, getRemindersByDay } = useContext(Context);

  const reminders = getRemindersByDay(day);

  function handleClick() {
    createReminderOnDay(day);
  }

  return (
    <DayContainer
      onClick={handleClick}
      tabIndex={0}
      className={isPast && "is-past"}
    >
      <span className="title">{day}</span>
      {!isPast && <Reminders day={day} reminders={reminders} />}
    </DayContainer>
  );
}

export default Day;
