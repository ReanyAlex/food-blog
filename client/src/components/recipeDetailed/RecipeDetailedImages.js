import React from 'react';

export default ({ imageInstructions }) => {
  return (
    <div>
      {imageInstructions.map(instruction => {
        return (
          <div key={instruction._id}>
            <figure>
              <img
                className="recipeDetailed-image-instruction"
                src={
                  process.env.PUBLIC_URL + `/images/${instruction.image}.jpg`
                }
                alt="cooking instruction"
              />
              <p className="recipeDetailed-image-caption">
                {instruction.imageCaption}
              </p>
            </figure>
          </div>
        );
      })}
    </div>
  );
};
