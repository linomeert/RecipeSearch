import React from 'react';
import SearchResult from './SearchResult';

class SearchBar extends React.Component {

    state = {
        searchResults: {},
    };

    constructor(props) {
        super(props);
        this.queryRef = React.createRef();
    }

    searchIngredients = () => {
        const APIKEY = '540815f48fa1457791cc375205109fa9'
        const query = this.queryRef.current.value
        const searchEndpoint = `https://api.spoonacular.com/food/ingredients/autocomplete?apiKey=${APIKEY}&query=${query}&number=5`
        fetch(searchEndpoint).then(response => response.json()).then((data) => {
            console.log(data)
            this.setState(
                { searchResults: data }
            )
        })

    }

    render(){
        const searchResults = this.state.searchResults;
        return (
           <div class="search">
                <input type="text" ref={this.queryRef} onChange={this.searchIngredients} className="search-ingredient" placeholder="Search ingredient"></input>
                <ul className="search-results">
                    { Object.keys(searchResults).map(key => 
                        <SearchResult 
                            key={searchResults[key].name} 
                            searchResult={searchResults[key]}
                        /> 
                    )}
                </ul>
           </div>
        )
   } 
}

export default SearchBar;

   