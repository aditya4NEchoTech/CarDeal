import { Link } from 'react-router-dom';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-xl font-bold text-gray-900">Car Deal</Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link to="/listings" className="text-gray-700 hover:text-gray-900">Buy</Link>
              <Link to="/sell" className="text-gray-700 hover:text-gray-900">Sell</Link>
              <Link to="/contact" className="text-gray-700 hover:text-gray-900">Contact Us</Link>
              <Link to="/login" className="text-gray-700 hover:text-gray-900">Login/Signup</Link>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-900"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/listings" className="text-gray-700 hover:text-gray-900 block">Buy</Link>
            <Link to="/sell" className="text-gray-700 hover:text-gray-900 block">Sell</Link>
            <Link to="/contact" className="text-gray-700 hover:text-gray-900 block">Contact Us</Link>
            <Link to="/login" className="text-gray-700 hover:text-gray-900 block">Login/Signup</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
