import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white shadow-md py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        <NavLink to="/" className="flex items-center space-x-2">
          <Sparkles className="h-8 w-8 text-primary-600" />
          <span className="text-2xl font-bold text-primary-600">
            Cleaning<span className="text-secondary-500">24</span>
          </span>
        </NavLink>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex justify-center items-center space-x-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `font-medium text-base transition-colors duration-200 ${
                  isActive
                    ? 'text-primary-400'
                    : scrolled
                    ? 'text-gray-900 hover:text-primary-400'
                    : 'text-gray-900 hover:text-primary-400'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
          <NavLink
            to="/contact"
            className="btn-primary text-sm"
          >
            Get Quote
          </NavLink>
        </nav>

        {/* Mobile Navigation Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-700 focus:outline-none"
          aria-label="Toggle Menu"
        >
          {isOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white border-t"
          >
            <div className="container-custom py-4 flex flex-col space-y-4">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `py-2 px-4 rounded-md transition-colors duration-200 ${
                      isActive
                        ? 'bg-primary-50 text-primary-600'
                        : 'text-gray-700 hover:bg-gray-50'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
              <NavLink
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="btn-primary text-center"
              >
                Get Quote
              </NavLink>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;