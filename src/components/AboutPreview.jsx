import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import aboutImg from '../assets/amala.jpg';

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
              <img src={aboutImg} alt="Our Kitchen" className="w-full h-[500px] object-cover" />
            </div>
            {/* Decorative background shape */}
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

export default AboutPreview;
