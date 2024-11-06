import React from 'react'
import CourseCard from './CourseCard'

const Cards = () => {

  return (
    <>
    
    <section className='flex justify-center flex-wrap  items-center w-[100%] m-auto mt-[80px]'>
     <div>
          <h1 className='text-5xl w-[100%] m-auto text-[#256A41] font-extrabold text-center'>  You Learn at<span className='text-[#C89D1D]'> UstazPortal:</span></h1>
     </div>
     <CourseCard title="Noorani Qaida"/>
<CourseCard title="Nazra"/>
<CourseCard title="Tajweed"/>
<CourseCard title="Quran Memorization"/>
<CourseCard title="Quran Translation"/>
<CourseCard title="Quran for Kids"/>
<CourseCard title="Seerah of Prophet"/>
<CourseCard title="Arabic Language"/>
<CourseCard title="5 Pillars of Islam"/>
<CourseCard title="Adhkaar Class"/>
     </section>
     {/* <section className='w-[100%] m-auto flex flex-wrap justify-center items-center px-4'>

     

</section>
*/}



    </>
  )
}

export default Cards

