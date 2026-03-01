import { motion } from 'framer-motion';
import { Truck, Leaf, ShieldCheck, Award } from 'lucide-react';

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

export default WhyChooseUs;
