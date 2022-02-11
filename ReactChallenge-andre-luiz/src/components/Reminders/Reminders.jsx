import React from "react";
import Reminder from "./Reminder/Reminder";
import { Reminders as RemindersContainer } from "./Reminders.styles";

function Reminders({ reminders, day }) {
  if (!reminders) return <></>;
  return (
    <RemindersContainer>
      {reminders.map((reminder) => (
        <Reminder day={day} key={reminder.id} {...reminder} />
      ))}
    </RemindersContainer>
  );
}

export default Reminders;
