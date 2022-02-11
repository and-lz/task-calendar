import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

export const Context = React.createContext();

function CalendarContext({ children }) {
  const today = new Date();

  const initialState = JSON.parse(localStorage.getItem("reminders")) || [];
  const [reminders, setReminders] = useState(initialState);
  const [year, setYear] = useState(today.getFullYear());
  const [month, setMonth] = useState(today.getMonth());

  useEffect(() => {
    localStorage.setItem("reminders", JSON.stringify(reminders));
  }, [reminders]);

  useEffect(() => {
    document.title = `${year} Calendar`;
  }, [year, month]);

  function createReminderOnDay(day) {
    const newReminder = [
      ...reminders,
      {
        id: uuidv4(),
        date: new Date(year, month, day).getTime(),
        time: `${addPadToTime(new Date().getHours())}:${addPadToTime(
          new Date().getMinutes("mm")
        )}`,
        title: "New reminder",
        city: "",
      },
    ];
    setReminders(newReminder);
  }

  function removeReminder(id) {
    let newReminders = [...reminders];
    newReminders = newReminders.filter((reminder) => reminder.id !== id);
    newReminders = [...newReminders];
    setReminders(newReminders);
    return newReminders;
  }

  function addPadToTime(time) {
    return String(time).padStart(2, 0);
  }

  function getRemindersByDay(day) {
    return reminders?.filter(
      (reminder) => reminder.date === new Date(year, month, day).getTime()
    );
  }

  function updateReminder(id, reminder) {
    let newReminders = removeReminder(id);
    newReminders = [...newReminders, reminder];
    setReminders(newReminders);
  }

  return (
    <>
      <Context.Provider
        value={{
          createReminderOnDay,
          getRemindersByDay,
          month,
          reminders,
          removeReminder,
          setMonth,
          setReminders,
          setYear,
          updateReminder,
          year,
        }}
      >
        {children}
      </Context.Provider>
    </>
  );
}

export default CalendarContext;
