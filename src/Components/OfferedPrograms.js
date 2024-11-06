import Link from 'next/link'
import React from 'react'
import { motion } from 'framer-motion'

const OfferedPrograms = () => {
    const Quran = [
        { name: "Noorani Qaida" },
        { name: "Nazra Qur’an" },
        { name: "Tajweed Qur’an" },
        { name: "Qur’an Qiraat" },
        { name: "Qur’an Memorization" },
        { name: "Revision For Huffaz" },
        { name: "Qur’an translation" },
        { name: "Quran Tafseer" },
        { name: "Qur’an(for kids)" },
      ];
      const Arabic = [
        { name: "Ahadith An Nawawi" },
        { name: "40 Supplications" },
        { name: "Seerah of Prophet" },
        { name: "Islamic History" },
        { name: "Stories of Prophets" },
        { name: "Stories of Companions" },
        { name: "Prayer (Salah)" },
        { name: "Adhkaar Class" },
        { name: "Fiqh & Shariah" },
      ];
      const Islamic = [
        { name: "Arabic Language" },
        { name: "Arabic Writing" },
        { name: "Arabic History" },
        { name: "_ _ _ _ _ _" },
        { name: "_ _ _ _ _ _" },
        { name: "_ _ _ _ _ _" },
        { name: "_ _ _ _ _ _" },
        { name: "_ _ _ _ _ _" },
        { name: "_ _ _ _ _ _" },
      ];
  return (
    <>
<div>
          <h1 className='my-[110px] text-5xl w-[100%] m-auto text-[#256A41] font-extrabold text-center'>  You Learn at<span className='text-[#C89D1D]'> UstazPortal:</span></h1>
     </div>
<section >
  <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
     
      <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
          
          <motion.div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white"
            initial={{opacity: 0 }}
            whileInView={{opacity: 1 }}
            transition={{ type: "spring", stiffness: 100 , delay:0.5}}
          >
              <h3 className="mb-4 text-2xl font-semibold">Quran Courses</h3>
              <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">Discover the Quran teachings easily with our courses.</p>
              
              
              <ul role="list" className="my-8 space-y-4 text-left">
                {Quran.map((quran) => {
                    return(
                        <li className="flex items-center space-x-3" key={quran.name}>
                      
                      <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                      <p>{quran.name}</p>
                  </li>
                    )
                })}
              </ul>
              <Link href="get-free-trial" className="btn bg-green-600 text-white md:ml-8 font-semibold px-3 py-1 rounded duration-500 md:static">
            Get a free trial
          </Link>
          </motion.div>
          
          <motion.div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white"
             initial={{opacity: 0 }}
             whileInView={{opacity: 1 }}
             transition={{ type: "spring", stiffness: 100 , delay:0.6}}
          >
              <h3 className="mb-4 text-2xl font-semibold">Islamic Courses</h3>
              <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">Unlock the wisdom of Islam through our concise courses.</p>
              
              
              <ul role="list" className="my-8 space-y-4 text-left">
              {Arabic.map((quran) => {
                    return(
                        <li className="flex items-center space-x-3" key={quran.name}>
                      
                      <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                      <p>{quran.name}</p>
                  </li>
                    )
                })}
              </ul>
              <Link href="get-free-trial" className="btn bg-green-600 text-white md:ml-8 font-semibold px-3 py-1 rounded duration-500 md:static">
            Get a free trial
          </Link>
          </motion.div>
          
          <motion.div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white"
             initial={{opacity: 0 }}
             whileInView={{opacity: 1 }}
             transition={{ type: "spring", stiffness: 100 , delay:0.7}}
          >
              <h3 className="mb-4 text-2xl font-semibold">Arabic Courses</h3>
              <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">Unlock the beauty of Arabic with our simple courses.</p>
             
              
              <ul role="list" className="my-8 space-y-4 text-left">
              {Islamic.map((quran) => {
                    return(
                        <li className="flex items-center space-x-3" key={quran.name}>
                      
                      <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                      <p>{quran.name}</p>
                  </li>
                    )
                })}
              </ul>
              <Link href="get-free-trial" className="btn bg-green-600 text-white md:ml-8 font-semibold px-3 py-1 rounded duration-500 md:static">
            Get a free trial
          </Link>
          </motion.div>
      </div>
  </div>
</section>
    </>
  )
}

export default OfferedPrograms
