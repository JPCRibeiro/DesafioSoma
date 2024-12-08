import styled from "styled-components";

export const HomeContainer = styled.div`
  padding: 3rem 1rem 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  border: 6px solid var(--primary-color);
  border-style: double;
  min-height: 100%;

  h3 {
    font-size: 22px;
  }

  p {
    font-size: 18px;
  }

  section {
    max-width: 1340px;
    margin-top: 4rem;
    display: flex;
    flex-wrap: wrap;
    gap: 5rem;
    justify-content: center;
  }

  a {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    color: var(--primary-color);
    text-decoration: none;
    transition: transform 200ms ease-out;
  }

  a:hover {
    transform: scale(1.1);
  }

  img {
    width: 90%;
  }

  span {
    font-size: 22px;
    font-weight: 700;
  }
`

export const Logo = styled.img`
  margin-bottom: 30px;
  width: 240px !important;
`