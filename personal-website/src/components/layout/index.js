import styled from 'styled-components';

export const PageLayout = styled.section`
  height: calc(100vh - ${({ theme }) => theme.spacing(3)});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
`;
