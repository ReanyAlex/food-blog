import React from 'react';

export default ({ updateSearch }) => {
  return (
    <form
      className="recipeList-header-search form-inline  my-l-0 col-m-12 col-lg-6 "
      onSubmit={e => e.preventDefault()}
    >
      <input
        className="form-control recipeList-header-search-input"
        type="text"
        placeholder="Search"
        aria-label="Search"
        onChange={e => updateSearch(e.target.value)}
      />
    </form>
  );
};
