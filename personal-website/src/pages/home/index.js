import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import backgroundImage from './homepage.jpg';
import { ReactComponent as Greetings } from './greeting-svg.svg';
import './greeting-svg.css';

const FullSection = styled.section`
  background-image: url(${backgroundImage});
  background-color: ${({ theme }) => theme.palette.black.color};
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
          content={'Reza Ranjbar, junior developer, personal create react app website'}
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
      <FullSection>
        <Greetings
          className={showAutograph ? 'active' : ''}
          style={{ width: '30vmin', height: '30vmin', margin: '150px' }}
        />
        <HomeParagraph>
          I'm a junior web developer. I strive for growing and getting results. The journey is long,
          but I'm dedicated as hell.
          <br /> <br />
          Now, let me tell you about <Link to="/project">this website</Link>.
        </HomeParagraph>
      </FullSection>
    </div>
  );
};
