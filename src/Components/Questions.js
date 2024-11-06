// import React from 'react';
// import Header from './Header';
// import ScrollToTopButton from './STT';
// import Progress from './Progess';
// import Footer from './Footer';

// const Questions = () => {
//   const data = [
//    { question: "Who is eligible to enroll in online Quran classes?", answer: "All individuals, regardless of age, can enroll in our online Quran classes. " },
//     { question: "What are the basic prerequisites for joining beginner-level Quran classes online? ", answer: "You only need a stable internet connection, a personal laptop, and a quiet environment to attend our online Quran lessons.   " },
//     { question: "How long does it typically take to complete Quran courses online?", answer: "The duration varies based on each student's learning pace, ranging from a few months to a year on average." },
//     { question: "Can I receive personalized one-on-one online Quran lessons? ", answer: "Yes, we offer individualized one-on-one sessions with dedicated Quran teachers for uninterrupted learning." },
//     { question: "Are there any age restrictions for enrolling in Quran courses? ", answer: "No, there are no age limits for learning Quran with us. All are welcome to join regardless of age. " },
//     { question: "What options are available if I miss an online Quran class? ", answer: "Don't worry! You can reschedule missed classes or access recordings of previous sessions for review. " },
//     { question: "What payment methods are accepted for online classes?", answer: "We offer secure payment options via PayPal, direct bank transfers, and other trusted payment portals for your convenience. " },
//   ];

//   return (
//     <>
//     <Header/>
//     <ScrollToTopButton/>
//     <Progress/>
//       <div className="py-4 bg-white">
//         <div className="max-w-screen-md mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-between">

//           <div className="text-center mt-16">
//             <h3 className="text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight text-[#256A41] ">
//               Frequently Asked <span className="text-[#C89D1D]">Questions</span>
//             </h3>
//           </div>

//           <div className="mt-20">
//             <ul>
//               {data && data.map((item, index) => (
//                 <li key={index} className="text-left mb-10">
//                   <div className="flex flex-row items-start mb-5">
//                     <div className="hidden sm:flex items-center justify-center p-3 mr-3 rounded-full bg-[#256a41] text-[#eaebed] border-4 border-white text-xl font-semibold">
//                       <svg width="30px" fill="white" height="30px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                         <g data-name="Layer 2">
//                           <g data-name="menu-arrow">
//                             <rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"></rect>
//                             <path d="M17 9A5 5 0 0 0 7 9a1 1 0 0 0 2 0 3 3 0 1 1 3 3 1 1 0 0 0-1 1v2a1 1 0 0 0 2 0v-1.1A5 5 0 0 0 17 9z"></path>
//                             <circle cx="12" cy="19" r="1"></circle>
//                           </g>
//                         </g>
//                       </svg>
//                     </div>
//                     <div className="bg-gray-100 p-5 px-10 w-full flex items-center">
//                       <h4 className="text-md leading-6 font-medium text-gray-900">{item.question}</h4>
//                     </div>
//                   </div>

