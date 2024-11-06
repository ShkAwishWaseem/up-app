import React from 'react'
// import Accordion from './Accordion';
import CustomAccordion from './Accordion';

const FAQS = () => {
     const items = [
      { title: "Who is eligible to enroll in online Quran classes?", content: "All individuals, regardless of age, can enroll in our online Quran classes. " },
      { title: "What are the basic prerequisites for joining beginner-level Quran classes online? ", content: "You only need a stable internet connection, a personal laptop, and a quiet environment to attend our online Quran lessons.   " },
      { title: "How long does it typically take to complete Quran courses online?", content: "The duration varies based on each student's learning pace, ranging from a few months to a year on average." },
      { title: "Can I receive personalized one-on-one online Quran lessons? ", content: "Yes, we offer individualized one-on-one sessions with dedicated Quran teachers for uninterrupted learning." },
      { title: "Are there any age restrictions for enrolling in Quran courses? ", content: "No, there are no age limits for learning Quran with us. All are welcome to join regardless of age. " },
      { title: "What options are available if I miss an online Quran class? ", content: "Don't worry! You can reschedule missed classes or access recordings of previous sessions for review. " },
      { title: "What payment methods are accepted for online classes?", content: "We offer secure payment options via PayPal, direct bank transfers, and other trusted payment portals for your convenience. " },
        ];
  return (
    <div className='max-w-screen-xl px-4 m-auto my-[110px]'>
      
          <h1 className='text-5xl w-[100%] m-auto mb-[60px] text-[#256A41] font-extrabold text-center'> Frequently asked<span className='text-[#C89D1D]'> Questions?</span></h1>
     
      {/* <Accordion items={items} /> */}
      <CustomAccordion items={items}/>
    </div>
  )
}

export default FAQS
