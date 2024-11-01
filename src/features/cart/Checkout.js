import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
  const { currentUser } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  React.useEffect(() => {
    if (!currentUser) {
      navigate('/login');
    }
  }, [currentUser, navigate]);

  return (
    <div>
      {currentUser ? (
        <div>
          {/* Checkout form or details */}
        </div>
      ) : (
        <p>Please log in to complete your purchase.</p>
      )}
    </div>
  );
};

export default Checkout;
