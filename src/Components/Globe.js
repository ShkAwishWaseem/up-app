
// import React, { useState } from 'react';
// // import earth from "../images/earth.png"
// import globe from "../images/global.gif"
// import Image from 'next/image'
// import { Grid, IconButton } from '@mui/material';
// import { ArrowBackIos as ArrowBackIosIcon, ArrowForwardIos as ArrowForwardIosIcon } from '@mui/icons-material';
// import pakistan from "../images/Flag_of_Pakistan_Flat_Round-256x256.png"
// import uk from "../images/Flag_of_England_Flat_Round-256x256.png"
// import usa from "../images/Flag_of_United_States_Flat_Round-256x256.png"
// import afghanistan from "../images/Flag_of_Afghanistan_Flat_Round-256x256.png"
// import canada from "../images/Flag_of_Canada_Flat_Round-256x256.png"
// import india from "../images/Flag_of_India_Flat_Round-256x256.png"
// import germany from "../images/Flag_of_Germany_Flat_Round-256x256.png"

// const Globe = () => {
//   const countries = [
//     { name: 'PAKISTAN', flagUrl: pakistan},
//     { name: 'PAKISTAN', flagUrl: uk},
//     { name: 'PAKISTAN', flagUrl: usa},
//     { name: 'PAKISTAN', flagUrl: afghanistan},
//     { name: 'PAKISTAN', flagUrl: canada},
//     { name: 'PAKISTAN', flagUrl: india},
//     { name: 'PAKISTAN', flagUrl: germany},
    
//   ];
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const handlePrev = () => {
//     setCurrentIndex((prevIndex) => (prevIndex === 0 ? countries.length - 1 : prevIndex - 1));
//   };

//   const handleNext = () => {
//     setCurrentIndex((prevIndex) => (prevIndex === countries.length - 1 ? 0 : prevIndex + 1));
//   };  
//   return (
//     <section className='flex flex-col justify-center items-center w-[100%] m-auto mt-[80px]'>
//      <div>
//           <h1 className='text-5xl w-[80%] m-auto text-[#256A41] font-extrabold text-center'>Online <span className='text-[#C89D1D]'>Quran & Arabic </span>Courses Across the Globe</h1>
//      </div>
//      <div className='mt-[40px]'>
//      <Grid container alignItems="center" justifyContent="center">
//       <Grid item>
//         <IconButton onClick={handlePrev}>
//           <ArrowBackIosIcon />
//         </IconButton>
//       </Grid>
//       <Grid item>
//         <Image src={countries[currentIndex].flagUrl} alt={countries[currentIndex].name} className="h-20 w-auto" />
//       </Grid>
//       <Grid item>
//         <IconButton onClick={handleNext}>
//           <ArrowForwardIosIcon />
//         </IconButton>
//       </Grid>
//     </Grid>
//   {/* <Image src={globe} 
//      width={1000}
//      height={200}
//      className='shadow-2xl h-[500px] sm:h-[800px] md:h-[500px]'
//   alt='Global'/> */}
  

//       </div>
//     </section>
//   )
// }

// export default Globe

import React, { useState, useEffect } from 'react';
import { Grid, IconButton } from '@mui/material';
import { ArrowBackIos as ArrowBackIosIcon, ArrowForwardIos as ArrowForwardIosIcon } from '@mui/icons-material';
import pakistan from "../images/Flag_of_Pakistan_Flat_Round-256x256.png"
import uk from "../images/Flag_of_England_Flat_Round-256x256.png"
import usa from "../images/Flag_of_United_States_Flat_Round-256x256.png"
import afghanistan from "../images/Flag_of_Afghanistan_Flat_Round-256x256.png"
import canada from "../images/Flag_of_Canada_Flat_Round-256x256.png"
import india from "../images/Flag_of_India_Flat_Round-256x256.png"
import germany from "../images/Flag_of_Germany_Flat_Round-256x256.png"
import Romania from "../images/Flag_of_Romania_Flat_Round-256x256.png"
import Russia from "../images/Flag_of_Russia_Flat_Round-256x256.png"
import Austria from "../images/Flag_of_Austria_Flat_Round-1-256x256.png"
import  Finland from "../images/Flag_of_Finland_Flat_Round-256x256.png"
import  Demark from "../images/Flag_of_Denmark_Flat_Round-256x256.png"
import  Croatia from "../images/Flag_of_Croatia_Flat_Round-256x256.png"
import Hungary from "../images/Flag_of_Hungary_Flat_Round-256x256.png"
import Monaco from "../images/Flag_of_Monaco_Flat_Round-256x256.png"
import Ukraine from "../images/Flag_of_Ukraine_Flat_Round-256x256.png"
import  Switzerland from "../images/Flag_of_Switzerland_Flat_Round-256x256.png"

import Image from 'next/image';
import { motion } from 'framer-motion';

const Globe = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const countries = [
    { name: 'Pakistan', flagUrl: pakistan },
    { name: 'UK', flagUrl: uk },
    { name: 'USA', flagUrl: usa },
    { name: 'Afghanistan', flagUrl: afghanistan },
    { name: 'Canada', flagUrl: canada },
    { name: 'India', flagUrl: india },
    { name: 'germany', flagUrl: germany },
    { name: 'Romania', flagUrl: Romania },
    { name: 'Russia', flagUrl: Russia },
    { name: 'Austria', flagUrl: Austria },
    { name: 'Finland', flagUrl: Finland },
    { name: 'Demark', flagUrl: Demark },
    { name: 'Croatia', flagUrl: Croatia },
    { name: 'Hungary', flagUrl: Hungary },
    { name: 'Monaco', flagUrl: Monaco },
    { name: 'Ukraine', flagUrl: Ukraine },
    { name: 'Switzerland', flagUrl: Switzerland },
  ];

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? countries.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 4 >= countries.length ? 0 : prevIndex + 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 4 >= countries.length ? 0 : prevIndex + 1));
    }, 1000); // Autoplay interval in milliseconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section className='flex flex-col justify-center items-center w-full m-auto my-[110px]'>
      <div>
        <h1 className='text-3xl md:text-5xl text-center font-extrabold text-[#256A41]'>
          Online <span className='text-[#C89D1D]'>Quran & Arabic </span>Courses Across the Globe
        </h1>
      </div>
      <div className='mt-5 md:mt-10'>
        <Grid container alignItems="center" justifyContent="center">
          <Grid item>
            {/* <IconButton onClick={handlePrev} className="hidden md:inline-block lg:hidden">
              <ArrowBackIosIcon fontSize="large" />
            </IconButton> */}
          </Grid>
          <div className="flex flex-wrap justify-center items-center w-full md:w-auto">
            {countries.slice(currentIndex, currentIndex + 4).map((country, index) => (
              <div key={index} className="flex justify-center items-center h-20 w-20 md:h-28 md:w-28 p-2 mx-2 md:mx-4">
                <Image src={country.flagUrl} alt={country.name} width={80} height={80} />
              </div>
            ))}
          </div>
          <Grid item>
            {/* <IconButton onClick={handleNext} className="hidden md:inline-block lg:hidden">
              <ArrowForwardIosIcon fontSize="large" />
            </IconButton> */}
          </Grid>
        </Grid>
      </div>
    </section>
  );
};

export default Globe;

  