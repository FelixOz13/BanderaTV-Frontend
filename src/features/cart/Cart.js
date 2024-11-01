import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCartByUserId, removeItemFromCart, updateCartItem } from './cartSlice';
import './cart.css';
import { FaTrashAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Cart = () => {
  const dispatch = useDispatch();
  const userId = localStorage.getItem('userId');
  const cartItems = useSelector((state) => state.cart.items);
  const cartStatus = useSelector((state) => state.cart.status);

  // Calculate the total price of all items in the cart
  const totalPrice = cartItems.reduce((acc, item) => {
    const itemTotal = item.items.reduce((itemAcc, product) => itemAcc + (product.price * product.count), 0);
    return acc + itemTotal;
  }, 0);

  useEffect(() => {
    if (userId && cartStatus === 'idle') {
      dispatch(getCartByUserId(userId));
    }
  }, [dispatch, cartStatus, userId]);

  console.log('Cart Items:', cartItems);

  const handleRemoveItem = (id, size) => {
    dispatch(removeItemFromCart({ id, size }));
  };

  const handleUpdateItem = (id, field, value) => {
    dispatch(updateCartItem({ id, field, value }));
  };

  const incrementQuantity = (id, quantity) => {
    handleUpdateItem(id, 'quantity', quantity + 1);
  };

  const decrementQuantity = (id, quantity) => {
    if (quantity > 1) {
      handleUpdateItem(id, 'quantity', quantity - 1);
    }
  };

  return (
    <div className="cart">
      <h2 className="products">Carrito de Compras</h2>
      {cartItems.length === 0 ? (
        <p className="products">Tu carrito está vacío</p>
      ) : (
        <>
        <ul className="cart-list">
        {cartItems.map((item, index) => (
          <li key={`${item._id}-${item.size || 'no-size'}-${index}`} className="cart-item">
          {item.items.map((product, productIndex) => (
            <div key={productIndex} className="cart-display">
              <img src={product.imageUrl} alt={product.name} className="cart-image" />
              <div className="cart-details">
                <p>{product.name}</p>
                <p>Tamaño: {product.size}</p>
                <p>Color: {product.color}</p>
                <p>Categoria: {product.category}</p>
                <div>
                  <span>Cantidad:</span>
                  <div className="quantity-control">
                    <button onClick={() => decrementQuantity(item._id, product.count)}>-</button>
                    <input
                      type="number"
                      value={product.count}
                      onChange={(e) => handleUpdateItem(item._id, 'quantity', Number(e.target.value))}
                      className="cart-quantity"
                    />
                    <button onClick={() => incrementQuantity(item._id, product.count)}>+</button>
                  </div>
                </div>
                {item.sizes && item.sizes.length > 0 && (
                  <div>
                    <span>Tamaño: </span>
                    <select
                      value={item.size}
                      onChange={(e) => handleUpdateItem(item._id, 'size', e.target.value)}
                      className="cart-size"
                    >
                      {item.sizes.map((size, sizeIndex) => (
                        <option key={sizeIndex} value={size}>
                          {size}
                        </option>
                      ))}
                    </select>
                  </div>
                )}
                <p style={{ color: 'red' }}>Precio por Unidad : ${product.price}</p>
                <button
                
                  className="remove-item-button"
                  onClick={() => handleRemoveItem(item._id, item.size)}
                >
                  <FaTrashAlt />
                </button>
                <p>----------------------------------------------------</p>
              </div>
            </div>
          ))}
          </li>
        ))}
      </ul>      
          <div className="cart-summary">
            <h3>Total: ${totalPrice.toFixed(2)}</h3>
            <Link to="/" className="continue-shopping">Seguir Comprando</Link>
            <Link to="/checkout" className="proceed-to-pay">Proceder al Pago</Link>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
