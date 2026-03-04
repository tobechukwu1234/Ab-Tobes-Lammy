import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useCart } from "../context/CartContext";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Trash2 } from "lucide-react";

const cartSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email"),
  address: z.string().min(1, "Address is required"),
});

const Cart = () => {
  const navigate = useNavigate();
  const { cartItems = [], totalPrice = 0, removeItem = () => {} } = useCart();

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(cartSchema),
  });

  const onProceedToCheckout = (data) => {
    if (cartItems.length === 0) return;
    // Navigate to Checkout page and pass customer + cart info via state
    navigate("/checkout", { state: { customer: data, cartItems, totalPrice } });
  };

  if (!cartItems || cartItems.length === 0) {
    return (
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="min-h-screen flex items-center justify-center text-center p-10">
        <div>
          <h2 className="text-3xl font-bold mb-4">Your cart is empty</h2>
          <p className="text-slate-500">Add some delicious meals to your cart to continue.</p>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="min-h-screen py-24 bg-white">
      <div className="container mx-auto max-w-4xl px-4 md:px-6 space-y-12">

        {/* Cart Items */}
        <div className="space-y-6">
          <h2 className="text-3xl font-black">Your Cart</h2>
          <div className="divide-y divide-slate-200 border-t border-b border-slate-200">
            {cartItems.map(item => (
              <div key={item.id} className="flex justify-between items-center py-4">
                <div>
                  <h3 className="font-bold">{item.name}</h3>
                  <p className="text-slate-500">Qty: {item.quantity} x ₦{item.price}</p>
                </div>
                <div className="flex items-center space-x-4">
                  <span className="font-bold">₦{item.price * item.quantity}</span>
                  <button onClick={() => removeItem(item.id)} className="text-red-500 hover:text-red-600">
                    <Trash2 size={20} />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-between mt-6 font-black text-xl">
            <span>Total:</span>
            <span className="text-orange-600">₦{totalPrice}</span>
          </div>
        </div>

        {/* Customer Info Form */}
        <div className="bg-orange-50 p-8 rounded-3xl shadow-lg">
          <h2 className="text-2xl font-bold mb-6">Customer Info</h2>
          <form onSubmit={handleSubmit(onProceedToCheckout)} className="space-y-6">
            <div>
              <label className="block mb-2 font-semibold">Name</label>
              <input
                type="text"
                {...register("name")}
                className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-orange-500 focus:outline-none"
              />
              {errors.name && <p className="text-red-500 mt-1 text-sm">{errors.name.message}</p>}
            </div>

            <div>
              <label className="block mb-2 font-semibold">Email</label>
              <input
                type="email"
                {...register("email")}
                className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-orange-500 focus:outline-none"
              />
              {errors.email && <p className="text-red-500 mt-1 text-sm">{errors.email.message}</p>}
            </div>

            <div>
              <label className="block mb-2 font-semibold">Address</label>
              <textarea
                {...register("address")}
                className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-orange-500 focus:outline-none"
              />
              {errors.address && <p className="text-red-500 mt-1 text-sm">{errors.address.message}</p>}
            </div>

            <button type="submit" className="w-full bg-orange-600 text-white py-4 rounded-xl font-black text-lg hover:bg-orange-700 transition-all">
              Proceed to Checkout
            </button>
          </form>
        </div>
      </div>
    </motion.div>
  );
};

export default Cart;