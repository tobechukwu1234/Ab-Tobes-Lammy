import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

function CTA() {
  return (
    <section className="py-24 px-4 md:px-6">
      <div className="container mx-auto">
        <div className="relative rounded-[3rem] overflow-hidden bg-orange-600 shadow-3xl">
          {/* Decorative background shapes */}
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

export default CTA;
