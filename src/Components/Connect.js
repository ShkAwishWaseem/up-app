import React from 'react';
import { Phone, Email, Event } from '@material-ui/icons';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Connect = () => {
  return (
    <motion.div className="bg-[#C89D1D] mt-[80px] p-8 md:p-16"
    initial={{opacity: 0 }}
    whileInView={{opacity: 1 }}
    transition={{ type: "spring", stiffness: 100 , delay:0.6}}
    
    >
      <h2 className="text-[#eaebed] text-2xl md:text-4xl font-bold mb-8">Get in Touch With Us!</h2>
      <p className="text-[#eaebed] mb-8">Donot think twice and contact us for any query and assistance.</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-[#eaebed] rounded-lg p-6 flex items-center justify-center">
          <Event className="text-[#256A41] mr-4" />
          <Link href="/get-free-trial" className="text-[#256A41] font-semibold">Appointment</Link>
        </div>
        <div className="bg-[#eaebed] rounded-lg p-6 flex items-center justify-center">
          <Email className="text-[#256A41] mr-4" />
          <Link href="/contact-us" className="text-[#256A41] font-semibold ">Send Email</Link>
        </div>
        <div className="bg-[#eaebed] rounded-lg p-6 flex items-center justify-center">
          <Phone className=" text-[#256A41] mr-4" />
          <Link target='_blank' href="https://wa.me/+19295539388?text=Need%20a%20Free%20Trial" className="text-[#256A41] font-semibold ">+1 (929) 553-9388</Link>
        </div>
      </div>
    </motion.div>
  );
};

export default Connect;
