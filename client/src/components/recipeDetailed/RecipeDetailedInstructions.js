import React from 'react';

import { Header } from '../../stylesheets/recipeDetailed/recipeDetailedInstructionsStyled';

export default ({ detailedInstructions }) => {
  const instructions = Array.from(detailedInstructions);
  return (
    <div>
      <Header>Instructions</Header>
      <ol>
        {instructions.map(instruction => {
          return <li key={instruction}>{instruction}</li>;
        })}
      </ol>
    </div>
  );
};
