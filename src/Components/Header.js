
// import React, { useState } from 'react';
// import logo from "../../public/images/whiteLogo.png"
// import Image from 'next/image';
// import { BookOpenIcon, Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/solid';
// import Link from 'next/link';

// const Header = () => {
//     const [showCourses, setShowCourses] = useState(false);

//   const links = [
//     { name: 'HOME', link: '/' },
//     { name: 'ABOUT', link: '/our-profile' },
//     { name: 'WHY CHOOSE US', link: '/why-choose-us' },
//     { name: 'CONTACT', link: '/contact-us' },
//   ];
//   const resources = [
//     { name: 'Blogs', link: '/' },
//     { name: 'Articles', link: '/' },
//     { name: 'Merges', link: '/' },
//   ];
//   const policy = [
//     { name: 'Teacher policy', link: '/' },
//     { name: 'Parent policy', link: '/' },
//     { name: 'Student policy', link: '/' },
//     { name: 'Return policy', link: '/' },
//   ];
//   const courses = [
//     { name: 'Quran Courses', link: '/' },
//     { name: 'Arabic Courses', link: '/' },
//     { name: 'Arabic Grammer', link: '/' },
//     { name: 'Supplications', link: '/' },
//   ];
//   const [open, setOpen] = useState(false);

//   return (
//     <div className="z-100 shadow-md w-full fixed top-0 left-0">
//       <div className="md:flex items-center justify-between bg-[#eaebed] py-4 md:px-10 px-7">
//         {/* logo section */}
//         <div className="font-bold text-2xl cursor-pointer flex items-center gap-1">
//           <h1 className="text-[#256A41]" >استاذ Portal</h1>
//         {/* <Image height={100} width={100} alt='logo' src={logo}/> */}
//         </div>
//         {/* Menu icon */}
//         <div onClick={() => setOpen(!open)} className="absolute right-8 top-6 cursor-pointer md:hidden w-7 h-7">
//           {open ? <XMarkIcon /> : <Bars3BottomRightIcon />}
//         </div>
//         {/* linke items */}
//         <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-[#eaebed] md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-12' : 'top-[-490px]'}`}>
//           {links.map((link) => (
//             <li className="md:ml-8 md:my-0 my-7 font-semibold" key={link.name}>
//               <Link href={link.link} className="text-gray-800 hover:text-blue-400 duration-500">{link.name}</Link>
//             </li>
//           ))}
//           {/* Resources dropdown */}
//           <li className="md:ml-8 md:my-0 my-7 font-semibold relative group">
//             <span className="text-gray-800 cursor-pointer hover:text-blue-400 duration-500">RESOURCES</span>
//             <ul className="absolute top-[50px] left-0 bg-[#eaebed] shadow-md hidden group-hover:block transition-all duration-300 ease-in-out opacity-0 transform translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 w-[100px] z-10 ">
//               {resources.map((resource) => (
//                 <li key={resource.name} className="py-2 px-4">
//                   <a href={resource.link} className="text-gray-800 hover:text-blue-400 duration-500">{resource.name}</a>
//                 </li>
//               ))}
//             </ul>
//           </li>
//           {/* Courses Dropdown */}
//           <li className="md:ml-8 md:my-0 my-7 font-semibold relative group">
//   <span className="text-gray-800 cursor-pointer duration-500" onClick={() => setShowCourses(!showCourses)}>COURSES</span>
//   <ul className={`absolute top-[50px] left-0 bg-[#eaebed] shadow-md ${showCourses ? 'block' : 'hidden'} transition-all duration-300 ease-in-out opacity-0 transform translate-y-2 ${showCourses ? 'opacity-100 translate-y-0' : ''} w-[200px] z-10`}>
//     {courses.map((course) => (
//       <li key={course.name} className="py-2 px-4">
//         <a href={course.link} className="text-gray-800 hover:text-blue-400 duration-500">{course.name}</a>
//       </li>
//     ))}
//   </ul>
// </li>

//           {/* Policy dropdown */}
//           <li className="md:ml-8 md:my-0 my-7 font-semibold relative group">
//             <span className="text-gray-800 cursor-pointer hover:text-blue-400 duration-500">POLICY</span>
//             <ul className="absolute top-[50px] left-0 bg-[#eaebed] shadow-md hidden group-hover:block transition-all duration-300 ease-in-out opacity-0 transform translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 w-[200px] ">
//               {policy.map((item) => (
//                 <li key={item.name} className="py-2 px-4">
//                   <a href={item.link} className="text-gray-800 hover:text-blue-400 duration-500">{item.name}</a>
//                 </li>
//               ))}
//             </ul>
//           </li>
//           <Link href='get-free-trial' className="btn bg-green-600 text-white md:ml-8 font-semibold px-3 py-1 rounded duration-500 md:static">Get a free trial</Link>
//         </ul>
//         {/* button */}
//       </div>
//     </div>
//   );
// };

