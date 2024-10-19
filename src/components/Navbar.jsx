import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-blue-600 text-white p-4 shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">CAR DEAL</Link>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-4">
          <Link to="/" className="hover:text-gray-200">Home</Link>
          <Link to="/cars" className="hover:text-gray-200">Buy</Link>
          <Link to="/sell" className="hover:text-gray-200">Sell</Link>
          <Link to="/contact" className="hover:text-gray-200">Contact Us</Link>
          <Link to="/login" className="hover:text-gray-200">Login</Link>
          <Link to="/signup" className="hover:text-gray-200">Sign Up</Link>
        </div>

        {/* Mobile Hamburger Menu */}
        <div className="md:hidden">
          <button className="text-white" onClick={toggleMenu}>
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-blue-600">
          <Link
            to="/"
            className="block px-4 py-2 text-white hover:bg-blue-500"
            onClick={toggleMenu}
          >
            Home
          </Link>
          <Link
            to="/cars"
            className="block px-4 py-2 text-white hover:bg-blue-500"
            onClick={toggleMenu}
          >
            Buy
          </Link>
          <Link
            to="/sell"
            className="block px-4 py-2 text-white hover:bg-blue-500"
            onClick={toggleMenu}
          >
            Sell
          </Link>
          <Link
            to="/contact"
            className="block px-4 py-2 text-white hover:bg-blue-500"
            onClick={toggleMenu}
          >
            Contact Us
          </Link>
          <Link
            to="/login"
            className="block px-4 py-2 text-white hover:bg-blue-500"
            onClick={toggleMenu}
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="block px-4 py-2 text-white hover:bg-blue-500"
            onClick={toggleMenu}
          >
            Sign Up
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
