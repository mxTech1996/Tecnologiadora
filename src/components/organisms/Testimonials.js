// components/TestimonialCarousel.jsx
'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronLeft, FiChevronRight, FiStar, FiUser } from 'react-icons/fi'; // FiUser for placeholder
// If you want solid stars from Font Awesome:
// import { FaStar } from "react-icons/fa";

const testimonialsData = [
  {
    id: 1,
    name: 'TechZone Electronics',
    description:
      "Excellent service and fast shipping! We've been ordering computer parts in bulk for our retail stores, and the quality has always been consistent. Highly recommended for any business looking for a reliable supplier.",
    rating: 5,
    image: null, // Replace with actual image path if available, e.g., "/images/clients/techzone.jpg"
  },
  {
    id: 2,
    name: 'Lisa M., IT Manager at SmartNet Solutions',
    description:
      'The custom hardware bundles saved us a lot of time and hassle. Everything arrived pre-configured and ready to deploy across our offices. Great customer support, too!',
    rating: 5,
    image: null, // e.g., "/images/clients/lisa-m.jpg"
  },
  {
    id: 3,
    name: 'John Rivera, Procurement Officer, Westview School District',
    description:
      "We’ve worked with several suppliers, but this one stands out. Competitive prices, quick responses, and trustworthy delivery timelines. A perfect fit for our school district's tech needs.",
    rating: 5,
    image: null, // e.g., "/images/clients/john-r.jpg"
  },
  {
    id: 4,
    name: 'DigitalWorks Solutions',
    description:
      'We placed a large order of laptops and networking gear, and the entire process was smooth from start to finish. Our account manager was super helpful and responsive.',
    rating: 5,
    image: null,
  },
  {
    id: 5,
    name: 'Amy C., Owner of ConnectTech Resellers',
    description:
      'Great experience every time. The tiered pricing makes it easy for small businesses like ours to scale affordably. This is now our go-to source for all our IT hardware.',
    rating: 5,
    image: null,
  },
];

// Helper to parse name and title
const parseNameAndTitle = (nameStr) => {
  if (nameStr.includes(',')) {
    const parts = nameStr.split(',');
    return {
      name: parts[0].trim(),
      title: parts.slice(1).join(',').trim(),
    };
  }
  return { name: nameStr, title: 'Valued Client' }; // Default title if none provided
};

const TestimonialCarousel = () => {
  const [[currentIndex, direction], setCurrentIndex] = useState([0, 0]); // [index, direction for animation]

  const paginate = (newDirection) => {
    let newIndex = currentIndex + newDirection;
    if (newIndex < 0) {
      newIndex = testimonialsData.length - 1;
    } else if (newIndex >= testimonialsData.length) {
      newIndex = 0;
    }
    setCurrentIndex([newIndex, newDirection]);
  };

  const activeTestimonial = testimonialsData[currentIndex];
  const { name: authorName, title: authorTitle } = parseNameAndTitle(
    activeTestimonial.name
  );

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: 'easeInOut' },
    },
    exit: (direction) => ({
      x: direction < 0 ? '100%' : '-100%',
      opacity: 0,
      transition: { duration: 0.5, ease: 'easeInOut' },
    }),
  };

  return (
    <section
      id='testimonials'
      className='relative py-16 sm:py-24 bg-indigo-700 text-white overflow-hidden'
    >
      {/* Optional: Background pattern - uncomment and provide your SVG/image */}
      {/* <div
        className="absolute inset-0 opacity-10"
        style={{ backgroundImage: "url('/path-to-your-world-map-pattern.svg')", backgroundSize: "cover" }}
      ></div> */}

      <div className='relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='relative min-h-[400px] sm:min-h-[350px] flex flex-col justify-center'>
          {' '}
          {/* Ensure enough height */}
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={variants}
              initial='enter'
              animate='center'
              exit='exit'
              className='absolute w-full' // Make slides take full width and position absolutely
            >
              <blockquote className='text-center'>
                <p className='text-xl sm:text-2xl lg:text-3xl font-medium leading-relaxed sm:leading-relaxed lg:leading-relaxed'>
                  “{activeTestimonial.description}”
                </p>
                <footer className='mt-8'>
                  <div className='flex justify-center items-center mb-2'>
                    {[...Array(activeTestimonial.rating)].map((_, i) => (
                      <FiStar
                        key={i}
                        className='w-5 h-5 text-yellow-400 fill-current'
                      />
                      // Or use FaStar: <FaStar key={i} className="w-5 h-5 text-yellow-400" />
                    ))}
                  </div>
                  <div className='flex items-center justify-center'>
                    {activeTestimonial.image ? (
                      <img
                        className='w-12 h-12 rounded-full object-cover mr-4 shadow-md'
                        src={activeTestimonial.image}
                        alt={authorName}
                      />
                    ) : (
                      <div className='w-12 h-12 rounded-full bg-indigo-500 flex items-center justify-center mr-4 shadow-md'>
                        <FiUser className='w-6 h-6 text-white' />
                      </div>
                    )}
                    <div>
                      <div className='font-semibold text-lg'>{authorName}</div>
                      <div className='text-indigo-200 text-sm'>
                        {authorTitle}
                      </div>
                    </div>
                  </div>
                </footer>
              </blockquote>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={() => paginate(-1)}
          className='absolute top-1/2 left-0 sm:-left-4 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full focus:outline-none transition-colors z-10'
          aria-label='Previous testimonial'
        >
          <FiChevronLeft className='w-6 h-6 sm:w-8 sm:h-8' />
        </button>
        <button
          onClick={() => paginate(1)}
          className='absolute top-1/2 right-0 sm:-right-4 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full focus:outline-none transition-colors z-10'
          aria-label='Next testimonial'
        >
          <FiChevronRight className='w-6 h-6 sm:w-8 sm:h-8' />
        </button>

        {/* Pagination Dots */}
        <div className='absolute -bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 mt-8'>
          {testimonialsData.map((_, index) => (
            <button
              key={index}
              onClick={() =>
                setCurrentIndex([index, index > currentIndex ? 1 : -1])
              }
              className={`w-3 h-3 rounded-full transition-colors ${
                currentIndex === index
                  ? 'bg-white'
                  : 'bg-white/40 hover:bg-white/70'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialCarousel;
