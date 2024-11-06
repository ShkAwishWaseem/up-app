import Profile from '@/Components/Profile'
import React from 'react'
import NoSSR from 'react-no-ssr'
import Head from 'next/head';

const OurProfile = () => {
  return (
    <div>
       <Head>
      <title>Our Profile | Company</title>  
      <link rel="icon" href="/public/favicon.ico" type="image/png" />
      <meta name="description" content="At UstazPortal , we believe in making the journey of Quranic learning as enriching as its destination. With seasoned tutors and a curriculum designed to nurture both intellect and spirituality, we offer a transformative educational experience for learners of all ages." />
      <meta name="keywords" content="quran recitation , profile , company , quran academy ,ustazportal" />
    </Head>
      <NoSSR>
      <Profile/>
      </NoSSR>
    </div>
  )
}

export default OurProfile
