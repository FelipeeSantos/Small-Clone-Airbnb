import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    outline: 0;
    padding: 0;
  }
  
  html {
    font-size: 62.5% !important;
  }

  body {
    -webkit-font-smoothing: antialiased !important;
  }

  button {
    cursor: pointer;
  }
 
`;
