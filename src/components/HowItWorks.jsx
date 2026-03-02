import { motion } from 'framer-motion';
import { Utensils, ShoppingBag, CreditCard, Truck } from 'lucide-react';

function HowItWorks() {
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
      {/* Decorative background circle */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-orange-600/5 rounded-full blur-[120px] pointer-events-none"></div>

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
              {/* Connector line for desktop */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-[60%] w-[80%] h-0.5 bg-linear-to-r from-orange-500/50 to-transparent -z-10"></div>
              )}

              <div className="w-24 h-24 rounded-full bg-slate-800 border-2 border-slate-700 flex items-center justify-center text-orange-500 mb-8 group-hover:bg-orange-600 group-hover:text-white group-hover:border-orange-600 group-hover:scale-110 transition-all duration-500 shadow-xl shadow-black/20">
                {step.icon}
              </div>
              <h4 className="text-xl font-bold text-white mb-4">{step.title}</h4>
              <p className="text-slate-400 text-sm leading-relaxed max-w-[200px]">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
