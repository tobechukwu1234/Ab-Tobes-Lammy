import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronRight, UtensilsCrossed } from 'lucide-react';
import heroImg from '../assets/rice and chicken.jpg';

const Hero = () => {
  return (
    <section className="relative h-screen min-h-[700px] flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImg}
          alt="Delicious Rice and Chicken"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/40 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center space-x-2 bg-orange-600/20 backdrop-blur-md border border-orange-500/30 px-4 py-2 rounded-full text-orange-400 font-semibold mb-6"
          >
            <UtensilsCrossed size={18} />
            <span className="text-sm tracking-wide uppercase">Best Food Delivery in Lagos</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-black text-white leading-tight mb-6"
          >
            Savor the Taste of <span className="text-orange-500">ABT Kitchen</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-slate-200 mb-10 leading-relaxed max-w-xl"
          >
            Authentic, warm, and delicious meals prepared with passion and delivered straight to your door. Freshness you can taste, quality you can trust.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link to="/menu" className="btn-primary flex items-center justify-center group">
              Order Now
              <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </Link>
            <Link to="/menu" className="btn-secondary bg-white/10! text-white! border-white/30! backdrop-blur-md hover:bg-white/20! flex items-center justify-center">
              View Menu
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Decorative elements */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          rotate: [0, 5, 0]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-10 right-10 hidden lg:block"
      >
        <div className="w-64 h-64 rounded-full bg-orange-500/20 blur-3xl"></div>
      </motion.div>
    </section>
  );
};

export default Hero;
