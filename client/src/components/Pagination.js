import React, { Component } from 'react';

// styled-components keeped in a seperate file
import { Container, PaginationIndex, PaginationIndexCurrent } from '../stylesheets/paginationStyled';

class Pagination extends Component {
  state = {
    paginationIndex: []
  };

  componentWillReceiveProps(nextProps) {
    this.setpaginationIndex(nextProps.recipes.length);
  }

  setpaginationIndex(recipeLength) {
    let indexes = recipeLength / 15;
    let paginationIndex = [];
    for (let i = 1; i < indexes + 1; i++) {
      paginationIndex.push(i);
    }
    this.setState({ paginationIndex });
  }

  renderPagination(index) {
    if (index === this.props.displayIndex) {
      return <PaginationIndexCurrent key={index}>{index}</PaginationIndexCurrent>;
    }
    return (
      <PaginationIndex key={index} onClick={e => this.props.updateIndex(e.target.innerHTML)}>
        {index}
      </PaginationIndex>
    );
  }

  render() {
    return <Container>{this.state.paginationIndex.map(index => this.renderPagination(index))}</Container>;
  }
}

export default Pagination;
