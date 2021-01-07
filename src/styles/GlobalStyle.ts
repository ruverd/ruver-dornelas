import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: #191919;
    color: #f1f1f1;
    font-family: 'Sora', sans-serif;
  }

  a, button {
    cursor: pointer;
  }
`;
