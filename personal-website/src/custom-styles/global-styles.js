import { createGlobalStyle, withTheme } from 'styled-components';
import { createElement } from 'react';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
  }

  body {
    background-color: ${({ theme }) => theme.palette.black.color};
    color: ${({ theme }) => theme.palette.white.color};
    border-color: ${({ theme }) => theme.palette.white.color};
    border-width: ${({ theme }) => theme.spacing(1.5)};
    border-style: solid;
    margin: 0;
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
