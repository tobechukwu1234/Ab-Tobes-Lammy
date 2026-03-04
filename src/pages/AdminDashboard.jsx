import React from "react";
import { motion } from "framer-motion";
import { useOrders } from "../context/OrderContext";

const statuses = ["Preparing", "On The Way", "Delivered"];

const AdminDashboard = () => {
  const { orders, updateOrderStatus } = useOrders();

  if (!orders || orders.length === 0) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="min-h-screen py-24 bg-slate-900 text-white flex items-center justify-center"
      >
        <p className="text-xl">No orders yet.</p>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen py-24 bg-slate-900 text-white"
    >
      <div className="container mx-auto px-4 md:px-6">

        <h1 className="text-5xl font-black mb-16">
          Admin <span className="text-orange-500">Orders</span>
        </h1>

        <div className="space-y-8">
          {orders.map((order) => (
            <div key={order.id} className="bg-slate-800 p-8 rounded-3xl">

              {/* Order Header */}
              <div className="flex justify-between mb-4">
                <h3 className="font-bold text-xl">Order #{order.id}</h3>
                <span className="text-orange-400 font-bold">₦{order.total}</span>
              </div>

              {/* Customer Info */}
              <div className="text-slate-300 mb-4 space-y-1">
                <p><strong>Name:</strong> {order.customer.name}</p>
                <p><strong>Email:</strong> {order.customer.email}</p>
                <p><strong>Address:</strong> {order.customer.address}</p>
                <p><strong>Payment Method:</strong> {order.paymentMethod || "N/A"}</p>
              </div>

              {/* Order Items */}
              <div className="text-slate-400 mb-4">
                {order.items.map((item) => (
                  <p key={item.id}>
                    {item.name} x {item.quantity} = ₦{item.price * item.quantity}
                  </p>
                ))}
              </div>

              {/* Status Control */}
              <div className="flex items-center space-x-4 mt-4">
                <label className="font-bold text-slate-300">Status:</label>
                <select
                  value={order.status}
                  onChange={(e) => updateOrderStatus(order.id, e.target.value)}
                  className="bg-slate-700 text-white rounded-xl px-4 py-2"
                >
                  {statuses.map((status) => (
                    <option key={status} value={status}>{status}</option>
                  ))}
                </select>
              </div>

              {/* Order Date */}
              <p className="text-xs text-slate-500 mt-4">{order.date}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default AdminDashboard;