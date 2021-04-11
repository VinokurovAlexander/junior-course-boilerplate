import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: "Open Sans", sans-serif;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
      monospace;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;

const Button = styled.button`
  display: inline-block;

  box-sizing: border-box;
  width: 100%;
  padding: 9px 15px;

  border: 1px solid #323c48;
  background-color: transparent;
  color: #323c48;
  text-align: center;
  cursor: pointer;
  transition: opacity ease-in 0.3s, border-color ease-in 0.3s, color ease-in 0.3s;
  outline: none;

  font-size: 14px;
  font-weight: 400;

  &:hover {
    opacity: 0.7;
  }

  &:disabled {
    pointer-events: none;
  }
`

export { GlobalStyle, Button };
