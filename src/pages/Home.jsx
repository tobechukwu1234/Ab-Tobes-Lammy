import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import FeaturedMeals from '../components/FeaturedMeals';
import AboutPreview from '../components/AboutPreview';
import WhyChooseUs from '../components/WhyChooseUs';
import HowItWorks from '../components/HowItWorks';
import Reviews from '../components/Reviews';
import CTA from '../components/CTA';

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
