import Contact from '@/Components/Contact'
import React from 'react'
import NoSSR from 'react-no-ssr'
import Head from 'next/head'

const ContactUs = () => {
  return (
    <>
      <Head>
      <title>UstazPortal - Contact Us </title>
      <link rel="icon" href="/public/favicon.ico" type="image/png" />
      <meta name="description" content="Welcome to UstazPortal! We are dedicated to providing comprehensive Quran courses tailored to suit learners of all levels, from beginners to advanced students. " />
      <meta name="keywords" content="quran recitation , quran with english translation , quran karim , contact us , ustazportal" />
    </Head>
      <NoSSR>
      <Contact/>
      </NoSSR>
    </>
  )
}

export default ContactUs
