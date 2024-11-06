// import React, { useState, useMemo } from 'react'
// import Select from 'react-select'
// import countryList from 'react-select-country-list'
// import Header from './Header';
// const FreeTrial = () => {
//     const [value, setValue] = useState('')
//     const options = useMemo(() => countryList().getData(), [])
  
//     const changeHandler = value => {
//       setValue(value)
//     }
//   return (
    
//     <>
//      <Header/>
//      <div classNameName='mt-[80px]'>
//      <section className="bg-[#eaebed] dark:bg-slate-800" id="contact">
//    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
//        <div className="mb-4">
//            <div className="mb-6 max-w-3xl text-center sm:text-center md:mx-auto md:mb-12">
//                <p className="text-base font-semibold uppercase tracking-wide text-[#C0A842] ">
//                    Contact
//                </p>
//                <h2
//                    className="font-heading mb-4 font-bold tracking-tight text-gray-900 dark:text-white text-3xl sm:text-5xl">
//                    Get in Touch
//                </h2>
//                <p className="mx-auto mt-4 max-w-3xl text-xl text-gray-600 dark:text-slate-400">In hac habitasse platea
//                    dictumst
//                </p>
//            </div>
//        </div>
//        <div className="flex items-stretch justify-center">
//            <div className="grid md:grid-cols-2">
//                <div className="h-full pr-6">
//                    <p className="mt-3 mb-12 text-lg text-gray-600 dark:text-slate-400">
//                        className aptent taciti sociosqu ad
//                        litora torquent per conubia nostra, per inceptos himenaeos. Duis nec ipsum orci. Ut scelerisque
//                        sagittis ante, ac tincidunt sem venenatis ut.
//                    </p>
//                    <ul className="mb-6 md:mb-0">
//                        <li className="flex">
//                            <div className="flex h-10 w-10 items-center justify-center rounded bg-[#406f55] text-gray-50">
//                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
//                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
//                                    stroke-linejoin="round" className="h-6 w-6">
//                                    <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path>
//                                    <path
//                                        d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z">
//                                    </path>
//                                </svg>
//                            </div>
//                            <div className="ml-4 mb-4">
//                                <h3 className="mb-2 text-lg font-medium leading-6 text-gray-900 dark:text-white">Our Address
//                                </h3>
//                                <p className="text-gray-600 dark:text-slate-400">1230 Maecenas Street Donec Road</p>
//                                <p className="text-gray-600 dark:text-slate-400">New York, EEUU</p>
//                            </div>
//                        </li>
//                        <li className="flex">
//                            <div className="flex h-10 w-10 items-center justify-center rounded bg-[#406f55] text-gray-50">
//                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
//                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
//                                    stroke-linejoin="round" className="h-6 w-6">
//                                    <path
//                                        d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2">
//                                    </path>
//                                    <path d="M15 7a2 2 0 0 1 2 2"></path>
//                                    <path d="M15 3a6 6 0 0 1 6 6"></path>
//                                </svg>
//                            </div>
//                            <div className="ml-4 mb-4">
//                                <h3 className="mb-2 text-lg font-medium leading-6 text-gray-900 dark:text-white">Contact
//                                </h3>
//                                <p className="text-gray-600 dark:text-slate-400">Mobile: +1 (123) 456-7890</p>
//                                <p className="text-gray-600 dark:text-slate-400">Mail: tailnext@gmail.com</p>
//                            </div>
//                        </li>
//                        <li className="flex">
//                            <div className="flex h-10 w-10 items-center justify-center rounded bg-[#406f55] text-gray-50">
//                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
//                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
//                                    stroke-linejoin="round" className="h-6 w-6">
//                                    <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
//                                    <path d="M12 7v5l3 3"></path>
//                                </svg>
//                            </div>
//                            <div className="ml-4 mb-4">
//                                <h3 className="mb-2 text-lg font-medium leading-6 text-gray-900 dark:text-white">Working
//                                    hours</h3>
//                                <p className="text-gray-600 dark:text-slate-400">Monday - Friday: 08:00 - 17:00</p>
//                                <p className="text-gray-600 dark:text-slate-400">Saturday &amp; Sunday: 08:00 - 12:00</p>
//                            </div>
//                        </li>
//                    </ul>
//                </div>
//                <div className="card h-fit max-w-6xl p-5 md:p-12" id="form">
//                    <h2 className="mb-4 text-2xl font-bold">Wanted a Free Trial!</h2>
//                    <form id="FreeTrial">
//                        <div className="mb-6">
//                            <div className="mx-0 mb-1 sm:mb-4">
//                                <div className="mx-0 mb-1 sm:mb-4">
//                                    <label for="name" className="pb-1 text-xs uppercase tracking-wider"></label><input type="text" id="name" autocomplete="given-name" placeholder="Your name" className="mb-2 bg-transparent w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0" name="name"/>
//                                </div>
//                                <div className="mx-0 mb-1 sm:mb-4">
//                                    <label for="email" className="pb-1 text-xs uppercase tracking-wider"></label><input type="email" id="email" autocomplete="email" placeholder="Your email address" className="mb-2 bg-transparent w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0" name="email" />
//                                </div>
//                                <div className="mx-0 mb-1 sm:mb-4">
//                                    <label for="email" className="pb-1 text-xs uppercase tracking-wider"></label><input type="text" id="age" autocomplete="age" placeholder="Enter you Age" className="mb-2 bg-transparent w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0" name="email" />
//                                </div>
//                                <div className="mx-0 mb-1 sm:mb-4">
//                                    <label for="email" className="pb-1 text-xs uppercase tracking-wider"></label><input type="text" id="country" autocomplete="age" placeholder="Enter you Country" className="mb-2 bg-transparent w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0" name="email" />
//                                </div>
//                            </div>
                          
