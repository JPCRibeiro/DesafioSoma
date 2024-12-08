import styled from "styled-components";

export const Title = styled.div`
  background-image: radial-gradient(400px 80px at 0 top, #a78210, #0000);
  padding: 20px 20px 0 40px;
  font-weight: 600;

  div {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  svg {
    color: var(--primary-color);
    font-size: 28px;
  }

  h2 {
    font-size: 30px;
    text-shadow: 1px 2px 4px #000;
    font-weight: 600;
    line-height: 40px;
  }

  p {
    padding-top: 8px;
  }
`;
