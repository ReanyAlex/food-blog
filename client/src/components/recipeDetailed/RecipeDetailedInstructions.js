import React from 'react';

export default ({ detailedInstructions }) => {
  const instructions = Array.from(detailedInstructions);
  return (
    <div>
      <h4 className="recipeDetailed-instructions-header">Instructions</h4>
      <ol>
        {instructions.map(instruction => {
          return <li key={instruction}>{instruction}</li>;
        })}
      </ol>
    </div>
  );
};
