import React from 'react';
import SearchBar from './Searchbar';
import { useLocation } from 'react-router-dom';

const ItemLists = () => {
  const location = useLocation();

  return (
    <div>
      {location.pathname === '/items' && <SearchBar />}
    </div>
  );
};

export default ItemLists;