// // export default Header;
// import React, { useState } from 'react';
// import { BookOpenIcon, Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/solid';
// import Link from 'next/link';

// const Header = () => {
//   const [openMenu, setOpenMenu] = useState(null);

//   const links = [

//     // { name: 'ABOUT', link: '/our-profile' },
//     // { name: 'WHY CHOOSE US', link: '/why-choose-us' },
//     { name: 'HOME', link: '/' },
//     { name: 'COURSES', link: '/courses' },
//      { name: 'CONTACT', link: '/contact-us' },
//      { name: 'BLOG', link: '/blog' },

//     // { name: 'POLICY', link: '/legal/policies' },

//   ];

//   const resources = [
//     { name: 'Blogs', link: '/' },
//     { name: 'Articles', link: '/' },
//     { name: 'Merges', link: '/' },
//   ];

//   const policy = [
//     { name: 'Teacher policy', link: '/legal/teacher-policy' },
//     { name: 'Privacy policy', link: '/legal/privacy-policy' },
//     { name: 'Parent policy', link: '/' },
//     { name: 'Student policy', link: '/' },
//     { name: 'Return policy', link: '/' },
//   ];
  // const about = [
  //   { name: 'FAQS', link: '/frequently-asked-questions' },
  //   { name: 'Our Company', link: '/our-profile' },
  //   { name: 'Privacy and Terms', link: '/legal/policies' },
  // ];

//   const toggleMenu = (menu) => {
//     setOpenMenu((prevMenu) => (prevMenu === menu ? null : menu));
//   };

//   return (
//     <div className="z-50 shadow-md w-full sticky top-0 left-0">
//       <div className="md:flex items-center justify-between bg-[#eaebed] py-4 md:px-10 px-7">
//         {/* logo section */}
//         <div className="font-bold text-2xl cursor-pointer flex items-center gap-1">
//           <Link href="/" className="text-[#256A41]">UstazPortal</Link>
//         </div>
//         {/* Menu icon */}
//         <div className="absolute right-8 top-6 cursor-pointer md:hidden w-7 h-7">
//           {openMenu ? (
//             <XMarkIcon onClick={() => toggleMenu(null)} />
//           ) : (
//             <Bars3BottomRightIcon onClick={() => toggleMenu('main')} />
//           )}
//         </div>
//         {/* linke items */}
//         <ul
//           className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-[#eaebed] md:z-auto z-[50] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
//             openMenu ? 'top-12' : 'top-[-490px]'
//           }`}
//         >
//           {links.map((link) => (
//             <li className="md:ml-8 md:my-0 my-7 font-semibold" key={link.name}>
//               <Link href={link.link} className="text-gray-800 hover:text-[#C89D1D] duration-500">
//                 {link.name}
//               </Link>
//             </li>
//           ))}
//           {/* Resources dropdown */}
//           {/* <li className="md:ml-8 md:my-0 my-7 font-semibold relative group">
//             <span
//               className="text-gray-800 cursor-pointer duration-500"
//               onClick={() => toggleMenu('resources')}
//             >
//               RESOURCES
//             </span>
//             <ul
//               className={`absolute top-[50px] left-0 bg-[#eaebed] shadow-md ${
//                 openMenu === 'resources' ? 'block' : 'hidden'
//               } transition-all duration-300 ease-in-out opacity-0 transform translate-y-2 ${
//                 openMenu === 'resources' ? 'opacity-100 translate-y-0' : ''
//               } w-[100px] z-10`}
//             >
//               {resources.map((resource) => (
//                 <li key={resource.name} className="py-2 px-4">
//                   <a href={resource.link} className="text-gray-800 hover:text-blue-400 duration-500">
//                     {resource.name}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </li> */}
//           {/* Resources dropdown */}
          // <li className="md:ml-8 md:my-0 my-7 font-semibold relative group">
          //   <span
          //     className="text-gray-800 cursor-pointer duration-500 hover:text-[#C89D1D]"
          //     onClick={() => toggleMenu('resources')}
          //   >
          //     ABOUT US
          //   </span>
          //   <ul
          //     className={`w-[200px] absolute top-[50px] left-0 bg-[#eaebed] shadow-md ${
          //       openMenu === 'resources' ? 'block' : 'hidden'
          //     } transition-all duration-300 ease-in-out opacity-0 transform translate-y-2 ${
          //       openMenu === 'resources' ? 'opacity-100 translate-y-0' : ''
          //     } w-[100px] z-10`}
          //   >
          //     {about.map((resource  ) => (
          //       <li key={resource.name} className="py-2 px-4">
          //         <a href={resource.link} className="text-gray-800 hover:text-[#C89D1D] duration-500">
          //           {resource.name}
          //         </a>
          //       </li>
          //     ))}
          //   </ul>
          // </li>
        
