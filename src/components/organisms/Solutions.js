// components/ManagedITServices.jsx
'use client';

import { motion } from 'framer-motion';
import { FiCheckCircle, FiArrowRight } from 'react-icons/fi'; // FiArrowRight for the button if desired

const featuresList = [
  'Proactive system monitoring & maintenance',
  '24/7 expert technical support',
  'Scalable solutions tailored to your business needs',
];

const Solutions = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariantsLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  const itemVariantsRight = {
    hidden: { opacity: 0, scale: 0.8, rotate: -5 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: { duration: 0.7, ease: 'easeOut', delay: 0.3 },
    },
  };

  const listItemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  return (
    <motion.section
      className='py-16 sm:py-24 bg-white overflow-hidden' // White background as per image
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount: 0.25 }}
      variants={containerVariants}
    >
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center'>
          {/* Left Column: Text Content */}
          <motion.div variants={itemVariantsLeft}>
            <h2 className='text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight'>
              Streamline Your Operations with
              <span className='block text-indigo-600 mt-1 sm:mt-2'>
                Our Managed IT Services
              </span>
            </h2>
            <p className='mt-6 text-lg text-gray-600'>
              Our proactive and comprehensive managed services ensure your IT
              infrastructure runs smoothly, securely, and efficiently, allowing
              you to focus on your core business.
            </p>
            <ul className='mt-8 space-y-4'>
              {featuresList.map((feature, index) => (
                <motion.li
                  key={index}
                  className='flex items-start'
                  custom={index}
                  variants={listItemVariants}
                >
                  <FiCheckCircle className='flex-shrink-0 h-6 w-6 text-green-500 mr-3 mt-0.5' />
                  <span className='text-gray-700'>{feature}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Right Column: Placeholder for 3D Graphic */}
          <motion.div
            className='flex items-center justify-center h-full min-h-[300px] md:min-h-[400px]'
            variants={itemVariantsRight}
          >
            {/*
              Placeholder for your 3D graphic.
              You can replace this div with:
              1. An <Image /> component from Next.js if you have a static render of the graphic.
              2. An SVG illustration.
              3. A component that renders a 3D model (e.g., using react-three-fiber).
              For now, a simple styled placeholder:
            */}
            <div className='w-full max-w-md h-64 md:h-80 bg-gradient-to-br from-gray-100 to-gray-300 rounded-xl shadow-2xl flex items-center justify-center p-8 transform perspective-1000'>
              <div className='text-center'>
                {/* <p className='text-2xl font-semibold text-gray-500'>
                  3D Graphic Placeholder
                </p> */}
                {/* <p className='text-sm text-gray-400 mt-2'>
                  (Replace with your visual asset)
                </p> */}
                {/* Example of simple animated cubes as a visual hint */}
                <div className='flex justify-center space-x-2 mt-6'>
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      className='w-8 h-8 bg-indigo-400 rounded-sm'
                      animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 45 * (i % 2 === 0 ? 1 : -1), 0],
                        opacity: [0.7, 1, 0.7],
                      }}
                      transition={{
                        duration: 2 + i * 0.5,
                        ease: 'easeInOut',
                        repeat: Infinity,
                        delay: i * 0.3,
                      }}
                    ></motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Solutions;
