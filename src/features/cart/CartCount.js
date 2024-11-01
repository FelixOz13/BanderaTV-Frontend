import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCartByUserId } from './cartSlice'; // Adjust the import path as needed

const CartCount = () => {
  const dispatch = useDispatch();
  const userId = localStorage.getItem('userId'); // Or use a context or another method to get userId
  const cart = useSelector((state) => state.cart.cart); // Ensure this matches your Redux state structure

  useEffect(() => {
    if (userId) {
      dispatch(getCartByUserId(userId));
    }
  }, [dispatch, userId]);

  // Calculate the total count of all items in the cart
  const totalCount = Array.isArray(cart?.items) 
    ? cart.items.reduce((total, item) => total + (Number(item.count) || 0), 0) 
    : 0;

  return (
    <div className="cart-count">
      <span style={{ fontFamily: 'Bebas Neue', fontSize: '2rem' }}>
        {totalCount}
      </span>
    </div>
  );
};

export default CartCount;
