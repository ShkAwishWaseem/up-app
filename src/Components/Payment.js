// import React from 'react'
// import first from "../images/1.png"
// import second from "../images/2.png"
// import third from "../images/3.png"
// import forth from "../images/4.png"
// import fifth from "../images/5.png"
// import sixth from "../images/6.png"
// import Image from 'next/image'
// const Payment = () => {
//   return (
//      <>
//    <section class="bg-white dark:bg-gray-900">
//     <div class="py-8 lg:py-16 mx-auto max-w-screen-xl px-4">
//     <h1 className='text-5xl w-[100%] m-auto mb-[60px] text-[#256A41] font-extrabold text-center'><span className='text-[#C89D1D]'> Pay </span>Your Way:</h1>
//         <div class="grid grid-cols-2 gap-8 text-gray-500 sm:gap-12 md:grid-cols-3 lg:grid-cols-6 dark:text-gray-400">
//             <div class="flex justify-center items-center">
//             <Image src={first} alt="Payement methods"/>
         
//             </div>
//             <div  class="flex justify-center items-center">
//     <Image src={fifth} alt="Payement methods"/>                                                          
//             </div>
            

            // <div  class="flex justify-center items-center">
            // <Image src={second} alt="Payement methods"/>                                                                                 
            // </div>
//             <div  class="flex justify-center items-center">
//             <Image src={third} alt="Payement methods"/>                                                    
//             </div>
//             <div  class="flex justify-center items-center">
//             <Image src={forth} alt="Payement methods"/>                                                         
//             </div>
//             <div  class="flex justify-center items-center">
//             <Image src={sixth} alt="Payement methods"/>                                                         
//             </div>
//         </div>
//     </div>
// </section>   
//     </>
//   )
// }

// export default Payment

import React from 'react';
import first from "../images/1.png";
import second from "../images/2.png";
import third from "../images/3.png";
import forth from "../images/4.png";
import fifth from "../images/5.png";
import sixth from "../images/6.png";
import seventh from "../images/7.jpeg";
import Image from 'next/image';
import { motion } from 'framer-motion';

const Payment = () => {
  return (
    <section className="my-[110px] bg-white dark:bg-gray-900">
      <div className="py-8 lg:py-16 mx-auto max-w-screen-xl px-4">
    <motion.div
       initial={{x: -300 , opacity: 0 }}
       whileInView={{x:0 ,  opacity: 1 }}
       transition={{ type: "spring", stiffness: 100 , delay:0.5}}
    >
        <h1 className='text-5xl w-[100%] m-auto mb-[60px] text-[#256A41] font-extrabold text-center'><span className='text-[#C89D1D]'> Pay </span>Your Way:</h1>
    </motion.div>
        {/* <div className="grid grid-cols-2 gap-8 text-gray-500 sm:gap-12 md:grid-cols-3 lg:grid-cols-6 dark:text-gray-400 relative overflow-hidden animate-scroll">
          <div className="absolute top-0 bottom-0 right-0 left-0 overflow-hidden">
            <Image src={first} alt="Payment methods" className="w-full" />
            <Image src={fifth} alt="Payment methods" className="w-full" />
            <Image src={second} alt="Payment methods" className="w-full" />
            <Image src={third} alt="Payment methods" className="w-full" />
            <Image src={forth} alt="Payment methods" className="w-full" />
            <Image src={sixth} alt="Payment methods" className="w-full" />
          </div>
        </div> */}
        <section class=" text-white py-8">
  <h2 class="text-center text-2xl mb-2 font-bold leading-8">Payment Methods</h2>
  <p class="text-center text-lg font-extralight leading-8 ">Choose your own Payement method</p>
  
  <div class="logos group relative overflow-hidden whitespace-nowrap py-10 [mask-image:_linear-gradient(to_right,_transparent_0,_white_128px,white_calc(100%-128px),_transparent_100%)]">
    <div class="animate-slide-left-infinite group-hover:animation-pause inline-block w-max">
      
      <Image class="mx-6 inline w-40" src={first} alt="Transistor" />
      <Image class="mx-6 inline w-40" src={second} alt="Transistor" />
      <Image class="mx-6 inline w-40" src={third} alt="Transistor" />
      <Image class="mx-6 inline w-40" src={forth} alt="Transistor" />
      <Image class="mx-6 inline w-40" src={fifth} alt="Transistor" />
      <Image class="mx-6 inline w-40" src={sixth} alt="Transistor" />
      <Image class="mx-6 inline w-40" src={seventh} alt="Transistor" />

    </div>

    
    <div class="animate-slide-left-infinite group-hover:animation-pause inline-block w-max">
      
      <Image class="mx-6 inline w-40" src={first} alt="Transistor" />
      <Image class="mx-6 inline w-40" src={second} alt="Transistor" />
      <Image class="mx-6 inline w-40" src={third} alt="Transistor" />
      <Image class="mx-6 inline w-40" src={forth} alt="Transistor" />
      <Image class="mx-6 inline w-40" src={fifth} alt="Transistor" />
      <Image class="mx-6 inline w-40" src={sixth} alt="Transistor" />
      <Image class="mx-6 inline w-40" src={seventh} alt="Transistor" />
    </div>
  </div>
</section>
      </div>
    </section>
  );
};

export default Payment;


