import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Phone, Mail, MapPin, Clock } from 'lucide-react';

function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div className="space-y-6">
            <Link to="/" className="inline-block">
              <span className="text-3xl font-black tracking-tighter text-orange-500">ABT<span className="text-white">KT</span></span>
            </Link>
            <p className="text-slate-400 leading-relaxed">
              Bringing the authentic taste of home right to your doorstep. Fresh ingredients, traditional recipes, and lightning-fast delivery.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-orange-600 hover:text-white transition-all">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-orange-600 hover:text-white transition-all">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-orange-600 hover:text-white transition-all">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:pl-8">
            <h4 className="text-white text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li><Link to="/menu" className="hover:text-orange-500 transition">Our Menu</Link></li>
              <li><Link to="/about" className="hover:text-orange-500 transition">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-orange-500 transition">Contact</Link></li>
              <li><Link to="/cart" className="hover:text-orange-500 transition">View Cart</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white text-lg font-bold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="text-orange-500 shrink-0 mt-1" size={18} />
                <span>123 Culinary Way, Food District, Lagos, Nigeria</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="text-orange-500 shrink-0" size={18} />
                <span>+234 800 ABT KITCHEN</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="text-orange-500 shrink-0" size={18} />
                <span>hello@abt-kitchen.com</span>
              </li>
            </ul>
          </div>

          {/* Business Hours */}
          <div>
            <h4 className="text-white text-lg font-bold mb-6">Opening Hours</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <Clock className="text-orange-500 shrink-0 mt-1" size={18} />
                <div>
                  <p className="text-white font-medium">Monday - Friday</p>
                  <p className="text-sm">08:00 AM - 10:00 PM</p>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <Clock className="text-orange-500 shrink-0 mt-1" size={18} />
                <div>
                  <p className="text-white font-medium">Saturday - Sunday</p>
                  <p className="text-sm">09:00 AM - 11:00 PM</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
          <p>© 2026 ABT Kitchen (ABT KT). All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition">Privacy Policy</a>
            <a href="#" className="hover:text-white transition">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
