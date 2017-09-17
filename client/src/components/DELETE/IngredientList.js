// import React, { Component } from 'react';
// import IngredientBox from './IngredientBox';
//
// import '../../stylesheets/ingredients.css';
//
// class IngredientsList extends Component {
//   state = {
//     ingredients: [],
//     search: ''
//   };
//
//   componentDidMount() {
//     this.fetchIngredients();
//   }
//
//   componentDidUpdate(prevProps, prevState) {
//     if (prevState.search === this.state.search) {
//       return;
//     }
//     this.fetchIngredients();
//   }
//
//   updateSearch(search) {
//     this.setState({ search });
//     this.fetchIngredients();
//   }
//
//   fetchIngredients() {
//     const that = this;
//     fetch(`/api/ingredients/${this.state.search}`)
//       .then(res => res.json())
//       .then(function(json) {
//         that.setState({ ingredients: json });
//       })
//       .catch(function(err) {
//         console.log(err);
//       });
//   }
//
//   render() {
//     return (
//       <div className="recipeList-container">
//         <div className="recipeList-container-header">
//           <h3 className="recipeList-header-title col-m-12 col-lg-6">Ingredients:</h3>
//           <form
//             className="recipeList-header-search form-inline  my-l-0 col-m-12 col-lg-6 "
//             onSubmit={e => e.preventDefault()}
//           >
//             <input
//               className="form-control recipeList-header-search-input"
//               type="text"
//               placeholder="Search"
//               aria-label="Search"
//               onChange={e => this.updateSearch(e.target.value)}
//             />
//           </form>
//         </div>
//         <IngredientBox ingredients={this.state.ingredients} />
//       </div>
//     );
//   }
// }
//
// export default IngredientsList;
