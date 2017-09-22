import React, { Component } from 'react';
import RecipeBox from './RecipeBox';
import IngredientBox from './IngredientBox';
import Search from './Search';
import Pagination from './Pagination';
// styled-components keeped in a seperate file
import { Container, SearchHeader } from '../stylesheets/itemListStyled';

class RecipeList extends Component {
  state = {
    recipes: [],
    ingredients: [],
    search: '',
    displayIndex: 1,
    path: ''
  };

  //initial data fetch based on path
  componentDidMount() {
    this.setState({ path: this.props.match });
    this.fetchData(this.props.match);
  }
  //data fetch when click on a new link in header
  componentWillReceiveProps(nextProps) {
    this.setState({ path: nextProps.match });
    this.fetchData(nextProps.match);
  }
  //data fetch when type in the search field
  componentDidUpdate(prevProps, prevState) {
    if (prevState.search === this.state.search) {
      return;
    }
    this.fetchData(this.props.match);
  }

  // the updateIndex functions is passed as a prop to the pagination component
  updateIndex(index) {
    this.setState({ displayIndex: index });
  }
  // the updateSearch functions is passed as a prop to the seatch component
  updateSearch(search) {
    this.setState({ search });
  }

  //fetch data depending on path match and search url
  //access through express either IngredientsSchema or RecipeSchema
  fetchData(path) {
    path = path.toLowerCase();
    const that = this;
    let url = `/api/${path}/${this.state.search}`;

    fetch(url)
      .then(res => res.json())
      .then(function(json) {
        that.setState({ [path]: json });
      })
      .catch(function(err) {
        console.log(err);
      });
  }

  recipesOrIngredients() {
    return this.state.path === 'recipes' ? (
      <RecipeBox displayIndex={this.state.displayIndex} recipes={this.state.recipes} />
    ) : (
      <IngredientBox ingredients={this.state.ingredients} />
    );
  }

  showPagination() {
    if (this.state.path !== 'recipes') return;
    return (
      <Pagination
        updateIndex={this.updateIndex.bind(this)}
        recipes={this.state.recipes}
        displayIndex={this.state.displayIndex}
      />
    );
  }

  render() {
    return (
      <Container>
        <SearchHeader>
          <Search updateSearch={this.updateSearch.bind(this)} path={this.state.path} />
        </SearchHeader>
        {this.recipesOrIngredients()}
        {this.showPagination()}
      </Container>
    );
  }
}

export default RecipeList;
