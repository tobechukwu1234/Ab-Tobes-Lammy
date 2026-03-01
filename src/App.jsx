import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Home from './pages/Home';
import Menu from './pages/Menu';
import About from './pages/About';
import Contact from './pages/Contact';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import FoodDetails from './pages/FoodDetails';
import OrderConfirmation from './pages/OrderConfirmation';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-orange-50/30 flex flex-col font-outfit">
      <Navbar />
      <main className="grow">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/food/:id" element={<FoodDetails />} />
            <Route path="/order-confirmation" element={<OrderConfirmation />} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
}

export default App;
