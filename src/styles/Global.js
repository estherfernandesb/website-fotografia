import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  :root {
    --primary: #0D0D0D;     
    --secondary: #D9D7CC;   
    --text: #F2EFE9;        
    --background: #000000;  
    --white: #FFFFFF;       
    --third:rgb(150, 150, 150);        
    --bege: #A69580;     
    --ciano:rgb(168, 174, 175);       
  }

  body {
    background-color: var(--background);
    color: var(--text);
    font-family: "Cinzel", serif;
    font-weight: 400;
    font-style: normal;
    font-size: 16px;
  }

  ul {
    list-style: none;
  }

  a {
    text-decoration: none;
  }
`;