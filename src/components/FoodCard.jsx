import { motion } from 'framer-motion';
import { ShoppingCart, Plus, Star } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

function FoodCard({ meal }) {
  const { addToCart } = useCart();

  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="food-card group"
    >
      <Link to={`/food/${meal.id}`} className="block relative h-56 overflow-hidden">
        <img
          src={meal.image}
          alt={meal.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full shadow-sm">
          <span className="text-sm font-bold text-orange-600">₦{meal.price.toLocaleString()}</span>
        </div>
        {meal.specialTip && (
          <div className="absolute bottom-4 left-4 bg-orange-600 text-white text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded">
            {meal.specialTip}
          </div>
        )}
      </Link>

      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <Link to={`/food/${meal.id}`} className="text-xl font-bold text-slate-800 hover:text-orange-600 transition">
            {meal.name}
          </Link>
          <div className="flex items-center text-yellow-500">
            <Star size={14} fill="currentColor" />
            <span className="text-xs font-bold text-slate-600 ml-1">4.8</span>
          </div>
        </div>

        <p className="text-slate-500 text-sm line-clamp-2 mb-6">
          {meal.description}
        </p>

        <div className="flex items-center justify-between">
          <span className="text-xs font-semibold text-slate-400 uppercase tracking-widest">{meal.category}</span>
          <button
            onClick={() => addToCart(meal)}
            className="flex items-center space-x-2 bg-slate-900 text-white px-4 py-2 rounded-xl hover:bg-orange-600 transition-colors duration-300"
          >
            <Plus size={18} />
            <span className="text-sm font-bold">Add</span>
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default FoodCard;
