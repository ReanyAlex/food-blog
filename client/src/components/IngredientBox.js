import React from 'react';
// styled-components keeped in a seperate file
import { Box, Image, DescriptionWrapper, Name, Description } from '../stylesheets/ingredientBoxStyled';

export default ({ ingredients }) => {
  return (
    <div>
      {ingredients.map(ingredient => {
        return (
          <Box key={ingredient._id}>
            <Image src={process.env.PUBLIC_URL + `/images/${ingredient.image}.jpg`} alt={ingredient.name} />
            <DescriptionWrapper>
              <Name>{ingredient.name}</Name>
              <Description>{ingredient.description}</Description>
            </DescriptionWrapper>
          </Box>
        );
      })}
    </div>
  );
};
