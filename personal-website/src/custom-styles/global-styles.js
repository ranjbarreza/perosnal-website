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

  p{
    line-height: 140%;
    font-size: 1.3rem;
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
