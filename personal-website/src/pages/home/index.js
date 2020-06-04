import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import backgroundImage from './homepage.jpg';
import { ReactComponent as Greeting } from './greeting-svg.svg';
import './greeting-svg.css';
import { PageLayout } from '../../components';

const HomePageLayout = styled(PageLayout)`
  background-image: url(${backgroundImage});
  background-color: ${({ theme }) => theme.palette.black.color};
`;

const HomeParagraph = styled.p`
  padding: ${({ theme }) => theme.spacing(5, 1)};
  margin: 0;

  ${({ theme }) => theme.breakpoint.up.sm} {
    width: 32%;
    position: absolute;
    right: 0;
    bottom: 0;
    padding-right: ${({ theme }) => theme.spacing(13)};
    padding-bottom: ${({ theme }) => theme.spacing(23)};
    text-align: right;
  }
`;

const AutographGreeting = styled(Greeting)`
  width: 30vmin;
  height: 30vmin;
  margin: ${({ theme }) => theme.spacing(19)};
  ${({ theme }) => theme.breakpoint.down.sm} {
    margin: auto;
    margin-top: ${({ theme }) => theme.spacing(8)};
  }
`;

export const Home = () => {
  const [showAutograph, setShowAutograph] = useState(false);

  useEffect(() => {
    setInterval(() => {
      setShowAutograph(true);
    }, 100);
  }, []);

  return (
    <div>
      <Helmet>
        <title>Reza Ranjbar | Homepage</title>
        <meta
          name="description"
          content={'Reza Ranjbar, junior developer, personal resume website'}
        />
        <meta
          name="keywords"
          content="Reza, Ranjbar, Reza Ranjbar, developer, web developer, web, IT, software developer, frontend, frontend developer"
        />
        <meta name="og:title" content={'Reza Ranjbar personal website'} />
        <meta
          name="og:description"
          content={'Reza Ranjbar, junior developer, personal create react app website'}
        />
      </Helmet>
      <HomePageLayout>
        <AutographGreeting className={showAutograph ? 'active' : ''} />
        <HomeParagraph>
          I'm a junior web developer. I strive for growing and getting results. The journey is long,
          but I'm dedicated as hell.
          <br /> <br />
          Now, let me tell you about <Link to="/project">this website</Link>.
        </HomeParagraph>
      </HomePageLayout>
    </div>
  );
};
