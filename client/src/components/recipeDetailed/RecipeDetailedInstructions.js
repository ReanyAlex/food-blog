import React from 'react';

import { Header, InstructionItem } from '../../stylesheets/recipeDetailed/recipeDetailedInstructionsStyled';

export default ({ detailedInstructions }) => {
  const instructions = Array.from(detailedInstructions);
  return (
    <div>
      <Header>Instructions</Header>
      <ol>
        {instructions.map(instruction => {
          return <InstructionItem key={instruction}>{instruction}</InstructionItem>;
        })}
      </ol>
    </div>
  );
};
