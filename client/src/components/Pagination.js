import React from 'react';

export default props => {
  let indexes = props.recipes.length / 15;
  let paginationIndex = [];

  for (let i = 1; i < indexes + 1; i++) {
    paginationIndex.push(i);
  }

  return (
    <div className="recipeList-recipe-pagination-div">
      {paginationIndex.map(index => {
        let classname = '';

        if (index === props.displayIndex) {
          classname = 'recipeList-recipe-pagination-current';
        }

        classname = 'recipeList-recipe-pagination';

        return (
          <span key={index + 'a'} className={classname} onClick={() => props.updateIndex(index)}>
            {index}
          </span>
        );
      })}
    </div>
  );
};
