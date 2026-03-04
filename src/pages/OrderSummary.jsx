import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useOrders } from "../context/OrderContext";

const OrderSummary = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { orders } = useOrders();

  const order = orders.find((o) => o.id === Number(id)) || 
                JSON.parse(localStorage.getItem("orders") || "[]").find(o => o.id === Number(id));

  if (!order) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white p-10">
        <p className="text-center text-xl text-slate-700">
          Order not found.
        </p>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-white py-24"
    >
      <div className="container mx-auto max-w-4xl px-4 md:px-6">

        <h1 className="text-4xl font-black mb-8">Order Summary</h1>

        <div className="bg-orange-50 p-8 rounded-3xl shadow-xl mb-8">
          <h2 className="font-bold text-2xl mb-4">Items</h2>
          <div className="space-y-4">
            {order.items.map(item => (
              <div key={item.id} className="flex justify-between">
                <span>{item.name} x {item.quantity}</span>
                <span>₦{item.price * item.quantity}</span>
              </div>
            ))}
          </div>
          <div className="border-t mt-6 pt-4 flex justify-between font-black text-xl">
            <span>Total</span>
            <span className="text-orange-600">₦{order.total}</span>
          </div>
        </div>

        <div className="bg-white p-8 rounded-3xl shadow-xl mb-8">
          <h2 className="font-bold text-2xl mb-4">Customer Info</h2>
          <p><strong>Name:</strong> {order.customer.name}</p>
          <p><strong>Email:</strong> {order.customer.email}</p>
          <p><strong>Address:</strong> {order.customer.address}</p>
          <p><strong>Payment Method:</strong> {order.paymentMethod || "N/A"}</p>
          <p><strong>Status:</strong> {order.status}</p>
        </div>

        <button
          onClick={() => navigate("/")}
          className="w-full bg-orange-600 text-white py-4 rounded-xl font-black text-lg hover:bg-orange-700 transition-all"
        >
          Order Again
        </button>
      </div>
    </motion.div>
  );
};

export default OrderSummary;