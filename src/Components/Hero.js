// import React, { useState, useEffect } from 'react';
// // import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid';



// const Hero = () => {
//     const slides = [
//         { imageUrl: 'https://images.pexels.com/photos/20887273/pexels-photo-20887273/free-photo-of-a-black-and-white-photo-of-a-building.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
//         { imageUrl: 'https://images.pexels.com/photos/20887273/pexels-photo-20887273/free-photo-of-a-black-and-white-photo-of-a-building.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
//         { imageUrl: 'https://images.pexels.com/photos/20887273/pexels-photo-20887273/free-photo-of-a-black-and-white-photo-of-a-building.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
//       ];
//       const [currentSlide, setCurrentSlide] = useState(0);

//       // Autoplay functionality
//       useEffect(() => {
//         const interval = setInterval(() => {
//           setCurrentSlide((prevSlide) => (prevSlide === slides.length - 1 ? 0 : prevSlide + 1));
//         }, 3000); // Change slide every 3 seconds
//         return () => clearInterval(interval);
//       }, [slides.length]);
    
//       const changeSlide = (increment) => {
//         setCurrentSlide((prevSlide) => (prevSlide + increment + slides.length) % slides.length);
//       };
    
//   return (
// //     <div classNameName='relative mt-[5%] sm:mt-[10%] lg:mt-[5%]' >
// //       <div classNameName="absolute inset-0 bg-gradient-to-b from-black to-transparent z-10" style={{opacity:'0.2'}}></div>
// //       <div classNameName=" bg-white dark:bg-gray-800 h-screen h-full py-0 sm:py-0 lg:py-0 ">
// //     <div classNameName="mx-auto max-w-screen-2xl px-0 md:px-0">
       

// //         <div classNameName="grid grid-cols-2 gap-0 sm:grid-cols-3 md:gap-0 xl:gap-0">
            
// //             <a href="#"
// //                 classNameName="group relative flex h-48 items-end overflow-hidden  bg-gray-100 shadow-lg md:h-80">
// //                 <img src="https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&q=75&fit=crop&w=600" loading="lazy" alt="Photo by Minh Pham" classNameName="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
// //                 <div
// //                     classNameName="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
// //                 </div>

// //                 <span classNameName="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">VR</span>
// //             </a>
            

            
// //             <a href="#"
// //                 classNameName="group relative flex h-48 items-end overflow-hidden  bg-gray-100 shadow-lg md:col-span-2 md:h-80">
// //                 <img src="https://images.unsplash.com/photo-1542759564-7ccbb6ac450a?auto=format&q=75&fit=crop&w=1000" loading="lazy" alt="Photo by Magicle" classNameName="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

// //                 <div
// //                     classNameName="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
// //                 </div>

// //                 <span classNameName="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">Tech</span>
// //             </a>
            

            
// //             <a href="#"
// //                 classNameName="group relative flex h-48 items-end overflow-hidden  bg-gray-100 shadow-lg md:col-span-2 md:h-80">
// //                 <img src="https://images.unsplash.com/photo-1610465299996-30f240ac2b1c?auto=format&q=75&fit=crop&w=1000" loading="lazy" alt="Photo by Martin Sanchez" classNameName="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

// //                 <div
// //                     classNameName="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
// //                 </div>

// //                 <span classNameName="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">Dev</span>
// //             </a>
            

            
// //             <a href="#"
// //                 classNameName="group relative flex h-48 items-end overflow-hidden  bg-gray-100 shadow-lg md:h-80">
// //                 <img src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&q=75&fit=crop&w=600" loading="lazy" alt="Photo by Lorenzo Herrera" classNameName="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

// //                 <div
// //                     classNameName="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
// //                 </div>

// //                 <span classNameName="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">Retro</span>
// //             </a>
            
// //         </div>
// //     </div>
// // </div>
// //     </div>
// <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
//   <div class="carousel-inner">
//     <div class="carousel-item active">
//       <img class="d-block w-100" src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&q=75&fit=crop&w=600" alt="First slide" />
//     </div>
//     <div class="carousel-item">
//       <img class="d-block w-100" src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&q=75&fit=crop&w=600" alt="Second slide" />
//     </div>
//     <div class="carousel-item">
//       <img class="d-block w-100" src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&q=75&fit=crop&w=600" alt="Third slide" />
//     </div>
//   </div>
// </div>
//   )
// }

// export default Hero

// Carousel.js

import React, { useState, useEffect } from "react";
import { Transition } from "@headlessui/react";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import banner1 from "../images/banner1.jpg"
import banner2 from "../images/banner2.jpg"
import banner3 from "../images/banner3.jpg"
import Image from "next/image";

const images = [
banner1,
banner2,
banner3
];

const Hero = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  return (
    <div className="relative  h-[500px] overflow-hidden">
      <Transition
        as="div"
        show={true}
        enter="transition-opacity duration-1000 ease-out"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-1000 ease-out"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
        className="absolute inset-0 w-full h-full"
      >
        <Image src={images[index]} alt={`Slide ${index + 1}`} className="object-cover w-full h-full" />
      </Transition>
      <button
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-2 rounded-full"
        onClick={prevSlide}
      >
        <ArrowBackIosIcon/>
      </button>
      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-2 rounded-full"
        onClick={nextSlide}
      >
        <ArrowForwardIosIcon/>
      </button>
    </div>
  );
};

export default Hero;

