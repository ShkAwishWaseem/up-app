import Image from "next/image";
import { Inter } from "next/font/google";
import Hero from "@/Components/Hero";
import HomePage from "@/Components/HomePage";
import Header from "@/Components/Header";
import Head from 'next/head'

const inter = Inter({ subsets: ["latin"] });

export default function Home() {

  return (
    <>
    <Head>
      <title>UstazPortal | Find the best Tutor</title>
      <link rel="icon" href="/public/favicon.ico" type="image/png" />
      <meta name="description" content=" At UstazPortal, we believe that the journey of learning the Quran should be as enriching as the destination itself. With a dedicated team of experienced tutors and a curriculum designed to nurture both the mind and the soul, we strive to provide a transformative learning experience for students of all ages and backgrounds." />
      <meta name="keywords" content="quran recitation , faqs , quran related questions , quran reading english translation ,ustazportal, equranekareem" />
    
    
    </Head>
    {/* <Header/> */}
    {/* <Hero/> */}
<HomePage/>
    </>
    
    
  );
}
