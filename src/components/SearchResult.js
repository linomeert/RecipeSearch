import React from 'react';

class SearchResult extends React.Component {

    render(){
        const imgUrl = 'https://spoonacular.com/cdn/ingredients_100x100/'
        return (
           <li>
                <img src={imgUrl + this.props.searchResult.image} alt={this.props.searchResult.name}></img>
                <span>{this.props.searchResult.name}</span>
           </li>
        )
   } 
}

export default SearchResult;

   