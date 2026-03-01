import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { REVIEWS } from '../data/meals';

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

export default Reviews;
