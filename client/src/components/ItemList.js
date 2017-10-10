import React, { Component } from 'react';
import _ from 'lodash';
import axios from 'axios';
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
    this.setFetch(this.props.match.path);
  }
  //data fetch when click on a new link in header
  componentWillReceiveProps(nextProps) {
    this.setFetch(this.props.match.path);
  }
  //data fetch when type in the search field
  componentDidUpdate(prevProps, prevState) {
    if (prevState.search === this.state.search) {
      return;
    }
    this.fetchData(this.props.match.path);
  }

  setFetch(path) {
    this.setState({ path });
    this.fetchData(path);
  }
  // the updateIndex functions is passed as a prop to the pagination component
  updateIndex(displayIndex) {
    this.setState({ displayIndex });
  }
  // the updateSearch functions is passed as a prop to the seatch component
  updateSearch(search) {
    this.setState({ search });
  }

  //fetch data depending on path match and search url
  //access through express either IngredientsSchema or RecipeSchema
  fetchData(path) {
    const pathName = path
      .toLowerCase()
      .split('')
      .splice(1)
      .join('');

    const that = this;
    let url = `/api/${pathName}?search=${this.state.search}`;

    axios
      .get(url)
      .then(function(res) {
        that.setState({ [pathName]: res.data });
      })
      .catch(function(err) {
        console.log(err);
      });
  }

  recipesOrIngredients() {
    return this.state.path === '/recipes' ? (
      <RecipeBox displayIndex={this.state.displayIndex} recipes={this.state.recipes} />
    ) : (
      <IngredientBox ingredients={this.state.ingredients} />
    );
  }

  showPagination() {
    if (this.state.path === '/recipes') {
      return (
        <Pagination
          updateIndex={index => this.updateIndex(index)}
          recipes={this.state.recipes}
          displayIndex={this.state.displayIndex}
        />
      );
    }
  }

  render() {
    // limits the amount of times the database is accessed.
    // No longer by every change to input waits till you are done typing then on delay
    const recipeSearch = _.debounce(search => {
      this.updateSearch(search);
    }, 300);

    return (
      <Container>
        <SearchHeader>
          <Search updateSearch={recipeSearch} path={this.state.path} />
        </SearchHeader>
        {this.recipesOrIngredients()}
        {this.showPagination()}
      </Container>
    );
  }
}

export default RecipeList;
