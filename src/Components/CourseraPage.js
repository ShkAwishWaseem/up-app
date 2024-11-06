// // import React from 'react'
// // import Header from './Header'
// // import Image from 'next/image'
// // import logo from "../images/whiteLogo.png"
// // import LanguageIcon from '@mui/icons-material/Language';
// // import CheckIcon from '@mui/icons-material/Check';
// // import Link from 'next/link';

// // const CourseraPage = () => {
// //   return (
// //     <div>
// //       <section classNameName='w-[90%] m-auto mt-[20px] relative'>
// //           <div classNameName='w-[60%]'>

// //           <div><Image src={logo} alt='logo' width={100} height={100} /></div>
// //           <div><h1 classNameName='text-2xl font-semibold mt-[20px]'>IBM Data Science Professional Certificate</h1></div>
// //           <div><p classNameName='leading-relaxed text-sm md:text-lg sm:text-md  mt-[10px]'>Prepare for a career as a data scientist. Develop in-demand skills and hands-on experience to get job-ready in as little as 5 months. No prior experience required.</p></div>
// //           <div classNameName='mt-[10px]'>
// //                <span><LanguageIcon/></span>
// //                <span classNameName='text-lg font-semibold'> Taught in English</span>
// //                <div classNameName='mt-[50px]'><Link href="/get-free-trial" classNameName="btn  bg-[#256A41] text-white p-3 rounded duration-500">
// //               Enroll for Free
// //             </Link></div>
// //           </div>
// //           </div>

// //           <div classNameName="card ">
// //                <div classNameName='hidden lg:block bg-gray-100 w-[500px] h-[600px] fixed right-[30px] bottom-[50px] p-6 rounded-xl shadow-2xl'> 
// //           <h1 classNameName='text-2xl font-semibold mt-[20px]'>Professional Certificate - 10 course series</h1>
// //           <p classNameName='text-gray-500 my-[20px]'>Earn a career credential that demonstrates your expertise</p>
// //           <hr />

// //           <h1 classNameName='mt-[20px] font-semibold text-lg'>Beginner level</h1>
// //           <p classNameName='text-gray-500 mt-[8px] mb-[20px]'>No prior experience required</p>
// //           <h1 classNameName='mt-[20px] font-semibold text-lg'>Flexible schedule</h1>
// //           <p classNameName='text-gray-500 mt-[8px] mb-[20px]'>Learn at your own pace</p>
// //           <h1 classNameName='mt-[20px] font-semibold text-lg'>1 on 1 sessions</h1>
// //           <p classNameName='text-gray-500 mt-[8px] mb-[20px]'>1-on-1 classNamees in a peaceful environment.</p>
// //           <h1 classNameName='mt-[20px] font-semibold text-lg'>Habbit Tracking every week</h1>
// //           <p classNameName='text-gray-500 mt-[8px] mb-[20px]'>Providing your progress peport every week</p>
          
               
// //           </div>
// //           <div classNameName='mt-[10%] w-[64%] text-justify'>
// //                <ul>
// //                     <li>About</li>
// //                     <hr />
// //           <p classNameName='text-gray-500 mt-[8px] mb-[20px]'>
// //           </p>
                    
// //                </ul>
// //           </div>
// //           </div>
// //       </section>
// //     </div>
// //   )
// // }

// // export default CourseraPage

// import React, { useRef, useEffect, useState } from 'react';
// import Image from 'next/image';
// import logo from '../images/whiteLogo.png';
// import LanguageIcon from '@mui/icons-material/Language';
// import CheckIcon from '@mui/icons-material/Check';

// import Link from 'next/link';

// const CourseraPage = ({headline, content, duration , createdAt}) => {
//   const cardRef = useRef(null);
//   const [isFixed, setIsFixed] = useState(false);

//   const handleScroll = () => {
//     const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
//     const maxScroll = 400; // Adjust as needed

//     if (scrollTop > maxScroll) {
//       setIsFixed(true);
//     } else {
//       setIsFixed(false);
//     }
//   };

