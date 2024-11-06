import Courses from '@/Components/Courses'
import React from 'react'
import NoSSR from "react-no-ssr"
import Head from 'next/head'

const courses = () => {
  return (
    <>
          <Head>
      <title>UstazPortal - Courses Dashboard</title>
      <link rel="icon" href="/public/favicon.ico" type="image/png" />
      <meta name="description" content="Welcome to UstazPortal, your go-to platform for comprehensive and accessible Quran learning. Our courses dashboard is designed to cater to learners of all levels, providing a structured and user-friendly interface to enhance your Quranic education journey." />
      <meta name="keywords" content="quran recitation , quran to recite , the al quran, quran reading english translation ,ustazportal" />
    </Head>
      <NoSSR>
      <Courses/>
      </NoSSR>
    </>
  )
}

export default courses
