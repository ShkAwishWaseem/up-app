import Questions from '@/Components/Questions'
import React from 'react'
import NoSSR from 'react-no-ssr';
import Head from 'next/head';


const FAQ = () => {
  return (
    <>
    <Head>
      <title>Frequently asked Questions</title>  
      <link rel="icon" href="/public/favicon.ico" type="image/png" />
      <meta name="description" content="Who is eligible to enroll in online Quran classes?  What are the basic prerequisites for joining beginner-level Quran classes online?" />
      <meta name="keywords" content="quran recitation , faqs , quran related questions , quran reading english translation ,ustazportal" />
    
    </Head>
    <NoSSR>
        <Questions/>
    </NoSSR>
    </>
  )
}

export default FAQ
