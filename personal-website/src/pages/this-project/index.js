import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import backgroundImage from './project.jpg';

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
    padding-bottom: ${({ theme }) => theme.spacing(40)};
    text-align: left;
  }
`;

const RightParagraph = styled.p`
  ${({ theme }) => theme.breakpoint.up.sm} {
    width: 32%;
    position: absolute;
    right: 0;
    bottom: 0;
    padding-right: ${({ theme }) => theme.spacing(13)};
    padding-bottom: ${({ theme }) => theme.spacing(20)};
    text-align: right;
  }
`;

export const Project = () => {
  return (
    <div>
      <FullSection>
        <LeftParagraph>
          This website is a single page application made with create-react-app as a personal
          project. It is deployed with Surge, a free static web publishing service. For styling, I'm
          using styled components and I have created all the icons used in this project in Figma.
          The autograph on the homepage is made with SVG Artista. This project is also made SEO and
          social media friendly with React Helmet.
        </LeftParagraph>
        <RightParagraph>
          The structure of this project consists of a pages directory for the skeleton of each page,
          a components directory for repetitive components, and a custom-styles directory for themes
          and style rules declared globally. I also have other{' '}
          <Link to="/work">hands-on experiences</Link>.
        </RightParagraph>
      </FullSection>
    </div>
  );
};
