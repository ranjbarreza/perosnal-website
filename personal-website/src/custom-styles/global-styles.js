import { createGlobalStyle, withTheme } from 'styled-components';
import { createElement } from 'react';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
  }

  body {
    background-color: ${({ theme }) => theme.palette.white.color};
    color: ${({ theme }) => theme.palette.white.color};
    border-color: ${({ theme }) => theme.palette.white.color};
    border-width: ${({ theme }) => theme.spacing(1.5)};
    border-style: solid;
    margin: 0;
    font-family: 'Barlow', sans-serif;
    font-weight: 400;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: 'Gudea', sans-serif;
  }

  a {
    color: ${({ theme }) => theme.palette.white.color}
  }

  *,
  *:after,
  *:before {
    box-sizing: border-box;
  }
 
`;

export const GlobalStylesComponent = withTheme(({ theme }) =>
  createElement(GlobalStyle, { theme }),
);
