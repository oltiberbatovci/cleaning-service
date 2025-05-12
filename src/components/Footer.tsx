import { NavLink } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Sparkles } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Sparkles className="h-6 w-6 text-primary-400" />
              <span className="text-xl font-bold">
                Cleaning<span className="text-secondary-400">24</span>
              </span>
            </div>
            <p className="text-gray-400 mb-4">
              Professional move-out cleaning services with a handover guarantee in Zurich.
              We ensure your property is spotless and ready for inspection.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="h-10 w-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary-700 transition-colors"
              >
                <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="h-10 w-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary-700 transition-colors"
              >
                <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <NavLink to="/" className="text-gray-400 hover:text-primary-400 transition-colors">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" className="text-gray-400 hover:text-primary-400 transition-colors">
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink to="/services" className="text-gray-400 hover:text-primary-400 transition-colors">
                  Services
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" className="text-gray-400 hover:text-primary-400 transition-colors">
                  Contact
                </NavLink>
              </li>
              <li>
                <NavLink to="/imprint" className="text-gray-400 hover:text-primary-400 transition-colors">
                  Imprint
                </NavLink>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <NavLink to="/services#construction-cleaning" className="text-gray-400 hover:text-primary-400 transition-colors">
                  Construction Cleaning
                </NavLink>
              </li>
              <li>
                <NavLink to="/services#final-cleaning" className="text-gray-400 hover:text-primary-400 transition-colors">
                  Final Cleaning
                </NavLink>
              </li>
              <li>
                <NavLink to="/services#spring-autumn-cleaning" className="text-gray-400 hover:text-primary-400 transition-colors">
                  Spring & Autumn Cleaning
                </NavLink>
              </li>
              <li>
                <NavLink to="/services#kitchen-cleaning" className="text-gray-400 hover:text-primary-400 transition-colors">
                  Kitchen Cleaning
                </NavLink>
              </li>
              <li>
                <NavLink to="/services#last-minute-cleaning" className="text-gray-400 hover:text-primary-400 transition-colors">
                  Last Minute Cleaning
                </NavLink>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-primary-400 mr-2 mt-0.5" />
                <span className="text-gray-400">
                  Talacker 41<br />
                  8001 Zurich
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-primary-400 mr-2" />
                <a href="tel:+41764487726" className="text-gray-400 hover:text-primary-400 transition-colors">
                  076 448 77 26
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-primary-400 mr-2" />
                <a href="mailto:service@cleaning24.ch" className="text-gray-400 hover:text-primary-400 transition-colors">
                  service@cleaning24.ch
                </a>
              </li>
              <li className="flex items-center">
                <Clock className="h-5 w-5 text-primary-400 mr-2" />
                <span className="text-gray-400">
                  Available 24/7
                </span>
              </li>
            </ul>
          </div>
        </div>
        
        <hr className="border-gray-800 mb-8" />
        
        <div className="flex flex-col md:flex-row md:justify-between text-gray-500 text-sm">
          <p>© {currentYear} Cleaning24. All rights reserved.</p>
          <div className="mt-2 md:mt-0">
            <NavLink to="/imprint" className="hover:text-primary-400 transition-colors">
              Imprint
            </NavLink>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;