import styled from "styled-components";

export const Button = styled.button`
  border-radius: 999px;
  background-color: var(--primary-color);
  color: var(--secondary-color);
  padding: 8px 16px;
  font-size: 18px;
  font-weight: 600;
  font-family: inherit;
  border: none;
  cursor: pointer;
  box-shadow: 0px 3px 0px #836d2a;

  &&:active {
    box-shadow: none;
    transform: translateY(2px);
  }
`;