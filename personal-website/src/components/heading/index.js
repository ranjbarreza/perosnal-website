import styled, { css } from 'styled-components';

const defaultStyles = css`
  font-family: 'Gudea', sans-serif;
  line-height: 1.2em;
  font-weight: normal;
  margin-block-start: 0;
  margin-block-end: 0;
  color: ${({ theme }) => theme.palette.white.color};
`;

export const H1 = styled.h1`
  ${defaultStyles}
  font-size: 2.375rem;

  ${({ theme }) => theme.breakpoint.up.sm} {
    font-size: 2.625rem;
  }

  ${({ theme }) => theme.breakpoint.up.md} {
    font-size: 3rem;
  }
`;

export const H2 = styled.h2`
  ${defaultStyles}
  font-size: 1.75rem;

  ${({ theme }) => theme.breakpoint.up.md} {
    font-size: 2.25rem;
  }
`;

export const H3 = styled.h3`
  ${defaultStyles}
  font-size: 1.25rem;

  ${({ theme }) => theme.breakpoint.up.md} {
    font-size: 1.5rem;
  }
`;

export const H4 = styled.h4`
  ${defaultStyles}
  font-size: 1rem;

  ${({ theme }) => theme.breakpoint.up.md} {
    font-size: 1.25rem;
  }
`;

export const H5 = styled.h5`
  ${defaultStyles}
  font-size: 0.75rem;

  ${({ theme }) => theme.breakpoint.up.md} {
    font-size: 1rem;
  }
`;

export const H6 = styled.h6`
  ${defaultStyles}
  font-size: 0.5rem;

  ${({ theme }) => theme.breakpoint.up.md} {
    font-size: 0.75rem;
  }
`;