//           {/* Policy dropdown */}
//           {/* <li className="md:ml-8 md:my-0 my-7 font-semibold relative group">
//             <span
//               className="text-gray-800 cursor-pointer duration-500"
//               onClick={() => toggleMenu('policy')}
//             >
//               POLICY
//             </span>
//             <ul
//               className={`absolute top-[50px] left-0 bg-[#eaebed] shadow-md ${
//                 openMenu === 'policy' ? 'block' : 'hidden'
//               } transition-all duration-300 ease-in-out opacity-0 transform translate-y-2 ${
//                 openMenu === 'policy' ? 'opacity-100 translate-y-0' : ''
//               } w-[200px]`}
//             >
//               {policy.map((item) => (
//                 <li key={item.name} className="py-2 px-4">
//                   <a href={item.link} className="text-gray-800 hover:text-blue-400 duration-500">
//                     {item.name}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </li> */}
//           <Link href="get-free-trial" className="btn bg-green-600 text-white md:ml-8 font-semibold px-3 py-1 rounded duration-500 md:static">
//             Get a free trial
//           </Link>
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Header;

import React, { useState, useEffect } from 'react';
import { BookOpenIcon, Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';

const Header = () => {
  const [openMenu, setOpenMenu] = useState(null);
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    setWindowWidth(window.innerWidth);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const links = [
    { name: 'HOME', link: '/' },
    { name: 'COURSES', link: '/courses' },
    { name: 'CONTACT', link: '/contact-us' },
    { name: 'BLOG', link: '/blog' },
  ];
  const about = [
    { name: 'FAQS', link: '/frequently-asked-questions' },
    { name: 'Our Company', link: '/our-profile' },
    { name: 'Privacy and Terms', link: '/legal/policies' },
  ];

  const toggleMenu = (menu) => {
    setOpenMenu((prevMenu) => (prevMenu === menu ? null : menu));
  };

  return (
    <div className="z-50 shadow-md w-full sticky top-0 left-0">
      <div className="md:flex items-center justify-between bg-[#eaebed] py-4 md:px-10 px-7">
        <div className="font-bold text-2xl cursor-pointer flex items-center gap-1">
          <Link href="/" className="text-[#256A41]">UstazPortal</Link>
        </div>
        {windowWidth <= 767 && (
          <div className="absolute right-8 top-6 cursor-pointer md:hidden w-7 h-7">
            {openMenu ? (
              <XMarkIcon onClick={() => toggleMenu(null)} />
            ) : (
              <Bars3BottomRightIcon onClick={() => toggleMenu('main')} />
            )}
          </div>
        )}
        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-[#eaebed] md:z-auto z-[50] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            openMenu ? 'top-12' : 'top-[-490px]'
          }`}
        >
          {links.map((link) => (
            <li className="md:ml-8 md:my-0 my-7 font-semibold" key={link.name}>
              <Link href={link.link} className="text-gray-800 hover:text-[#C89D1D] duration-500">
                {link.name}
              </Link>
            </li>
          ))}
          <li className="md:ml-8 md:my-0 my-7 font-semibold relative group">
            <span
              className="text-gray-800 cursor-pointer duration-500 hover:text-[#C89D1D]"
              onClick={() => toggleMenu('resources')}
            >
              ABOUT US
            </span>
            <ul
              className={`w-[200px] absolute top-[50px] left-0 bg-[#eaebed] shadow-md ${
                openMenu === 'resources' ? 'block' : 'hidden'
              } transition-all duration-300 ease-in-out opacity-0 transform translate-y-2 ${
                openMenu === 'resources' ? 'opacity-100 translate-y-0' : ''
              } w-[100px] z-10`}
            >
              {about.map((resource  ) => (
                <li key={resource.name} className="py-2 px-4">
                  <a href={resource.link} className="text-gray-800 hover:text-[#C89D1D] duration-500">
                    {resource.name}
                  </a>
                </li>
              ))}
            </ul>
          </li>
          <li className="md:ml-8 md:my-0 my-7 font-semibold">
            <Link href="/get-free-trial" className="btn bg-[#256A41] text-white px-3 py-1 rounded duration-500">
              Get a free trial
            </Link>
          </li>
          
        </ul>
      </div>
    </div>
  );
};

export default Header;
