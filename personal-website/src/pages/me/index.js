import React from 'react';
import styled from 'styled-components';
import backgroundImage from './me-bg.png';
import { Helmet } from 'react-helmet';

const FullSection = styled.section`
  background-image: url(${backgroundImage});
  background-color: ${({ theme }) => theme.palette.mySinYellowOrange.color};
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
    padding-bottom: ${({ theme }) => theme.spacing(46)};
    text-align: left;
  }
`;

const ContactTable = styled.table`
  ${({ theme }) => theme.breakpoint.up.sm} {
    width: 40%;
    position: absolute;
    right: 0;
    bottom: 0;
    padding-right: ${({ theme }) => theme.spacing(11)};
    padding-bottom: ${({ theme }) => theme.spacing(20)};
    text-align: right;
    font-size: 1.25rem;
  }
`;

const TR = styled.tr`
  display: flex;
  flex-direction: column;
  padding-bottom: ${({ theme }) => theme.spacing(2)};

  ${({ theme }) => theme.breakpoint.down.sm} {
    display: flex;
    flex-direction: column;
    text-align: center;
  }
`;

const LeftTd = styled.td`
  padding-right: ${({ theme }) => theme.spacing(10)};

  ${({ theme }) => theme.breakpoint.down.sm} {
    padding-bottom: ${({ theme }) => theme.spacing(0.5)};
  }
`;

const RightTd = styled.td`
  a {
    color: ${({ theme }) => theme.palette.white.color};
  }

  ${({ theme }) => theme.breakpoint.down.sm} {
    padding: ${({ theme }) => theme.spacing(0, 0, 6, 0)};
  }
`;

export const Me = () => {
  return (
    <div>
      <Helmet>
        <title>Reza Ranjbar | Contact</title>
        <meta
          name="description"
          content={
            'Reza Ranjbar, junior developer, personal create react app website - contact page'
          }
        />
        <meta
          name="keywords"
          content="Reza, Ranjbar, Reza Ranjbar, developer, web developer, web, IT, software developer, frontend, frontend developer, LinkedIn, GitHub"
        />
        <meta name="og:title" content={'Reza Ranjbar personal website'} />
        <meta
          name="og:description"
          content={'Reza Ranjbar, junior developer, personal create react app website'}
        />
      </Helmet>
      <FullSection>
        <LeftParagraph>
          My name is Reza Ranjbar. I was born in 1995 in Iran and moved to the Netherlands in 2018.
          Utrecht has been a good home for me ever since. I enjoy occasional beers with friends on a
          Friday evening or a game of Rummikub on Saturday afternoon.
        </LeftParagraph>
        <ContactTable>
          <tbody>
            <TR>
              <LeftTd>Contact me on LinkedIn like a professional:</LeftTd>
              <RightTd>
                <a
                  href="https://www.linkedin.com/in/rezaranjbaar/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </RightTd>
            </TR>
            <TR>
              <LeftTd>Check out my Github if you're a nerdy:</LeftTd>
              <RightTd>
                <a
                  href="https://github.com/ranjbarreza/perosnal-website"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github
                </a>
              </RightTd>
            </TR>
            <TR>
              <LeftTd>Here's my email address:</LeftTd>
              <RightTd>
                <a href="mailto:reza.r.baar@gmail.com">reza.r.baar@gmail.com</a>
              </RightTd>
            </TR>
          </tbody>
        </ContactTable>
      </FullSection>
    </div>
  );
};
