import styled from "styled-components";
import { css } from "styled-components";
import { colors } from "../../../constants";

const sharedProps = css`
  color: ${colors.White};
  text-transform: uppercase;
  font-weight: 100;
`;

export const Title = styled.span`
  ${sharedProps};
  padding: 1rem;
  font-size: 2rem;
  margin-top: 5rem;
`;

export const CalendarHeader = styled.div`
  display: grid;
  height: 10rem;
  grid-template-columns: repeat(7, 1fr);
  grid-gap: 1px;
  background: ${colors["Dark Purple"]};
`;

export const Inputs = styled.div`
  position: absolute;
  z-index: 9;
  top: 0.5rem;
  display: flex;
  width: 100%;
  padding: 0.5rem 1rem;
`;

export const Input = styled.input`
  color: white;
  font-size: 3rem;
  flex: 0;
  width: 7.6rem;
  ${sharedProps};
`;

export const Select = styled.select`
  color: white;
  font-size: 3rem;
  flex: 0;
  width: 7rem;
  ${sharedProps};
`;