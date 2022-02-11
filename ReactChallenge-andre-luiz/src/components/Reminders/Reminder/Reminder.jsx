import React, { useContext, useState } from "react";
import { useWeatherInfo } from "../../../hooks/useWeatherInfo";
import { Context } from "../../Calendar/Context";
import {
  City,
  Input,
  Reminder as RemindContainer,
  Time,
  Title,
  Weather,
} from "./Reminder.styles";

function Reminder({ id, title, time, city, day }) {
  const { updateReminder, removeReminder, year, month } = useContext(Context);
  const [isEditMode, setEditMode] = useState(!title);

  const { weatherMessage } = useWeatherInfo({
    day,
    year,
    month,
    city,
  });

  const [newReminder, setNewReminder] = useState({
    id,
    time,
    city,
    title,
    date: new Date(year, month, Number(day)).getTime(),
  });

  function handleBlur(e) {
    updateReminder(id, newReminder);
    e.target.placeholder === "city" && setEditMode(false);
  }

  function handleClick(e) {
    e.stopPropagation();
    setEditMode(true);
  }

  function handleDoubleClick() {
    removeReminder(id);
  }

  if (isEditMode) {
    return (
      <RemindContainer
        className={isEditMode && "is-editing"}
        key={title}
        tabIndex="0"
        onClick={(e) => handleClick(e)}
      >
        <Input
          defaultValue={newReminder.time}
          onDoubleClick={handleDoubleClick}
          onBlur={handleBlur}
          type="time"
          placeholder="time"
          onChange={(e) =>
            setNewReminder({ ...newReminder, time: e.target.value })
          }
        />
        <Input
          onChange={(e) =>
            setNewReminder({ ...newReminder, title: e.target.value })
          }
          autoFocus
          defaultValue={newReminder.title}
          onDoubleClick={handleDoubleClick}
          onBlur={handleBlur}
          maxLength={30}
          placeholder="title"
        />
        <Input
          defaultValue={newReminder.city}
          onDoubleClick={handleDoubleClick}
          onBlur={handleBlur}
          placeholder="city"
          onChange={(e) =>
            setNewReminder({ ...newReminder, city: e.target.value })
          }
        />
      </RemindContainer>
    );
  }

  return (
    <RemindContainer key={title} tabIndex="0" onClick={(e) => handleClick(e)}>
      {time && <Time>{time}</Time>} <Title>{title}</Title>
      {city && (
        <>
          <City>{city}</City>
          {weatherMessage && <Weather> {weatherMessage}</Weather>}
        </>
      )}
    </RemindContainer>
  );
}

export default Reminder;
