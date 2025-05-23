// components/ITConsultingHero.jsx
'use client'; // Add this directive for Next.js App Router if using client components

import { dataSite } from '@/data';
import { motion } from 'framer-motion';
import Image from 'next/image';
import {
  FiArrowRight,
  FiUsers,
  FiBriefcase,
  FiBarChart2,
} from 'react-icons/fi'; // Example icons

const ITConsultingHero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  const waveVariants = {
    animate: {
      x: [0, -5, 5, -5, 0],
      y: [0, 3, -3, 3, 0],
      transition: {
        duration: 5,
        ease: 'easeInOut',
        repeat: Infinity,
      },
    },
  };

  return (
    <div className='min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 overflow-hidden'>
      {/* Hero Section */}
      <motion.section
        className='relative text-center mb-24'
        variants={containerVariants}
        initial='hidden'
        animate='visible'
      >
        {/* Abstract Shapes - Placeholder */}
        <motion.div
          className='absolute top-0 -left-20 w-40 h-60 sm:w-60 sm:h-80 bg-gradient-to-br from-blue-400 to-indigo-600 opacity-30 rounded-full filter blur-2xl'
          variants={waveVariants}
          animate='animate'
        ></motion.div>
        <motion.div
          className='absolute bottom-0 -right-20 w-40 h-60 sm:w-60 sm:h-80 bg-gradient-to-tl from-sky-400 to-cyan-600 opacity-30 rounded-full filter blur-2xl'
          variants={waveVariants}
          animate='animate'
        ></motion.div>

        <motion.h1
          className='text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight'
          variants={itemVariants}
        >
          Unlock Peak Performance with
          <br />
          <span className='text-indigo-600'>Our IT Consulting Services</span>
        </motion.h1>
        <motion.p
          className='mt-6 max-w-2xl mx-auto text-lg sm:text-xl text-gray-600'
          variants={itemVariants}
        >
          {dataSite.description}
        </motion.p>
        <motion.div
          className='mt-10 flex justify-center space-x-4'
          variants={itemVariants}
        >
          <button
            onClick={() => {
              window.location.href = '/#services';
            }}
            className='inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 transition-colors'
          >
            Discover More
          </button>
          <button
            onClick={() => {
              window.location.href = '/more-information';
            }}
            className='inline-flex items-center justify-center px-6 py-3 border border-indigo-600 text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50 transition-colors'
          >
            Schedule a Call
          </button>
        </motion.div>
      </motion.section>

      {/* Lower Section */}
      <motion.section
        className='max-w-7xl mx-auto'
        variants={containerVariants}
        initial='hidden'
        animate='visible'
      >
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch'>
          {/* Left Column: Stats & Small Buttons */}
          <motion.div
            className='bg-indigo-600 text-white p-8 rounded-lg shadow-xl flex flex-col justify-between h-full' // Added h-full
            variants={itemVariants}
          >
            <div>
              <p className='text-sm font-semibold uppercase tracking-wider text-indigo-200'>
                New Projects
              </p>
              <p className='text-6xl font-bold mt-2'>30+</p>
              <p className='text-indigo-100 mt-1'>Completed Successfully</p>
            </div>
            <div className='mt-8 space-y-3'>
              <button
                onClick={() => {
                  window.location.href = '/#products';
                }}
                className='w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-white hover:bg-indigo-50 transition-colors'
              >
                <FiBriefcase className='mr-2' /> Our Solutions
              </button>
              {/* <button className='w-full flex items-center justify-center px-5 py-3 border border-indigo-400 text-base font-medium rounded-md text-white hover:bg-indigo-500 transition-colors'>
                <FiBarChart2 className='mr-2' /> Case Studies
              </button> */}
            </div>
          </motion.div>

          {/* Middle Column: Image Placeholder */}
          <motion.div
            className='md:col-span-1 bg-gray-200 rounded-lg shadow-lg flex items-center justify-center min-h-[300px] md:min-h-full' // Added min-h-full
            variants={itemVariants}
          >
            {/* Example usage for Next/Image (ensure you have an image in your public folder): */}
            <Image
              src={dataSite.image_hero2}
              alt='IT Consultation'
              width={400}
              height={400}
              className='object-cover rounded-lg w-full h-full'
            />
          </motion.div>

          {/* Right Column: Virtual Consultation Card */}
          <motion.div
            className='bg-white p-8 rounded-lg shadow-xl flex flex-col justify-between border border-gray-200 h-full' // Added h-full
            variants={itemVariants}
          >
            <div>
              <h3 className='text-2xl font-semibold text-gray-800'>
                Expert Remote Advisory
              </h3>
              <p className='mt-3 text-gray-600'>
                Access timely IT expertise and strategic advice through our
                seamless virtual consultation platform. We help you navigate
                complex tech challenges effectively.
              </p>
            </div>
            <button
              onClick={() => {
                window.location.href = '#services';
              }}
              className='mt-8 w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 transition-colors'
            >
              Explore Services <FiArrowRight className='ml-2' />
            </button>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default ITConsultingHero;