//                   <div className="flex flex-row items-start">
//                     <div className="bg-[#66967a] p-5 px-10 w-full flex items-center">
//                       <p className="text-[#eaebed] text-sm">{item.answer}</p>
//                     </div>
//                     <div className="hidden sm:flex items-center justify-center p-3 ml-3 rounded-full bg-[#256a41] text-[#eaebed]  border-4 border-white text-xl font-semibold">
//                       <svg height="25px" fill="white" version="1.1" id="Layer_1"
//                         xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px"
//                         y="0px" viewBox="0 0 295.238 295.238" style={{ enableBackground: 'new 0 0 295.238 295.238' }}
//                         xmlSpace="preserve">
//                         <g>
//                           <g>
//                             <g>
//                               <path d="M277.462,0.09l-27.681,20.72l-27.838,64.905h-22.386l-8.79-19.048h5.743c10.505,0,19.048-8.452,19.048-18.957V28.571
//                                 h9.524V0H196.51v28.571h9.524V47.71c0,5.248-4.271,9.433-9.524,9.433h-10.138L174.2,30.81l14.581-7.267L141.038,3.095
//                                 l-11.224,39.281c-0.305-23.371-19.386-42.29-42.829-42.29c-23.633,0-42.857,19.224-42.857,42.857
//                                 c0,14.281,7.233,27.676,19.209,35.433c-8.114,4.133-15.876,11.771-15.876,20.781c0,14.914,17.596,26.003,37.71,26.003
//                                 c0.61,0,1.238-0.009,1.857-0.019l27.405,54.819c-0.065,0.038-0.131,0.066-0.194,0.107l-10.856,5.419l-9.723,21.595
//                                 c-1.248-0.224-2.524-0.367-3.819-0.367c-15.349,0-27.777,12.428-27.777,27.778s12.428,27.778,27.777,27.778
//                                 c15.349,0,27.778-12.428,27.778-27.778c0-3.925-0.827-7.62-2.299-11.002l10.572-26.432l33.591,59.524
//                                 c0.675,1.196,2.019,1.924,3.439,1.924h0.175c1.484,0,2.837-0.799,3.564-2.079l25.667-47.352h17.273l-5.52,18.306H89.312
//                                 l-15.396,15.396c-2.694,2.694-2.694,7.071,0,9.765l12.98,12.981c2.694,2.694,7.071,2.694,9.765,0l15.398-15.398h26.139
//                                 c-2.28,4.572-3.571,9.754-3.571,15.048c0,23.483,19.094,42.577,42.577,42.577s42.578-19.094,42.578-42.577
//                                 c0-4.533-0.708-8.905-2.014-13.078l18.252-9.125c2.15,6.313,8.032,10.953,15.154,10.953c9.303,0,16.857-7.554,16.857-16.857
//                                 c0-7.005-4.277-12.966-10.327-15.474l6.732-24.885h22.386l17.694,41.214l29.907,22.429c1.984,1.488,4.607,1.488,6.591,0
//                                 l7.056-5.292L295.238,0.09z M143.557,53.948c0-6.736,5.489-12.225,12.225-12.225s12.225,5.489,12.225,12.225
//                                 c0,6.737-5.489,12.226-12.225,12.226S143.557,60.684,143.557,53.948z M89.312,86.88H72.607l-16.695-39.006h23.502
//                                 L89.312,86.88z M221.176,151.065c0,12.75-10.377,23.127-23.127,23.127c-12.75,0-23.127-10.377-23.127-23.127
//                                 c0-12.75,10.377-23.127,23.127-23.127C210.799,127.938,221.176,138.315,221.176,151.065z M195.049,86.88h-25.434
//                                 l16.696,39.006h25.434L195.049,86.88z M156.949,86.88h-29.67l-15.695-36.676h61.048L156.949,86.88z M232.404,204.339
//                                 c0,6.736-5.489,12.225-12.225,12.225s-12.225-5.489-12.225-12.225c0-6.736,5.489-12.225,12.225-12.225
//                                 S232.404,197.603,232.404,204.339z M236.993,180.117c0,5.199-4.226,9.424-9.424,9.424
//                                 c-5.199,0-9.424-4.225-9.424-9.424s4.226-9.424,9.424-9.424C232.767,170.693,236.993,174.918,236.993,180.117z"></path>
//                             </g>
//                           </g>
//                         </g>
//                       </svg>
//                     </div>
//                   </div>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       </div>
//       <Footer/>
//     </>
//   );
// };

// export default Questions;

import React, {useEffect, useState} from 'react';
import Header from './Header';
import ScrollToTopButton from './STT'; // Corrected import
import Progress from './Progess';
import Footer from './Footer';
import LoadingBar from 'react-top-loading-bar'

