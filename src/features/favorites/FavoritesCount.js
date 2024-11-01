import React from 'react';
import { useSelector } from 'react-redux';
import { selectFavoritesCount } from './favoritesSlice';


function FavoritesCount() {
  const count = useSelector(selectFavoritesCount);
  return (
    <h1 className="favoritesCount" style={{ color: 'black', fontSize: '20px' ,fontFamily:'Bebas Neue' }}>
      {count}
    </h1>
  );
}

export default FavoritesCount;
