import React, { useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, Star, Clock, Flame, ShoppingBag, ArrowRight, ShieldCheck, Leaf } from "lucide-react";
import { useCart } from "../context/CartContext";
import { MEALS } from "../data/meals";

const FoodDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [animateDot, setAnimateDot] = useState(false);

  const meal = MEALS.find((m) => m.id === id);

  if (!meal) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-white p-10">
        <p className="text-center text-2xl font-bold text-slate-800 mb-6">
          Meal not found
        </p>
        <Link to="/" className="btn-primary flex items-center">
          <ChevronLeft size={20} className="mr-2" />
          Back to Home
        </Link>
      </div>
    );
  }

  const handleAdd = () => {
    addToCart(meal);
    setAnimateDot(true);
    setTimeout(() => setAnimateDot(false), 600);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-slate-50/30 pt-32 pb-24"
    >
      <div className="container mx-auto px-4 md:px-6">
        {/* Back Link */}
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => navigate(-1)}
          className="flex items-center text-slate-500 hover:text-orange-600 font-bold mb-8 transition-colors group"
        >
          <ChevronLeft size={20} className="mr-1 group-hover:-translate-x-1 transition-transform" />
          Back
        </motion.button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-stretch">
          {/* Left: Image Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative group"
          >
            <div className="relative aspect-square md:aspect-auto md:h-full min-h-80 md:min-h-125 rounded-[3rem] overflow-hidden shadow-2xl shadow-orange-500/10">
              <img
                src={meal.image}
                alt={meal.name}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent"></div>
            </div>

            {/* Floating elements */}
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-3xl shadow-xl flex items-center space-x-4 border border-orange-50 hidden md:flex">
              <div className="w-12 h-12 rounded-2xl bg-orange-100 flex items-center justify-center text-orange-600">
                <Flame size={24} />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Calories</p>
                <p className="text-lg font-black text-slate-900">450 kcal</p>
              </div>
            </div>
          </motion.div>

          {/* Right: Info Section */}
          <div className="flex flex-col justify-center space-y-8">
            <div>
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-block bg-orange-600/10 text-orange-600 px-4 py-1.5 rounded-full text-sm font-black uppercase tracking-widest mb-4"
              >
                {meal.category}
              </motion.span>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-5xl md:text-6xl font-black text-slate-900 leading-tight mb-4"
              >
                {meal.name}
              </motion.h1>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="flex items-center space-x-6 text-slate-500"
              >
                <div className="flex items-center">
                  <div className="flex text-yellow-500 mr-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={18} fill={i < 5 ? "currentColor" : "none"} />
                    ))}
                  </div>
                  <span className="font-bold text-slate-900 pt-1">5.0</span>
                  <span className="ml-1 text-sm pt-1">(120+ Reviews)</span>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="space-y-6"
            >
              <div className="p-8 rounded-4xl bg-white border border-slate-100 shadow-sm">
                <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center">
                  <Leaf size={20} className="text-orange-600 mr-2" />
                  Description
                </h3>
                <p className="text-slate-600 text-lg leading-relaxed">
                  {meal.description}
                </p>
                {meal.specialTip && (
                  <div className="mt-6 flex items-start space-x-3 p-4 bg-orange-50 rounded-2xl border border-orange-100">
                    <ShieldCheck className="text-orange-600 shrink-0 mt-1" size={18} />
                    <p className="text-sm font-bold text-orange-900 italic">Chef's Tip: {meal.specialTip}</p>
                  </div>
                )}
              </div>

              <div className="flex flex-wrap gap-4">
                <div className="flex items-center space-x-2 bg-slate-100 px-4 py-2 rounded-2xl">
                  <Clock size={18} className="text-slate-500" />
                  <span className="text-sm font-bold text-slate-700">25-30 mins</span>
                </div>
                <div className="flex items-center space-x-2 bg-slate-100 px-4 py-2 rounded-2xl">
                  <ShieldCheck size={18} className="text-slate-500" />
                  <span className="text-sm font-bold text-slate-700">Hygienic</span>
                </div>
                <div className="flex items-center space-x-2 bg-slate-100 px-4 py-2 rounded-2xl">
                  <Leaf size={18} className="text-slate-500" />
                  <span className="text-sm font-bold text-slate-700">Fresh</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex items-center justify-between p-2 pl-8 border-2 border-slate-900 rounded-[2.5rem] bg-white group"
            >
              <span className="text-3xl font-black text-slate-900">
                ₦{meal.price.toLocaleString()}
              </span>

              <button
                onClick={handleAdd}
                className="relative overflow-hidden bg-slate-900 text-white px-10 py-5 rounded-[2.2rem] font-black text-lg hover:bg-orange-600 transition-all duration-500 flex items-center space-x-3 group"
              >
                <ShoppingBag size={22} className="group-hover:scale-110 transition-transform" />
                <span>ADD TO CART</span>

                {/* FLYING DOT */}
                <AnimatePresence>
                  {animateDot && (
                    <motion.span
                      initial={{ scale: 0, x: 0, y: 0, opacity: 1 }}
                      animate={{ scale: 1, x: 100, y: -150, opacity: 0 }}
                      exit={{ opacity: 0 }}
                      className="absolute w-4 h-4 bg-orange-400 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                    />
                  )}
                </AnimatePresence>
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default FoodDetails;
