import React from 'react'
import Header from './Header'
import companyBg from "../images/company.png"
import Image from 'next/image'
import Footer from './Footer'
import Link from 'next/link'
import CourseCategories from './CourseCategories'
import ScrollToTopButton from './STT'
import Progress from './Progess'
import Connect from './Connect'

const Profile = () => {
  return (
  <>
     <Header/>
     <section className="overflow-hidden bg-white py-8 sm:py-16 my-[80px]  ">
     <div className="mx-auto max-w-7xl px-6 lg:px-8 ">
       <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2  h-[700px]">
         <div className="lg:pr-8 lg:pt-4  ">
           <div className="lg:max-w-lg">
             <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Welcome to UstazPortal</p>
             <p className="mt-6 text-lg leading-8 text-gray-600"> Where the Beacon of Knowledge Meets the Essence of Tradition
             </p>
             <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
               <div className="relative pl-9">
                 <dt className="inline font-semibold text-gray-900"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                     fill="currentColor" aria-hidden="true" className="absolute left-1 top-1 h-5 w-5 text-indigo-600">
                     <path
                       d="M3.196 12.87l-.825.483a.75.75 0 000 1.294l7.25 4.25a.75.75 0 00.758 0l7.25-4.25a.75.75 0 000-1.294l-.825-.484-5.666 3.322a2.25 2.25 0 01-2.276 0L3.196 12.87z">
                     </path>
                     <path
                       d="M3.196 8.87l-.825.483a.75.75 0 000 1.294l7.25 4.25a.75.75 0 00.758 0l7.25-4.25a.75.75 0 000-1.294l-.825-.484-5.666 3.322a2.25 2.25 0 01-2.276 0L3.196 8.87z">
                     </path>
                     <path
                       d="M10.38 1.103a.75.75 0 00-.76 0l-7.25 4.25a.75.75 0 000 1.294l7.25 4.25a.75.75 0 00.76 0l7.25-4.25a.75.75 0 000-1.294l-7.25-4.25z">
                     </path>
                   </svg> Our Vision
                 </dt>
                 <dd className="inline"> Illuminating Minds, Empowering Hearts
                 </dd>
               </div>
               <div className="relative pl-9">
                 <dt className="inline font-semibold text-gray-900">
                   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
                     className="absolute left-1 top-1 h-5 w-5 text-indigo-600">
                     <path fill-rule="evenodd"
                       d="M5.5 17a4.5 4.5 0 01-1.44-8.765 4.5 4.5 0 018.302-3.046 3.5 3.5 0 014.504 4.272A4 4 0 0115 17H5.5zm3.75-2.75a.75.75 0 001.5 0V9.66l1.95 2.1a.75.75 0 101.1-1.02l-3.25-3.5a.75.75 0 00-1.1 0l-3.25 3.5a.75.75 0 101.1 1.02l1.95-2.1v4.59z"
                       clip-rule="evenodd"></path>
                   </svg>
                   Our Mission
                 </dt>
                 <dd className="inline"> Spreading the Light of Quranic Knowledge</dd>
               </div>
               <div className="relative pl-9">
                 <dt className="inline font-semibold text-gray-900"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                     fill="currentColor" aria-hidden="true" className="absolute left-1 top-1 h-5 w-5 text-indigo-600">
                     <path fill-rule="evenodd"
                       d="M14.5 10a4.5 4.5 0 004.284-5.882c-.105-.324-.51-.391-.752-.15L15.34 6.66a.454.454 0 01-.493.11 3.01 3.01 0 01-1.618-1.616.455.455 0 01.11-.494l2.694-2.692c.24-.241.174-.647-.15-.752a4.5 4.5 0 00-5.873 4.575c.055.873-.128 1.808-.8 2.368l-7.23 6.024a2.724 2.724 0 103.837 3.837l6.024-7.23c.56-.672 1.495-.855 2.368-.8.096.007.193.01.291.01zM5 16a1 1 0 11-2 0 1 1 0 012 0z"
                       clip-rule="evenodd"></path>
                     <path
                       d="M14.5 11.5c.173 0 .345-.007.514-.022l3.754 3.754a2.5 2.5 0 01-3.536 3.536l-4.41-4.41 2.172-2.607c.052-.063.147-.138.342-.196.202-.06.469-.087.777-.067.128.008.257.012.387.012zM6 4.586l2.33 2.33a.452.452 0 01-.08.09L6.8 8.214 4.586 6H3.309a.5.5 0 01-.447-.276l-1.7-3.402a.5.5 0 01.093-.577l.49-.49a.5.5 0 01.577-.094l3.402 1.7A.5.5 0 016 3.31v1.277z">
                     </path>
                   </svg>Our Approach </dt>
                 <dd className="inline">Nurturing Tradition, Embracing Innovation</dd>
               </div>
             </dl>
           </div>
           </div>
           

       
         
         <Image
  src={companyBg}
  alt="UstazPortal Logo"
  layout="responsive"
  width="100%"
  height="100%"
  className="rounded-xl shadow-xl ring-1 ring-gray-400/10 md:-ml-4 lg:-ml-0"
/>
       </div>
     </div>
   </section> 
 
   <section>
      
    <div className='mx-auto max-w-7xl px-6 lg:px-8'>
      <h1 className='font-extrabold text-5xl text-center my-14 text-[#256A41]'>Welcome to <span className='text-[#C89D1D]'>UstazPortal: </span>Where Knowledge Illuminates Tradition</h1>
      <h2 className='font-bold text-3xl  mt-6'>Our <span className='text-[#C89D1D]'>Vision:</span> Enriching Hearts, Enlightening Minds</h2>
      
      <h2 className='font-bold text-3xl mt-6'>Our <span className='text-[#C89D1D]'>Mission:</span> Sharing Quranic Wisdom Worldwide</h2>
      <p className='text-lg my-4 '>Established with a fervent dedication to disseminating Quranic teachings, <Link href="/" className='text-[#256A41] font-bold'>UstazPortal</Link>  epitomizes our unwavering commitment to excellence in Islamic education.</p>
      <h2 className='font-bold text-3xl  mt-6'>Who We Are: <span className='text-[#C89D1D]'> UstazPortal - </span>Your Beacon in Islamic Learning </h2>
      
      <p className='text-lg my-4 '>At <Link href="/" className='text-[#256A41] font-bold'>UstazPortal</Link> , we believe in making the journey of Quranic learning as enriching as its destination. With seasoned tutors and a curriculum designed to nurture both intellect and spirituality, we offer a transformative educational experience for learners of all ages.</p>
   
      <h2 className='font-bold text-3xl  mt-6'>Our <span className='text-[#C89D1D]'> Approach: </span>Bridging Tradition with Modernity </h2>
      
      <p className='text-lg my-4 '><span className='text-[#256A41] font-bold'>Our mission is clear: </span>to make Quranic education accessible to all, regardless of location or language barriers. Whether you are a beginner starting your Arabic journey or an advanced student seeking mastery in Tajweed, our courses cater to diverse learning needs.</p>
     
      <h2 className='font-bold text-3xl mt-6'>Why Choose  <span className='text-[#C89D1D]'> UstazPortal? </span>Your Path to Personalized Learning </h2>
      
      <p className='text-lg my-4 '>What distinguishes <Link href="/" className='text-[#256A41] font-bold'>UstazPortal</Link> is our personalized approach to education. We recognize the unique strengths and challenges of each student and offer tailored lesson plans and individualized support to ensure their success</p>
 
      <h2 className='font-bold text-3xl  mt-6'>Meet Our <span className='text-[#C89D1D]'>Team: </span>Dedicated Educators, Inspirational Guides</h2>
      
      <p className='text-lg my-4 '>Our vision extends beyond the classroom as we strive to cultivate a community of compassionate and knowledgeable individuals. Through educational initiatives and collaborative partnerships, we aim to make a positive impact globally.</p>
     
      
      <h2 className='font-bold text-3xl mt-6'>Our <span className='text-[#C89D1D]'>Commitment: </span>Empowering Minds, Enriching Lives</h2>
      
      <p className='text-lg my-4 '>Join us on a journey of discovery and growth as we explore the timeless wisdom of the Quran together. Welcome to  <Link href="/" className='text-[#256A41] font-bold'>UstazPortal</Link> — where learning transcends boundaries and knowledge knows no limits.</p>
      
    </div>
   </section>
   <ScrollToTopButton/>
   <Connect/>
   <Progress/>
   <Footer/>
   </>
  )
}

export default Profile
