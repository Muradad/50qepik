import React from 'react';
import Sublar from '../components/Menu/Sublar';
import Caylar from '../components/Menu/Caylar';
import Qelyanlar from '../components/Menu/Qelyanlar';
import SerinSular from '../components/Menu/SerinSular';
import IstiYemekler from '../components/Menu/IstiYemekler';
import Murebbeler from '../components/Menu/Murebbeler';
import Qarnirler from '../components/Menu/Qarnirler';
import BusinessLunch from '../components/Menu/BusinessLunch';

function Home() {
  
  return (
   <>
   <div className='flex  justify-center items-center mt-10'>
    <img className='w-20 rounded-full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQN548AoyoPOpNSfpKMyUlwIT500PU0Eikpt01Z4s1qQg&s" alt="" />
 

   </div>
   <div className='text-center pt-10 text-3xl'>   <strong className='text-gray-500 '>50 Qepik Restoran</strong></div>
   <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-20 cursor-pointer mx-20">
    <div className="flex justify-center items-center p-4 border rounded-md">
      <Caylar />
    </div>
    <div className="flex justify-center items-center p-4 border rounded-md">
      <Murebbeler />
    </div>
    <div className="flex justify-center items-center p-4 border rounded-md">
      <Qelyanlar />
    </div>
    <div className="flex justify-center items-center p-4 border rounded-md">
      <SerinSular />
    </div>
    <div className="flex justify-center items-center p-4 border rounded-md">
      <IstiYemekler />
    </div>
    <div className="flex justify-center items-center p-4 border rounded-md">
      <Qarnirler />
    </div>
    <div className="flex justify-center items-center p-4 border rounded-md">
      <Sublar />
    </div>
    <div className="flex justify-center items-center p-4 border rounded-md">
      <BusinessLunch />
    </div>
  </div>
   </>
  );
}

export default Home;
