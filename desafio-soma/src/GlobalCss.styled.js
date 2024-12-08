import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --primary-color: #DBA90D;
    --secondary-color: #0c0d0e; 
  }

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  html, body {
    height: 100%;
    width: 100%;
}

  body {
    background-color: var(--secondary-color);
    color: white;
    font-family: "Poppins", sans-serif;
  }

  #root {
    height: 100%;
  }

  img {
    user-select: none;
  }
`