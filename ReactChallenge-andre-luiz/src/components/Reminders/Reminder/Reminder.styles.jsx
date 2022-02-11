import styled from "styled-components";
import { css } from "styled-components";
import { colors } from "../../../constants";

export const Reminder = styled.li`
  font-size: 0.8rem;
  margin-bottom: 0.25rem;
  opacity: 0.7;
  padding: 0.2rem 0.1rem;
  border-left: 3px solid ${colors["Turquoise Green"]};
  padding-left: 0.7rem;
  margin-left: -1rem;
  margin-right: -1rem;
  border-radius: 3px;
  &.is-editing {
    background: ${colors["Light Cyan"]};
    border: 1px solid ${colors["Turquoise Green"]};
    border-left: 3px solid ${colors["Turquoise Green"]};
  }
`;

export const Input = styled.input`
  display: block;
  width: 100%;
`;

export const Time = styled.span`
  font-size: 0.7rem;
  font-weight: bold;
  letter-spacing: -0.05rem;
`;

export const Title = styled.span`
  font-size: 0.8rem;
  display: inline;
  letter-spacing: -0.02rem;
`;

const icons = css`
  font-size: 0.5rem;
  margin-right: 0.2rem;
`;
export const City = styled.span`
  font-size: 0.6rem;
  display: block;
  text-transform: uppercase;
  margin-top: 0.1rem;
  font-weight: 700;
  letter-spacing: -0.02rem;
  &::before {
    content: "📍";
    ${icons};
  }
`;

export const Weather = styled.div`
  font-size: 0.6rem;
  text-transform: uppercase;
  letter-spacing: -0rem;
  display: block;
  font-weight: 700;
  &::before {
    content: "🌤";
    ${icons};
  }
`;
