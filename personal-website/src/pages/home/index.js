import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';

const FullSection = styled.section``;

export const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Reza Ranjbar personal website</title>
        <meta name="description" content={'Reza Ranjbar personal create react app website'} />
        <meta
          name="keywords"
          content="Reza, Ranjbar, Reza Ranjbar, developer, web developer, web, IT, software developer, frontend, frontend developer"
        />
        <meta name="og:title" content={'Reza Ranjbar personal website'} />
        <meta name="og:description" content={'Reza Ranjbar personal create react app website'} />
      </Helmet>
      <FullSection>
        <h1>Hi</h1>
        <p>I'm Reza</p>
      </FullSection>
    </div>
  );
};
