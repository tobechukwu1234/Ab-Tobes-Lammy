import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

function FoodCard({ meal }) {
  const { addToCart } = useCart();
  const [animateDot, setAnimateDot] = useState(false);

  const handleAdd = () => {
    addToCart(meal);
    setAnimateDot(true);
    setTimeout(() => setAnimateDot(false), 600); // reset animation
  };

  return (
    <motion.div whileHover={{ y: -10 }} className="food-card group relative">
      <Link to={`/food/${meal.id}`} className="block relative h-56 overflow-hidden">
        <img
          src={meal.image}
          alt={meal.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full shadow-sm">
          <span className="text-sm font-bold text-orange-600">₦{meal.price.toLocaleString()}</span>
        </div>
      </Link>

      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <Link to={`/food/${meal.id}`} className="text-xl font-bold text-slate-800 hover:text-orange-600 transition">
            {meal.name}
          </Link>
        </div>

        <p className="text-slate-500 text-sm line-clamp-2 mb-6">{meal.description}</p>

        <div className="flex items-center justify-between">
          <span className="text-xs font-semibold text-slate-400 uppercase tracking-widest">{meal.category}</span>

          <button
            onClick={handleAdd}
            className="relative flex items-center space-x-2 bg-slate-900 text-white px-4 py-2 rounded-xl hover:bg-orange-600 transition-colors duration-300"
          >
            <span className="text-sm font-bold">Add</span>

            {/* FLYING DOT */}
            <AnimatePresence>
              {animateDot && (
                <motion.span
                  initial={{ scale: 0, x: 0, y: 0, opacity: 1 }}
                  animate={{ scale: 1, x: 100, y: -100, opacity: 0 }}
                  exit={{ opacity: 0 }}
                  className="absolute w-3 h-3 bg-orange-600 rounded-full top-1 right-1"
                />
              )}
            </AnimatePresence>
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export default FoodCard;