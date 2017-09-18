import React from 'react';

// styled-components keeped in a seperate file
import { Image, Caption } from '../../stylesheets/recipeDetailed/recipeDetailedImagesStyled';

export default ({ imageInstructions }) => {
  return (
    <div>
      {imageInstructions.map(instruction => {
        return (
          <div key={instruction._id}>
            <figure>
              <Image src={process.env.PUBLIC_URL + `/images/${instruction.image}.jpg`} alt="cooking instruction" />
              <Caption>{instruction.imageCaption}</Caption>
            </figure>
          </div>
        );
      })}
    </div>
  );
};
