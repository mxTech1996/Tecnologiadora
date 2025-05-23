// components/ConsultingNavbar.js
'use client';

import Link from 'next/link';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaLinkedinIn,
  FaTwitter,
  FaBars,
  FaTimes,
  FaShoppingCart,
} from 'react-icons/fa';

const navVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
      staggerChildren: 0.05,
      delayChildren: 0.2,
    },
  },
};

const navItemVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
};

const mobileMenuVariants = {
  closed: {
    opacity: 0,
    x: '100%',
    transition: { duration: 0.3, ease: 'easeIn' },
  },
  open: { opacity: 1, x: '0%', transition: { duration: 0.4, ease: 'easeOut' } },
};

const ConsultingNavbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  const logoPart1 = 'Tech';
  const logoPart2 = 'DORA';
  const accentColor = 'text-blue-600'; // Accent color for your brand

  const navLinks = [
    { href: '/#services', label: 'Services' },
    { href: '/#industries', label: 'Industries' },
    { href: '/#prooducts', label: 'Products' },
    { href: '/#about', label: 'About Us' },
  ];

  const socialLinks = [
    { href: 'https://linkedin.com', icon: FaLinkedinIn, label: 'LinkedIn' },
    { href: 'https://twitter.com', icon: FaTwitter, label: 'Twitter' },
  ];

  return (
    <motion.nav
      className='bg-white shadow-sm sticky top-0 z-50' // Sticky navbar
      variants={navVariants}
      initial='hidden'
      animate='visible'
    >
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex items-center justify-between h-16'>
          {/* Logo */}
          <motion.div variants={navItemVariants}>
            <Link href='/' legacyBehavior>
              <a className='flex items-center text-2xl font-bold'>
                <span className={accentColor}>{logoPart1}</span>
                <span className='text-gray-800'>{logoPart2}</span>
              </a>
            </Link>
          </motion.div>

          {/* Desktop Navigation Links */}
          <motion.div
            className='hidden md:flex items-center space-x-6'
            variants={navItemVariants}
          >
            {navLinks.map((link) => (
              <motion.div key={link.label} variants={navItemVariants}>
                <Link href={link.href} legacyBehavior>
                  <a
                    className={`text-sm font-medium text-gray-600 hover:${accentColor} transition-colors`}
                  >
                    {link.label}
                  </a>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          {/* Right side: Social Icons and CTA Button (Desktop) */}
          <motion.div
            className='hidden md:flex items-center space-x-4'
            variants={navItemVariants}
          >
            <Link href='/my-cart' legacyBehavior>
              <a
                className={`text-gray-500 hover:${accentColor} transition-colors`}
                aria-label='Shopping Cart'
              >
                <FaShoppingCart size={22} />
              </a>
            </Link>
            <motion.div variants={navItemVariants}>
              <Link href='/more-information' legacyBehavior>
                <a
                  className={`bg-blue-600 text-white text-xs font-semibold px-4 py-2 rounded-full hover:bg-blue-700 transition-colors shadow-md`}
                >
                  Contact Us
                </a>
              </Link>
            </motion.div>
          </motion.div>

          {/* Mobile Menu Button */}
          <div className='md:hidden flex items-center'>
            <motion.button
              onClick={toggleMobileMenu}
              className={`p-2 rounded-md ${accentColor} focus:outline-none`}
              aria-label='Toggle menu'
              whileTap={{ scale: 0.9 }}
            >
              {mobileMenuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className='md:hidden absolute top-16 left-0 right-0 bg-white shadow-lg pb-4 z-40'
            variants={mobileMenuVariants}
            initial='closed'
            animate='open'
            exit='closed'
          >
            <div className='flex flex-col space-y-3 px-5 pt-3'>
              {navLinks.map((link) => (
                <Link key={link.label} href={link.href} legacyBehavior>
                  <a
                    onClick={() => setMobileMenuOpen(false)} // Close menu on click
                    className={`block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-blue-50 hover:${accentColor}`}
                  >
                    {link.label}
                  </a>
                </Link>
              ))}
              <Link href='/more-information' legacyBehavior>
                <a
                  className={`block w-full text-center bg-blue-600 text-white text-sm font-semibold mt-3 px-4 py-2.5 rounded-full hover:bg-blue-700 transition-colors shadow-md`}
                >
                  Contact Us
                </a>
              </Link>
              <div className='flex justify-center space-x-5 pt-4 border-t border-gray-200 mt-3'>
                {/* shopping cart */}

                <Link href='/cart' legacyBehavior>
                  <a
                    className={`text-gray-500 hover:${accentColor} transition-colors`}
                    aria-label='Shopping Cart'
                  >
                    <FaShoppingCart size={22} />
                  </a>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default ConsultingNavbar;
