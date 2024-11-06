import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Header from '@/Components/Header';
import axios from 'axios';
import CoursesComponent from '@/Components/CoursesComponent';
import Image from 'next/image';
import Footer from '@/Components/Footer';
import ScrollToTopButton from '@/Components/STT';
import Progress from '@/Components/Progess';
import CourseCategories from '@/Components/CourseCategories';
import CourseraPage from '@/Components/CourseraPage';
import NoSSR from "react-no-ssr"
import Spinner from '@/Components/Spinner';
import cousre1 from "../../images/course1.jpg"
import cousre2 from "../../images/course2.jpg"
import cousre3 from "../../images/course3.jpg"
import cousre4 from "../../images/course4.jpg"
import cousre5 from "../../images/course5.jpg"
import cousre6 from "../../images/course6.jpg"
import cousre7 from "../../images/course7.jpg"
import cousre8 from "../../images/course8.jpg"
import cousre9 from "../../images/course9.jpg"
import cousre10 from "../../images/course10.jpg"
import cousre11 from "../../images/course11.jpg"
import cousre12 from "../../images/course12.jpg"
import cousre13 from "../../images/course13.jpg"
import cousre14 from "../../images/course14.jpg"
import cousre15 from "../../images/course15.jpg"
import Head from 'next/head';



const FetchingData = () => {
  const [course, setCourse] = useState(null);
  const [loader, setLoader] = useState(true); // Set initial loader state to true
  const router = useRouter();
  console.log(router.query.id);
  useEffect(() => {
    const id = router.query.id;
    const callAPI = async () => {
      try {
        const response = await axios.get(`/api/course/${id}`);
        if(response) {
          setCourse(response.data.course);
          console.log(response.data.course);
          setLoader(false); // Set loader to false after data is fetched
        }
        else{
          
          setLoader(true);
        }
      } catch (error) {
        console.log(`Error is happening ${error}`);
        setLoader(false); // Set loader to false even in case of error
      }
    };
    if (id) {
      callAPI();
    }
  }, [router.query.id]);

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
  const randomIndex = Math.floor(Math.random() * courseImages.length);
  const randomImage = courseImages[randomIndex];
  return (
     <>
     <NoSSR>
      <Head>
        <title>UstazPortal  |   {course && (course.headline ? course.headline : "Your Search")} </title>
      </Head>
         <Header />
         <ScrollToTopButton/>
         <Progress/>
       {/* <div className='container mx-auto'> */}
       <div>
      {loader ? ( // Render loader while data is being fetched
        // <div className='flex justify-center items-center h-screen'>
        //   <div className='animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900'></div>
        // </div>
<Spinner/>
      ) : (
        <>
          {/* {course && (
            <>
            <section className='bg-white dark:bg-gray-900'>
              <div className='container px-6 py-10 mx-auto'>
                <h1 className='text-center text-2xl font-semibold text-[#C0A842] capitalize lg:text-3xl dark:text-white'>
                  {course.headline}
                </h1>

                <div className='mt-8 lg:-mx-6 lg:flex lg:items-start lg:justify-center'>
                  <Image
                    className='mt-0 object-cover w-full lg:mx-6 lg:w-1/2 rounded-xl h-72 lg:h-96'
                    src={course.image}
                    alt="Banner Images"
                    width={200}
                    height={200}
                  />

                  <div className='mt-6 lg:w-1/2 lg:mt-0 lg:mx-6 '>
                    <p className='text-sm text-blue-500 uppercase'>category</p>

                    <h1 className='block mt-4 text-2xl font-semibold text-gray-800 hover:underline dark:text-white'></h1>

                    <p className='mt-3 text-sm text-[#C0A842] dark:text-gray-300 md:text-sm'>
                      {course.content}
                    </p>

                    <div className='my-4'>
                      <span className='font-bold text-sm'>
                        Duration :{' '}
                        <span className='text-sm text-gray-700 dark:text-gray-200'>{course.duration} months</span>
                      </span>
                      <h1 className='font-bold text-sm'>
                        Course posted at :{' '}
                        <span className='text-sm text-gray-700 dark:text-gray-200'>
                          {new Intl.DateTimeFormat('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                            timeZone: 'UTC',
                          }).format(new Date(course.createdAt))}
                        </span>
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            </>
          )} */}
          {course && 
          (
            <div key={course.headline ? course.headline : " " }>
            <CourseraPage headline={course.headline ? course.headline : " "} content={course.content ? course.content : " "} createdAt={course.createdAt ? course.createdAt : " "}  duration={course.duration ? course.duration : " "} image={randomImage}/>
          </div>
          )
          }
        </>
      )}
    </div>
    {/* <CourseCategories/> */}
      <Footer/>
      </NoSSR>
    </>
  );
};

export default FetchingData;
