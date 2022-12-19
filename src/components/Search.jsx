import React from 'react';
import {Link} from 'react-router-dom';
import {stockData} from './stockData';
import { useState } from 'react';
import userEvent from '@testing-library/user-event';

const Search = () => {
  const [query, setQuery] = useState("");
  return (
    <div className="search-page">
      <form action="">
        <input id = "search"
        type="text" 
        placeholder = "Enter a Stock Name"
        onChange = {(e) =>setQuery(e.target.value)}/>
      </form>
      <ul>
        {stockData.filter((stock) => stock.name.toLowerCase().includes(query)).map((stock) =>(
          <Link to={stock.symbol} className = "link-item">
              <li key= {stock.symbol}>{stock.name}</li>
          </Link>)
          )}
      </ul>
    </div>
  )
}

export default Search;