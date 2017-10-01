import styled from 'styled-components';

const Box = styled.div`
  float: left;
  background-color: whitesmoke;
  height: 100%;
  width: 100%;
  margin-top: 1rem;
  border: 1px solid lightgray;
`;

const Image = styled.img`
  width: 100%;
  margin: 0 20px 0 0;

  @media only screen and (min-width: 576px) {
    float: left;
    width: 25%;
  }
`;

const Name = styled.h3`
  text-decoration: underline;
  padding-top: 0.5rem;
  font-size: 1.25rem;
`;

const Description = styled.div`
  width: 95%;
  padding-left: 2.5%;
`;

export { Box, Image, Name, Description };
