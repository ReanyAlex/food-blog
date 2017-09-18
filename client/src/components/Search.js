import React from 'react';
// styled-components keeped in a seperate file
import { SearchForm, HeaderTitle, SearchInput } from '../stylesheets/searchStyled';

export default ({ path, updateSearch }) => {
  return (
    <div>
      <HeaderTitle>{path === 'recipes' ? 'Newly added Recipes:' : 'Ingredients:'}</HeaderTitle>
      <SearchForm onSubmit={e => e.preventDefault()}>
        <SearchInput
          type="text"
          placeholder="Search"
          aria-label="Search"
          onChange={e => updateSearch(e.target.value)}
        />
      </SearchForm>
    </div>
  );
};
// form-inline
