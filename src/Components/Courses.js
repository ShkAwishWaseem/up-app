// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import Header from './Header';
// import Image from 'next/image';
// import { useRouter } from 'next/navigation';
// import Spinner from './Spinner';
// import Link from 'next/link';
// import ScrollToTopButton from './STT';
// import Progress from './Progess';
// import Footer from './Footer';
// import CourseCategories from './CourseCategories';

// const Courses = () => {
//   const router = useRouter();
//   const [courses, setCourses] = useState([]);
//   const [loader, setLoader] = useState(true);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get('/api/get-courses');
//         setCourses(response.data);
//             setLoader(false);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//         setLoader(true);
//       }
//     };

//     fetchData();
//   }, []);

//   const handlerClick = (id) => {
//     router.push(`/course/${id}`);
//   };
//   const TOTAL = courses.length
//   return (
//     <>
//       <Header />
//       <div className="flex h-screen bg-gray-100">
//         <div className="hidden md:flex flex-col w-64 bg-gray-800">
//           <div className="flex items-center justify-center h-16 bg-gray-900">
//             <span className="text-white font-bold uppercase">Sidebar</span>
//           </div>
//           <div className="flex flex-col flex-1 overflow-y-auto">
//             <nav className="flex-1 px-2 py-4 bg-gray-800">
//               <a href="#" className="flex items-center px-4 py-2 text-gray-100 hover:bg-gray-700">
//                 <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24"
//                   stroke="currentColor">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
//                     d="M4 6h16M4 12h16M4 18h16" />
//                 </svg>
//                 Dashboard
//               </a>
//               <a href="#" className="flex items-center px-4 py-2 mt-2 text-gray-100 hover:bg-gray-700">
//                 <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24"
//                   stroke="currentColor">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
//                     d="M6 18L18 6M6 6l12 12" />
//                 </svg>
//                 Messages
//               </a>
//               <a href="#" className="flex items-center px-4 py-2 mt-2 text-gray-100 hover:bg-gray-700">
//                 <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24"
//                   stroke="currentColor">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
//                     d="M13 10V3L4 14h7v7l9-11h-7z" />
//                 </svg>
//                 Settings
//               </a>
//             </nav>
//           </div>
//         </div>

//       </div>
//     </>
//   );
// };

// export default Courses;

{
  /* <Header />
<ScrollToTopButton/>
<Progress/> */
}
{
  /* Display the spinner if loader is true 
{loader ? (
   <div className='flex justify-center items-center h-screen'>
   <div className='animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900'></div>
 </div>
) : (
  <>
    <div>
      <h1 className='mt-[100px] text-5xl w-[100%] m-auto text-[#256A41] font-extrabold text-center'>
        {TOTAL}<span className='text-[#C89D1D]'> Results Found</span>
      </h1>
    </div>
    <section className='w-[99%] m-auto flex justify-center items-center flex-wrap mt-[80px]'>
      {courses &&
        courses.map((course) => {
          const createdAtDate = new Date(course.createdAt);

          // Format the date as a string in a desired format (e.g., YYYY-MM-DD)
          const formattedDate = createdAtDate.toLocaleDateString('en-US', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
          });
          const words = course.content.split(' ');

          // Get the first 30 words and join them back into a string
          const truncatedContent = words.slice(0, 30).join(' ');
          return (
            <div className='m-4 max-w-sm rounded overflow-hidden shadow-lg' key={course.headline}>
              <Image className='w-full' width={200} height={200} src={course.image} alt='Card Images' />
              <div className='p-4'>
                <Link href={`/course/${course._id}`} className='text-[#C89D1D] font-bold text-xl mb-2'>{course.headline}</Link>
                <p className='text-[#256A41] text-base'>{truncatedContent}</p>
              </div>
              <div className='px-6 pt-4 pb-2'>
                <span className='inline-block bg-[#C89D1D] rounded-full px-3 py-1 text-sm font-semibold text-[#eaebed] mr-2 mb-2'>
                  {formattedDate}
                </span>
                <a href="#" className="inline-flex items-center justify-center h-8 w-8 border border-gray-100 rounded-full mr-1 hover:text-[#C89D1D] hover:border-[#C89D1D]">
        <svg className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
          <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path>
        </svg>
      </a>
      <a href="#" className="inline-flex items-center justify-center h-8 w-8 border border-gray-100 rounded-full mr-1 hover:text-[#C89D1D] hover:border-[#C89D1D]">
        <svg className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path>
        </svg>
      </a>
      <a href="#" className="inline-flex items-center justify-center h-8 w-8 border border-gray-100 rounded-full mr-1 hover:text-[#C89D1D] hover:border-[#C89D1D]">
        <svg className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
          <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
        </svg>
      </a>
      
              </div>
            </div>
          );
        })}
    </section>
  </>
)}
<CourseCategories/>
<Footer/>  */
}

import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "./Header";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";
import ScrollToTopButton from "./STT";
import Progress from "./Progess";
import Footer from "./Footer";
import Spinner from "./Spinner";

