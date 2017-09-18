import styled from 'styled-components';

const LandingContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;

  @media only screen and (min-width: 576px) {
    margin: 2rem 0 2rem 0;
  }
`;

const ChineseHeader = styled.h1`
  font-family: KaiTi, STKaiti;
  color: red;
  font-size: 5.5rem;
  font-weight: 100;

  @media only screen and (min-width: 576px) {
    margin-top: 3rem;
    font-size: 6rem;
  }
`;

const EnglishHeader = styled.h1`
  font-family: 'Cormorant Garamond', serif;
  color: black;
  font-size: 3rem;

  @media only screen and (min-width: 576px) {
    font-size: 4.5rem;
  }
`;

export { LandingContainer, ChineseHeader, EnglishHeader };
