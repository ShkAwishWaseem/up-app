import Link from 'next/link'
import React from 'react'
import Header from '@/Components/Header'

const notFound = () => {
  return (
     <>
     <Header/>
     <section className="flex items-center h-screen p-16 bg-gray-50 dark:bg-gray-700">
     <div className="container flex flex-col items-center ">
         <div className="flex flex-col gap-6 max-w-md text-center">
             <h2 className="font-extrabold text-9xl text-[#C89D1D] dark:text-gray-100">
                 <span className="sr-only">Error</span>404
             </h2>
             <p className="text-2xl md:text-3xl dark:text-gray-300">Sorry, we couldn&#39;t find this page.</p>
             <div className="mt-2">
                <Link href="/" className="mt-4 text-[#C89D1D] border cursor-pointer border-[#C89D1D] py-2 px-6 gap-2 rounded inline-flex items-center ">   <span>Back to Home</span></Link>
                </div>
         </div>
     </div>
 </section>
     </>
  )
}

export default notFound
