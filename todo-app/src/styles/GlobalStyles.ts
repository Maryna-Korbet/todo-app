import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  body {
    width: 100vw;
    height: 100vh;
    justify-content: center;
    align-items: start;
    margin: 0;
    font-family: "Caveat", cursive;
    font-weight: 700;
    font-style: normal;
    font-size: 50px;
    background-image: url('/src/assets/images/background.jpg');
    background-size: cover; 
    color: #ac8150;
  }
`;