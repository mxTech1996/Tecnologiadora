// components/OurSolutions.jsx
'use client';

import { dataSite } from '@/data';
import { motion } from 'framer-motion';
import Image from 'next/image'; // Import Next.js Image component
import { FiArrowUpRight } from 'react-icons/fi';

// Placeholder images - replace with your actual image paths in /public
const placeholderImages = [
  '/images/placeholder-cloud.jpg', // Replace with your actual image path
  '/images/placeholder-data.jpg', // Replace with your actual image path
  '/images/placeholder-security.jpg', // Replace with your actual image path
];

const solutionsData = dataSite.services;

const ServicesSection = () => {
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: 'easeOut', delay: 0.4 }, // Delay after cards
    },
  };

  return (
    <motion.section
      id='services'
      className='py-16 sm:py-24 bg-gray-50'
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionVariants}
    >
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Section Title Area */}
        <motion.div
          className='text-center mb-12 sm:mb-16'
          variants={titleVariants}
        >
          <h3 className='text-base font-semibold text-indigo-600 tracking-wide uppercase'>
            Our Core Solutions
          </h3>
          <h2 className='mt-2 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900'>
            Driving Your Digital Transformation
          </h2>
        </motion.div>

        {/* Services Cards Grid */}
        <div className='grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3'>
          {solutionsData.map((solution, id) => (
            <motion.div
              key={id}
              className='bg-white rounded-lg shadow-lg overflow-hidden flex flex-col'
              variants={cardVariants}
            >
              <div className='relative w-full h-56'>
                {' '}
                {/* Fixed height for image container */}
                <Image
                  src={solution.image}
                  alt={solution.title}
                  layout='fill' // Makes the image fill the container
                  objectFit='cover' // Ensures the image covers the area, cropping if necessary
                  className='transition-transform duration-300 group-hover:scale-105' // Example hover effect
                />
              </div>
              <div className='p-6 flex flex-col flex-grow'>
                <h4 className='text-xl font-semibold text-gray-800 mb-2'>
                  {solution.title}
                </h4>
                <p className='text-gray-600 text-sm mb-4 flex-grow'>
                  {solution.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default ServicesSection;
