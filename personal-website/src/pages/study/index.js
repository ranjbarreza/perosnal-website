import React from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { PageLayout, H3, H5 } from '../../components';
import { Helmet } from 'react-helmet';

const StudyPageLayout = styled(PageLayout)`
  background-color: ${({ theme }) => theme.palette.darkGray.color};
  background: linear-gradient(
    45deg,
    ${({ theme }) => theme.palette.darkGray.color} 20%,
    ${({ theme }) => theme.palette.mediumGray.color} 80%,
    ${({ theme }) => theme.palette.lightGray.color} 100%
  );
`;

const divDefaults = css`
  padding: ${({ theme }) => theme.spacing(1)};
  margin: 0;
  ${({ theme }) => theme.breakpoint.up.sm} {
    width: 35%;
    position: absolute;
  }
`;

const LeftPart = styled.div`
  ${divDefaults}
  ${({ theme }) => theme.breakpoint.up.sm} {
    left: 0;
    bottom: 0;
    padding-left: ${({ theme }) => theme.spacing(13)};
    padding-bottom: ${({ theme }) => theme.spacing(25)};
    text-align: left;
  }
`;

const RightPart = styled.div`
  ${divDefaults}
  ${({ theme }) => theme.breakpoint.up.sm} {
    right: 0;
    top: 0;
    padding-right: ${({ theme }) => theme.spacing(13)};
    padding-top: ${({ theme }) => theme.spacing(13)};
    text-align: right;
  }
`;

const MeDiv = styled.div`
  text-align: right;
  padding: ${({ theme }) => theme.spacing(4, 1, 0, 1)};

  ${({ theme }) => theme.breakpoint.up.sm} {
    width: 45%;
    position: absolute;
    right: 0;
    bottom: 0;
    padding-right: ${({ theme }) => theme.spacing(13)};
    padding-bottom: ${({ theme }) => theme.spacing(13)};
  }
`;

export const Study = () => {
  return (
    <div>
      <Helmet>
        <title>Reza Ranjbar | Study</title>
      </Helmet>
      <StudyPageLayout>
        <LeftPart>
          <H3>Chamran university Ahvaz, Iran</H3>
          <H5>2013-2017</H5>
          <p>
            A completed four-year Bachelor of Science program for civil engineering. Check them out{' '}
            <a href="http://scu.ac.ir/en/" target="_blank" rel="noopener noreferrer">
              here
            </a>
            .
          </p>
        </LeftPart>
        <RightPart>
          <H3>HackYourFuture Amsterdam</H3>
          <H5>2018-2019</H5>
          <p>
            I followed an eight-month intensive program in which I learned the fundamentals of web
            development. By the end of the course, I gained skills in HTML, CSS-SCSS-SASS,
            JavaScript, Node.js, React.js, REST APIs, and MySQL. Moreover, the course improved my
            teamwork skills as well as my problem solving and analytical thinking competencies.
            Check them out{' '}
            <a href="https://www.hackyourfuture.net/" target="_blank" rel="noopener noreferrer">
              here
            </a>
          </p>
        </RightPart>
        <MeDiv>
          <H3>
            Now it's time to know a little more about <Link to="/me">me</Link>.
          </H3>
        </MeDiv>
      </StudyPageLayout>
    </div>
  );
};
