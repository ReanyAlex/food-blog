import React from 'react';
import { Link } from 'react-router-dom';

// styled-components keeped in a seperate file
import { Box, ImageWrapper, Image, Title } from '../stylesheets/recipeBoxStyled';
//needs some css currently
import '../stylesheets/recipeBox.css';

export default ({ displayIndex, recipes }) => {
  let startingIndex = (displayIndex - 1) * 15;
  let endingIndex = displayIndex * 15;

  let recipesToBeDisplayed = recipes.slice(startingIndex, endingIndex);

  return (
    <div>
      {recipesToBeDisplayed.map(recipe => {
        const imagePath = `/images/${recipe.title.toLowerCase().replace(/ /g, '-')}`;
        const { _id, title, image } = recipe;
        return (
          <Box key={_id}>
            <Link to={`/${title}/${_id}`} className="recipe-link">
              <ImageWrapper>
                <Image src={`${imagePath}/${image}.jpg`} alt={title} />
              </ImageWrapper>
              <Title>{title}</Title>
            </Link>
          </Box>
        );
      })}
    </div>
  );
};
