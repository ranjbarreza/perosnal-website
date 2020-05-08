import React from 'react';
import styled from 'styled-components';
import backgroundImage from './me-bg.png';

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
    font-size: 1.3rem;
  }
`;

const ContactTable = styled.table`
  ${({ theme }) => theme.breakpoint.up.sm} {
    width: 40%;
    position: absolute;
    right: 0;
    bottom: 0;
    padding-right: ${({ theme }) => theme.spacing(11)};
    padding-bottom: ${({ theme }) => theme.spacing(12)};
    text-align: right;
    font-size: 1.25rem;
  }
`;

const TR = styled.tr`
  display: flex;
  flex-direction: column;
  padding-bottom: ${({ theme }) => theme.spacing(2)};

  :last-child {
    padding-top: ${({ theme }) => theme.spacing(6)};
  }

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
      <FullSection>
        <LeftParagraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip.
        </LeftParagraph>
        <ContactTable>
          <tbody>
            <TR>
              <LeftTd>Contact me on LinkedIn like a professional:</LeftTd>
              <RightTd>
                <a href="https://www.linkedin.com/in/rezaranjbaar/">LinkedIn</a>
              </RightTd>
            </TR>
            <TR>
              <LeftTd>Check out my Github if you're a nerdy:</LeftTd>
              <RightTd>
                <a href="https://github.com/ranjbarreza/perosnal-website">Github</a>
              </RightTd>
            </TR>
            <TR>
              <LeftTd>Here's my email address:</LeftTd>
              <RightTd>
                <a href="mailto:reza.r.baar@gmail.com">reza.r.baar@gmail.com</a>
              </RightTd>
            </TR>
            <TR>
              <LeftTd>You can also call me, good luck with that:</LeftTd>
              <RightTd>
                <a href="tel:+31685762342">+31 6 8576 2342</a>
              </RightTd>
            </TR>
            <TR>
              <LeftTd>Or do it the old fashion way:</LeftTd>
              <RightTd>
                Ryelandstraat 51, 3573 SZ,
                <br /> Utrecht, the Netherlands
              </RightTd>
            </TR>
          </tbody>
        </ContactTable>
      </FullSection>
    </div>
  );
};
