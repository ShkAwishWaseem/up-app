import Link from 'next/link'
import React from 'react'

const CourseCard = ({title}) => {
  return (
    <>
            {/* <div className="ml-4 mt-[50px] bg-[#eaebed] text-[#256A41] p-2 w-[300px] shadow-lg">
          <Link  href="/courses" className='text-2xl font-bold  text-center text-[#C89D1D] mb-2'>{title}</Link>
           <p className='text-sm'>{content}</p> 
   </div>  */}
    <div class="flex items-center justify-center ">
  <div class="group h-96 w-80 [perspective:1000px] ">
    <div
      class="bg-[red] relative h-[200px] w-[200px] shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] rounded-xl">
      <div class="absolute inset-0 p-8 bg-[#16453a] bg-opacity-10 rounded-xl">
        <div class="flex flex-col justify-between h-full">
          <h1 class="mt-auto font-light text-4xl leading-5 text-[#efead6] block">{title}</h1>
        </div>
      </div>
      {/* Back */}
      <div
        class="absolute inset-0 h-full w-full rounded-xl bg-[#efead6] p-8 [transform:rotateY(180deg)] [backface-visibility:hidden]">
        <div class="flex flex-col justify-between h-full">
          <svg class="mb-auto" width="68" height="73" viewBox="0 0 68 73" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M31.1253 19.1862C31.5295 17.7571 32.8339 16.7705 34.319 16.7705H63.2051C65.4065 16.7705 66.998 18.8745 66.3988 20.9928L52.3721 70.5844C51.9679 72.0135 50.6636 73.0001 49.1784 73.0001H20.2923C18.0909 73.0001 16.4994 70.896 17.0986 68.7777L31.1253 19.1862Z"
              fill="#16453A" fill-opacity="0.4" />
            <path
              d="M15.221 2.41568C15.6252 0.986604 16.9296 0 18.4147 0H47.3008C49.5022 0 51.0937 2.10402 50.4945 4.22233L36.4678 53.8139C36.0636 55.243 34.7593 56.2296 33.2741 56.2296H4.38798C2.18657 56.2296 0.595113 54.1255 1.19427 52.0072L15.221 2.41568Z"
              fill="#16453A" fill-opacity="0.8" />
          </svg>
          <div class="mt-auto space-y-4">
            <p class="text-[#16453a] text-lg font-light leading-5">We meet with 1000s of companies each year. We only
              invest in 6-8</p>
            <p class="text-[#16453a] text-lg font-light leading-5">Our approach is to invest capital and time. So when
              we are in, we are ALL-IN</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
    </>
  )
}

export default CourseCard
