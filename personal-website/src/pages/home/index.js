import React from 'react';
import { Helmet } from 'react-helmet';
import { H1 } from '../../components';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import backgroundImage from './home-bg.png';

const FullSection = styled.section`
  background-image: url(${backgroundImage});
  background-color: black;
  height: calc(100vh - 24px);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
`;

const HomeParagraph = styled.p`
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

export const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Reza Ranjbar | Homepage</title>
        <meta name="description" content={'Reza Ranjbar personal create react app website'} />
        <meta
          name="keywords"
          content="Reza, Ranjbar, Reza Ranjbar, developer, web developer, web, IT, software developer, frontend, frontend developer"
        />
        <meta name="og:title" content={'Reza Ranjbar personal website'} />
        <meta name="og:description" content={'Reza Ranjbar personal create react app website'} />
      </Helmet>
      <FullSection>
        <H1>
          Hi,
          <br />
          I'm Reza
        </H1>
        <HomeParagraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut <Link to="/project">aliquip</Link>.
        </HomeParagraph>
      </FullSection>
    </div>
  );
};
