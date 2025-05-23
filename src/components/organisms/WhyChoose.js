// components/WhyChooseUs.jsx
'use client'; // Add this directive for Next.js App Router

import { motion } from 'framer-motion';
import {
  FiBarChart2, // For Streamlined Project Delivery / Explore Our Process
  FiZap, // For Strategic Expertise
  FiUsers, // For Dedicated Expert Teams
} from 'react-icons/fi';
import { FaRocket } from 'react-icons/fa';

const WhyChooseUs = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
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
        ease: 'easeInOut',
      },
    },
  };

  const itemVariantsDelay = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeInOut',
        delay: 0.3,
      },
    },
  };

  const featureItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: 'easeInOut',
      },
    },
  };

  const abstractShapeVariants = {
    animate: {
      scale: [1, 1.05, 1],
      opacity: [0.5, 0.7, 0.5],
      rotate: [0, 5, -5, 0],
      transition: {
        duration: 8,
        ease: 'easeInOut',
        repeat: Infinity,
      },
    },
  };

  const features = [
    {
      icon: <FiZap className='w-8 h-8 text-indigo-500' />,
      title: 'Strategic Expertise',
      description:
        'Leverage our deep industry knowledge to create IT strategies that align perfectly with your business goals.',
    },
    {
      icon: <FaRocket className='w-8 h-8 text-indigo-500' />,
      title: 'Agile & Efficient Solutions',
      description:
        'We deliver customized and scalable IT solutions quickly, ensuring minimal disruption and maximum impact.',
    },
    {
      icon: <FiUsers className='w-8 h-8 text-indigo-500' />,
      title: 'Dedicated Expert Teams',
      description:
        'Our consultants are committed to your success, providing ongoing support and tailored advice for your specific needs.',
    },
  ];

  return (
    <div className='bg-gray-50 py-16 sm:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden'>
      {/* Top Banner Section */}
      <motion.div
        className='relative max-w-7xl mx-auto bg-white p-8 sm:p-12 rounded-xl shadow-lg mb-16 sm:mb-24 flex flex-col md:flex-row items-center justify-between'
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        {/* Abstract Shape - Placeholder */}
        <motion.div
          className='absolute -top-10 -left-10 w-32 h-32 sm:w-48 sm:h-48 bg-gradient-to-br from-sky-300 to-blue-500 opacity-50 rounded-full filter blur-xl -z-10'
          variants={abstractShapeVariants}
          animate='animate'
        ></motion.div>

        <motion.div className='md:w-2/3 mb-6 md:mb-0' variants={itemVariants}>
          <h2 className='text-2xl sm:text-3xl font-bold text-gray-800'>
            Streamlined Project Delivery
          </h2>
          <p className='mt-3 text-gray-600 text-base sm:text-lg'>
            Our integrated approach ensures efficient project lifecycles and
            transparent communication every step of the way, delivering results
            that matter.
          </p>
        </motion.div>
        <motion.div variants={itemVariants}>
          <button className='w-full md:w-auto inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 transition-colors'>
            Explore Our Process <FiBarChart2 className='ml-2 w-5 h-5' />
          </button>
        </motion.div>
      </motion.div>

      {/* Main "Why Choose Us" Section */}
      <motion.div
        className='max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center'
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        {/* Left Side */}
        <motion.div variants={itemVariants}>
          <h2 className='text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight'>
            Why Choose Our
            <br />
            <span className='text-indigo-600'>IT Consulting Services?</span>
          </h2>
          <p className='mt-6 text-lg text-gray-600'>
            We&#39;re dedicated to transforming your technological landscape
            through expertise, innovation, and a client-centric approach that
            prioritizes your unique business objectives.
          </p>
          <div className='mt-10 grid grid-cols-1 sm:grid-cols-2 gap-8'>
            <motion.div variants={itemVariantsDelay}>
              <p className='text-5xl font-bold text-indigo-600'>10+ Years</p>
              <p className='mt-2 text-gray-600'>
                Of dedicated industry expertise
              </p>
            </motion.div>
            <motion.div variants={itemVariantsDelay}>
              <p className='text-5xl font-bold text-indigo-600'>98%</p>
              <p className='mt-2 text-gray-600'>Client satisfaction rate</p>
            </motion.div>
          </div>
          <motion.div className='mt-10' variants={itemVariantsDelay}>
            <button
              onClick={() => {
                window.location.href = '/#values';
              }}
              className='inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 transition-colors'
            >
              Learn About Our Values
            </button>
          </motion.div>
        </motion.div>

        {/* Right Side - Feature Blocks */}
        <motion.div className='space-y-8' variants={containerVariants}>
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className='flex items-start p-6 bg-white rounded-lg shadow-lg border border-gray-200 hover:shadow-xl transition-shadow'
              variants={featureItemVariants}
            >
              <div className='flex-shrink-0 mr-5 mt-1 p-3 bg-indigo-100 rounded-full'>
                {feature.icon}
              </div>
              <div>
                <h4 className='text-xl font-semibold text-gray-800'>
                  {feature.title}
                </h4>
                <p className='mt-2 text-gray-600'>{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default WhyChooseUs;