const Questions = () => {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    setProgress(progress + 10);
    setTimeout(() => {
        setProgress(progress + 20);
    }, 800) 
    setTimeout(() => {
        setProgress(100);
    }, 1000) 
  }, [])
  const data = [
    { question: "Who is eligible to enroll in online Quran classes?", answer: "All individuals, regardless of age, can enroll in our online Quran classes." },
    { question: "What are the basic prerequisites for joining beginner-level Quran classes online?", answer: "You only need a stable internet connection, a personal laptop, and a quiet environment to attend our online Quran lessons." },
    { question: "How long does it typically take to complete Quran courses online?", answer: "The duration varies based on each student's learning pace, ranging from a few months to a year on average." },
    { question: "Can I receive personalized one-on-one online Quran lessons?", answer: "Yes, we offer individualized one-on-one sessions with dedicated Quran teachers for uninterrupted learning." },
    { question: "Are there any age restrictions for enrolling in Quran courses?", answer: "No, there are no age limits for learning Quran with us. All are welcome to join regardless of age." },
    { question: "What options are available if I miss an online Quran class?", answer: "Don't worry! You can reschedule missed classes or access recordings of previous sessions for review." },
    { question: "What payment methods are accepted for online classes?", answer: "We offer secure payment options via PayPal, direct bank transfers, and other trusted payment portals for your convenience." },
  ];

  return (
    <>
      <Header />
      <ScrollToTopButton />
      <Progress />
      {/* <LoadingBar
        color='#f11946'
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      /> */}
      <div className="py-4 bg-white">
        <div className="max-w-screen-md mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-between">
          <section className="text-center mt-16"> {/* Changed <div> to <section> */}
            <h2 className="text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight text-[#256A41] "> {/* Changed <h3> to <h2> */}
              Frequently Asked <span className="text-[#C89D1D]">Questions</span>
            </h2>
          </section>

          <div className="mt-20">
            <ul>
              {data && data.map((item, index) => (
                <li key={index} className="text-left mb-10">
                  <article className="flex flex-row items-start mb-5"> {/* Changed <div> to <article> */}
                    <div className="hidden sm:flex items-center justify-center p-3 mr-3 rounded-full bg-[#256a41] text-[#eaebed] border-4 border-white text-xl font-semibold">
                      <svg width="30px" fill="white" height="30px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <g data-name="Layer 2">
                          <g data-name="menu-arrow">
                            <rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"></rect>
                            <path d="M17 9A5 5 0 0 0 7 9a1 1 0 0 0 2 0 3 3 0 1 1 3 3 1 1 0 0 0-1 1v2a1 1 0 0 0 2 0v-1.1A5 5 0 0 0 17 9z"></path>
                            <circle cx="12" cy="19" r="1"></circle>
                          </g>
                        </g>
                      </svg>
                    </div>
                    <div className="bg-gray-100 p-5 px-10 w-full flex items-center">
                      <h3 className="text-md leading-6 font-medium text-gray-900">{item.question ? item.question : " "}</h3> {/* Changed <h4> to <h3> */}
                    </div>
                  </article>

                  <div className="flex flex-row items-start">
                    <div className="bg-[#66967a] p-5 px-10 w-full flex items-center">
                      <p className="text-[#eaebed] text-sm">{item.answer ? item.answer : " " }</p>
                    </div>
                    <div className="hidden sm:flex items-center justify-center p-3 ml-3 rounded-full bg-[#256a41] text-[#eaebed] border-4 border-white text-xl font-semibold">
                      <svg height="25px" fill="white" version="1.1" id="Layer_1"
                        xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px"
                        y="0px" viewBox="0 0 295.238 295.238" style={{ enableBackground: 'new 0 0 295.238 295.238' }}
                        xmlSpace="preserve">
                        <g>
                          <g>
                            <g>
                              <path d="M277.462,0.09l-27.681,20.72l-27.838,64.905h-22.386l-8.79-19.048h5.743c10.505,0,19.048-8.452,19.048-18.957V28.571
                                h9.524V0H196.51v28.571h9.524V47.71c0,5.248-4.271,9.433-9.524,9.433h-10.138L174.2,30.81l14.581-7.267L141.038,3.095
                                l-11.224,39.281c-0.305-23.371-19.386-42.29-42.829-42.29c-23.633,0-42.857,19.224-42.857,42.857
                                c0,14.281,7.233,27.676,19.209,35.433c-8.114,4.133-15.876,11.771-15.876,20.781c0,14.914,17.596,26.003,37.71,26.003
                                c0.61,0,1.238-0.009,1.857-0.019l27.405,54.819c-0.065,0.038-0.131,0.066-0.194,0.107l-10.856,5.419l-9.723,21.595
                                c-1.248-0.224-2.524-0.367-3.819-0.367c-15.349,0-27.777,12.428-27.777,27.778s12.428,27.778,27.777,27.778
                                c15.349,0,27.778-12.428,27.778-27.778c0-3.925-0.827-7.62-2.299-11.002l10.572-26.432l33.591,59.524
                                c0.675,1.196,2.019,1.924,3.439,1.924h0.175c1.484,0,2.837-0.799,3.564-2.079l25.667-47.352h17.273l-5.52,18.306H89.312
                                l-15.396,15.396c-2.694,2.694-2.694,7.071,0,9.765l12.98,12.981c2.694,2.694,7.071,2.694,9.765,0l15.398-15.398h26.139
                                c-2.28,4.572-3.571,9.754-3.571,15.048c0,23.483,19.094,42.577,42.577,42.577s42.578-19.094,42.578-42.577
                                c0-4.533-0.708-8.905-2.014-13.078l18.252-9.125c2.15,6.313,8.032,10.953,15.154,10.953c9.303,0,16.857-7.554,16.857-16.857
                                c0-7.005-4.277-12.966-10.327-15.474l6.732-24.885h22.386l17.694,41.214l29.907,22.429c1.984,1.488,4.607,1.488,6.591,0
                                l7.056-5.292L295.238,0.09z M143.557,53.948c0-6.736,5.489-12.225,12.225-12.225s12.225,5.489,12.225,12.225
                                c0,6.737-5.489,12.226-12.225,12.226S143.557,60.684,143.557,53.948z M89.312,86.88H72.607l-16.695-39.006h23.502
                                L89.312,86.88z M221.176,151.065c0,12.75-10.377,23.127-23.127,23.127c-12.75,0-23.127-10.377-23.127-23.127
                                c0-12.75,10.377-23.127,23.127-23.127C210.799,127.938,221.176,138.315,221.176,151.065z M195.049,86.88h-25.434
                                l16.696,39.006h25.434L195.049,86.88z M156.949,86.88h-29.67l-15.695-36.676h61.048L156.949,86.88z M232.404,204.339
                                c0,6.736-5.489,12.225-12.225,12.225s-12.225-5.489-12.225-12.225c0-6.736,5.489-12.225,12.225-12.225
                                S232.404,197.603,232.404,204.339z M236.993,180.117c0,5.199-4.226,9.424-9.424,9.424
                                c-5.199,0-9.424-4.225-9.424-9.424s4.226-9.424,9.424-9.424C232.767,170.693,236.993,174.918,236.993,180.117z"></path>
                            </g>
                          </g>
                        </g>
                      </svg>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Questions;

