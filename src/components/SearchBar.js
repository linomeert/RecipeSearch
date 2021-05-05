import React from 'react';

class SearchBar extends React.Component {
    render(){
       return (
           <input type="text" ref={this.queryRef} className="search-ingredient" placeholder="Search ingredient"></input>
       )
   } 
}

export default SearchBar;

   