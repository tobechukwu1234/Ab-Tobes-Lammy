import React, { createContext, useContext, useState, useEffect } from "react";

const OrderContext = createContext();

export const useOrders = () => useContext(OrderContext);

export const OrderProvider = ({ children }) => {
  // Initialize orders from localStorage or empty array
  const [orders, setOrders] = useState(() => {
    return JSON.parse(localStorage.getItem("orders")) || [];
  });

  // Add a new order
  const addOrder = (order) => {
    setOrders((prev) => {
      const updated = [...prev, order];
      localStorage.setItem("orders", JSON.stringify(updated));
      return updated;
    });
  };

  // Update the status of a specific order
  const updateOrderStatus = (orderId, newStatus) => {
    setOrders((prev) => {
      const updated = prev.map((order) =>
        order.id === orderId ? { ...order, status: newStatus } : order
      );
      localStorage.setItem("orders", JSON.stringify(updated));
      return updated;
    });
  };

  // Optional: sync orders from localStorage when component mounts
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("orders"));
    if (stored) setOrders(stored);
  }, []);

  return (
    <OrderContext.Provider value={{ orders, addOrder, updateOrderStatus }}>
      {children}
    </OrderContext.Provider>
  );
};