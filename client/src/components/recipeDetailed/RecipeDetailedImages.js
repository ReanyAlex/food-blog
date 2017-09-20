import React from 'react';

// styled-components keeped in a seperate file
import { Image, Caption } from '../../stylesheets/recipeDetailed/recipeDetailedImagesStyled';

export default ({ imageInstructions, imagePath }) => {
  console.log(imagePath);
  return (
    <div>
      {imageInstructions.map(instruction => {
        console.log(instruction);
        return (
          <div key={instruction._id}>
            <figure>
              <Image src={`${imagePath}/${instruction.image}.jpg`} alt="cooking instruction" />
              <Caption>{instruction.imageCaption}</Caption>
            </figure>
          </div>
        );
      })}
    </div>
  );
};
