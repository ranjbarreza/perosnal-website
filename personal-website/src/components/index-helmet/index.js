import React from 'react';
import { Helmet } from 'react-helmet';

// import picture from './picture.png'

export const IndexHelmet = () => {
  return (
    <Helmet>
      <html lang="en" />
      {/* <meta name="og:site_name" content="rezaranjbar.com" /> */}
      <meta name="og:title" content="Reza Ranjbar personal website" />
      <meta
        name="og:description"
        content="This website is a personal CRA project of Reza Ranjbar"
      />
      <meta name="og:type" content="website" />
      {/* <meta name="og:image" content={picture} /> 
      <meta name="og:image:type" content="image/png" />
      <meta name="og:image:width" content="512" />
      <meta name="og:image:height" content="512" /> */}
    </Helmet>
  );
};
