import React, { useContext } from "react";
import { Context } from "../Context";
import {
  CalendarHeader as CalendarHeaderContainer,
  Input,
  Inputs,
  Select,
  Title,
} from "./Header.styles";

function Header({ children }) {
  const { year, month, setMonth, setYear } = useContext(Context);
  return (
    <>
      <CalendarHeaderContainer>
        <Title>Sun</Title>
        <Title>Mon</Title>
        <Title>Tue</Title>
        <Title>Wed</Title>
        <Title>Thu</Title>
        <Title>Fri</Title>
        <Title>Sat</Title>
      </CalendarHeaderContainer>
      <Inputs>
        <Input
          type="text"
          defaultValue={year}
          placeholder="year"
          onChange={(e) => setYear(e.target.value)}
        />
        <Select
          type="text"
          defaultValue={month}
          placeholder="month"
          onChange={(e) => setMonth(e.target.value)}
        >
          <option value={0}>Jan</option>
          <option value={1}>Feb</option>
          <option value={2}>Mar</option>
          <option value={3}>Apri</option>
          <option value={4}>May</option>
          <option value={5}>Jun</option>
          <option value={6}>Jul</option>
          <option value={7}>Ago</option>
          <option value={8}>Sep</option>
          <option value={9}>Oct</option>
          <option value={10}>Nov</option>
          <option value={11}>Dez</option>
        </Select>
      </Inputs>
    </>
  );
}

export default Header;
