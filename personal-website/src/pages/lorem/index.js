import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
// import backgroundImage from './home-bg.png';

const FullSection = styled.section`
  background-color: black;
  height: calc(100vh - 24px);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
`;

export const Lorem = () => {
  return (
    <div>
      <FullSection>
        <h1>
          Hi,
          <br />
          I'm Reza
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut <Link to="/lorem">aliquip</Link>.
        </p>
      </FullSection>
    </div>
  );
};
