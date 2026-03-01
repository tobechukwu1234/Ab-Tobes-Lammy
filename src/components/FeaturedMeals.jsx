import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import FoodCard from './FoodCard';
import { MEALS } from '../data/meals';

const FeaturedMeals = () => {
  // Show only first 6 meals on the home page
  const featuredMeals = MEALS.slice(0, 6);

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-xl">
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-black text-slate-900 mb-4"
            >
              Our <span className="text-orange-600">Featured</span> Selections
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-slate-500 text-lg"
            >
              Hand-picked favorites from our kitchen to your table. Experience the best flavors ABT KT has to offer.
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Link to="/menu" className="group flex items-center text-orange-600 font-bold hover:text-orange-700 transition">
              View Full Menu
              <ChevronRight className="ml-1 group-hover:translate-x-1 transition-transform" size={20} />
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {featuredMeals.map((meal, index) => (
            <motion.div
              key={meal.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <FoodCard meal={meal} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedMeals;
