import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as actions from '../actions';

// styled-components keeped in a seperate file
import { Box, Image, DescriptionWrapper, Name, Description } from '../stylesheets/ingredientBoxStyled';

class IngredientBox extends Component {
  renderAdmin(name, id) {
    if (!this.props.auth) {
      return;
    }

    if (process.env.REACT_APP_ID_KEY === this.props.auth[process.env.REACT_APP_KEY_NAME]) {
      return (
        <Link to={`/${name}/${id}/edit/ingredient`}>
          <span>Edit</span>
        </Link>
      );
    }
  }

  render() {
    return (
      <div>
        {this.props.ingredients.map(ingredient => {
          return (
            <Box key={ingredient._id}>
              <Image src={process.env.PUBLIC_URL + `/images/${ingredient.image}.jpg`} alt={ingredient.name} />
              <DescriptionWrapper>
                <Name>{ingredient.name}</Name>
                <Description>{ingredient.description}</Description>
              </DescriptionWrapper>
              {this.renderAdmin(ingredient.name, ingredient._id)}
            </Box>
          );
        })}
      </div>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps, actions)(withRouter(IngredientBox));