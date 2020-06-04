import React from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import backgroundImage from './project.jpg';
import { PageLayout } from '../../components';
import { Helmet } from 'react-helmet';

const ProjectPageLayout = styled(PageLayout)`
  background-image: url(${backgroundImage});
  background-color: ${({ theme }) => theme.palette.blueGray.color};
`;

const paragraphDefaults = css`
  ${({ theme }) => theme.breakpoint.down.sm} {
    margin: 0;
    padding: ${({ theme }) => theme.spacing(1)};
    width: 100%;
  }

  ${({ theme }) => theme.breakpoint.up.sm} {
    width: 32%;
    position: absolute;
    bottom: 0;
  }
`;

const LeftParagraph = styled.p`
  ${paragraphDefaults}
  left: 0;
  padding-left: ${({ theme }) => theme.spacing(13)};
  padding-bottom: ${({ theme }) => theme.spacing(40)};
  text-align: left;
`;

const RightParagraph = styled.p`
  ${paragraphDefaults}
  right: 0;
  padding-right: ${({ theme }) => theme.spacing(13)};
  padding-bottom: ${({ theme }) => theme.spacing(20)};
  text-align: right;

  ${({ theme }) => theme.breakpoint.down.sm} {
    color: ${({ theme }) => theme.palette.black.color};
    position: absolute;
    bottom: 0;
    right: 0;
    padding-right: ${({ theme }) => theme.spacing(2)};
    padding-bottom: ${({ theme }) => theme.spacing(8)};
    width: 95%;
    a {
      color: ${({ theme }) => theme.palette.black.color};
    }
  }
`;

export const Project = () => {
  return (
    <div>
      <Helmet>
        <title>Reza Ranjbar | This project</title>
      </Helmet>
      <ProjectPageLayout>
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
          and style rules declared globally. Check out{' '}
          <a
            href="https://github.com/ranjbarreza/personal-website"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>{' '}
          for this project or see my other <Link to="/work">hands-on experiences</Link>.
        </RightParagraph>
      </ProjectPageLayout>
    </div>
  );
};
