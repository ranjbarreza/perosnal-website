import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import backgroundImage from './project-bg.png';

const FullSection = styled.section`
  background-image: url(${backgroundImage});
  background-color: ${({ theme }) => theme.palette.blueGray.color};
  height: calc(100vh - 24px);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
`;

const LeftParagraph = styled.p`
  ${({ theme }) => theme.breakpoint.up.sm} {
    width: 32%;
    position: absolute;
    left: 0;
    bottom: 0;
    padding-left: ${({ theme }) => theme.spacing(13)};
    padding-bottom: ${({ theme }) => theme.spacing(46)};
    text-align: left;
    font-size: 1.3rem;
  }
`;

const RightParagraph = styled.p`
  ${({ theme }) => theme.breakpoint.up.sm} {
    width: 32%;
    position: absolute;
    right: 0;
    bottom: 0;
    padding-right: ${({ theme }) => theme.spacing(13)};
    padding-bottom: ${({ theme }) => theme.spacing(23)};
    text-align: right;
    font-size: 1.3rem;
  }
`;

export const Project = () => {
  return (
    <div>
      <FullSection>
        <LeftParagraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip.
        </LeftParagraph>
        <RightParagraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut <Link to="/work">aliquip</Link>.
        </RightParagraph>
      </FullSection>
    </div>
  );
};
