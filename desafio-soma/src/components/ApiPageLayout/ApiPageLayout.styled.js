import styled from "styled-components"

export const PageContainer = styled.section`
  width: 100%;
  padding: 30px;
`

export const CardBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;

  div {
    border-radius: 5px;
    box-shadow: 1px 10px 15px #000000a3;
    padding: 20px;
    text-align: center;
    max-width: 500px;
    width: 100%;
    border: 2px solid var(--primary-color);
    display: flex;
    flex-direction: column;
    gap: 10px;

    h3 {
      font-size: 24px;
    }

    h4 {
      color: var(--primary-color);
      font-size: 18px;
    }
  }
`

export const Loader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;

  span {
    width: 10px;
    height: 10px;
    margin: 0 5px;
    background-color: var(--primary-color);
    border-radius: 50%;
    animation: bounce 1s infinite;
  }

  span:nth-child(2) {
    animation-delay: 0.2s;
  }

  span:nth-child(3) {
    animation-delay: 0.4s;
  }

  @keyframes bounce {
    40% {
      transform: translateY(-15px);
    }
  }
`