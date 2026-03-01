import { Outlet, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = () => {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-orange-50/30 flex flex-col font-outfit">
      <Navbar />
      <main className="grow">
        <AnimatePresence mode="wait">
          {/* We use key on the parent or individual routes if we want transitions */}
          {/* Here we'll wrap the Outlet or use location.pathname to trigger transitions */}
          <Outlet key={location.pathname} />
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
