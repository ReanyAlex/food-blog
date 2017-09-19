import styled from 'styled-components';

const Container = styled.div`
  width: 90%;
  max-width: 1096px;
  margin: 0 auto;

  @media only screen and (min-width: 576px) {
    width: 80%;
  }
`;

export { Container };
