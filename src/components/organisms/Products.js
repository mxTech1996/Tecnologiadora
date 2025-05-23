// components/ProductSection.jsx
'use client';

import { useCart } from 'ecommerce-mxtech';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FiArrowRight, FiShoppingCart } from 'react-icons/fi'; // Or other relevant icons

const productsData = [
  {
    id: 851,
    name: 'Desktop Computers',
    description:
      'A desktop computer is a personal computing device designed for regular use at a single location... known for their power, upgradeability, and cost-efficiency.',
    price: '499.99',
    stock: 100,
    image:
      'https://cms-webserver-statics.s3.amazonaws.com/media/products/dol_8_.jpg',
  },
  {
    id: 852,
    name: 'Laptop Computers',
    description:
      'A laptop computer is a portable personal computer with an integrated screen, keyboard... designed for mobility and flexibility, allowing users to work from virtually anywhere.',
    price: '599.99',
    stock: 100,
    image:
      'https://cms-webserver-statics.s3.amazonaws.com/media/products/dol_9.jpg',
  },
  {
    id: 853,
    name: 'Computer Monitors',
    description:
      'A computer monitor is an output device that displays the visual interface of a computer system... serving as the primary visual interface between the user and the computer.',
    price: '199.99', // Corrected price for variety, original was 699.99
    stock: 100,
    image:
      'https://cms-webserver-statics.s3.amazonaws.com/media/products/dol10.jpg',
  },
  {
    id: 854,
    name: 'Keyboards and Mice',
    description:
      'Essential input devices used to interact with computers, available in various styles including mechanical, membrane, and ergonomic designs for different user needs.',
    price: '49.99', // Corrected price
    stock: 100,
    image:
      'https://cms-webserver-statics.s3.amazonaws.com/media/products/dol_11.jpg',
  },
  {
    id: 855,
    name: 'Internal Components',
    description:
      'Essential hardware elements inside a computer like CPUs, GPUs, RAM, and storage that perform processing and system operations for desktops, laptops, or servers.',
    price: '89.99', // Placeholder, as prices vary widely
    stock: 100,
    image:
      'https://cms-webserver-statics.s3.amazonaws.com/media/products/doll_1_2.jpg',
  },
  {
    id: 856,
    name: 'Networking Equipment',
    description:
      'Hardware devices like routers, switches, and modems used to connect computers and other devices within a network, facilitating communication and internet access.',
    price: '79.99', // Placeholder
    stock: 100,
    image:
      'https://cms-webserver-statics.s3.amazonaws.com/media/products/dol13.jpg',
  },
  {
    id: 857,
    name: 'External Storage',
    description:
      'Hardware units like HDDs and SSDs for storing, backing up, and transferring data independently from a computer’s internal storage, via USB or Thunderbolt.',
    price: '69.99', // Placeholder
    stock: 100,
    image:
      'https://cms-webserver-statics.s3.amazonaws.com/media/products/dol_14.jpg',
  },
  {
    id: 858,
    name: 'Printers and Scanners',
    description:
      'Peripherals for converting digital documents into physical copies (printers) and vice versa (scanners), essential for home and office use for various document types.',
    price: '129.99', // Placeholder
    stock: 100,
    image:
      'https://cms-webserver-statics.s3.amazonaws.com/media/products/dol_15.jpg',
  },
];

// Function to truncate description
const truncateDescription = (text, maxLength = 100) => {
  if (text.length <= maxLength) {
    return text;
  }
  return text.substring(0, text.lastIndexOf(' ', maxLength)) + '...';
};

const ProductSection = () => {
  const { handleAddOrRemoveProduct, validateProductInCart } = useCart();

  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // Faster stagger for more items
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
      transition: { duration: 0.4, ease: 'easeOut' },
    },
  };

  return (
    <motion.section
      id='products'
      className='py-16 sm:py-24 bg-gray-100' // Slightly different background for separation
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount: 0.1 }} // Trigger animation sooner for larger sections
      variants={sectionVariants}
    >
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Section Title Area */}
        <motion.div
          className='text-center mb-12 sm:mb-16'
          variants={titleVariants}
        >
          <h3 className='text-base font-semibold text-indigo-600 tracking-wide uppercase'>
            Our Product Catalog
          </h3>
          <h2 className='mt-2 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900'>
            Explore Our IT Hardware
          </h2>
        </motion.div>

        {/* Products Grid */}
        <div className='grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8'>
          {productsData.map((product) => {
            const isInCart = validateProductInCart(product.id);
            const handleClick = () => {
              handleAddOrRemoveProduct(product.id);
            };

            return (
              <motion.div
                key={product.id}
                className='group relative bg-white rounded-lg shadow-lg overflow-hidden flex flex-col border border-gray-200 hover:shadow-xl transition-shadow duration-300'
                variants={cardVariants}
              >
                <div className='aspect-w-1 aspect-h-1 w-full overflow-hidden bg-gray-200 xl:aspect-w-7 xl:aspect-h-8'>
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={400} // Provide appropriate width
                    height={300} // Provide appropriate height
                    className='h-52 w-full object-cover object-center group-hover:opacity-85 transition-opacity duration-300'
                  />
                </div>
                <div className='p-4 flex flex-col flex-grow'>
                  <h3 className='text-lg font-semibold text-gray-800'>
                    {product.name}
                  </h3>
                  <p className='mt-1 text-sm text-gray-600 flex-grow'>
                    {truncateDescription(product.description, 80)}
                  </p>
                  <div className='mt-4 flex items-center justify-between'>
                    <p className='text-xl font-bold text-gray-900'>
                      ${product.price}
                    </p>
                    {product.stock > 0 ? (
                      <span className='text-xs font-medium text-green-600 bg-green-100 px-2 py-1 rounded-full'>
                        In Stock
                      </span>
                    ) : (
                      <span className='text-xs font-medium text-red-600 bg-red-100 px-2 py-1 rounded-full'>
                        Out of Stock
                      </span>
                    )}
                  </div>
                  <button
                    onClick={handleClick}
                    className={`mt-4 flex items-center justify-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white ${
                      isInCart
                        ? 'bg-red-600 hover:bg-red-700'
                        : 'bg-indigo-600 hover:bg-indigo-700'
                    } transition-colors duration-300`}
                  >
                    {isInCart ? <>Remove from Cart</> : <>Add to Cart</>}
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
};

export default ProductSection;
