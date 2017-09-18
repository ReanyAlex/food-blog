import styled from 'styled-components';

const Box = styled.div`
  width:99%
  vertical-align: top;
  display: inline-block;
  margin: 0.4%;
  padding: 0.75%;

  @media only screen and (min-width: 576px) {
    width: 49.2%;

    height: 275px;
  }

  @media only screen and (min-width: 768px) {
    width: 32.5%;

    height: 275px;
  }

  @media only screen and (min-width: 990px) {
    height: 330px;
  }

  @media only screen and (min-width: 1200px) {
    height: 375px;
  }
`;

const ImageWrapper = styled.div`
  margin: 0 auto;
  width: 100%;
  height: 80%;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 12.5%;
  border: 2px solid lightgray;

  &:hover {
    border: 1px solid red;
  }
`;

const Title = styled.h3`
  font-size: 1.25rem;
  width: 90%;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  text-align: center;
`;

export { Box, ImageWrapper, Image, Title };
