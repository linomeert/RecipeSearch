import logo from './logo.svg';
import './App.scss';
import React from 'react';
import SearchBar from './components/SearchBar';
import Recipes from './components/Recipes';
import Ingredients from './components/Ingredients';

class App extends React.Component {
  
  state = {
    ingredients: {},
    recipes: {}
  }
  
  render() {
    return ( 
      <div className="recipe-app">
         <div className="ingredients">
            <h2>Ingredients</h2>
            <SearchBar searchIngredients={this.props.searchIngredients}/>
            <Ingredients/>
        </div>
        <div className="recipes">
            <h2>Recipes</h2>
            <Recipes/>
        </div>
      </div>
    );
  }
}


export default App;
