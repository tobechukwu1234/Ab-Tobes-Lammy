import React from "react"
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronRight, UtensilsCrossed, Truck, Leaf, ShieldCheck, Award, Utensils, ShoppingBag, CreditCard, Star, Quote, ArrowRight } from 'lucide-react';

// Assets
import heroImg from '../assets/rice and chicken.jpg';
import aboutImg from '../assets/amala.jpg';

// Components & Data
import FoodCard from '../components/FoodCard';
import { MEALS, REVIEWS } from '../data/meals';

// --- Sub-components (Consolidated Houses) ---

const Hero = () => {
  return (
    <section className="relative h-screen min-h-175 flex items-center overflow-hidden">
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

const FeaturedMeals = () => {
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

const AboutPreview = () => {
  return (
    <section className="py-24 bg-orange-50/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative z-10 rounded-4xl overflow-hidden shadow-2xl">
              <img src={aboutImg} alt="Our Kitchen" className="w-full h-125 object-cover" />
            </div>
            <div className="absolute -bottom-6 -right-6 w-full h-full bg-orange-200 rounded-4xl -z-10"></div>
            <div className="absolute -top-10 -left-10 w-32 h-32 bg-orange-500/10 rounded-full blur-2xl"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 leading-tight">
                Traditional Taste, <br />
                <span className="text-orange-600">Modern Convenience</span>
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed">
                At ABT Kitchen, we believe that great food is more than just a meal—it's an experience. Our chefs combine traditional recipes passed down through generations with the freshest locally sourced ingredients.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8">
              <div>
                <h4 className="text-3xl font-black text-orange-600 mb-1">10+</h4>
                <p className="text-sm font-bold text-slate-500 uppercase tracking-widest">Years Experience</p>
              </div>
              <div>
                <h4 className="text-3xl font-black text-orange-600 mb-1">50+</h4>
                <p className="text-sm font-bold text-slate-500 uppercase tracking-widest">Master Chefs</p>
              </div>
            </div>

            <Link to="/about" className="btn-secondary inline-block">
              Learn Our Story
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const WhyChooseUs = () => {
  const features = [
    {
      icon: <Truck className="text-orange-600" size={32} />,
      title: 'Fast Delivery',
      description: 'Your food arrives hot and fresh in record time, thanks to our efficient delivery network.'
    },
    {
      icon: <Leaf className="text-orange-600" size={32} />,
      title: 'Fresh Ingredients',
      description: 'We source our produce and meats daily to ensure the highest quality in every bite.'
    },
    {
      icon: <ShieldCheck className="text-orange-600" size={32} />,
      title: 'Hygienic Preparation',
      description: 'Our kitchen maintains the strictest hygiene standards to guarantee safe and healthy meals.'
    },
    {
      icon: <Award className="text-orange-600" size={32} />,
      title: 'Premium Quality',
      description: 'We don’t cut corners. From spices to main courses, excellence is our only standard.'
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black text-slate-900 mb-6"
          >
            Why Customers <span className="text-orange-600">Trust Us</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-500 text-lg max-w-2xl mx-auto"
          >
            At ABT KT, we prioritize your satisfaction and health. Here are just a few reasons why we are Lagos' first choice.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 rounded-4xl bg-orange-50/50 border border-orange-100 hover:bg-white hover:shadow-xl hover:shadow-orange-500/5 transition-all duration-500"
            >
              <div className="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-6">
                {feature.icon}
              </div>
              <h4 className="text-xl font-bold text-slate-800 mb-4">{feature.title}</h4>
              <p className="text-slate-600 text-sm leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const HowItWorks = () => {
  const steps = [
    {
      icon: <Utensils size={32} />,
      title: 'Choose Meal',
      description: 'Select your favorite meal from our menu.'
    },
    {
      icon: <ShoppingBag size={32} />,
      title: 'Add to Cart',
      description: 'Customize your order and add it to cart.'
    },
    {
      icon: <CreditCard size={32} />,
      title: 'Checkout',
      description: 'Securely pay for your order using various methods.'
    },
    {
      icon: <Truck size={32} />,
      title: 'Fast Delivery',
      description: 'Receive your hot food at your doorstep.'
    }
  ];

  return (
    <section className="py-24 bg-slate-900 border-t border-slate-800 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-200 h-200 bg-orange-600/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black text-white mb-6"
          >
            How It <span className="text-orange-500">Works</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-400 text-lg max-w-2xl mx-auto"
          >
            Getting delicious food has never been easier. Just follow these four simple steps.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center group relative h-full flex flex-col items-center"
            >
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-[60%] w-[80%] h-0.5 bg-linear-to-r from-orange-500/50 to-transparent -z-10"></div>
              )}

              <div className="w-24 h-24 rounded-full bg-slate-800 border-2 border-slate-700 flex items-center justify-center text-orange-500 mb-8 group-hover:bg-orange-600 group-hover:text-white group-hover:border-orange-600 group-hover:scale-110 transition-all duration-500 shadow-xl shadow-black/20">
                {step.icon}
              </div>
              <h4 className="text-xl font-bold text-white mb-4">{step.title}</h4>
              <p className="text-slate-400 text-sm leading-relaxed max-w-50">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Reviews = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black text-slate-900 mb-6"
          >
            What Our <span className="text-orange-600">Customers</span> Say
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-500 text-lg max-w-2xl mx-auto"
          >
            Don't just take our word for it. Hear from the people who keep coming back for more.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {REVIEWS.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 rounded-4xl bg-orange-50/30 border border-orange-100 flex flex-col items-center text-center relative"
            >
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-white rounded-2xl shadow-sm flex items-center justify-center text-orange-600">
                <Quote size={24} fill="currentColor" />
              </div>

              <div className="flex space-x-1 mb-6 mt-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    fill={i < review.rating ? "currentColor" : "none"}
                    className={i < review.rating ? "text-yellow-500" : "text-slate-300"}
                  />
                ))}
              </div>

              <p className="text-slate-700 italic mb-8 leading-relaxed">
                "{review.comment}"
              </p>

              <div className="mt-auto">
                <h4 className="text-lg font-bold text-slate-900">{review.user}</h4>
                <p className="text-xs font-bold text-orange-600 uppercase tracking-widest mt-1">Verified Customer</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CTA = () => {
  return (
    <section className="py-24 px-4 md:px-6">
      <div className="container mx-auto">
        <div className="relative rounded-[3rem] overflow-hidden bg-orange-600 shadow-3xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500 rounded-full -mr-20 -mt-20 blur-3xl opacity-50"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-black rounded-full -ml-20 -mb-20 blur-3xl opacity-20"></div>

          <div className="relative z-10 py-16 px-8 md:px-16 text-center max-w-3xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-black text-white mb-8 leading-tight"
            >
              Hungry? Let's Fix <span className="text-slate-900 underline decoration-white underline-offset-8">That.</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-orange-50 text-xl mb-12 opacity-90"
            >
              Order your favorite meal now and experience the fastest delivery service in Lagos. Freshness guaranteed!
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Link to="/menu" className="bg-white text-orange-600 hover:bg-orange-50 px-10 py-4 rounded-full font-black text-lg transition-all shadow-xl hover:shadow-2xl flex items-center justify-center space-x-3 mx-auto w-fit active:scale-95">
                <span>ORDER NOW</span>
                <ArrowRight size={24} />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- Main Page Component ---

function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="overflow-hidden"
    >
      <Hero />
      <FeaturedMeals />
      <AboutPreview />
      <WhyChooseUs />
      <HowItWorks />
      <Reviews />
      <CTA />
    </motion.div>
  );
};

export default Home;
