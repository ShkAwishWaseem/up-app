import Header from '@/Components/Header'
import TeacherPolicy from '@/Components/TeacherPolicy'
import React from 'react'
import PrivacyPolicy from '@/Components/PrivacyPolicy'
import Policy from '@/Components/Policy'
import Footer from '@/Components/Footer'
import ScrollToTopButton from '@/Components/STT'
import Progress from '@/Components/Progess'
import NoSSR from 'react-no-ssr'
import Head from 'next/head';

const policies = () => {
  return (
    <>
         <Head>
      <title>Our Profile | Company</title>  
      <link rel="icon" href="/public/favicon.ico" type="image/png" />
      <meta name="description" content=" Our privacy policy is crafted to collect, safeguard, and maintain client information for individuals utilizing our services at We are committed to delivering premium Quran tuition services, and this vital information will help you foster trust in the services we provide. Please review the details of our privacy policy to clarify any questions about how we manage your personal information." />
      <meta name="keywords" content="quran recitation , policies , privacy , quran academy ,ustazportal" />
    </Head>
    <NoSSR>
      <Header/>
      <TeacherPolicy/>
      <PrivacyPolicy/>     
      <Policy/>
      <Footer/>
      <ScrollToTopButton/>
      <Progress/>
    </NoSSR>
    </>
  )
}

export default policies