//   useEffect(() => {
//     window.addEventListener('scroll', handleScroll);
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   return (
//     <div>
//       <section classNameName='w-[80%] m-auto mt-[20px] mb-[80px]'>
//         <div classNameName='w-[100%]'>
//           <div>
//             <Image src={logo} alt='logo' width={100} height={100} />
//           </div>
//           <div>
//             <h1 classNameName='text-2xl font-semibold mt-[20px]'>{headline}</h1>
//           </div>
//           <div>
//             <p classNameName='leading-relaxed text-sm md:text-lg sm:text-md mt-[10px]'>
//               Prepare for a career as a data scientist. Develop in-demand skills and hands-on experience to get job-ready in as little as 5 months. No prior experience required.
//             </p>
//           </div>
//           <div classNameName='mt-[10px]'>
//             <span><LanguageIcon /></span>
//             <span classNameName='text-lg font-semibold'> Taught in English</span>
//             <div classNameName='mt-[50px]'>
//               <Link href="/get-free-trial" classNameName="btn bg-[#256A41] text-white p-3 rounded duration-500">
//                 Enroll for Free
//               </Link>
//             </div>
//           </div>
//         </div>

//         {/* <div classNameName='card-container'>
//           <div ref={cardRef} classNameName={`card ${isFixed ? 'fixed' : 'absolute'}`}>
//             <h1 classNameName='text-2xl font-semibold mt-[20px]'>Professional Certificate - 10 course series</h1>
//             <p classNameName='text-gray-500 my-[20px]'>Earn a career credential that demonstrates your expertise</p>
//             <hr />
//             <h1 classNameName='mt-[20px] font-semibold text-lg'>Beginner level</h1>
//             <p classNameName='text-gray-500 mt-[8px] mb-[20px]'>No prior experience required</p>
//             <h1 classNameName='mt-[20px] font-semibold text-lg'>Flexible schedule</h1>
//             <p classNameName='text-gray-500 mt-[8px] mb-[20px]'>Learn at your own pace</p>
//             <h1 classNameName='mt-[20px] font-semibold text-lg'>1 on 1 sessions</h1>
//             <p classNameName='text-gray-500 mt-[8px] mb-[20px]'>1-on-1 classNamees in a peaceful environment.</p>
//             <h1 classNameName='mt-[20px] font-semibold text-lg'>Habit Tracking every week</h1>
//             <p classNameName='text-gray-500 mt-[8px] mb-[20px]'>Providing your progress report every week</p>
//           </div>
//         </div> */}

//         <div classNameName='mt-[50px] w-[100%] text-justify'>
//           <ul>
//             <li>About</li>
//             <hr />
//             <p classNameName='text-gray-500 mt-[8px] mb-[20px]'>
//              {content}
//             </p>
//             <li>Details</li>
//             <hr />
//             <div>
//                <p classNameName='text-gray-500 mt-[8px] mb-[20px]'>
               
//             <h1 classNameName='mt-[20px] font-semibold text-lg'><CheckIcon/> Beginner level</h1>
//             <p classNameName='text-gray-500 mt-[8px] mb-[20px]'>No prior experience required</p>
            
            
//             <h1 classNameName='mt-[20px] font-semibold text-lg'><CheckIcon/> Flexible schedule</h1>
//             <p classNameName='text-gray-500 mt-[8px] mb-[20px]'>Learn at your own pace</p>
            
            
//             <h1 classNameName='mt-[20px] font-semibold text-lg'><CheckIcon/> 1 on 1 sessions</h1>
//             <p classNameName='text-gray-500 mt-[8px] mb-[20px]'>1-on-1 classNamees in a peaceful environment.</p>
            
            
//             <h1 classNameName='mt-[20px] font-semibold text-lg'><CheckIcon/>   Habit Tracking every week</h1>
//             <p classNameName='text-gray-500 mt-[8px] mb-[20px]'>Providing your progress report every week</p>
            
//             <Link href="/courses" classNameName='text-gray-500 underline hover:text-blue-500'>Explore more courses</Link>
//             </p> 
//             </div>
//           </ul>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default CourseraPage;


import Image from 'next/image'
import React from 'react'
import FreeTrial from './FreeTrial'
import { Link } from 'react-scroll';

const CourseraPage = ({headline, content, duration , createdAt, image}) => {
  const scrollToFreeSection = () => {
    const freeSection = document.getElementById('free');
    if (freeSection) {
      const yOffset = -80; // Adjust as needed
      const y = freeSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };
  return (
    <>
    <section className="">
    <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
            <div className="max-w-lg">
                <h2 className="text-3xl font-extrabold text-[#256A41] sm:text-4xl">{headline}</h2>
                <p className="mt-4 text-gray-600 text-lg">{content}</p>
                <div className="mt-8">
                <Link to="free" smooth={true} duration={500} offset={-80} className="flex items-center mt-4 text-[#C89D1D] border cursor-pointer border-[#C89D1D] py-2 px-6 gap-2 rounded inline-flex items-center ">   <span>Get a Free Trial</span>
                                <svg
                                  
                                  fill="none"
                                  stroke="currentColor"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-width="2"
                                  viewBox="0 0 24 24"
                                  className="w-6 h-6 ml-2"
                                >
                                  <path d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                                </svg></Link>
                </div>
            </div>
            <div className="mt-12 md:mt-0">
                <Image src={image} height={500} width={500} alt="About Us Image" className="object-cover rounded-lg shadow-md" />
            </div>
        </div>
    </div>
</section>
<hr className="w-[80%] m-auto"/>
<div id='free'>
<FreeTrial/>
</div>
</>

  )
}

export default CourseraPage
