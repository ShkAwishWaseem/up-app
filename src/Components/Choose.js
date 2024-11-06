import React from 'react'
import Header from './Header'
import icon1 from "../images/icon1.png"
import icon2 from "../images/icon2.png"
import icon3 from "../images/icon3.png"
import icon4 from "../images/icon4.png"
import icon5 from "../images/icon5.png"
import icon6 from "../images/icon6.png"
import Image from 'next/image'
import { motion } from 'framer-motion'

const Choose = () => {
  return (
    <div>

      <section className='my-[110px]'>
    <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            <div className="lg:text-center">
               
                <p className="text-center sm:text-4xl md:text-5xl w-[100%] m-auto mb-[10px] text-[#256A41] font-extrabold text-center'">
                <span className='text-[#C89D1D]'>Welcome to UstazPortal: </span> <br/>Where Every Moment is a Learning Experience.
                </p>              
            </div>

            <div className="mt-20">
                <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                    <motion.div className="relative"
                     initial={{x: -100, opacity: 0 }}
                     whileInView={{ x:0, opacity: 1 }}
                     transition={{ type: "spring", stiffness: 100 , delay:0.3}}
                    >
                        <dt>
                            <div
                                className="absolute flex items-center justify-center h-12 w-[50px] rounded-md text-white">
                                <Image src={icon1} width={400} height={400} alt='Image ' className='w-[200px]'/>
                            </div>
                            <p className="font-heading ml-16 text-lg leading-6 font-bold text-gray-700">24/7 Accessibility</p>
                        </dt>
                        <dd className="mt-2 ml-16 text-base text-gray-500">
                        You can access our courses from anywhere at any time, so learning can fit easily into your schedule.
                        </dd>
                    </motion.div>

                    <motion.div className="relative"
                       initial={{x: 100, opacity: 0 }}
                       whileInView={{ x:0, opacity: 1 }}
                       transition={{ type: "spring", stiffness: 100 , delay:0.3}}
                    >
                        <dt>
                        <div
                                className="absolute flex items-center justify-center h-12 w-[50px] rounded-md text-white">
                                <Image src={icon2} width={400} height={400} alt='Image ' className='w-[200px]'/>
                            </div>
                            <p className="font-heading ml-16 text-lg leading-6 font-bold text-gray-700">Calm Environment
                            </p>
                        </dt>
                        <dd className="mt-2 ml-16 text-base text-gray-500">Submerge yourself in a serene educational setting that enhances your comprehension of the Quran.

                        </dd>
                    </motion.div>
                    <motion.div className="relative"
                          initial={{x: -100, opacity: 0 }}
                          whileInView={{ x:0, opacity: 1 }}
                          transition={{ type: "spring", stiffness: 100 , delay:0.3}}
                    >
                        <dt>
                        <div
                                className="absolute flex items-center justify-center h-12 w-[50px] rounded-md text-white">
                                <Image src={icon3} width={400} height={400} alt='Image ' className='w-[200px]'/>
                            </div>
                            <p className="font-heading ml-16 text-lg leading-6 font-bold text-gray-700">For All Ages
                            </p>
                        </dt>
                        <dd className="mt-2 ml-16 text-base text-gray-500">Our courses are designed to inspire a lifetime love of Quranic knowledge in people of all ages, from young learners to adults.
                        </dd>
                    </motion.div>
                    <motion.div className="relative"
                          initial={{x: 100, opacity: 0 }}
                          whileInView={{ x:0, opacity: 1 }}
                          transition={{ type: "spring", stiffness: 100 , delay:0.3}}
                    >
                        <dt>
                        <div
                                className="absolute flex items-center justify-center h-12 w-[50px] rounded-md text-white">
                                <Image src={icon4} width={400} height={400} alt='Image ' className='w-[200px]'/>
                            </div>
                            <p className="font-heading ml-16 text-lg leading-6 font-bold text-gray-700">Affordable
                            </p>
                        </dt>
                        <dd className="mt-2 ml-16 text-base text-gray-500">  A top-notch education shouldnot break the wallet. Take advantage of reasonable prices without sacrificing quality.

                        </dd>
                    </motion.div>
                    <motion.div className="relative"
                          initial={{x: -100, opacity: 0 }}
                          whileInView={{ x:0, opacity: 1 }}
                          transition={{ type: "spring", stiffness: 100 , delay:0.3}}
                    >
                        <dt>
                        <div
                                className="absolute flex items-center justify-center h-12 w-[50px] rounded-md text-white">
                                <Image src={icon5} width={400} height={400} alt='Image ' className='w-[200px]'/>
                            </div>
                            <p className="font-heading ml-16 text-lg leading-6 font-bold text-gray-700">One-on-One Class 
                            </p>
                        </dt>
                        <dd className="mt-2 ml-16 text-base text-gray-500">Receive individualized attention and direction from our committed tutors, catered to your particular learning requirements.

                        </dd>
                    </motion.div>
                    <motion.div className="relative"
                          initial={{x: 100, opacity: 0 }}
                          whileInView={{ x:0, opacity: 1 }}
                          transition={{ type: "spring", stiffness: 100 , delay:0.3}}
                    >
                        <dt>
                        <div
                                className="absolute flex items-center justify-center h-12 w-[50px] rounded-md text-white">
                                <Image src={icon6} width={400} height={400} alt='Image ' className='w-[200px]'/>
                            </div>
                            <p className="font-heading ml-16 text-lg leading-6 font-bold text-gray-700">Qualified Tutors
                            </p>
                        </dt>
                        <dd className="mt-2 ml-16 text-base text-gray-500">  Acquire knowledge from seasoned instructors committed to assisting you in achieving success on your Quranic path.

                        </dd>
                    </motion.div>
                </dl>
            </div>

        </div>
    </div>
</section>
    </div>
  )
}

export default Choose