import cousre1 from "../images/course1.jpg"
import cousre2 from "../images/course2.jpg"
import cousre3 from "../images/course3.jpg"
import cousre4 from "../images/course4.jpg"
import cousre5 from "../images/course5.jpg"
import cousre6 from "../images/course6.jpg"
import cousre7 from "../images/course7.jpg"
import cousre8 from "../images/course8.jpg"
import cousre9 from "../images/course9.jpg"
import cousre10 from "../images/course10.jpg"
import cousre11 from "../images/course11.jpg"
import cousre12 from "../images/course12.jpg"
import cousre13 from "../images/course13.jpg"
import cousre14 from "../images/course14.jpg"
import cousre15 from "../images/course15.jpg"



const Courses = () => {
  const router = useRouter();
  const [courses, setCourses] = useState([]);
  const [loader, setLoader] = useState(true);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/get-courses");
        if(response ) {
          setCourses(response.data);
          setLoader(false);
        }
        else{
          setLoader(true);
        }
        
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoader(true);
      }
    };

    fetchData();
  }, []);

  const handlerClick = (id) => {
    router.push(`/course/${id}`);
  };
  // const Quran = [
  //   { name: "Noorani Qaida" },
  //   { name: "Nazra Qur’an" },
  //   { name: "Tajweed Qur’an" },
  //   { name: "Qur’an Qiraat" },
  //   { name: "Qur’an Memorization" },
  //   { name: "Revision For Huffaz" },
  //   { name: "Qur’an translation" },
  //   { name: "Quran Tafseer" },
  //   { name: "Qur’an(for kids)" },
  // ];
  // const Arabic = [
  //   { name: "A,hadith An Nawawi" },
  //   { name: "40 Supplications" },
  //   { name: "Seerah of Prophet" },
  //   { name: "Islamic History" },
  //   { name: "Stories of Prophets" },
  //   { name: "Prayer (Salah)" },
  //   { name: "Adhkaar Class" },
  //   { name: "Fiqh & Shariah" },
  // ];
  // const Islamic = [
  //   { name: "Arabic Language" },
  //   { name: "Arabic Writing" },
  //   { name: "Arabic History" },
  // ];

  const courseImages = [
    cousre1 ,
    cousre2 ,
    cousre3 ,
    cousre4 ,
    cousre5 ,
    cousre6 ,
    cousre7 ,
    cousre8 ,
    cousre9 ,
    cousre10,
    cousre11,
    cousre12,
    cousre13,
    cousre14,
    cousre15,
    // Add more image URLs here corresponding to each course
  ];

  const TOTAL = courses.length;

  return (
    <div className="bg-[#eaebed]">
      <Header />
      <ScrollToTopButton />
      <Progress />
      <div className="flex">
        <div className="hidden md:flex flex-col w-64 bg-[#256A41]">
          <div className="flex items-center justify-center h-16 bg-[#C89D1D]">
            <span className="text-[#eaebed] font-bold uppercase">
              Available Courses
            </span>
          </div>
          <div className="flex flex-col flex-1 overflow-visible">
          <nav className="flex-1 px-2 py-4 bg-[#256A41]">
            {courses && courses.map((quran, index) => {
                 return (
                  <Link href={`/course/${quran._id}`}
                    className="flex items-center px-4 py-2 text-[#eaebed] hover:bg-[#C89D1D]"
                    key={index}
                  >
                    {quran.headline ? quran.headline : " " }
                  </Link>
                );
            })}
          </nav>
          </div>
        </div>
        <div className="flex flex-col flex-1  overflow-y-auto">
          <div className=" text-center mt-[20px] p-4">
            <h1 className='text-3xl my-4  md:text-5xl text-center font-extrabold text-[#256A41]'>
            UstazPortal <span className='text-[#C89D1D]'> Offers</span> You
        </h1>
            <p className="mt-2 text-gray-600 text-xl">{TOTAL} Result Found</p>
          </div>
          <div className="flex flex-row justify-start items-center flex-wrap">
            {loader ? (
              <div className="w-[80%] m-auto flex justify-center items-center h-screen">
          <Spinner/>
              </div>
            ) : (
              <>
                <section className="w-[99%] m-auto flex justify-center items-center flex-wrap mt-[40px]">
                  {courses &&
                    courses.map((course, index) => {
                      const createdAtDate = new Date(course.createdAt);

                      // Format the date as a string in a desired format (e.g., YYYY-MM-DD)
                      const formattedDate = createdAtDate.toLocaleDateString(
                        "en-US",
                        {
                          year: "numeric",
                          month: "2-digit",
                          day: "2-digit",
                        },
                      );
                      const words = course.content.split(" ");

                      // Get the first 30 words and join them back into a string
                      const truncatedContent = words.slice(0, 30).join(" ");
                      return (
                        <>
                          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/4 bg-white shadow-lg rounded-lg overflow-hidden m-4" key={index}>
                            <Image
                              width={200}
                              height={200}
                              className="w-full h-72 object-cover object-center "
                              // src={course.image}
                              src={courseImages[index]} // Use the corresponding image for each course
                              alt="Course"
                            />
                            <div className="p-4">
                              <h3 className="text-gray-900 font-bold text-xl mb-2">
                                {course.headline ? course.headline : " " }
                              </h3>
                              <p className="text-sm text-gray-600">UstazPortal</p>
                              <Link
                                href={`/course/${course._id}`}
                                class="flex items-center mt-4 text-[#C89D1D] border border-[#C89D1D] py-2 px-6 gap-2 rounded inline-flex items-center "
                              >
                                <span>View More</span>
                                <svg
                                  className="w-4"
                                  fill="none"
                                  stroke="currentColor"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-width="2"
                                  viewBox="0 0 24 24"
                                  class="w-6 h-6 ml-2"
                                >
                                  <path d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                                </svg>
                              </Link>
                            </div>
                          </div>
                        </>
                      );
                    })}
                </section>
              </>
            )}
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Courses;

{
  /* <Header />
<ScrollToTopButton/>
<Progress/> */
}
{
  /* Display the spinner if loader is true 
{loader ? (
   <div className='flex justify-center items-center h-screen'>
   <div className='animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900'></div>
 </div>
) : (
  <>
    <div>
      <h1 className='mt-[100px] text-5xl w-[100%] m-auto text-[#256A41] font-extrabold text-center'>
        {TOTAL}<span className='text-[#C89D1D]'> Results Found</span>
      </h1>
    </div>
    <section className='w-[99%] m-auto flex justify-center items-center flex-wrap mt-[80px]'>
      {courses &&
        courses.map((course) => {
          const createdAtDate = new Date(course.createdAt);

          // Format the date as a string in a desired format (e.g., YYYY-MM-DD)
          const formattedDate = createdAtDate.toLocaleDateString('en-US', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
          });
          const words = course.content.split(' ');

          // Get the first 30 words and join them back into a string
          const truncatedContent = words.slice(0, 30).join(' ');
          return (
            <div className='m-4 max-w-sm rounded overflow-hidden shadow-lg' key={course.headline}>
              <Image className='w-full' width={200} height={200} src={course.image} alt='Card Images' />
              <div className='p-4'>
                <Link href={`/course/${course._id}`} className='text-[#C89D1D] font-bold text-xl mb-2'>{course.headline}</Link>
                <p className='text-[#256A41] text-base'>{truncatedContent}</p>
              </div>
              <div className='px-6 pt-4 pb-2'>
                <span className='inline-block bg-[#C89D1D] rounded-full px-3 py-1 text-sm font-semibold text-[#eaebed] mr-2 mb-2'>
                  {formattedDate}
                </span>
                <a href="#" className="inline-flex items-center justify-center h-8 w-8 border border-gray-100 rounded-full mr-1 hover:text-[#C89D1D] hover:border-[#C89D1D]">
        <svg className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
          <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path>
        </svg>
      </a>
      <a href="#" className="inline-flex items-center justify-center h-8 w-8 border border-gray-100 rounded-full mr-1 hover:text-[#C89D1D] hover:border-[#C89D1D]">
        <svg className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path>
        </svg>
      </a>
      <a href="#" className="inline-flex items-center justify-center h-8 w-8 border border-gray-100 rounded-full mr-1 hover:text-[#C89D1D] hover:border-[#C89D1D]">
        <svg className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
          <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
        </svg>
      </a>
      
              </div>
            </div>
          );
        })}
    </section>
  </>
)}
<CourseCategories/>
<Footer/>  */
}










{/* <nav className="flex-1 px-2 py-4 ">

<span className="font-semibold  text-[#eaebed] block px-4 py-2 text-xl">
  Quran Courses
</span>

{Quran.map((quran) => {
  return (
    <p
      className="flex items-center px-4 py-2 text-[#eaebed] hover:bg-[#C89D1D]"
      key={quran.name}
    >
      {quran.name}
    </p>
  );
})}
</nav>
</div>
<div className="flex flex-col flex-1 overflow-visible">
<nav className="flex-1 px-2 py-4 bg-[#256A41]">

<span className="font-semibold text-[#eaebed] text-xl block px-4 py-2 ">
  Arabic Courses 
</span>

{Arabic.map((quran) => {
  return (
    <p
      className="flex items-center px-4 py-2 text-[#eaebed] hover:bg-[#C89D1D]"
      key={quran.name}
    >
      {quran.name}
    </p>
  );
})}
</nav>
</div>
<div className="flex flex-col flex-1 overflow-visible pb-10">
<nav className="flex-1 px-2 py-4 bg-[#256A41]">

<span className="font-semibold text-[#eaebed] text-xl block px-4 py-2 ">
  Islamic Courses{" "}
</span>

{Islamic.map((quran) => {
  return (
    <p
      className="flex items-center px-4 py-2 text-[#eaebed] hover:bg-[#C89D1D]"
      key={quran.name}
    >
      {quran.name}
    </p>
  );
})}
</nav> */}