//   <select id="countries" class="mb-2 bg-transparent w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0">
//   <option selected>Select a course</option>
// <option value="Course Nazra">Nazra</option>
// <option value="Course Tajweed">Tajweed</option>
// <option value="Course Memorization">Memorization</option>
// <option value="Course Arabic Learning">Arabic Learning</option>
// <option value="Course Arabic Grammer">Arabic Grammer</option>
// <option value="Course Qira'at">Qiraat</option>
//   </select>
//   <Select options={options} value={value} onChange={changeHandler}/>
//                        </div>
//                        <div className="text-center">
//                            <button type="submit" className="w-full bg-[#406f55] text-white px-6 py-3 font-xl rounded-md sm:mb-0">Request a Free Trial</button>
//                        </div>
//                    </form>
//                </div>
//            </div>
//        </div>
//    </div>
// </section>
//    </div>
   
//     </>
//   );
// };

// export default FreeTrial;
import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import Trial from "../images/AboutPoster.png"
import Trial from "../images/trial.png"
import Image from 'next/image';
import Header from './Header';
import Progress from './Progess';
import ScrollToTopButton from './STT';
import axios from 'axios';
import NoSSR from 'react-no-ssr';

const FreeTrial = () => {
 // State variables
 const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    courseTitle: '',
    studentGender: '',
    studentAge: '',
    preferredDays: '',
    message: '',
  });
  const [error, setError] = useState('');

  // Function to handle form submission
  const handleSubmit = async(e) => {
    e.preventDefault();
    // Check if all fields are filled
    const isFormValid = Object.values(formData).every((value) => value.trim() !== '');
    if (!isFormValid) {
      setError('Please fill out all fields.');
      return;
    }
    // Form data is valid, clear error and show success toast
    setError('');
 try {
  const response = await axios.post('/api/trial', formData);
  if (response.status === 200) {
    toast.success('We will contact you as soon as possible.');
    // Clear form fields
    setFormData({
      name: '',
      phone: '',
      email: '',
      courseTitle: '',
      studentGender: '',
      studentAge: '',
      preferredDays: '',
      message: '',
    });
  }
 }
 catch(error) {
  console.error('Error posting data:', error);
  toast.error('An error occurred. Please try again.');
 }
  };

  // Function to handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <>
    <NoSSR>
    <Progress/>
    <ScrollToTopButton/>
    <div className="flex flex-wrap justify-between items-center p-8 md:p-16 ">
      {/* Left side: Contact form */}
      <div className="w-[100%] sm:w-[50%] bg-[#256A41] p-8 rounded-lg">
        <h2 className="text-white text-2xl md:text-4xl font-bold mb-8">Online Quran and Arabic Courses for Kids and Adults</h2>
        <p className="text-white mb-8">24/7 Native Arab and Non-Arab Qualified Tutors</p>
        {/* Display error message if any */}
        {error && <p className="text-red-500 mb-4">{error}</p>}
        {/* Contact form */}
        <form onSubmit={handleSubmit} className=" gap-6">
          {/* Form fields */}
          <div className="flex flex-col">
            <label className="text-white mb-2">Name <span className='text-red-700'>*</span></label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Full Name"
              className="p-2 rounded border border-gray-400 focus:outline-none"
              required
            />
          </div>
          <div className="flex flex-col">
            <label className="text-white mb-2">Phone <span className='text-red-700'>*</span></label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="Phone Number"
              className="p-2 rounded border border-gray-400 focus:outline-none"
              required
            />
          </div>
          <div className="flex flex-col">
            <label className="text-white mb-2">Email <span className='text-red-700'>*</span></label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Your Email"
              className="p-2 rounded border border-gray-400 focus:outline-none"
              required
            />
          </div>
          <div className="flex flex-col">
            <label className="text-white mb-2">Course Title <span className='text-red-700'>*</span></label>
            {/* Dropdown for selecting course */}
            <select
              name="courseTitle"
              value={formData.courseTitle}
              onChange={handleInputChange}
              className="p-2 rounded border border-gray-400 focus:outline-none"
              required
            >
              <option value="">Select a course</option>
              <option value="Course Nazra">Nazra</option>
              <option value="Course Tajweed">Tajweed</option>
              <option value="Course Memorization">Memorization</option>
              <option value="Course Arabic Learning">Arabic Learning</option>
              <option value="Course Arabic Grammar">Arabic Grammar</option>
              <option value="Course Qira'at">Qiraat</option>
            </select>
          </div>
          
          <div className="flex flex-col">
            <label className="text-white mb-2">Student Gender <span className='text-red-700'>*</span></label>
            <select
              name="studentGender"
              value={formData.studentGender}
              onChange={handleInputChange}
              className="p-2 rounded border border-gray-400 focus:outline-none"
              required
            >
              <option value="">Select</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          <div className="flex flex-col">
            <label className="text-white mb-2">Student Age <span className='text-red-700'>*</span></label>
            <input
              type="number"
              name="studentAge"
              value={formData.studentAge}
              onChange={handleInputChange}
              placeholder="Age"
              className="p-2 rounded border border-gray-400 focus:outline-none"
              required
            />
          </div>
          
          <div className="flex flex-col">
            <label className="text-white mb-2">Preferred Day <span className='text-red-700'>*</span></label>
            <select
              name="preferredDays"
              value={formData.preferredDays}
              onChange={handleInputChange}
              className="p-2 rounded border border-gray-400 focus:outline-none"
              required
            >
              <option value="">Select</option>
              <option value="sunday">Sunday</option>
              <option value="monday">Monday</option>
              <option value="tuesday">Tuesday</option>
              <option value="wednesday">Wednesday</option>
              <option value="thursday">Thursday</option>
              <option value="friday">Friday</option>
              <option value="saturday">Saturday</option>
            </select>
          </div>
          <div className="flex flex-col col-span-2">
            <label className="text-white mb-2">Message <span className='text-red-700'>*</span></label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Message"
              rows="4"
              className="p-2 rounded border border-gray-400 focus:outline-none"
            />
          </div>
          <button type="submit" className="w-[100%] text-center mt-[20px] bg-[#C89D1D] text-white font-semibold px-8 py-2 rounded">Get a Free Tiral</button>
        </form>
      </div>

      <div className="sm:w-[50%] p-8 rounded-lg ">
      <p className="text-gray-800 mb-2">For any queries or assistance, feel free to contact us using the information below.</p>
      <div className="flex items-center mb-4">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600 mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
        </svg>
        <p className="text-gray-800">+1 (929) 553-9388</p>
      </div>
      <div className="flex items-center mb-4">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600 mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
        </svg>
        <p className="text-gray-800">info@Ustazportal.com</p>
      </div>
      <div className="flex items-center mb-4">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600 mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
        </svg>
        <p className="text-gray-800">Virginia, USA</p>
      </div>
      <a href="#" className="inline-flex items-center justify-center h-8 w-8 border border-gray-100 rounded-full mr-1 hover:text-[#C89D1D] hover:border-[#C89D1D]">
              <svg className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path>
              </svg>
            </a>
            <a href="#" className="inline-flex items-center justify-center h-8 w-8 border border-gray-100 rounded-full mr-1 hover:text-[#C89D1D] hover:border-[#C89D1D]">
              <svg className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path>
              </svg>
            </a>
            <a href="#" className="inline-flex items-center justify-center h-8 w-8 border border-gray-100 rounded-full mr-1 hover:text-[#C89D1D] hover:border-[#C89D1D]">
              <svg className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
              </svg>
            </a>
            <a href="#" className="inline-flex items-center justify-center h-8 w-8 border border-gray-100 rounded-full mr-1 hover:text-[#C89D1D] hover:border-[#C89D1D]">
              <svg className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
                <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path>
              </svg>
            </a>
            <a href="#" className="inline-flex items-center justify-center h-8 w-8 border border-gray-100 rounded-full hover:text-[#C89D1D] hover:border-[#C89D1D]">
              <svg className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"></path>
              </svg>
            </a>
      {/* Image */}
      <div className="relative w-full my-8">
        <Image src={Trial} alt="Contact person"  height={700} width={1224} className="rounded-md h-[750px]"/>
      </div>
    </div>
      {/* Toast container for displaying notifications */}
      <ToastContainer position="top-center" autoClose={3000}  />
    </div>
    </NoSSR>
    </>
  )
};

export default FreeTrial;

