import React from 'react';
import { Helmet } from 'react-helmet';
import { H1 } from '../../components';
import styled from 'styled-components';

const FullSection = styled.section``;

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
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip.
        </p>
      </FullSection>
    </div>
  );
};
