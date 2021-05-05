import logo from './logo.svg';
import './App.css';
import React from 'react';
import SearchBar from './components/SearchBar';
import Recipes from './components/Recipes';
import Ingredients from './components/Ingredients';

class App extends React.Component {
  render() {
    return ( 
        
      <div className="RecipeFinder">
         <div className="ingredients">
            <h2>Ingredients</h2>
            <SearchBar/>
            <Ingredients/>
        </div>
        <div className="recipes">
            <h2>recipes</h2>
            <Recipes/>
        </div>
      </div>
    );
  }
}


export default App;
