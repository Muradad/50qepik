import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const accordionVariants = {
  open: { opacity: 1, height: 'auto' },
  closed: { opacity: 0, height: 0, overflow: 'hidden' }, // Set overflow: 'hidden' for the closed state
};

function IstiYemekler() {
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
        <strong>IstiYemekler</strong> - {isOpen ? 'Bagla' : 'Aç'}
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
            <li className='flex justify-between border-b-2 leading-10'>Imisli qovurmasi <strong>5</strong></li>
              <li className='flex justify-between border-b-2 leading-10'>Ozbek asi <strong>5</strong></li>
              <li className='flex justify-between border-b-2 leading-10'>As Qara <strong>5</strong></li>
              <li className='flex justify-between border-b-2 leading-10'>Qaymaqli Toyuq <strong>5</strong></li>
              <li className='flex justify-between border-b-2 leading-10'>Kotlet + Qarnir <strong>5</strong></li>
              <li className='flex justify-between border-b-2 leading-10'>Langed Toyuq <strong>5</strong></li>
              <li className='flex justify-between border-b-2 leading-10'>Toyuq Kotlet Qarnir <strong>5</strong></li>
              <li className='flex justify-between border-b-2 leading-10'>Ciz Biz <strong>3.50</strong></li>
              <li className='flex justify-between border-b-2 leading-10'>Toyuq Qizartma <strong>4</strong></li>
              <li className='flex justify-between border-b-2 leading-10'>Snistel <strong>4</strong></li>
              <li className='flex justify-between border-b-2 leading-10'>Kotlet Et <strong>4</strong></li>
              <li className='flex justify-between border-b-2 leading-10'>Pomidor Yumurta <strong>3</strong></li>
              <li className='flex justify-between border-b-2 leading-10'>Kuku <strong>3</strong></li>
              <li className='flex justify-between border-b-2 leading-10'>Durum <strong>3</strong></li>
              <li className='flex justify-between border-b-2 leading-10'>Saurma <strong>3.50</strong></li>

            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default IstiYemekler;
