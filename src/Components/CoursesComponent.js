import React , {useState, useEffect} from 'react'
import axios from "axios"
import Header from './Header'

const CoursesComponent = ({ID}) => {
     const [course , setCourse] = useState(null);
     const id = ID
     // console.log(params.slug);
     
          const callAPI = async () => {
               try {
                    const response = await axios.get(`/api/course/${id}`)  
                    setCourse(response.data.course)
                    console.log(response.data.course)
               } catch (error) {
                         console.log(`Error is happening ${error}`);
               }
          }
          if(ID) {
                    callAPI();
          }
          
  return (
    <div classNameName='container mx-auto'>
          <Header/>
 {course && (
   <section className="bg-white dark:bg-gray-900">
   <div className="container px-6 py-10 mx-auto">
       <h1 className="text-center text-2xl font-semibold text-[#C0A842] capitalize lg:text-3xl dark:text-white">{course.headline}</h1>

       <div className="mt-8 lg:-mx-6 lg:flex lg:items-start lg:justify-center">
           <img className="mt-0 object-cover w-full lg:mx-6 lg:w-1/2 rounded-xl h-72 lg:h-96" src={course.image} alt="" />

           <div className="mt-6 lg:w-1/2 lg:mt-0 lg:mx-6 ">
               <p className="text-sm text-blue-500 uppercase">category</p>

               <h1 className="block mt-4 text-2xl font-semibold text-gray-800 hover:underline dark:text-white">
                   
               </h1>

               <p className="mt-3 text-sm text-[#C0A842] dark:text-gray-300 md:text-sm">
                {course.content}
               </p>

                    <div className="my-4">
                        <span className='font-bold text-sm'>Duration : <span className="text-sm text-gray-700 dark:text-gray-200">{course.duration} months</span></span>
                        <h1 className='font-bold text-sm'>Course posted at : <span className="text-sm text-gray-700 dark:text-gray-200">
                        {new Intl.DateTimeFormat('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                        timeZone: 'UTC'
                    }).format(new Date(course.createdAt))}</span></h1>
                 
                </div>
           </div>
       </div>
   </div>
</section>
   )}
    </div>
  )
}

export default CoursesComponent
