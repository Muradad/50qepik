import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const accordionVariants = {
  open: { opacity: 1, height: 'auto' },
  closed: { opacity: 0, height: 0, overflow: 'hidden' }, // Set overflow: 'hidden' for the closed state
};

function BusinessLunch() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div style={{ marginBottom: '15px' }}>
      <motion.div
        style={{
          padding: '10px',
          background: '#f0f0f0',
          borderBottom: '1px solid #ccc',
          cursor: 'pointer',
        }}
        onClick={toggleAccordion}
      >
        <strong>BusinessLunch</strong> - {isOpen ? 'Bagla' : 'Aç'}
      </motion.div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            style={{
              padding: '10px',
              border: '1px solid #ccc',
              borderTop: 'none',
              overflow: 'hidden',
            }}
            initial="closed"
            animate="open"
            exit="closed"
            variants={accordionVariants}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            {/* İçerik buraya gelecek */}
            <strong>--------6 Manat----------</strong>

            <ul>
            <li className='flex justify-between border-b-2 leading-10'>Sup</li>
              <li className='flex justify-between border-b-2 leading-10'>Esas yemek </li>
              <li className='flex justify-between border-b-2 leading-10'>Salat </li>
              <li className='flex justify-between border-b-2 leading-10'>Icki</li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default BusinessLunch;
