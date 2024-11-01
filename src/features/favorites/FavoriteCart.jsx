import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const FavoriteCart = ({ item }) => {
  if (!item || !item.sizes || item.sizes.length === 0) {
    return <p>No sizes available</p>; // or another appropriate fallback UI
  }

  return (
    <div className="favoritecart">
      <div className="cart-links">
        <div className="size-options">
          <label htmlFor="size" className="label-style">
            Tamaño: 
          </label>
          <select id="size" className="select-style" aria-label="Select size">
            {item.sizes.map((size, index) => (
              <option key={index} value={size}>
                {size}
              </option>
            ))}
          </select>
        </div>
        <Link to="/cart" aria-label="Go to cart">
          <img
            src="../images/cart.svg"
            alt="cart"
            style={{ color: 'goldenrod', fontSize: '1.5rem' }}
          />
          <span className="cart-span">0</span>
        </Link>
        <Link to={`/productdetail/${encodeURIComponent(item.name)}`} aria-label="View product details">
          <button>Ver Detalles</button>
        </Link>
      </div>
    </div>
  );
};

FavoriteCart.propTypes = {
  item: PropTypes.shape({
    sizes: PropTypes.arrayOf(PropTypes.string).isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
};

export default FavoriteCart;
