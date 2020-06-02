import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const FullSection = styled.section`
  background-color: ${({ theme }) => theme.palette.mediumBLue.color};
  height: calc(100vh - 24px);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  padding: ${({ theme }) => theme.spacing(20)};
`;

const ScrambledLink = styled.a`
  color: ${({ theme }) => theme.palette.mySinYellowOrange.color};
  font-weight: bolder;
`;

export const Work = () => {
  return (
    <div>
      <FullSection>
        <p>
          Since September 2019, I am working at{' '}
          <ScrambledLink href="https://scrambled.com" target="_blank" rel="noopener noreferrer">
            Scrambled
          </ScrambledLink>{' '}
          as a junior developer.
        </p>
        <p style={{ textAlign: 'center', padding: '0 50px' }}>
          I work on different projects such as Creassist, a Google Assistant applications prototype;
          FromSam, data driven beauty sampling; and Scrambled's new brand website (soon to go live).{' '}
          Days mostly start with a quick standup sharing what we did the day before and the plans
          for the new day. Coding independently or reviewing a pull request comes next.
          <br />
          The technologies I use frequently at Scrambled are: HTML, CSS, Javascript, React,
          TypeScript, Node.js, PosgreSQL, Git, Docker, Storybook, Bootstrap, Material UI, and React
          Gatsby.
        </p>
        <p style={{ textAlign: 'right' }}>
          There are also other programs I learned while <Link to="/study">studying</Link>.
        </p>
      </FullSection>
    </div>
  );
};
