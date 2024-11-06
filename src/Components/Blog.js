import Link from 'next/link'
import React from 'react'

const Blog = () => {
  return (
    <div>
      
  <div class="min-h-screen flex flex-col justify-center items-center">
    <img src="https://www.svgrepo.com/show/426192/cogs-settings.svg" alt="Logo" class="mb-8 h-40" />
    <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-center text-gray-700 dark:text-white mb-4">Site is under maintenance</h1>
    
    <p class="text-center text-gray-500 dark:text-gray-300 text-lg md:text-xl lg:text-2xl mb-8">We are working hard to improve the user experience. Stay tuned!</p>
    <div class="flex space-x-4">
      <Link href="contact-us" class="bg-[#C89D1D] hover:bg-[#c89d1def] text-[#eaebed] font-bold py-3 px-6 rounded dark:bg-gray-700 dark:hover:bg-gray-600">Contact Us</Link>
      <Link href="/" class=" border-2 border-[#C89D1D] text-[#C89D1D] font-bold py-3 px-6 rounded dark:text-white dark:border-white">Go back to Home</Link>
    </div>
  </div>

    </div>
  )
}

export default Blog
