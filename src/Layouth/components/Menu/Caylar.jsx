import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const accordionVariants = {
  open: { opacity: 1, height: 'auto' },
  closed: { opacity: 0, height: 0, overflow: 'hidden' }, // Set overflow: 'hidden' for the closed state
};

function Caylar() {
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
        <strong>Caylar</strong> - {isOpen ? 'Kapat' : 'Aç'}
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
              <li className='flex justify-between border-b-2 leading-10'>Cay Sade <strong>2</strong></li>
              <li className='flex justify-between border-b-2 leading-10'>Balli cay stekan <strong>1</strong></li>
              <li className='flex justify-between border-b-2 leading-10'>Balli Cay Caynik <strong>3</strong></li>
              <li className='flex justify-between border-b-2 leading-10'>Stress Cay <strong>4</strong></li>
              <li className='flex justify-between border-b-2 leading-10'>Edviyyatli cay <strong>3</strong></li>
              <li className='flex justify-between border-b-2 leading-10'>Rulet <strong>3</strong></li>
              <li className='flex justify-between border-b-2 leading-10'>Pletka <strong>3</strong></li>
              <li className='flex justify-between border-b-2 leading-10'>Turk Paxlavasi <strong>0.60</strong></li>
              <li className='flex justify-between border-b-2 leading-10'>Tutku <strong>4</strong></li>
              <li className='flex justify-between border-b-2 leading-10'>Pop Kek <strong>4</strong></li>
              <li className='flex justify-between border-b-2 leading-10'>Leblebi <strong>9 - 15</strong></li>
              <li className='flex justify-between border-b-2 leading-10'>Kofe <strong>1</strong></li>
              <li className='flex justify-between border-b-2 leading-10'>Cay Destgahi <strong>15</strong></li>
              <li className='flex justify-between border-b-2 leading-10'>Snikers pors 5 eded <strong>4</strong></li>

            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Caylar;
