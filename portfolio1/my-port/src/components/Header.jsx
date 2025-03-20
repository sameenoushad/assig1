import React, { useState } from 'react';

const Header = () => {
  // State for toggling mobile menu
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-lg py-4 z-50">
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between">
          {/* Brand and logo */}
          <a href="index.html">
            <img src="./src/assets/img/logo.png" alt="Logo" className="w-auto h-10" />
          </a>
          {/* Mobile toggle button */}
          <button
            className="lg:hidden flex items-center justify-center p-2 border-2 border-gray-300 rounded-lg focus:outline-none"
            type="button"
            aria-controls="navbarSupportedContent"
            aria-expanded={isOpen ? 'true' : 'false'}
            aria-label="Toggle navigation"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="block w-6 h-0.5 bg-black mb-1"></span>
            <span className="block w-6 h-0.5 bg-black mb-1"></span>
            <span className="block w-6 h-0.5 bg-black"></span>
          </button>
          {/* Desktop navigation */}
          <div className={`lg:flex ${isOpen ? 'block' : 'hidden'} lg:flex-grow justify-end space-x-8`}>
            <ul className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-8 text-lg font-semibold">
              <li>
                <a
                  className="text-gray-800 hover:text-blue-600 transition duration-300 ease-in-out"
                  href="index.html"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  className="text-gray-800 hover:text-blue-600 transition duration-300 ease-in-out"
                  href="about.html"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  className="text-gray-800 hover:text-blue-600 transition duration-300 ease-in-out"
                  href="services.html"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  className="text-gray-800 hover:text-blue-600 transition duration-300 ease-in-out"
                  href="portfolio.html"
                >
                  Portfolio
                </a>
              </li>
              <li className="relative group">
                <a
                  href="#"
                  className="text-gray-800 hover:text-blue-600 transition duration-300 ease-in-out"
                  role="button"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Pages
                </a>
                <ul className="absolute hidden group-hover:block bg-white shadow-lg rounded-lg p-2 mt-2 space-y-2">
                  <li>
                    <a
                      className="block text-gray-800 hover:text-blue-600 transition duration-300 ease-in-out"
                      href="elements.html"
                    >
                      Elements
                    </a>
                  </li>
                  <li>
                    <a
                      className="block text-gray-800 hover:text-blue-600 transition duration-300 ease-in-out"
                      href="portfolio-details.html"
                    >
                      Portfolio Details
                    </a>
                  </li>
                </ul>
              </li>
              <li className="relative group">
                <a
                  href="#"
                  className="text-gray-800 hover:text-blue-600 transition duration-300 ease-in-out"
                  role="button"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Blog
                </a>
                <ul className="absolute hidden group-hover:block bg-white shadow-lg rounded-lg p-2 mt-2 space-y-2">
                  <li>
                    <a
                      className="block text-gray-800 hover:text-blue-600 transition duration-300 ease-in-out"
                      href="blog.html"
                    >
                      Blog
                    </a>
                  </li>
                  <li>
                    <a
                      className="block text-gray-800 hover:text-blue-600 transition duration-300 ease-in-out"
                      href="single-blog.html"
                    >
                      Blog Details
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a
                  className="text-gray-800 hover:text-blue-600 transition duration-300 ease-in-out"
                  href="contact.html"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
