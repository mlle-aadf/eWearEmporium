import { createContext, useState } from 'react';

// Stores and provides Order ID
export const OrderIdContext = createContext();

export const OrderIdProvider = ({ children }) => {
  // State to hold the order ID
  const [orderId, setOrderId] = useState(null);

  // Function to update the order ID
  const updateOrderId = (newOrderId) => {
    setOrderId(newOrderId);
  };

  return (
    <OrderIdContext.Provider value={{ orderId, updateOrderId }}>
      {children}
    </OrderIdContext.Provider>
  );
};