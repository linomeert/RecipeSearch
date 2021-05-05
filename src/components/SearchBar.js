import React from 'react';

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
                { searchResults: data}
            )
        })

    }

    render(){
       return (
           <input type="text" ref={this.queryRef} onChange={this.searchIngredients} className="search-ingredient" placeholder="Search ingredient"></input>
       )
   } 
}

export default SearchBar;

   