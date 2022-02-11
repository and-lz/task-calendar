import React from "react";
import styled from "styled-components";

const DaysContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(5, 1fr);
  grid-gap: 0px;
  height: calc(100vh - 10rem);
  grid-gap: 1px;
`;

function Days({ children }) {
  return <DaysContainer>{children}</DaysContainer>;
}

export default Days;
