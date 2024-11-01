import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FaTrashAlt } from 'react-icons/fa';
import { BsCartPlus } from 'react-icons/bs';
import { addItemToCart } from '../cart/cartSlice';
import { removeFromFavorites } from './favoritesSlice';
import ShareDialog from '../../components/shareDialog';
import '../cart/cart.css'; // Import your CSS file for styling

const Favorites = () => {
  const dispatch = useDispatch();
  const favoritesItems = useSelector((state) => state.favorites.items);
  const [selectedSize, setSelectedSize] = useState({});

  // Handle item removal
  const handleRemoveItem = (id, size) => {
    dispatch(removeFromFavorites({ id, size }))
      .unwrap()
      .catch((error) => {
        console.error('Failed to remove item from favorites:', error);
        alert('Failed to remove item. Please try again.');
      });
  };

  // Handle adding item to cart
  const handleAddToCart = (item) => {
    const size = selectedSize[item.id] || item.sizes[0]; // Default to the first size if none selected
    dispatch(addItemToCart({ ...item, size }))
      .unwrap()
      .catch((error) => {
        console.error('Failed to add item to cart:', error);
        alert('Failed to add item to cart. Please try again.');
      });
  };

  // Handle size change
  const handleSizeChange = (id, size) => {
    setSelectedSize((prevSelectedSize) => ({
      ...prevSelectedSize,
      [id]: size,
    }));
  };

  return (
    <div className="cart">
      <h2 className="products">Lista de Deseos</h2>
      {favoritesItems.length === 0 ? (
        <p className="products">Tu lista está vacía</p>
      ) : (
        <ul className="cart-list">
          {favoritesItems.map((item, index) => (
            <li key={`${item.id}-${index}`} className="cart-item">
              <div className="cart-display">
                <img
                  src={`../t-shirts/${item.image}`}
                  alt={`T-Shirt ${item.name}`}
                  className="cart-image"
                />
                <div className="cart-details">
                  <p>{item.name}</p>
                  <p>Descripción: {item.description}</p>
                  <p>Precio por Unidad : ${item.price}</p>
                  <div className="favoritecart">
                    <div className="favorite-links">
                      <div className="size-options">
                        <label htmlFor={`size-${item.id}`} className="label-style">
                          Tamaño :
                        </label>
                        <select
                          id={`size-${item.id}`}
                          value={selectedSize[item.id] || item.sizes[0]}
                          onChange={(e) => handleSizeChange(item.id, e.target.value)}
                          className="select-style"
                        >
                          {item.sizes.map((size, index) => (
                            <option key={index} value={size}>
                              {size}
                            </option>
                          ))}
                        </select>
                      </div>
                      <button
                        onClick={() => handleAddToCart(item)}
                        className="add-to-cart-button"
                      >
                        <BsCartPlus />
                      </button>
                      <ShareDialog />
                      <button
                        onClick={() => handleRemoveItem(item.id, selectedSize[item.id] || item.sizes[0])}
                        className="remove-item-button"
                      >
                        <FaTrashAlt />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Favorites;
