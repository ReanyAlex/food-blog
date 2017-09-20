import styled from 'styled-components';

const RecipeContainer = styled.div`
  width: 90%;
  max-width: 1096px;
  margin: 0 auto;

  @media only screen and (min-width: 576px) {
    width: 80%;
  }
`;

const TitleHeader = styled.h1`
  min-width: 330px;
  font-size: 2.5rem;
  font-weight: 600;
  color: #484848;
  padding-top: 3rem;
  font-family: Didot, Georgia, Garamond, ‘Times New Roman’, Times, serif;
`;

const CatagoriesHeader = styled.h3`
  font-size: 0.75rem;
  padding-bottom: 1rem;
  font-style: italic;
`;

const DescriptionHeader = styled.h3`
  min-width: 330px;
  font-size: 1.5rem;
  font-style: italic;
  color: slategray;
  margin-bottom: 1rem;
`;

const Image = styled.img`
  min-width: 330px;
  width: 100%;
  margin: 0 auto;
  border: 2px solid lightgray;
  margin-bottom: 1rem;
`;

const InstructionsContainer = styled.div`
  min-width: 330px;
  background-color: whiteSmoke;
  border: 1px solid gray;
  font-style: italic;
  font-size: 1rem;
  margin-bottom: 1rem;
  padding: 0.5rem 0 0.5rem 2.5%;
`;

export { RecipeContainer, TitleHeader, CatagoriesHeader, DescriptionHeader, Image, InstructionsContainer };
