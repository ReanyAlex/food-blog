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
  width: 25%;
  display: inline-block;
  float: left;
  padding: 0;
  margin: 0;

  @media (max-width: 768px) {
    width: 33%;
  }
`;

const DescriptionWrapper = styled.div`
  width: 75%;
  display: inline-block;
  float: left;
  padding-left: 1rem;
  margin: 0;

  @media (max-width: 768px) {
    width: 66%;
  }
`;
const Name = styled.h3`
  text-decoration: underline;
  padding-top: 0.5rem;
  font-size: 0.85rem;
  margin-bottom: 0.25rem;

  @media only screen and (min-width: 768px) {
    padding-top: 1rem;
    font-size: 1.25rem;
  }
`;

const Description = styled.p``;

export { Box, Image, DescriptionWrapper, Name, Description };
