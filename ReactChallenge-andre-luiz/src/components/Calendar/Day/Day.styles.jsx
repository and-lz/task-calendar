import styled from "styled-components";
import { colors } from "../../../constants";

export const DayContainer = styled.div`
  font-size: 30px;
  max-height: 100%;
  padding: 0.5rem 1rem;
  box-shadow: 0 0 0 1px ${colors["Light Cyan"]};
  background-color: ${colors.White};
  overflow: auto;
  cursor: pointer;
  &.is-past {
    opacity: 0.25;
    pointer-events: none;
  }
  .title {
    font-size: 1.6rem;
    color: ${colors.Claret};
    font-weight: 600;
  }
  &:hover {
    background: ${colors["Light Gray"]};
  }
`;