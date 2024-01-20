import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const accordionVariants = {
  open: { opacity: 1, height: 'auto' },
  closed: { opacity: 0, height: 0, overflow: 'hidden' }, // Set overflow: 'hidden' for the closed state
};

function Qelyanlar() {
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
        <strong>Qelyanlar</strong> - {isOpen ? 'Bagla' : 'Aç'}
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
            <p>-----------------------------</p>

            <ul>
            <li className='flex justify-between border-b-2 leading-10'>Saxsi  <strong>2</strong></li>
              <li className='flex justify-between border-b-2 leading-10'>Qreyfrut <strong>1</strong></li>
              <li className='flex justify-between border-b-2 leading-10'>Qosa Saxsi <strong>3</strong></li>
              <li className='flex justify-between border-b-2 leading-10'>Stress Cay <strong>4</strong></li>
              <li className='flex justify-between border-b-2 leading-10'>Ananas <strong>3</strong></li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Qelyanlar;
