// components/InfoAccordionSection.jsx
'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronDown, FiInfo } from 'react-icons/fi'; // FiInfo for section title, FiChevronDown for accordion

const infoData = [
  {
    id: 'scope',
    title: 'Scope of Services',
    description:
      'The scope of services provided with enterprise IT products typically includes a wide range of technical, operational, and support activities aimed at ensuring optimal performance, security, scalability, and business value.',
  },
  {
    id: 'types',
    title: 'Types and Features',
    description:
      'Keyboards,Headsets and Headphones,Webcams,External Hard Drives and SSDs,USB Hubs and Docking Stations,Printers and Scanners,External Optical Drives,Cooling Pads and External Fans,Power Strips and UPS,Laptop Stands and Mounts,Graphic Tablets',
    isList: true, // Custom flag to indicate this description should be a list
  },
  {
    id: 'clients',
    title: 'Clients',
    description:
      "We proudly serve a diverse range of clients, including electronics retailers, IT resellers, corporate buyers, educational institutions, and government agencies. Our clients trust us for our product reliability, competitive pricing, and dedicated support. Whether you're managing a tech store, outfitting an office, or supporting a large scale IT project, we are here to supply the technology solutions you need.",
  },
  {
    id: 'procurement',
    title: 'Bulk Hardware Procurement',
    description:
      'We offer streamlined sourcing and wholesale distribution of computer hardware, including desktops, laptops, components, and peripherals. Our service ensures fast order fulfillment, competitive pricing, and access to top tech brands for your business needs.',
  },
  {
    id: 'target',
    title: 'Target Customers',
    description:
      'Our primary customers include IT resellers, computer and electronics retailers, corporate procurement teams, educational institutions, and government agencies. We cater to businesses looking for reliable wholesale partners to supply large volumes of computer equipment and accessories.',
  },
];

const AccordionItem = ({ item, isOpen, onToggle }) => {
  const contentVariants = {
    collapsed: { opacity: 0, height: 0, marginTop: 0 },
    open: {
      opacity: 1,
      height: 'auto',
      marginTop: '1rem', // Corresponds to mt-4
      transition: { duration: 0.3, ease: 'easeInOut' },
    },
  };

  const renderDescription = (description, isList) => {
    if (isList) {
      const listItems = description
        .split(',')
        .map((s) => s.trim())
        .filter((s) => s);
      return (
        <ul className='list-disc list-inside space-y-1 text-gray-600'>
          {listItems.map((listItem, index) => (
            <li key={index}>{listItem}</li>
          ))}
        </ul>
      );
    }
    return <p className='text-gray-600'>{description}</p>;
  };

  return (
    <motion.div
      id='values'
      className='border-b border-gray-200 last:border-b-0'
      initial={false}
    >
      <motion.button
        onClick={onToggle}
        className='flex justify-between items-center w-full py-5 text-left text-lg font-medium text-gray-800 hover:text-indigo-600 focus:outline-none'
        aria-expanded={isOpen}
      >
        <span>{item.title}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <FiChevronDown
            className={`w-6 h-6 transition-colors ${
              isOpen ? 'text-indigo-600' : 'text-gray-400'
            }`}
          />
        </motion.div>
      </motion.button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key='content'
            initial='collapsed'
            animate='open'
            exit='collapsed'
            variants={contentVariants}
            className='overflow-hidden'
          >
            <div className='pb-5'>
              {renderDescription(item.description, item.isList)}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const ValuesSection = () => {
  const [openAccordionId, setOpenAccordionId] = useState(null); // Can also be an array for multiple open

  const handleToggle = (id) => {
    setOpenAccordionId(openAccordionId === id ? null : id);
  };

  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  return (
    <motion.section
      className='py-16 sm:py-24 bg-white' // Or bg-gray-50 for slight contrast
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionVariants}
    >
      <div className='max-w-3xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Section Title Area */}
        <motion.div
          className='text-center mb-12 sm:mb-16'
          variants={titleVariants}
        >
          <h3 className='text-base font-semibold text-indigo-600 tracking-wide uppercase'>
            Key Information
          </h3>
          <h2 className='mt-2 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900'>
            About Our IT Solutions & Services
          </h2>
        </motion.div>

        {/* Accordion */}
        <div className='bg-white shadow-sm rounded-lg border border-gray-200'>
          {infoData.map((item) => (
            <AccordionItem
              key={item.id}
              item={item}
              isOpen={openAccordionId === item.id}
              onToggle={() => handleToggle(item.id)}
            />
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default ValuesSection;
