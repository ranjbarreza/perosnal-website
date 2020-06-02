import styled, { css } from 'styled-components';

const defaultStyles = css`
  font-family: 'Gudea', sans-serif;
  line-height: 1.2em;
  font-weight: normal;
  margin-block-start: 0;
  margin-block-end: 0;
  color: ${({ theme }) => theme.palette.white.color};
`;

export const H3 = styled.h3`
  ${defaultStyles}
  font-size: 1.75rem;

  ${({ theme }) => theme.breakpoint.up.md} {
    font-size: 2rem;
  }
`;

export const H5 = styled.h5`
  ${defaultStyles}
  font-size: 0.75rem;

  ${({ theme }) => theme.breakpoint.up.md} {
    font-size: 1rem;
  }
`;
