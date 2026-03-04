import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { useOrders } from "../context/OrderContext";

const statuses = ["Preparing", "On The Way", "Delivered"];

const OrderConfirmation = () => {
  const { id } = useParams();
  const { orders } = useOrders();
  const [order, setOrder] = useState(null);

  // Safely get the order from context or localStorage
  useEffect(() => {
    const savedOrders = JSON.parse(localStorage.getItem("orders")) || [];
    const combinedOrders = orders.length ? orders : savedOrders;
    const found = combinedOrders.find((o) => o.id === Number(id));
    setOrder(found);
  }, [orders, id]);

  if (!order) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white p-10">
        <p className="text-center text-xl text-slate-700">
          Sorry, we couldn’t find your order. <br />
          Make sure you placed an order or go back to the{" "}
          <Link to="/" className="text-orange-600 underline">
            homepage
          </Link>.
        </p>
      </div>
    );
  }

  const statusIndex = statuses.indexOf(order.status);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-white py-24"
    >
      <div className="container mx-auto max-w-4xl px-4 md:px-6">

        {/* Success Header */}
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <CheckCircle className="mx-auto text-green-500" size={80} />
          <h1 className="text-5xl font-black mt-6">
            Order <span className="text-orange-600">Confirmed</span>
          </h1>
          <p className="text-slate-500 mt-4">
            Thank you for ordering with ABT Kitchen!
          </p>
        </motion.div>

        {/* Tracking Section */}
        <div className="bg-orange-50 p-8 rounded-3xl shadow-xl mb-12">
          <h2 className="font-bold text-2xl mb-6">Order Tracking</h2>
          <div className="flex justify-between items-center">
            {statuses.map((status, index) => (
              <div key={status} className="text-center flex-1">
                <div
                  className={`w-10 h-10 mx-auto rounded-full flex items-center justify-center font-bold
                  ${index <= statusIndex ? "bg-orange-600 text-white" : "bg-gray-300 text-gray-600"}`}
                >
                  {index + 1}
                </div>
                <p className="mt-3 text-sm">{status}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Order Summary Section */}
        <div className="bg-white p-10 rounded-3xl shadow-2xl">
          <h2 className="font-bold text-2xl mb-6">Order Summary</h2>

          <div className="space-y-4">
            {order.items.map((item) => (
              <div key={item.id} className="flex justify-between">
                <span>{item.name} x {item.quantity}</span>
                <span>₦{item.price * item.quantity}</span>
              </div>
            ))}
          </div>

          <div className="border-t mt-8 pt-6 flex justify-between font-black text-xl mb-4">
            <span>Total</span>
            <span className="text-orange-600">₦{order.total}</span>
          </div>

          {/* Customer Info */}
          <div className="text-slate-700 space-y-2 mb-6">
            <p><strong>Name:</strong> {order.customer.name}</p>
            <p><strong>Email:</strong> {order.customer.email}</p>
            <p><strong>Address:</strong> {order.customer.address}</p>
            <p><strong>Payment Method:</strong> {order.paymentMethod || "N/A"}</p>
          </div>

          <Link
            to={`/order-summary/${order.id}`}
            className="w-full block text-center bg-orange-600 text-white py-4 rounded-xl font-black text-lg hover:bg-orange-700 transition-all"
          >
            View Full Order Summary
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default OrderConfirmation;