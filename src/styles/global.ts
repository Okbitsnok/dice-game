import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    outline: none;
  }

  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Arial', sans-serif;
    background: linear-gradient(to right, #0C0B1E, #2A0F3B, #0C0B1E);

  }

  #__next {
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  p {
    margin: 0;
    color: ${(props) => props.theme.colors.white};
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
    color: ${(props) => props.theme.colors.white};
  }
  
  label,
  span {
    color: ${(props) => props.theme.colors.white};
  }

  ul,
  ol {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  
  input {
    margin: 0;
    padding: 0;
  }
  
  button {
    border: none;
  }

  a {
    text-decoration: none;
  }
`;
