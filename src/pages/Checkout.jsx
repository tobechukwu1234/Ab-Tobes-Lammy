import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useOrders } from "../context/OrderContext";
import { useCart } from "../context/CartContext";
import { PaystackButton } from "react-paystack";

const Checkout = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const { addOrder } = useOrders();
  const { clearCart } = useCart();

  const customer = state?.customer || {};
  const cartItems = state?.cartItems || [];
  const totalPrice = state?.totalPrice || 0;

  const [paymentMethod, setPaymentMethod] = useState("Card");
  const [config, setConfig] = useState(null);

  useEffect(() => {
    if (!cartItems.length || !customer.name) {
      navigate("/cart"); 
    } else {
      setConfig({
        reference: Date.now(),
        email: customer.email,
        amount: totalPrice * 100,
        publicKey: "pk_test_xxxxxxxxxxxxxxxxxxxxxxxx", // replace with your Paystack key
        metadata: {
          customer_name: customer.name,
          address: customer.address,
        },
      });
    }
  }, [cartItems, customer, navigate, totalPrice]);

  const handlePaymentSuccess = (reference) => {
    const newOrder = {
      id: Date.now(),
      items: cartItems,
      total: totalPrice,
      customer,
      status: "Preparing",
      date: new Date().toLocaleString(),
      paymentReference: reference.reference,
      paymentMethod: data.paymentMethod,
    };

    addOrder(newOrder);
    clearCart();
    navigate(`/order-confirmation/${newOrder.id}`);
  };

  const handlePaymentClose = () => {
    alert("Payment was not completed.");
  };

  const handlePayOnDelivery = () => {
    const newOrder = {
      id: Date.now(),
      items: cartItems,
      total: totalPrice,
      customer,
      status: "Preparing",
      date: new Date().toLocaleString(),
      paymentMethod: "Pay on Delivery",
    };

    addOrder(newOrder);
    clearCart();
    navigate(`/order-confirmation/${newOrder.id}`);
  };

  if (!config) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen py-24 bg-white"
    >
      <div className="container mx-auto max-w-4xl px-4 md:px-6 space-y-12">

        <h2 className="text-3xl font-black">Checkout</h2>

        <div className="bg-orange-50 p-6 rounded-3xl shadow-lg">
          <h3 className="font-bold text-xl mb-4">Customer Info</h3>
          <p><strong>Name:</strong> {customer.name}</p>
          <p><strong>Email:</strong> {customer.email}</p>
          <p><strong>Address:</strong> {customer.address}</p>
        </div>

        <div className="bg-white p-6 rounded-3xl shadow-lg">
          <h3 className="font-bold text-xl mb-4">Order Summary</h3>
          <div className="space-y-3">
            {cartItems.map(item => (
              <div key={item.id} className="flex justify-between">
                <span>{item.name} x {item.quantity}</span>
                <span>₦{item.price * item.quantity}</span>
              </div>
            ))}
          </div>
          <div className="border-t mt-4 pt-4 flex justify-between font-black text-lg">
            <span>Total:</span>
            <span className="text-orange-600">₦{totalPrice}</span>
          </div>
        </div>

        <div className="flex space-x-4">
          {["Card", "Pay on Delivery"].map((method) => (
            <motion.button
              key={method}
              onClick={() => setPaymentMethod(method)}
              whileHover={{ scale: 1.05 }}
              className={`flex-1 py-4 font-bold rounded-xl text-lg transition-all 
                ${paymentMethod === method ? "bg-orange-600 text-white shadow-xl" : "bg-slate-100 text-slate-800 hover:bg-slate-200"}`}
            >
              {method === "Card" ? "Pay with Card" : "Pay on Delivery"}
            </motion.button>
          ))}
        </div>

        <div className="mt-6">
          {paymentMethod === "Card" ? (
            <PaystackButton
              {...config}
              text="Confirm & Pay"
              className="w-full bg-orange-600 text-white py-4 rounded-xl font-black text-lg hover:bg-orange-700 transition-all"
              onSuccess={handlePaymentSuccess}
              onClose={handlePaymentClose}
            />
          ) : (
            <motion.button
              onClick={handlePayOnDelivery}
              whileHover={{ scale: 1.02 }}
              className="w-full bg-slate-900 text-white py-4 rounded-xl font-black text-lg hover:bg-slate-800 transition-all"
            >
              Confirm & Pay on Delivery
            </motion.button>
          )}
        </div>

      </div>
    </motion.div>
  );
};

export default Checkout;