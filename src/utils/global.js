import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle` 
  *,
  *::before,
  *::after {
      box-sizing: border-box;
  }
  
  body {    
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};    
    margin: 0;
    padding: 0;
    font-family: BlinkMacSystemFont, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
    transition: color .2s ease-in, background-color .2s ease-out;
  }`;
