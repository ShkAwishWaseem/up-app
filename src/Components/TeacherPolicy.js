import React from 'react'
import Link from 'next/link';


const TeacherPolicy = () => {

  const termsAndConditions = [
    "Our tutors teach the Quran reading and recitation without bias towards any sect or religious discrimination. We convey the message of Allah and His Book to all.",
    "The teaching approach is characterized by politeness, courtesy, and friendliness, without strictness.",
    "Tutors are prohibited from requesting personal information from parents, such as phone numbers, email addresses, or WhatsApp numbers.",
    "Any tutor found directly communicating with students outside of our institute will face strict consequences.",
    "Only Eid-ul-Fitr and Eid-ul-Adha are recognized as paid holidays requiring mandatory leave. We do not announce additional leaves except for emergencies, to ensure smooth course continuity.",
    "In the event a tutor cannot attend class, they must inform us promptly so we can arrange a substitute.",
    "Irrelevant discussions during class, whether initiated by students or tutors, are not permitted.",
    "Parents are liable to pay 50% of the fee if their child misses classes for 15 consecutive days without notifying the management.",
    "Parents should report any issues concerning tutors to us for immediate action.",
    "Requests for changing class times must be made at least 1 week in advance for management to accommodate preferences.",
    "These terms and conditions apply to all relevant parties associated with our institute."
  ];
  
  return (
    <div>
        <div class="container mx-auto px-4 py-8">
        <h1 className='font-extrabold text-5xl text-center my-14 text-[#256A41]'><Link href="/" >UstazPortal</Link>  Teachers Policy</h1>
        <ul class="list-disc list-inside mb-4">
        {termsAndConditions.map((items, index) => {
          return (
            <li key={index} className='my-2 text-lg' >{items ? items  : " "}</li>
          )
        })}
        </ul>
    </div>
    
    </div>
  )
}

export default TeacherPolicy
